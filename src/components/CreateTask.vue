<template>
    <div>
        <button @click="openCreateTaskModal">タスクを作成</button>
        <div v-show="showModal" class="overlay" id="create-task-modal">
            <div class="task task-name">
                <p>タスク名 :</p>
                <input type="text" placeholder="タスク名を入力">
            </div>
            <div class="task task-time">
                <p>時間 :</p>
                <input type="text" step="0.5" placeholder="0">
                <p>時間</p>
            </div>
            <div class="task task-details">
                <p>詳細 :</p>
                <textarea name="details" cols="30" rows="10">詳細を入力</textarea>
            </div>
            <div>
                <button>作成</button>
                <button @click="cancelCreateTaskModal">キャンセル</button>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            showModal: false
        }
    },
    methods: {
        openCreateTaskModal() {
            this.showModal = true
        },
        cancelCreateTaskModal() {
            this.showModal = false
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
        width: 40%;
        height: 400px;
    }
</style>