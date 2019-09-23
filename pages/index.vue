<!-- 首页 -->
<template>
  <div class="home-page">
    <!-- 首页轮播图 -->
    <div class="banner-box">
      <nav-banner :banner="banner1"></nav-banner>
      <!-- <nav-banner3d :banner="banner1"></nav-banner3d>  -->
    </div>
    <!-- <div class="banner-box">
      <div class="banner-text">
        <h1>专业，体现在服务的方方面面<br>五大专业部门，24小时贴心照护</h1>
        <p>实施台式全面、专业、科学、系统的护理标准，护理人员必备国家<br>护士资格证书、<br>公立医院临床经验，入职前参加产后护理知识相关知识课程培训。</p>
      </div>
      <div v-swiper:mySwiper="swiperOption" class="banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-slide1"></div>
          <div class="swiper-slide swiper-slide2"></div>
          <div class="swiper-slide swiper-slide3"></div>
        </div>
      </div>
    </div> -->
    
    <!-- 首页-主体区域 -->
    <div class="content">
      <div class="naiping"></div>
      <div class="putao"></div>

      <!-- 绳子 -->
      <div class="rope-top"></div>

      <div class="main">
        <!-- 服务介绍 -->
        <div class="session1 session">
          <div class="info outer">
             <h3>全方位专业月子照护<br>享受为人母的幸福</h3>
              <p>宝宝照护</p>
              <p>用科学的护理专业，温馨守护新生软萌宝宝</p>
              <!-- <div class="swiper-pagination" style="margin-top:68px;"></div> -->
          </div>
          <div class="image-box">
            <home-banner1 :banner="banner"></home-banner1>
          </div>
        </div>
      
        <div class="session2 session">
          <div class="info outer">
            <div class="item">
              <div class="image image1"></div>
              <p>专家团队</p>
            </div>
            <div class="item">
              <div class="image image2"></div>
              <p>宝宝照护</p>
            </div>
            <div class="item">
              <div class="image image3"></div>
              <p>妈妈照护</p>
            </div>
            <div class="item">
              <div class="image image4"></div>
              <p>产后护理</p>
            </div>
            <div class="item">
              <div class="image image5"></div>
              <p>趣味课程</p>
            </div>
          </div>
          <div class="more-btn" @click="toAttend">了解更多</div>
        </div>

        <div class="session3 session">
          <div class="info outer">
            <div class="title">空间</div>
            <div class="icon"></div>
            <h3>台湾ISD创意空间设计，专注产后休养的艺术大厅</h3>
            <p>呼吸每一口清新空气，触碰每一寸典雅艺术</p>
            <p>专业休养环境从设计开始，搭建独属妈妈与宝宝的专属生活空间</p>
            <p>每家门店都有独特的风格，享受游走艺术空间的美</p>
            <p>滋养身心，解放心灵</p>
          </div>
          <div class="space-right">
            <home-banner2 :banner="banner2"></home-banner2>
          </div>

          <div class="swiper-pagination" style="right:177px;bottom:28px;"></div>
        </div>

        <div class="session4 session">
          <div class="image"></div>
          <div class="info outer">
            <div class="title">私人定制</div>
            <h3>创意月子料理，<br>台湾大厨定制舌尖上的美味</h3>
            <div class="icon"></div>
            <p>台湾主厨每周沟通，仔细问询产妇身体状态、口味、乳汁分泌量等定制膳食，做到发奶不发福</p>
          </div>
          <div class="food-fruit"></div>
        </div>

        <div class="session5 session">
          <div class="info">
            <div class="title">宝妈见证</div>
            <div class="icon"></div>
            <p>呗家妈妈的精彩故事，经历了一个月的女王享受<br>让呗家妈妈为大家讲述她们所遇到的幸福故事</p>
          </div>
          <div class="list ">
            <div class="item outer" @click="toWitness">
              <div class="image image1">
                <!-- <div class="tag">05.15</div> -->
              </div>
              <div class="text">
                <h3>最真挚的感谢</h3>
                <p>2016年对于我来说一定是一个值得记住一辈子的年份，我有了自己的宝宝！</p>
              </div>
            </div>
            <div class="item outer" @click="toWitness">
              <div class="image image2">
                <!-- <div class="tag">05.15</div> -->
              </div>
              <div class="text">
                <h3>因为在人海中多看了你一眼</h3>
                <p>2016年对于我来说一定是一个值得记住一辈子的年份，我有了自己的宝宝！</p>
              </div>
            </div>
            <div class="item outer" @click="toWitness">
              <div class="image image3">
                <!-- <div class="tag">05.15</div> -->
              </div>
              <div class="text">
                <h3>因为在人海中多看了你一眼</h3>
                <p>2016年对于我来说一定是一个值得记住一辈子的年份，我有了自己的宝宝！</p>
              </div>
            </div>
          </div>
        </div>

        <div class="session6 session">
           <div class="item">
            <div class="image image1"></div>
            <div class="num">
              <countTo v-if="showCount" :endVal="e1" :duration="duration"></countTo>
            </div>
            <!-- <div class="num">6</div> -->
            <p>我们的门店数</p>
          </div>
          <div class="item">
            <div class="image image2"></div>
            <div class="num">
              <countTo v-if="showCount" :startVal="s2"  :endVal="e2" :duration="duration"></countTo>

            </div>
            <p>我们的工作人员</p>
          </div>
          <div class="item">
            <div class="image image3"></div>
            <div class="num">
              <countTo v-if="showCount" :startVal="s3" :endVal="e3" :duration="duration"></countTo>

            </div>
            <p>我们收获的赞誉</p>
          </div>
        </div>

      </div>

      <!-- 绳子 -->
      <div class="rope-bottom"></div>
    </div>
  </div>
</template>

<script>
import NavBanner from '../components/banner/navBanner'
import NavBanner3d from '../components/banner/nav-banner3d'

import HomeBanner1 from '../components/banner/home-banner1'
import HomeBanner2 from '../components/banner/home-banner2'
import countTo from 'vue-count-to';



export default {
  data() {
    return {
      amoun1: 0,
      startVal: 0,
      showCount: false,
      e1: 6,
      s2: 50,
      e2: 300,
      s3: 4000,
      e3: 12345,
      duration:3000,
      swiperOption: {
        speed:500,
        // effect : 'fade',
        autoplay: {
          delay: 2000, // 切换时间
          stopOnLastSlide: false, // 是否停止在最后一张
          disableOnInteraction: false // 禁止轮播
        },
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      // 导航轮播图
      banner1: [
         {
          fullUrl: '',
          title: '专业，体现在服务的方方面面<br>五大专业部门，24小时贴心照护',
          subTitle: '护理人员必备国家认证的职业证书<br>并且接受3个月理论与实操培训后才可独立上岗</>',
          picUrl: 'http://pic.yupoo.com/pugbabu/f0579acf/4a760349.jpg',
        },
      ],
      // 空间轮播图
      banner2: [
        {
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/afc178ce/8697b6a4.jpg',
        },
        {
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/fafece60/4504d979.jpg',
        },
        {
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/6091a6ea/b4bf9e90.jpg',
        },
        {
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/8212d89e/01760d3e.jpg',
        },
        {
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/f3780a39/84eb573e.jpg',
        },
      ],
      // 月子照护轮播
      banner: [
        {
          picUrl: 'http://pic.yupoo.com/pugbabu/67af0bdb/54de748a.jpg'
        },
        {
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/8212d89e/01760d3e.jpg',
        },
      ],
      serviceList: [
        {
          // src: require("~/assets/image/index-food1.jpeg"),
          src: 'http://pic.yupoo.com/pugbabu/dd3847aa/925af318.png',
          title: "专家团队",
          id: 1,
        },
        {
          // src: require("~/assets/image/index-food2.jpeg"),
          src: 'http://pic.yupoo.com/pugbabu/268e5ed9/bdf485d9.png',

          title: "宝宝照护",
          id: 2,

        },
        {
          // src: require("~/assets/image/index-food3.jpeg"),
          src: 'http://pic.yupoo.com/pugbabu/4537dff6/005b8d83.png',
          title: "妈妈照护",
          id: 3,

        },
         {
          // src: require("~/assets/image/index-food3.jpeg"),
          src: 'http://pic.yupoo.com/pugbabu/c4aaef04/e75a4129.png',
          title: "妈妈照护",
          id: 4,

        },
         {
          // src: require("~/assets/image/index-food3.jpeg"),
          src: 'http://pic.yupoo.com/pugbabu/4537dff6/005b8d83.png',
          title: "妈妈照护",
          id: 5,

        },
      ],
    };
  },
  components: {
   NavBanner,HomeBanner1,HomeBanner2,NavBanner3d,countTo
  },
  watch: {
    $route(to) {
      if (to.path == '/') {
        window.addEventListener('scroll', this.scroll, false)
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroll, false)
  },
  beforeRouteLeave(to,from,next) {
    window.removeEventListener('scroll', this.scroll)
    next()
  },
  methods: {
    addClassName(element, className) {
      if (!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) element.className += ' ' + className;
    },
    /**
      * 为DOM对象删除样式类名称
      * @param {dom} element dom对象
      * @param {string} className 样式名称
      * @return {dom}
      */
      removeClassName(element, className) {
      if (element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        element.className = element.className.replace(reg, ' ');
      }
    },

    scroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      let naiping = document.getElementsByClassName('naiping')[0]
      if (scrollTop < 1700) {
        naiping.style.transform = 'translateX(-165%)';
      } else {
        naiping.style.transform = 'translateX(-115%)';
        if (scrollTop > 3700) {
          this.showCount = true
        }
      }
    },
    toAttend() {
      this.$router.push({
        path: '/attend'
      })
    },
    toWitness() {
      this.$router.push({
        path: '/about'
      })
      sessionStorage.setItem('tabInd', 1)
    },
    //金额变动动画
    numFun(num,maxNum) {
      // var numBox = document.getElementById("numBox");
        var that = this;
        var num = num;
        var maxNum = maxNum;
        var timer = setInterval(function(){
          num++; // 调节速度
          if(num >= maxNum){
            // numBox.innerHTML = maxNum;
            that.amoun1 = maxNum
            clearInterval(timer);
          } else {
            that.amoun1 = ~~(num);
            // numBox.innerHTML = ~~(num);
          }
        },100); // 也可以调节速度
      }
    
  }
};
</script>

<style lang='scss' scoped>
@import "../assets/scss/page/index.scss";

</style>