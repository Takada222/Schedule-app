<template>
  <div class="task-area">
    <create-task @new-task="reflectTask" />
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
      >
        <div class="icon-btns">
          <a
            class="btn icon-btn left-icon-btn"
          >
            <font-awesome-icon
              class="icon"
              :icon="['far', 'check-circle']"
            />
          </a>
          <a
            class="btn icon-btn"
          >
            <font-awesome-icon
              class="icon"
              :icon="['far', 'arrow-alt-circle-right']"
            />
          </a>
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
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
    CreateTask,
  },
  data() {
    return {
      tasks: [],
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
    height: 20px;
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
.box {
  height: 300px;
  width: 100%;
  background-color: rgb(230, 230, 230);
  margin: 50px 0;
}
</style>