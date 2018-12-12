<!-- 首页 -->
<template>
  <div class="home-page">
    <!-- 首页轮播图 -->
    <div class="banner-text">
      <h1>专业，体现在服务的方方面面<br>五大专业部门，24小时贴心照护</h1>
      <p>实施台式全面、专业、科学、系统的护理标准，护理人员必备国家护士资格证书、<br>公立医院临床经验，入职前参加产后护理知识相关知识课程培训。</p>
    </div>
    <div v-swiper:mySwiper="swiperOption" class="banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner,index) in banners" :key="index">
          <!-- <div class="item">轮播图{{index + 1}}</div> -->
          <img v-lazy="banner">
        </div>
      </div>
      <!-- <div class="swiper-pagination swiper-pagination-white"></div> -->
      <!-- <div class="swiper-button-prev swiper-button-white"></div> -->
      <!-- <div class="swiper-button-next swiper-button-white"></div> -->
    </div>

    <!-- 首页-主体区域 -->
    <div class="content">
      <!-- 绳子 -->
      <div class="rope-top"></div>

      <div class="main">
        <!-- 服务介绍 -->
        <div class="service-content">
          <div class="milk-bottle"></div>
          <div class="service-left">
            <h3>全方位专业月子照护享受为人母的幸福</h3>
            <p>宝宝照护</p>
            <p>用科学的护理专业，温馨守护新生软萌宝宝</p>
            <div class="swiper-pagination" style="margin-top:68px;"></div>
            <!-- <ul class="dot">
              <li class="dot-item" v-for="(item,index) in serviceList" :key="index" :class="{active: index === serviceInd}" @click="changeService(index)"></li>
            </ul> -->
          </div>
          <div class="service-right">
            <div v-swiper:mySwiper1="serviceOption" class="service-banner">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in serviceList" :key="index">
                  <img :data-src="item.src" class="swiper-lazy">
                  <div class="swiper-lazy-preloader"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="service-list">
          <div>
            <div class="item">
              <div class="image"></div>
              <p>专家团队</p>
            </div>
            <div class="item">
              <div class="image"></div>
              <p>宝宝照护</p>
            </div>
            <div class="item">
              <div class="image"></div>
              <p>妈妈照护</p>
            </div>
            <div class="item">
              <div class="image"></div>
              <p>产后护理</p>
            </div>
            <div class="item">
              <div class="image"></div>
              <p>趣味课程</p>
            </div>
          </div>
          <div class="more-btn">了解更多</div>
        </div>

        <!-- 空间 -->
        <div class="space">
          <div class="space-left">
            <div class="title">空间</div>
            <div class="icon"></div>
            <h3>台湾ISD创意空间设计，专注产后休养的艺术大厅</h3>
            <p>呼吸每一口清新空气，触碰每一寸典雅艺术</p>
            <p>专业修养环境从设计开始，搭建独属妈妈与宝宝的专属生活空间</p>
            <p>每家门店都有独特的风格，享受游走艺术空间的美</p>
            <p>滋养身心，解放心灵</p>
          </div>
          <div class="space-right">   
            <div v-swiper:mySwiper2="spaceOption" class="space-banner">
              <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(item, index) in serviceList" :key="index">
                    <img :data-src="item.src" class="swiper-lazy">
                    <div class="swiper-lazy-preloader"></div>
                  </div>
               </div>
                
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>

          <div class="swiper-pagination" style="right:177px;bottom:28px;"></div>

        </div>

        <!-- 料理 -->
        <div class="food">
          <div class="food-left">
            <div class="title">私人定制</div>
            <h3>创意月子料理，
              <br>台湾大厨定制舌尖上的美味
            </h3>
            <div class="icon"></div>
            <p>台湾主厨每周沟通，仔细问询产妇身体状态、口味、乳汁分泌量等定制膳食，做到发奶不发福</p>
          </div>
          <div class="food-right"></div>
          <div class="food-fruit"></div>
        </div>

        <!-- 宝妈见证 -->
        <div class="witness">
          <div class="witness-top">
            <div class="title">宝妈见证</div>
            <div class="icon"></div>
            <p>呗家妈妈的精彩故事，经历了一个月的女王享受<br>让呗家妈妈为大家讲述她们所遇到的幸福故事</p>
          </div>
          <div class="witness-bottom">
            <div class="item">
              <div class="image image1">
                <div class="tag">05.15</div>
              </div>
              <div class="text">
                <h3>最真挚的感谢</h3>
                <p>2016年对于我来说一定是一个值得记住一辈子的年份，我有了自己的宝宝！</p>
              </div>
            </div>
            <div class="item">
              <div class="image image2">
                <div class="tag">05.15</div>
              </div>
              <div class="text">
                <h3>因为在人海中多看了你一眼</h3>
                <p>2016年对于我来说一定是一个值得记住一辈子的年份，我有了自己的宝宝！</p>
              </div>
            </div>
            <div class="item">
              <div class="image image3">
                <div class="tag">05.15</div>
              </div>
              <div class="text">
                <h3>因为在人海中多看了你一眼</h3>
                <p>2016年对于我来说一定是一个值得记住一辈子的年份，我有了自己的宝宝！</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 我们的数据 -->
        <div class="our-data">
          <div class="item">
            <div class="image image1"></div>
            <div class="num">6</div>
            <p>我们的门店数</p>
          </div>
          <div class="item">
            <div class="image image1"></div>
            <div class="num">680</div>
            <p>我们的工作人员</p>
          </div>
          <div class="item">
            <div class="image image1"></div>
            <div class="num">12,345</div>
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
import Team from "../components/home/team";
import BabyAttend from "../components/home/babyAttend";
import MotherAttend from "../components/home/motherAttend";
import BirthCare from "../components/home/birthCare";
import FunnyCourse from "../components/home/funnyCourse";

export default {
  data() {
    return {
      serviceInd: 0,
      swiperOption: {
        speed:1000,
        effect : 'fade',
        fadeEffect: {
          crossFade: false,
        },
        autoplay: {
          delay: 4000, // 切换时间
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
      serviceOption: {
        pagination: {
          el: ".swiper-pagination",
          bulletClass : 'my-bullet',
          bulletActiveClass: 'my-bullet-active',
          clickable :true,
          clickableClass : 'my-pagination-clickable',
        },
        autoplay: true,
        loop : true,
        speed:1000,
        lazy: {
          loadPrevNext: true,
        },
      },
      spaceOption: {
        pagination: {
          el: ".swiper-pagination",
          bulletClass : 'my-bullet',
          bulletActiveClass: 'my-bullet-active',
          clickable :true,
          clickableClass : 'my-pagination-clickable',
        },
        autoplay: true,
        loop : true,
        speed:1000,
        lazy: {
          loadPrevNext: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      banners: [
        {
          // src: require("~/assets/image/home/banner-bg1.png")
          src: 'http://pjm95ro2m.bkt.clouddn.com/banner-bg1.png'
        },
        {
          // src: require("~/assets/image/attend1.jpg")
          src: 'http://pjm95ro2m.bkt.clouddn.com/attend1.jpg'

        },
        {
          // src: require("~/assets/image/attend2.jpg")
          src: 'http://pjm95ro2m.bkt.clouddn.com/attend2.jpg'

        }
      ],
      serviceList: [
        {
          // src: require("~/assets/image/index-food1.jpeg"),
          src: 'http://pjm95ro2m.bkt.clouddn.com/index-food1.jpeg',
          title: "专家团队",
          id: 1,
        },
        {
          // src: require("~/assets/image/index-food2.jpeg"),
          src: 'http://pjm95ro2m.bkt.clouddn.com/index-food2.jpeg',

          title: "宝宝照护",
          id: 2,

        },
        {
          // src: require("~/assets/image/index-food3.jpeg"),
          src: 'http://pjm95ro2m.bkt.clouddn.com/index-food3.jpeg',
          title: "妈妈照护",
          id: 3,

        },
        // {
        //   src: require("~/assets/image/service4.png"),
        //   title: "产后护理"
        // },
        // {
        //   src: require("~/assets/image/service5.png"),
        //   title: "趣味课程"
        // }
      ],
      num: 0,
      spaceIndex: 0,
      clickTime: "",
      isLeft: true,
      foodIndex: 0,
      timer: ""
    };
  },
  components: {
    Team,
    BabyAttend,
    MotherAttend,
    BirthCare,
    FunnyCourse
  },
  created() {
    //在DOM加载完成后，下个tick中开始轮播
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 4000);
    });
  },
  methods: {
    tab(index) {
      this.num = index;
      window.scrollTo(0, 0);
    },
    handlePrev() {
      if (new Date() - this.clickTime > 850) {
        this.isLeft = false;
        this.spaceIndex--;
        if (this.spaceIndex < 0) {
          this.spaceIndex = this.spaceList.length - 1;
        }

        this.clickTime = new Date();
      }
    },
    handleNext() {
      if (new Date() - this.clickTime > 850) {
        this.isLeft = true;
        this.spaceIndex++;
        if (this.spaceIndex > this.spaceList.length - 1) {
          this.spaceIndex = 0;
        }

        this.clickTime = new Date();
      }
    },
    change(index) {
      this.serviceInd = index;
    },
    go() {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 4000);
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    },
    autoPlay() {
      this.serviceInd++;
      if (this.serviceInd > this.serviceList.length - 1) {
        this.serviceInd = 0;
      }
    },
    
  }
};
</script>

<style lang='scss' scoped>
// 轮播上的文字
.banner-text{
  width: 1380px;
  position: absolute;
  top: 287px;
  padding-left: 200px;
  left: 50%;
  transform: translateX(-50%);
  color: #2D3A4B;
  font-size: 30px;
  z-index: 101;
  box-sizing: border-box;
  h1{
    font-size:48px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(45,58,75,1);
    margin-bottom: 50px;
  }
  p{
    width:567px;
    font-size:21px;
    font-family:Helvetica;
    color:#2D3A4B;
    line-height:32px;
  }
}

// 轮播
.banner {
  width: 100%;
  height: 900px;
  .swiper-slide {
    position: relative;
    width: 100%;
    height: 100%;
    .item{
      width: 100%;
      line-height: 900px;
      text-align: center;
      font-size: 100px;
    }
  }
}

// 主体区域
.content {
  background: #f1f2f4;
  height: 4071px;
  box-shadow: inset 3px 11px 5px -5px #c1c1c3;
  position: relative;
  .rope-top,.rope-bottom {
    background: url("http://pjm95ro2m.bkt.clouddn.com/rope.png") no-repeat center;
    width: 576px;
    height: 150px;
    // margin: 0 auto;
    position: absolute;
    left: 50%;
    transform: translate3d(-50%,0,0);
    z-index: 100;
  }
  .rope-bottom{
    // margin-top: 52px;
    bottom: 0;
    z-index: 8;
  }
  .main {
    width: 784px;
    height: 3719px;
    top: 139px;
    // margin: 0 auto;
    background: #fbe1e0;
    box-shadow: inset 0 2px 6px 0 #ced2d3;
    // position: relative;
    position: absolute;
    left: 50%;
    margin-left: -392px;
    z-index: 99;


    // 服务介绍
    .service-content {
      .milk-bottle{
        position: absolute;
        width: 320px;
        height: 402px;
        left: -165px;
        top: 192px;
        background: url('http://pjm95ro2m.bkt.clouddn.com/naiping.png') no-repeat center;
        background-size: 100%;
      }
      .service-left {
        position: absolute;
        left: 43px;
        top: 216px;
        width: 415px;
        height: 349px;
        background: #4b5964;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        color: #ffffff;
        padding-left: 27px;
        box-sizing: border-box;
        h3 {
          width: 216px;
          height: 97px;
          font-size: 24px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          line-height: 48px;
          margin-top: 41px;
          margin-bottom: 54px;
        }
        p {
          width: 382px;
          font-size: 18px;
          font-family: PingFangTC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 30px;
        }
      }
      .service-right {
        position: absolute;
        width: 502px;
        height: 477px;
        top: 159px;
        left: 458px;
        .service-banner{
          width: 100%;
          height: 100%;
          .swiper-slide{
            width: 100%;
            position: relative;
            height: 100%;
            img{
              display: block;
              width:100%;
              height:100%;
            }
          }
        }
      }
    }
    .service-list {
      position: absolute;
      left: -49px;
      top: 712px;
      width: 884px;
      height: 368px;
      background: rgba(233, 83, 106, 1);
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.18),
        0px 2px 6px 0px rgba(0, 0, 0, 0.16),
        0px 5px 10px 0px rgba(0, 0, 0, 0.14);
      border-radius: 10px;
      padding-top: 90px;
      text-align: center;
      box-sizing: border-box;
      .item {
        display: inline-block;
        width: 110px;
        margin-right: 30px;
        .image {
          height: 101px;
          background: url("http://pjm95ro2m.bkt.clouddn.com/service-icon.png") no-repeat
            center top;
          background-size: 67px 67px;
        }
        p {
          width: 110px;
          height: 30px;
          font-size: 18px;
          font-family: PingFangTC-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 30px;
        }
      }
      .item:last-child {
        margin-right: 0;
      }
      .more-btn {
        width: 213px;
        height: 50px;
        background: rgba(255, 255, 255, 1);
        border-radius: 100px;
        margin: 0 auto;
        font-size: 24px;
        font-family: STHeitiSC-Medium;
        font-weight: 500;
        color: rgba(45, 58, 75, 1);
        line-height: 50px;
        margin-top: 42px;
        cursor: pointer;
      }
    }

    // 空间
    .space {
      width: 989px;
      height: 513px;
      background: #66c3c3;
      border-radius: 10px 0px 10px 10px;
      position: absolute;
      top: 1245px;
      left: -67px;
      .space-left {
        width: 592px;
        height: 413px;
        background: #ffffff;
        border-radius: 10px 0px 0px 10px;
        text-align: center;
        box-sizing: border-box;
        padding-top: 56px;
        position: relative;
        left: -66px;
        .title {
          height: 39px;
          font-size: 23px;
          font-family: PingFangTC-Regular;
          font-weight: 400;
          color: rgba(200, 171, 135, 1);
          line-height: 38px;
        }
        .icon {
          width: 72px;
          height: 15px;
          background: url("http://pjm95ro2m.bkt.clouddn.com/text-icon.png") no-repeat center;
          background-size: 100%;
          margin: 0 auto;
          margin-top: 7px;
        }
        h3 {
          height: 48px;
          font-size: 24px;
          font-family: Helvetica;
          color: rgba(45, 58, 75, 1);
          line-height: 48px;
          margin-top: 9px;
          margin-bottom: 48px;
        }
        p {
          font-size: 18px;
          font-family: PingFangTC-Regular;
          font-weight: 400;
          color: rgba(45, 58, 75, 1);
          line-height: 30px;
        }
      }
      .space-right {
        width: 502px;
        height: 482px;
        // background: red;
        position: absolute;
        top: -35px;
        right: -39px;
        .space-banner{
          width: 100%;
          height: 100%;
          .swiper-slide{
            width: 100%;
            position: relative;
            height: 100%;
            img{
              display: block;
              width:100%;
              height:100%;
            }
          }
        }
        .swiper-button-next{
          width:48px;
          height:48px;
          background-image: url('http://pjm95ro2m.bkt.clouddn.com/arrow-right.png') !important;
          background-size: 100%;
          right:-25px;
          z-index: 9999 !important;
          outline: none;
        }
        .swiper-button-prev{
          width:48px;
          height:48px;
          background-image: url('http://pjm95ro2m.bkt.clouddn.com/arrow-left.png') !important;
          background-size: 100%;
          left:-25px;
          z-index: 9999 !important;
          outline: none;



        }
      }
    }

    // 料理
    .food {
      width: 989px;
      height: 510px;
      background: #d0d45c;
      opacity: 0.95;
      border-radius: 10px;
      position: absolute;
      top: 1952px;
      left: -132px;
      .food-left {
        position: absolute;
        z-index: 99;
        left: 64px;
        top: 165px;
        width: 467px;
        height: 413px;
        background: #ffffff;
        border-radius: 10px;
        box-sizing: border-box;
        padding-top: 46px;
        text-align: center;
        .title {
          height: 39px;
          font-size: 23px;
          font-family: PingFangTC-Regular;
          font-weight: 400;
          color: rgba(233, 83, 106, 1);
          line-height: 38px;
        }
        h3 {
          font-size: 24px;
          font-family: Helvetica;
          color: rgba(45, 58, 75, 1);
          line-height: 31px;
          margin-top: 27px;
        }
        .icon {
          width: 72px;
          height: 15px;
          background: url("http://pjm95ro2m.bkt.clouddn.com/text-icon.png") no-repeat center;
          background-size: 100%;
          margin: 0 auto;
          margin-top: 18px;
        }
        p {
          width: 236px;
          font-size: 13px;
          font-family: PingFangTC-Regular;
          font-weight: 400;
          color: rgba(45, 58, 75, 1);
          line-height: 30px;
          margin: 0 auto;
          margin-top: 18px;
        }
      }
      .food-right {
        background: url("http://pjm95ro2m.bkt.clouddn.com/food.png") no-repeat center;
        background-size: 100%;
        width: 815px;
        height: 445px;
        position: absolute;
        top: 66px;
        right: -65px;
        z-index: 98;
      }
      .food-fruit {
        background: url("http://pjm95ro2m.bkt.clouddn.com/fruit.png") no-repeat center;
        background-size: 100%;
        width: 352px;
        height: 302px;
        position: absolute;
        bottom: -165px;
        right: -65px;
        z-index: 97;
      }
    }

    // 宝妈见证
    .witness {
      position: absolute;
      top: 2812px;
      left: -37px;
      width: 989px;
      height: 553px;
      background: #cc4942;
      opacity: 0.95;
      border-radius: 10px;
      .witness-top{
        width:989px;
        height:413px;
        position: absolute;
        border-radius: 10px;
        background: #fff;
        left: -96px;
        top: -80px;
        text-align: center;
        box-sizing: border-box;
        padding-top: 41px;
        .title{
          font-size:23px;
          font-family:PingFangTC-Regular;
          font-weight:400;
          color:rgba(233,83,106,1);
          line-height:38px;
        }
        .icon{
          width: 72px;
          height: 15px;
          background: url("../assets/image/home/text-icon.png") no-repeat center;
          background-size: 100%;
          margin: 0 auto;
          margin-top: 7px;
        }
        p{
          width:322px;
          font-size:14px;
          font-family:PingFangTC-Regular;
          font-weight:400;
          color:rgba(45,58,75,1);
          line-height:30px;
          margin: 0 auto;
          margin-top: 13px;
        }

      }
      .witness-bottom{
        position: absolute;
        width:2212px;
        left: -43px;
        bottom: 74px;
        height: 323px;
        .item{
          border-radius: 10px;
          float: left;
          margin-right: 72px;
          cursor: pointer;
          .image{
            width: 320px;
            height: 217px;
            background-size: 100%; 
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            .tag{
              width:67px;
              height:34px;
              background:rgba(233,83,106,1);
              border-radius:10px;
              font-size:16px;
              font-family:PingFangTC-Semibold;
              font-weight:600;
              color:rgba(255,255,255,1);
              line-height:34px;
              border-radius: 10px;
              text-align: center;
            }
          }
          .image1{
            background: url('http://pjm95ro2m.bkt.clouddn.com/witness1.png') no-repeat center;
          }
          .image2{
            background: url('http://pjm95ro2m.bkt.clouddn.com/witness2.png') no-repeat center;
          }
          .image3{
            background: url('http://pjm95ro2m.bkt.clouddn.com/witness3.png') no-repeat center;
          }
          .text{
            width: 320px;
            background: #fff;
            border-radius: 10px;
            height: 107px;
            padding-left: 18px;
            box-sizing: border-box;
            padding-top: 15px;
            position: relative;
            top: -6px;
            h3{
              height:23px;
              font-size:16px;
              font-family:PingFangSC-Regular;
              font-weight:400;
              color:rgba(233,83,106,1);
              line-height:23px;
            }
            p{
              width:279px;
              font-size:14px;
              font-family:Helvetica;
              color:rgba(45,58,75,1);
              line-height:20px;
              margin-top: 7px;
            }
          }
        }
        .item:last-child{
          margin-right: 0;
        }
        .item:hover{
          .image{
            background-size:120%; 
          }
        }
      }
    }

    // 我们的数据、成长
    .our-data{
      position: absolute;
      top:3492px;
      left:-49px;
      width:884px;
      height:310px;
      background:rgba(233,83,106,0.95);
      box-shadow:0px 2px 8px 0px rgba(0,0,0,0.18),0px 2px 6px 0px rgba(0,0,0,0.16),0px 5px 10px 0px rgba(0,0,0,0.14);
      border-radius:10px;
      text-align: center;
      box-sizing: border-box;
      padding-top: 38px;
      .item{
        display: inline-block;
        margin-right: 130px;
        .image{
          width: 136px;
          height: 135px;
          background-size: 100%;

        }
        .image1{
          background: url('http://pjm95ro2m.bkt.clouddn.com/data1.png') no-repeat center;
        }
        .image2{
          background: url('http://pjm95ro2m.bkt.clouddn.com/data2.png') no-repeat center;
        }
        .image3{
          background: url('http://pjm95ro2m.bkt.clouddn.com/data3.png') no-repeat center;
        }
        .num{
          height:36px;
          font-size:36px;
          font-family:Helvetica;
          color:rgba(255,214,228,1);
          line-height:43px;
        }
        p{
          font-size:14px;
          font-family:Helvetica;
          color:rgba(255,214,228,1);
          line-height:17px;
          margin-top: 17px;
        }
      }
      .item:last-child{
        margin-right: 0;
      }
    }
  }
}


</style>