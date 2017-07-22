<template>
  <el-col>
    <div id="app">
      <el-row class="row-bg">
        <el-menu mode="horizontal" :router="true">
          <el-menu-item index="new-contact">New Contact</el-menu-item>
        </el-menu>
      </el-row>
      <el-row>
        <router-view></router-view>
      </el-row>
    </div>
  </el-col>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .row-bg {
    margin-bottom: 10px;
  }
</style>
