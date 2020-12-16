<template>
    <div>
        <h1>Home</h1>
        <div class="link-to-how">
            <p>使い方を見る</p>
            <button @click="toHowToUse">使い方</button>
        </div>
        <div class="use-schedule">
            <p>早速使う</p>
            <button @click="toSchedule">予定を組む</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toHowToUse() {
            this.$router.push('/HowToUse');
        },
        toSchedule() {
            this.$router.push('/Schedule');
        }
    }
}
</script>