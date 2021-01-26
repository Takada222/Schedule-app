<template>
  <div class="top-container">
    <h1>今日の予定</h1>
    <task-list />
  </div>
</template>

<script>
import TaskList from '../components/TaskList';

export default {
    components: {
        TaskList
    }
}
</script>

<style scoped>
    myheader {
    position: fixed;
    z-index: 2;
  }
</style>