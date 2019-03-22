<template>
  <div class="newsinfo">
    <!-- 大标题 -->
    <h3 class="title">{{ newsinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | datefmt}}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>

    <hr>
    <!-- 内容区域 -->
    <div class="content">{{ newsinfo.content }}</div>

    // 评论区
    <comment :id="id"></comment>
  </div>
</template>

<script>
  import comment from '../subcomponents/Comment';


	export default {
		name: "newsInfo",
    data: () => ({
      id: '',
      newsinfo: {}
    }),
    components: {
		  comment
    },
    created() {
		  this.id = this.$route.params.id;
		  this.$http.get('/api/getnew/' + this.id).then(res => {
		    let {data:{status, message}} = res;
		    if (status === 0) {
		      this.newsinfo = message;
          console.log(message);
        }
      })
    }
	}
</script>

<style lang="less">
  .newsinfo {
    padding: 0 4px;
    .title {
      font-size: 16px;
      text-align: center;
      margin: 15px 0;
      color: red;
    }
    .subtitle {
      font-size: 13px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
