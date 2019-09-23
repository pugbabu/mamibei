<!-- 文章正文 -->
<template>
  <div>
    <div class="banner-wrapper">
      <div class="banner">
        <img src="http://www.visney.cn/_nuxt/img/news-banner.74c380b.jpg">
      </div>
    </div>
    <div class="article-wrapper">
    <div class="top">
      <span class="title-zixun" @click="toNews">行业资讯</span>
      <span>></span>
      <span>当前正文</span>
    </div>
    <h2 class="title">
      {{title}}
    </h2>
    <div class="info">
      <span>来源：妈咪呗呗</span>
      <span>日期：{{createdAt}}</span>
    </div>
    <div class="content" v-html="content">
      
    </div>
  </div>
  </div>
  
</template>

<script>
import axios from 'axios';
const env = process.env.NODE_ENV; // development-开发 production-生产
// const serverHost =
//   env === "development" ? "http://localhost:3000" : "http://47.99.67.108:3000"; // 婉君服务器
const serverHost =
  env === "development" ? "http://localhost:3000" : "http://139.129.240.238:3000"; // 妈咪呗服务器
export default {
  data () {
     return {
       title: '',
       createdAt: '',
       content: '',
       id: this.$route.query.id
     }
  },
  created() {
    let id = this.$route.query.id;
    axios.get(`${serverHost}/api/article/${id}`).then(res => {
      console.log(res)
      this.title = res.data.data.title;
      this.content = res.data.data.content;
      this.createdAt = res.data.data.createdAt.slice(0, 10);
    });
  },
  methods: {
    toNews() {
      this.$router.push({
        path: '/news'
      })
    }
  },
  watch:{
    id(val) {
      axios.get(`${serverHost}/api/article/${val}`).then(res => {
      console.log(res)
      this.title = res.data.data.title;
      this.content = res.data.data.content;
      this.createdAt = res.data.data.createdAt.slice(0, 10);
    });
    }
  }
 }
</script>

<style lang='scss' scoped>
.banner-wrapper {
  width: 100%;
  height: 600px;
  position: relative;
  margin-top: 80px;
  .banner {
    margin: 0 auto;
    width: 1920px;
    height: 100%;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
.article-wrapper{
  width: 1200px;
  margin: 0 auto;
  min-height: 600px;
  position: relative;
  margin-top: 50px;
  padding: 20px;
  border: 1px solid #f0f1f6;
  background-color: #fff;
  box-shadow: 0 0 5px 2px #f3f4f9;
  box-sizing: border-box;
  margin-bottom: 50px;
  .top{
    font-size: 16px;
    color: #525252;
    line-height: 35px;
    border-bottom: 1px solid #b2b2b2;
    height: 35px;
    .title-zixun{
      text-decoration: none;
      margin-top: -1px;
      line-height: 33px;
      display: inline-block;
      color: #525252;
      font-size: 16px;
      border-bottom: 3px solid #0096e0;
      padding-right: 8px;
      cursor: pointer;
    }
  }
  .title{
    font-size: 20px;
    color: #333;
    text-align: center;
    margin: 20px 0px;
    font-weight: normal;
  }
  .info{
    font-size: 12px;
    font-family: "宋体";
    color: #ababab;
    text-align: center;
    margin-bottom: 10px;
  }
  .content{
    font-family: "微软雅黑",tahoma;
    line-height: 28px;
    padding: 0;
    margin: 12px 0 0 0;
    font-size: 14px;
    /* font-size: 14px; */
    color: #333;
    background: #fff;
  }
}



</style>