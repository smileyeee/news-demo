<template>
  <div id="app">
    <!-- 页面主题 -->
    <router-view></router-view>
    <!-- 小工具 -->
    <GoTop></GoTop>
    
  </div>
</template>

<script>
import GoTop from './components/gotop/GoTop.vue'
// 全局引入vuex
import store from './store/store.js'


export default {
  name: 'App',
  store, 
  components: {
    GoTop
  }
}
</script>

<style scoped>
*{margin: 0;padding: 0;}
html{margin: 0;padding: 0;height:100%;}
body{min-height:100%;position:relative;}

#app{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
}

.el-container{
  height: 100%;
}
</style>
