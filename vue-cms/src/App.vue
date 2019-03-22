<template>
  <div class="app">
    <!--header-->
    <van-nav-bar
      fixed
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
    />
    <!--content-->
    <transition enter-active-class="fadeInRight" leave-active-class="fadeOutLeft">
      <router-view class="animated" style="width: 100%"></router-view>
    </transition>
    <!--footer-->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/member">会员</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="100" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { NavBar, Tabbar, TabbarItem,Swipe, SwipeItem } from 'vant';
  Vue
    .use(NavBar)
    .use(Tabbar).use(TabbarItem)
    .use(Swipe).use(SwipeItem)


export default {
  name: 'App',
  data: () => ({
    active: 0
  }),

}
</script>
<style>
  .app {
    padding-top: 46px;
    overflow-x: hidden;
  }

  .v-leave-to {
    position: absolute;

  }


  /*做切换动画*/
  /*.v-enter {*/
    /*opacity: 0;*/
    /*transform: translateX(100%);*/
  /*}*/

  /*.v-leave-to {*/
    /*opacity: 0;*/
    /*transform: translateX(-100%);*/
    /*overflow-x: hidden;*/

  /*}*/

  /*.v-enter-active,*/
  /*.v-leave-active {*/
    /*transition: all .8s ease;*/
    /*position: absolute;*/
  /*}*/
</style>
