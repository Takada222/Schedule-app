<template>
    <div class="body-container">
        <div class="link link-to-how" @mouseover="changeLeftColor" @mouseleave="ripositLeftColor" :class={mouseHoverLeft:isActiveLeft}>
            <p>? How To Use ?</p>
            <a href="#" @click="toHowToUse"></a>
        </div>
        <div class="link link-to-schedule" @mouseover="changeRightColor" @mouseleave="ripositRightColor" :class={mouseHoverRight:isActiveRight}>
            <p>! Try Using !</p>
            <a href="#" @click="toSchedule"></a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActiveLeft: false,
            isActiveRight: false
        }
    },
    methods: {
        toHowToUse() {
            this.$router.push('/HowToUse');
        },
        toSchedule() {
            this.$router.push('/Schedule');
        },
        changeLeftColor() {
            this.isActiveLeft = true
        },
        ripositLeftColor() {
            this.isActiveLeft = false
        },
        changeRightColor() {
            this.isActiveRight = true
        },
        ripositRightColor() {
            this.isActiveRight = false
        }
    }
}
</script>

<style scoped>
    .body-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 70px;
        z-index: 1;
    }

    .link {
        width: 50%;
        line-height: 650px;
        position: relative;
    }
    
    .link a {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }

    .link p {
        font-size: 60px;
        color: rgba(70, 200, 200, 0.9);
        transition: 1s;
    }

    .mouseHoverLeft p {
        color: white;
        background-color: rgba(70, 200, 200, 0.5);
        transition: 1s;
    }

    .mouseHoverRight p {
        color: white;
        background-color: rgba(70, 200, 200, 0.5);
        transition: 1s;
    }

    .link-to-how {
        border-right: 1px solid #000;
        text-align: right;
    }

    .link-to-schedule {
        border-left: 1px solid #000;
    }
</style>