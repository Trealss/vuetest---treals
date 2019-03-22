<template>
  <div class="home">
    <van-swipe
      :autoplay="3000"
      indicator-color="white"
      class="my-swiper"
    >
      <van-swipe-item
        class="item"
        v-for="item in lunbotulist"
        :key="item.img"
      >
        <img
          :src="item.img"
          alt=""
        >
      </van-swipe-item>
    </van-swipe>

    <div class="demo-icon">

      <div class="van-col van-col--6">
        <i class="van-icon">
          <img src="/static/gird/menu1.png" alt="">
          <img src="" alt="">
        </i>
        <span>location-o</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon">
          <img src="/static/gird/menu2.png" alt="">
          <img src="" alt="">
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
          <img src="" alt="">
        </i>
        <span>location-o</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon">
          <img src="/static/gird/menu5.png" alt="">
          <img src="" alt="">
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
import { Toast } from "vant";
export default {
  data: () => ({
    lunbotulist: []
  }),
  created() {
    this.getlunbo();
  },
  methods: {
    getlunbo() {
      this.$http.get("api/getlunbo").then(result => {
        const {
          data: { status, message }
        } = result;
        if (status === 0) {
          console.log(message);
          this.lunbotulist = message;
        } else {
          Toast("获取轮播图数据失败");
        }
      });
    }
  }
};
</script>

<style lang="less">
.home {
  .my-swiper {
    height: 200px;
    .item {
      // &:nth-child(1) {
      //   background: red;
      // }
      // &:nth-child(2) {
      //   background: green;
      // }
      // &:nth-child(3) {
      //   background: blue;
      // }
      img {
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
