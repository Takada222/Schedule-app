<template>
    <div>
        <button @click="openCreateTaskModal">タスクを作成</button>
        <div v-show="showModal" class="overlay">
            <div id="create-task-modal">
                <div class="input-forms-buttons">
                    <div class="task task-name">
                        <p class="form-name">タスク名</p>
                        <input class="task-input" v-model="taskName" type="text" placeholder="タスク名を入力">
                    </div>
                    <div class="task task-time">
                        <p class="form-name">時間</p>
                        <input type="number" v-model="taskTime" step="1" min="0" class="task-input">
                    </div>
                    <div class="task task-details">
                        <p class="form-name">詳細</p>
                        <textarea class="task-input" v-model="taskDetals" name="details" cols="30" rows="10" placeholder="詳細を入力"></textarea>
                    </div>
                    <div class="btn-group">
                        <button @click="createNewTask">作成</button>
                        <button @click="cancelCreateTaskModal">削除</button>
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
            taskName: "",
            taskTime: 0,
            taskDetails: "",
            nextTaskId: 0,
            tasks:[
                {}
            ]
        }
    },
    methods: {
        openCreateTaskModal() {
            this.showModal = true
        },
        cancelCreateTaskModal() {
            this.showModal = false
        },
        createNewTask() {
            this.tasks.push({
                id: this.nextTaskId ++,
                name: this.taskName,
                time: this.taskTime,
                details: this.taskDetails
            })
            this.taskName = "",
            this.taskTime = 0,
            this.taskDetails = ""
        }
    }
} 
</script>

<style scoped>
    .overlay {
      z-index: 1;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.5);
      align-items: center;
      justify-content: center;
    }

    #create-task-modal {
        background-color: #fff;
        width: 20%;
        margin: 10% 40%;
        height: 400px;
    }

    .task {
        margin-top: 15px;
    }

    .form-name {
        border-left: 1px solid #000;
        padding-left: 5px;
        margin-bottom: 5px;
    }

    .task-input {
        width: 100%;
    }

    .task-time .task-input {
        display: flex;
    }

    .btn-group {
        text-align: center;
        margin: 20px 0;
    }

    .btn-group button {
        width: 80px;
        margin: 0 10px;
    }

    .input-forms-buttons {
        width: 80%;
        margin: 0 10%;
        padding: 10px 0;
    }
</style>