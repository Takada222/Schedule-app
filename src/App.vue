<template>
  <div>
    <myheader />
    <router-view />
    <myfooter />
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
    z-index: 1;
  }

  h1 {
    color: rgba(200, 70, 70, 0.9);
    margin-bottom: 20px;
  }
</style>