<template>
  <div>
    <!--轮播-->
    <div class="banner">
      <van-swipe :autoplay="3000" indicator-color="white" class="myswiper">
        <van-swipe-item v-for="item in list" :key="item.img">
          <img :src="item.img" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--九宫格-->
    <div class="demo-icon">
      <div class="van-col van-col--6">
        <i class="van-icon">
          <img src="/static/gird/menu1.png" alt="">
        </i>
        <span>location-o</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon">
          <img src="/static/gird/menu2.png" alt="">
        </i>
        <span>location-o</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon">
          <img src="/static/gird/menu3.png" alt="">
          <img src="" alt="">
        </i>
        <span>location-o</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon">
          <img src="/static/gird/menu4.png" alt="">
        </i>
        <span>location-o</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon">
          <img src="/static/gird/menu5.png" alt="">
        </i>
        <span>location-o</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon">
          <img src="/static/gird/menu6.png" alt="">
        </i>
        <span>location-o</span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  axios.defaults.baseURL = 'http://localhost:5000';

	export default {
		name: "home",
    data: () => ({
      list: []
    }),
    created() {
		  // 发送Ajax请求
      axios.get('/api/getlunbo').then(res => {
        // 解构data中的message 和 status
        let {data: {status, message}} = res;
        if (status === 0) {
          this.list = message;
        }
      })
    }
	}
</script>

<style lang="less" scoped>
  .app {
    .banner {
      width: 100%;
      overflow: hidden;
      .myswiper {
        height: 200px;
        .van-swipe-item img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .demo-icon {
      font-size: 0;
      padding-top: 10px;
      .demo-icon-list {
        padding-top: 10px;
        box-sizing: border-box;
        min-height: calc(100vh - 65px);
      }
      .van-col {
        float: none;
        text-align: center;
        width: 33.33333%;
        display: inline-block;
        vertical-align: middle;
        img {
          width: 60px;
          height: 60px;
        }
        span {
          display: block;
          padding: 0 5px;
          font-size: 12px;
          line-height: 14px;
        }
      }
      .van-icon {
        font-size: 32px;
        margin: 15px 0;
        color: #455a64;
      }
    }
  }
</style>
