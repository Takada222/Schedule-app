<template>
    <div class="top-container">
        <h1>今日の予定</h1>
        <schedule-page></schedule-page>
    </div>
</template>

<script>
import SchedulePage from '../components/SchedulePage';

export default {
    components: {
        SchedulePage
    }
}
</script>

<style scoped>
    myheader {
    position: fixed;
    z-index: 2;
  }
</style>