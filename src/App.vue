<template>
  <div>
    <myheader></myheader>
    <router-view class="top-container"></router-view>
    <myfooter></myfooter>
  </div>
</template>

<script>

import myheader from './components/myheader';
import myfooter from './components/myfooter';

export default {
  components: {
    myheader,
    myfooter
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .top-container {
    padding-top: 100px;
    width: 90%;
    margin: 0 5%;
  }

  h1 {
    color: green;
    margin-bottom: 20px;
  }

  myheader {
    position: fixed;
  }
</style>