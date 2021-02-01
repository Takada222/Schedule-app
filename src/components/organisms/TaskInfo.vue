<template>
  <div
    class="overlay"
    @click.self="closeTaskInfoModal"
  >
    <div id="task-info-modal">
      <button
        class="close-btn"
        @click="closeTaskInfoModal()"
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
            v-model="selectedTaskInfo.name"
            class="task-input"
            type="text"
            placeholder="タスク名を入力"
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
            v-model.number="selectedTaskInfo.time"
            class="task-input"
            type="number"
            step="1"
          >
        </div>
        <div class="task task-details">
          <p class="form-name">
            詳細
          </p>
          <textarea
            v-model="selectedTaskInfo.details"
            class="task-input"
            name="details"
            cols="30"
            rows="10"
            placeholder="詳細を入力"
          />
        </div>
        <div class="btn-group">
          <button @click="editSelectedTaskInfo()">
            変更
          </button>
          <button @click="removeSelectedTask()">
            削除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedTaskInfo"],
  data() {
    return {
      showNoNameErrorMessage: false,
      showTooLongNameErrorMessage: false,
      tasks: [],
    };
  },
  methods: {
    closeTaskInfoModal() {
      this.$emit("closeTaskInfoModal");
      this.showNoNameErrorMessage = false
      this.showTooLongNameErrorMessage = false
    },
    editSelectedTaskInfo() {
      if (this.selectedTaskInfo.name.length == 0){
        this.showNoNameErrorMessage = true
        this.showTooLongNameErrorMessage = false
      }else if (this.selectedTaskInfo.name.length > 24) {
        this.showTooLongNameErrorMessage = true
        this.showNoNameErrorMessage = false
      }else{
        this.$emit("closeTaskInfoModal");
        this.showNoNameErrorMessage = false
        this.showTooLongNameErrorMessage = false
      }
    },
    removeSelectedTask() {
      this.$emit("removeSelectedTask", this.selectedTaskInfo.index)
      this.showNoNameErrorMessage = false
      this.showTooLongNameErrorMessage = false
    }
  },
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
  align-items: center;
  justify-content: center;
}

#task-info-modal {
  background-color: #fff;
  width: 20%;
  margin: 10% 40%;
  height: 400px;
  position: relative;
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
    border: 2px solid #000;
    border-radius: 3px;
    font-size: 15px;
    transition: .3s;
    &:hover {
      cursor: pointer;
      color: white;
      background-color: rgb(60, 60, 60);
      transition: .3;
    }
  }
}
</style>