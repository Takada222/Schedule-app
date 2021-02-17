<template>
  <div class="task-area">
    <create-task @new-task="reflectTask" />
    <task-info
      v-show="showTaskInfoModal"
      :selected-task-info.sync="selectedTaskInfo"
      @editSelectedTaskInfo="editSelectedTaskInfo(index)"
      @removeSelectedTask="removeSelectedTask(index)"
      @closeTaskInfoModalWithNoEdit="closeTaskInfoModalWithNoEdit"
    />
    <draggable
      group="taskGroup"
      tag="ul"
      class="box"
    >
      <li
        v-for="task in tasks"
        :key="task.id"
        class="task-width"
        :style="widthClass(task.time)"
        :class="{'complete-opacity': task.complete}"
      >
        <div class="icon-btns">
          <button
            class="btn icon-btn left-icon-btn"
            @click="task.complete = !task.complete"
          >
            <font-awesome-icon
              class="icon"
              :icon="['far', 'check-circle']"
            />
          </button>
          <button
            class="btn icon-btn"
            @click="openTaskInfoModal(task)"
          >
            <font-awesome-icon
              class="icon"
              :icon="['far', 'arrow-alt-circle-right']"
            />
          </button>
        </div>
        <p class="task-name">
          {{ task.name }}
        </p>
      </li>
    </draggable>
  </div>
</template>

<script>
import CreateTask from "./organisms/CreateTask";
import TaskInfo from "./organisms/TaskInfo";
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
    CreateTask,
    TaskInfo
  },
  data() {
    return {
      tasks: [],
      selectedTaskInfo: {},
      showTaskInfoModal: false
    };
  },
  methods: {
    reflectTask(value) {
      this.tasks = value;
    },
    widthClass(value) {
      if (value < 30) {
        return {
          "--task-length": "50px",
        };
      } else if (value < 60) {
        return {
          "--task-length": "70px",
        };
      } else if (value < 90) {
        return {
          "--task-length": "100px",
        };
      } else {
        return {
          "--task-length": "120px",
        };
      }
    },
    editSelectedTaskInfo(index, editedTaskInfo) {
      this.tasks.splice(index, 1, editedTaskInfo)
      this.showTaskInfoModal = false
    },
    removeSelectedTask(selectedTask) {
      this.tasks.splice(selectedTask, 1)
      this.showTaskInfoModal = false
    },
    openTaskInfoModal(value) {
      this.selectedTaskInfo = value
      this.showTaskInfoModal = true
    },
    closeTaskInfoModalWithNoEdit() {
      this.showTaskInfoModal = false
    }
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  display: flex;
}
li {
  margin: 12px 10px 0;
  background-color: rgb(250, 250, 250);
  border: solid #000 2px;
  border-radius: 4px;
  height: 89%;
  writing-mode: vertical-rl;
  display: flex;
  align-items: center;
  transition: 0.3s;
  padding: 0px;
  &:hover {
    cursor: grab;
    box-shadow: 0px 0px 10px -3px;
    transition: 0.2s;
  }
  &:active {
    cursor: grabbing;
  }
  .icon-btns {
    width: 100%;
    height: 30px;
    border-bottom: 2px solid #000;
    writing-mode: horizontal-tb;
    display: flex;
    .icon-btn {
      &:hover {
        cursor: pointer;
        color: white;
        background-color: black;
      }
    }
    .left-icon-btn {
      border-right: 2px solid #000;
    }
    .btn {
      display: inline;
      width: 100%;
      .icon {
        font-size: 20px;
        display: flex;
        margin: 0 auto;
        align-items: center;
      }
    }
  }
}
.task-name {
  font-size: 18px;
  padding-top: 6px;
}
.task-width {
  width: var(--task-length);
}
.complete-opacity {
  opacity: 0.4;
}
.box {
  height: 300px;
  width: 100%;
  background-color: rgb(230, 230, 230);
  margin: 50px 0;
}
</style>