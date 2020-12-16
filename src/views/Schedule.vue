<template>
    <div>
        <h1>今日の予定</h1>
        <create-task></create-task>
        <task-list></task-list>
    </div>
</template>

<script>
import CreateTask from '../components/CreateTask.vue'
import TaskList from '../components/TaskList.vue'

export default {
    components: {
        CreateTask,
        TaskList
    }
}
</script>