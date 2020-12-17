<template>
    <div class="task-area">
        <draggable group="foodGroup" tag="ul" class="box">
            <li v-for="item in items2" :key="item.no">{{ item.name }}-(No.{{item.no}})</li>
        </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
    components: {
        draggable
    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        display: flex;
    }
    li {
        padding: 10px;
        margin: 20px 10px;
        border: solid #000 1px;
        height: 180px;
    }
    .box {
        height: 240px;
        width: 100%;
        background-color: #ccc;
    }
</style>