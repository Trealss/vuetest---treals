<template>
  <div class="newsList">
    <router-link :to="'/home/newsCom/newsInfo/' + item.id" v-for="item in newslist" :key="item.id"
       :title="item.title">
      <van-card
        :thumb="item.img_url"
      >
        <div slot="price">
          <span>发布时间：{{ item.add_time | datefmt }}</span>
        </div>
        <div slot="num">
          <span>点击{{ item.click }}次</span>
        </div>
      </van-card>
    </router-link>
  </div>
</template>

<script>
  import moment from 'moment';
  // 自定义全局过滤器
  Vue.filter("datefmt", (date, pattern="YYYY-MM-DD hh:mm:ss") => {
    return moment(date).format(pattern);
  });

  // 发送Ajax请求
  import Vue from 'vue';
  import { Toast } from 'vant';
  Vue.use(Toast);

	export default {
		name: "newesCom",
    data: () => ({
      newslist: []
    }),
    created() {
      this.$http.get('/api/getnewslist').then(res => {
        let {data:{status, message}} = res;
        if (status === 0) {
          this.newslist = message;
        } else {
          Toast('数据获取失败');
        }
      })
    }
	}
</script>

<style lang="less">
  .van_card {
    height: 50px;
  }
</style>
