<template>
  <nav>
    <!-- <router-link to="/">home</router-link> |
    <router-link to="/mine">mine</router-link> |
    <router-link to="/profile">profile</router-link> -->

    <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="orders-o">课程</van-tabbar-item>
      <van-tabbar-item to="/profile" icon="manager-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
