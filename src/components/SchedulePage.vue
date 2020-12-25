<template>
    <div>
        <create-task></create-task>
        <task-list></task-list>
    </div>
</template>

<script>
import CreateTask from './organisms/CreateTask'
import TaskList from './organisms/TaskList'

export default {
  components: { 
      CreateTask,
      TaskList 
    },
    
}
</script>