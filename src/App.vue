<template>
  <div>
    <myheader></myheader>
    <router-view></router-view>
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
</style>