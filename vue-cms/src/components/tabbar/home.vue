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
      <router-link class="van-col van-col--6" to="/home/newsCom" tag="div">
        <i class="van-icon">
          <img src="/static/gird/menu1.png" alt="">
        </i>
        <span>新闻资讯</span>
      </router-link>
      <div class="van-col van-col--6">
        <i class="van-icon">
          <img src="/static/gird/menu2.png" alt="">
        </i>
        <span>图片分享</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon">
          <img src="/static/gird/menu3.png" alt="">
          <img src="" alt="">
        </i>
        <span>商品购买</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon">
          <img src="/static/gird/menu4.png" alt="">
        </i>
        <span>留言反馈</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon">
          <img src="/static/gird/menu5.png" alt="">
        </i>
        <span>视频区域</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon">
          <img src="/static/gird/menu6.png" alt="">
        </i>
        <span>联系我们</span>
      </div>
    </div>
  </div>
</template>

<script>


	export default {
		name: "home",
    data: () => ({
      list: []
    }),
    created() {
		  // 发送Ajax请求
      this.$http.get('/api/getlunbo').then(res => {
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
