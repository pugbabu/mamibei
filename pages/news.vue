<!-- 行业资讯 -->
<template>
  <div class="news-wrapper">
    <div class="banner-wrapper">
      <div class="banner">
        <img src="http://pic.yupoo.com/pugbabu/2c78da26/e4dc99eb.jpg">
      </div>
    </div>
    <div id="bread-nav" data-v-cc3946a2="">
      <div class="brand-nav-box clearfix" data-v-cc3946a2="">
        <div class="brand-nav-content" data-v-cc3946a2="">
          <div class="brand-nav-title" data-v-cc3946a2="">
            <span data-v-cc3946a2="">当前位置:</span>
          </div>
          <ul class="brand-nav-list" data-v-cc3946a2="">
            <li data-v-cc3946a2="">
              <a href="/" class="nuxt-link-active" data-v-cc3946a2="">首页</a>
            </li>
            <li data-v-cc3946a2="">&gt;</li>
            <li data-v-cc3946a2="">
              <a
                href="/news"
                class="nuxt-link-exact-active nuxt-link-active"
                data-v-cc3946a2=""
              >新闻中心</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ul class="news-list">
      <li class="news-item" v-for="(item, index) in list" :key="index">
        <a class="link" @click="toArticle(item)">{{item.title}}</a>
        <span class="time">{{item.createdAt | filterTime}}</span>
      </li>
      <div class="no-news" v-if="list.length < 1">暂无资讯</div>
      <!-- <li class="news-item">
        <a class="link" @click="toArticle">中国互金协会：切断失信人在互金领域融资渠道</a>
        <span class="time">2018-05-31</span>
      </li>
      <li class="news-item">
        <a class="link" @click="toArticle">中国互金协会：切断失信人在互金领域融资渠道</a>
        <span class="time">2018-05-31</span>
      </li>
      <li class="news-item">
        <a class="link" @click="toArticle">中国互金协会：切断失信人在互金领域融资渠道</a>
        <span class="time">2018-05-31</span>
      </li>
      <li class="news-item">
        <a class="link" @click="toArticle">中国互金协会：切断失信人在互金领域融资渠道</a>
        <span class="time">2018-05-31</span>
      </li>-->
    </ul>
    <ul class="pagination" v-if="count > 10">
      <li v-show="current != 1" @click="current-- && goto(current)">
        <a href="#">上一页</a>
      </li>
      <li
        v-for="index in pages"
        @click="goto(index)"
        :class="{'active':current == index}"
        :key="index"
      >
        <a href="#">{{index}}</a>
      </li>
      <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)">
        <a href="#">下一页</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
const pageSize = 10;
const env = process.env.NODE_ENV; // development-开发 production-生产
// const serverHost =
//   env === "development" ? "http://localhost:3000" : "http://47.99.67.108:3000"; // 婉君服务器
const serverHost =
  env === "development" ? "http://localhost:3000" : "http://139.129.240.238:3000"; // 妈咪呗服务器
export default {
  async asyncData(context) {
    let pageObj = {
      pageSize: pageSize,
      currentPage: 1
    };
    let { data } = await axios.post(`${serverHost}/api/article/list`, pageObj);
    return {
      list: data.data.rows,
      count: data.data.count
    };
  },
  data() {
    return {
      current: 1,
      pageSize: 10,
      showItem: 5,
      allpage: 13
    };
  },
  computed: {
    pages: function() {
      this.allpage = Math.round(this.count / pageSize);
      console.log(this.allpage);
      var pag = [];
      if (this.current < this.showItem) {
        //如果当前的激活的项 小于要显示的条数
        //总页数和要显示的条数那个大就显示多少条
        var i = Math.min(this.showItem, this.allpage);
        while (i) {
          pag.unshift(i--);
        }
      } else {
        //当前页数大于显示页数了
        var middle = this.current - Math.floor(this.showItem / 2), //从哪里开始
          i = this.showItem;
        if (middle > this.allpage - this.showItem) {
          middle = this.allpage - this.showItem + 1;
        }
        while (i--) {
          pag.push(middle++);
        }
      }
      return pag;
    }
  },
  methods: {
    toArticle(item) {
      this.$router.push({
        path: '/article',
        query: {
          id: item.id
        }
      })
    },
    goto(index) {
      if (index == this.current) return;
      this.current = index;
      let pageObj = {
        pageSize: pageSize,
        currentPage: index
      };
      axios.post(`${serverHost}/api/article/list`, pageObj).then(res => {
        this.list = res.data.data.rows;
      });
    }
  },
  filters: {
    filterTime(val) {
      return val.slice(0, 10);
    }
  },
  created() {
    console.log(this.list);
  }
};
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
.brand-nav-box {
  width: 1200px;
  margin: 0 auto;
  color: #858585;
  font-size: 14px;
  text-align: left;
  line-height: 70px;
  height: 70px;
  overflow: hidden;
  .brand-nav-content {
    float: left;
    .brand-nav-title {
      float: left;
    }
    .brand-nav-list {
      float: left;
      overflow: hidden;
      li {
        float: left;
        margin: 0 5px;
      }
    }
  }
}
.news-list {
  padding: 20px 20px 35px 20px;
  border: 1px solid #f0f1f6;
  background-color: #fff;
  box-shadow: 0 0 5px 2px #f3f4f9;
  min-height: 380px;
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 50px;
  position: relative;
  .news-item {
    margin-top: 10px;
    background: url("http://pic.yupoo.com/pugbabu/c881346e/161828d5.png")
      repeat-x 0 bottom;
    font-size: 12px;
    font-family: "宋体";
    height: 40px;
    line-height: 40px;
    padding: 0 16px;
    .link {
      float: left;
      display: inline-block;
      color: #333333;
      padding-left: 14px;
      text-decoration: none;
      text-align: left;
      cursor: pointer;
      background: url("http://pic.yupoo.com/pugbabu/c723db2b/3fb9007f.png")
        no-repeat 0 15px;
    }
    .link:hover {
      color: #0096e0;
    }
    .time {
      float: right;
      color: #ababab;
    }
  }
  .no-news {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    font-size: 14px;
    color: #858585;
    line-height: 20px;
  }
}
.pagination {
  position: relative;
  text-align: center;
  margin-bottom: 30px;
}
.pagination li {
  display: inline-block;
  margin: 0 5px;
}
.pagination li a {
  padding: 0.5rem 1rem;
  display: inline-block;
  border: 1px solid #ddd;
  background: #fff;
  color: #0e90d2;
}
.pagination li a:hover {
  background: #eee;
}
.pagination li.active a {
  background: #0e90d2;
  color: #fff;
}
</style>