<template>
  <div class="body-container">
    <div class="link link-to-how">
      <!-- <p>? How To Use ?</p> -->
      <a
        href="#"
        @click="toHowToUse"
      >? How To Use ?</a>
    </div>
    <div class="link link-to-schedule">
      <a
        href="#"
        @click="toSchedule"
      >! Try Using !</a>
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
      } 
    }
  }
</script>

<style lang="scss" scoped>

  .body-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 70px;
  }

  .link {
    width: 50%;
    line-height: 650px;
    font-size: 80px;
    a {
      position: relative;
      display: inline-block;
      width: 100%;
      color: rgb(70, 180, 180);
      transition: .3s;
      text-decoration: none;
      &::before{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        content: '';
        background: rgba(255, 240, 107, 0.9);
        transform: scale(0, 1);
        transition: transform .4s;
      }
      &:hover {
        color: rgb(255, 95, 95);
        &::before {
          transform: scale(1, 1);
        }
      }
    }
}

.link-to-how {
  border-right: 1px solid #000;
  text-align: right;
  a {
    &::before{
      transform-origin: right top;
    }
    &:hover::before {
      transform-origin: right top;
    }
  }
}

.link-to-schedule {
  border-left: 1px solid #000;
  text-align: left;
  a {
    &::before{
      transform-origin: left top;
    }
    &:hover::before {
      transform-origin: left top;
    }
  }
}
</style>