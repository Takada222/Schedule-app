<template>
  <div
    class="overlay"
    @click.self="closeTaskInfoModalWithNoEdit()"
  >
    <div id="task-info-modal">
      <button
        class="close-btn"
        @click="closeTaskInfoModalWithNoEdit()"
      >
        <font-awesome-icon
          class="close-task-info-modal-button"
          :icon="['fas', 'times']"
        />
      </button>
      <div class="input-forms-buttons">
        <div class="task task-name">
          <p class="form-name">
            タスク名
          </p>
          <input
            :value="selectedTaskInfoComputed.name"
            class="task-input"
            type="text"
            placeholder="タスク名を入力"
            @input="editSelectedTaskName"
          >
          <p
            v-show="showNoNameErrorMessage"
            class="error-message"
          >
            ※タスク名を入力してください
          </p>
          <p
            v-show="showTooLongNameErrorMessage"
            class="error-message"
          >
            ※24文字以下で入力してください
          </p>
        </div>
        <div class="task task-time">
          <p class="form-name">
            時間 (分)
          </p>
          <input
            :value="selectedTaskInfoComputed.time"
            class="task-input"
            type="number"
            step="1"
            @input="editSelectedTaskTime"
          >
        </div>
        <div class="task task-details">
          <p class="form-name">
            詳細
          </p>
          <textarea
            :value="selectedTaskInfoComputed.details"
            class="task-input"
            name="details"
            cols="30"
            rows="10"
            placeholder="詳細を入力"
            @input="editSelectedTaskDetails"
          />
        </div>
        <div class="btn-group">
          <button
            class="edit-btn"
            @click="editSelectedTaskInfo()"
          >
            変更
          </button>
          <button
            class="delete-btn"
            @click="removeSelectedTask()"
          >
            削除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedTaskInfo: {
      type: Object,
      default() {}
    }
  },
  data() {
    return {
      editedTaskInfo: {
        name: "",
        time: 0,
        details: "",
        id: 0,
        complete: false
      },
      showNoNameErrorMessage: false,
      showTooLongNameErrorMessage: false,
      length: 0
    };
  },
  computed: {
    selectedTaskInfoComputed() {
      return this.selectedTaskInfo
    }
  },
  methods: {
    editSelectedTaskName(event) {
      this.editedTaskInfo.name = event.target.value
    },
    editSelectedTaskTime(event) {
      this.editedTaskInfo.time = event.target.value
    },
    editSelectedTaskDetails(event) {
      this.editedTaskInfo.details = event.target.value
    },
    editSelectedTaskInfo() {
      if(this.editedTaskInfo.name == "" && this.editedTaskInfo.time == 0 && this.editedTaskInfo.details == "") {
        // this.alertNameLength()
        alert("変更してください")

      } else if(this.editedTaskInfo.name == "" && this.editedTaskInfo.time == 0) {
        this.editedTaskInfo.name = this.selectedTaskInfo.name
        this.editedTaskInfo.time = this.selectedTaskInfo.time
        this.alertNameLength()

      } else if(this.editedTaskInfo.name == "" && this.editedTaskInfo.details == "") {
        this.editedTaskInfo.name = this.selectedTaskInfo.name
        this.editedTaskInfo.details = this.selectedTaskInfo.details
        this.alertNameLength()

      } else if(this.editedTaskInfo.time == 0 && this.editedTaskInfo.details == "") {
        this.editedTaskInfo.time = this.selectedTaskInfo.time
        this.editedTaskInfo.details = this.selectedTaskInfo.details
        this.alertNameLength()

      } else if(this.editedTaskInfo.name == "") {
        this.editedTaskInfo.name = this.selectedTaskInfo.name
        this.alertNameLength()

      } else if(this.editedTaskInfo.time == "") {
        this.editedTaskInfo.time = this.selectedTaskInfo.time
        this.alertNameLength()

      } else if(this.editedTaskInfo.details == "") {
        this.editedTaskInfo.details = this.selectedTaskInfo.details
        this.alertNameLength()

      } else {
        this.alertNameLength()
      }
    },
    alertNameLength() {
      if (this.editedTaskInfo.name == this.selectedTaskInfo.name){
        this.showNoNameErrorMessage = true
        this.showTooLongNameErrorMessage = false
      }else if (this.editedTaskInfo.name && this.editedTaskInfo.name.length > 24) {
        this.showTooLongNameErrorMessage = true
        this.showNoNameErrorMessage = false
      } else {
        this.submitEditedTaskInfo()
      }
    },
    submitEditedTaskInfo() {
      this.editedTaskInfo.id = this.selectedTaskInfo.id
      this.editedTaskInfo.complete = this.selectedTaskInfo.complete
      this.showNoNameErrorMessage = false
      this.showTooLongNameErrorMessage = false
      this.$emit("editSelectedTaskInfo", this.editedTaskInfo)
      this.editedTaskInfo = {
        name: "",
        time: 0,
        details: "",
        id: 0,
        complete: false
      }
    },
    removeSelectedTask() {
      if(confirm('削除しますか？')){
        this.$emit("removeSelectedTask");
        this.showNoNameErrorMessage = false
        this.showTooLongNameErrorMessage = false
      }
    },
    closeTaskInfoModalWithNoEdit() {
      this.$emit("closeTaskInfoModalWithNoEdit")
      this.showNoNameErrorMessage = false
      this.showTooLongNameErrorMessage = false
      this.editedTaskInfo = {
        name: "",
        time: 0,
        details: ""
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
}

#task-info-modal {
  background-color: #fff;
  margin-top: 150px;
  width: 350px;
  height: 400px;
  position: relative;
  &:hover {
    cursor: default;
  }
}

.close-btn {
  position: absolute;
  top: 5px;
  right: 5px;
}

.close-task-info-modal-button{
  font-size: 25px;
  opacity: 0.3;
  &:hover {
    opacity: 0.6;
  }
}

.task {
  margin-top: 15px;
}

.form-name {
  border-left: 1px solid #000;
  padding-left: 5px;
  margin-bottom: 5px;
}

.error-message {
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  color: red;
}

.task-input {
  width: 100%;
  &:hover {
    background-color: rgb(240, 240, 240);
  }
}

.task-time .task-input {
  display: flex;
}

.input-forms-buttons {
  width: 80%;
  margin: 0 10%;
  padding: 10px 0;
}

.btn-group {
  text-align: center;
  margin: 20px 0;
  & button {
    margin: 0 10px;
    padding: 5px 30px;
    border-radius: 3px;
    font-size: 15px;
    transition: .3s;
    &:hover {
      cursor: pointer;
      color: white;
      transition: .3;
    }
  }
}

.edit-btn {
  color: black;
  border: 2px solid black;
  &:hover {
    background-color: rgb(60, 60, 60);
  }
}

.delete-btn {
  color: red;
  border: 2px solid red;
  &:hover {
    color: white;
    background-color: red;
  }
}
</style>