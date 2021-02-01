<template>
  <div>
    <button
      class="create-task-btn"
      @click="openCreateTaskModal"
    >
      タスクを作成
    </button>
    <div
      v-show="showModal"
      class="overlay"
      @click.self="closeCreateTaskModal"
    >
      <div id="create-task-modal">
        <div class="input-forms-buttons">
          <button
            class="close-btn"
            @click="closeCreateTaskModal"
          >
            <font-awesome-icon
              class="close-create-task-modal-button"
              :icon="['fas', 'times']"
            />
          </button>
          <div class="task task-name">
            <div class="task-head-label">
              <p class="form-name">
                タスク名
              </p>
              <p class="required-form">
                必須
              </p>
            </div>
            <input
              v-model="taskName"
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
            <div class="task-head-label">
              <p class="form-name">
                時間 (分)
              </p>
            </div>
            <input
              v-model.number="taskTime"
              class="task-input"
              type="number"
              step="1"
            >
          </div>
          <div class="task task-details">
            <div class="task-head-label">
              <p class="form-name">
                詳細
              </p>
            </div>
            <textarea
              v-model="taskDetails"
              class="task-input"
              name="details"
              cols="30"
              rows="10"
              placeholder="詳細を入力"
            />
          </div>
          <div class="btn-group">
            <button
              @click="
                createNewTaskOrShowErrorMessage();
              "
            >
              作成
            </button>
            <button @click="removeInput(); closeCreateTaskModal()">
              削除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      showNoNameErrorMessage: false,
      showTooLongNameErrorMessage: false,
      taskName: "",
      taskTime: 0,
      taskDetails: "",
      nextTaskId: 0,
      tasks: [],
    };
  },
  methods: {
    openCreateTaskModal() {
      this.showModal = true
    },
    closeCreateTaskModal() {
      this.showModal = false
      this.showNoNameErrorMessage = false
      this.showTooLongNameErrorMessage = false
    },
    createNewTaskOrShowErrorMessage() {
      if (this.taskName.length == 0){
        this.showNoNameErrorMessage = true
        this.showTooLongNameErrorMessage = false
      }else if (this.taskName.length > 24) {
        this.showTooLongNameErrorMessage = true
        this.showNoNameErrorMessage = false
      }else{
        this.tasks.push({
          id: this.nextTaskId++,
          name: this.taskName,
          time: this.taskTime,
          details: this.taskDetails,
          complete: false
        });
        (this.taskName = ""),
        (this.taskTime = 0),
        (this.taskDetails = ""),
        this.$emit("new-task", this.tasks)
        this.showNoNameErrorMessage = false
        this.showTooLongNameErrorMessage = false
        this.showModal = false
      }
    },
    removeInput() {
      this.taskName = ""
      this.taskTime = 0
      this.taskDetails = ""
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

.create-task-btn {
  border: 2px solid rgb(70, 70, 70);
  font-size: 20px;
  padding: 10px 30px;
  transition: .5s;
  &:hover {
    color: white;
    background-color: rgb(70, 70, 70);
    border-radius: 30px;
    transition: .5s;
  }
}

.close-btn {
  position: absolute;
  top: 5px;
  right: 5px;
}

#create-task-modal {
  background-color: #fff;
  width: 20%;
  margin: 10% 40%;
  height: 400px;
  position: relative;
}

.close-create-task-modal-button{
  font-size: 25px;
  opacity: 0.3;
  &:hover {
    opacity: 0.6;
  }
}

.task {
  margin-top: 15px;
}

.task-head-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.form-name {
  padding: 0px 0 0 8px;
  border-left: 1px solid #000;
}

.required-form {
  color: white;
  background-color: red;
  padding: 1px 5px;
  border-radius: 5px;
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

.input-forms-buttons {
  width: 80%;
  margin: 0 10%;
  padding: 10px 0;
}
</style>