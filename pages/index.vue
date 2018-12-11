<!-- 首页 -->
<template>
  <div class="home-page">
  
    <!-- 服务介绍 -->
    <div class="part-one">
      <team v-if="num === 0"></team>
      <baby-attend v-if="num === 1"></baby-attend>
      <mother-attend v-if="num === 2"></mother-attend>
      <birth-care v-if="num === 3"></birth-care>
      <funny-course v-if="num === 4"></funny-course>
      <section class="service">
        <ul class="container service-list clearfix">
          <li class="service-item fl" v-for="(item, index) in serviceList" :key="index" :class="{'service-active':index == num}" @click="tab(index)">
            <img v-lazy="item.src"/>
            <div class="title">{{item.title}}</div>
          </li>
        </ul>
        <div class="more-btn">了解更多</div>
      </section>
    </div>
    
    <!-- 空间介绍 -->
    <section class="space">
      <section class="space-bg"></section>
      <section class="space-box">
        <div class="container space-info">
          <h3>台湾ISD创意空间设计，专注产后休养的艺术大厅</h3>
          <p>呼吸每一口清新空气，触碰每一寸典雅艺术</p>
          <p>专业休养环境从设计开始，搭建独属妈妈与宝宝的专属生活空间</p>
          <p>每家门店都有独特的风格，享受游走艺术空间的美，滋养身心，解放心灵</p>
          <div class="space-container">
            <transition-group tag="div" name="listNext" v-show="isLeft">
              <div class="space-slide" v-for="(item, index) in spaceList"
                v-show="index === spaceIndex"
              :key="index">
                <img :src="item.src" />
              </div>
            </transition-group>
            <transition-group tag="div" name="listPrev" v-show="!isLeft">
              <div class="space-slide" v-for="(item, index) in spaceList"
                v-show="index === spaceIndex"
              :key="index">
                <img :src="item.src" />
              </div>
            </transition-group>
            
          </div>
          <div class="btn-pre" @click="handlePrev"><</div>
          <div class="btn-next" @click="handleNext">></div>
          <div class="more-btn">了解更多 ></div>
        </div>
      </section>
    </section>

    <!-- 月子料理 -->
    <section class="birth-food">
      <div class="container food-wrapper">
        <div class="food-info">
          <h3>创意月子料理<br>台湾大厨定制舌尖上的美味</h3>
          <p class="foot-tip">私人定制</p>
          <p>台湾主厨每周沟通，仔细询问产妇身体状态、口味、乳汁分泌量等定制膳食，<br>做到发奶不发福。</p>
          <div class="more-btn">了解更多 ></div>
        </div>
        <div class="food-images">
          <transition-group tag="div" name="listNext">
            <div class="food-slide" v-for="(item, index) in foodList" :key="index" v-show="index === foodIndex" @mouseenter="stop" @mouseleave="go">
              <img :src="item.src" />
            </div>
          </transition-group>
        </div>
        <ul class="food-dot">
          <li class="food-dot-item"  v-for="(item, index) in foodList" :key="index" :class="{'food-dot-item-active': index === foodIndex}" @click="change(index)"></li>
        </ul>
      </div>
    </section>

    <!-- 宝妈见证 -->
    <section class="mother-witness">
      <div class="container witness-container">
        <h3>宝妈见证</h3>
        <p>呗家妈妈的精彩故事，经历了一个月的女王享受，让呗家妈妈为大家讲述她们所遇到的幸福故事</p>
        <ul class="witness-story"></ul>
        <div class="more-btn">阅读更多 ></div>
      </div>
    </section>

    <!-- 我们的数据 -->
    <section class="us-data">
      <div class="container data-container"></div>
    </section>
  </div>
</template>

<script>
import Team from '../components/home/team';
import BabyAttend from '../components/home/babyAttend';
import MotherAttend from '../components/home/motherAttend';
import BirthCare from '../components/home/birthCare';
import FunnyCourse from '../components/home/funnyCourse';

export default {
  data() {
    return {
      serviceList: [
        {
          src: require('~/assets/image/service1.png'),
          title: '专家团队'
        },
        {
          src: require('~/assets/image/service2.png'),
          title: '宝宝照护'
        },
        {
          src: require('~/assets/image/service3.png'),
          title: '妈妈照护'
        },
        {
          src: require('~/assets/image/service4.png'),
          title: '产后护理'
        },
        {
          src: require('~/assets/image/service5.png'),
          title: '趣味课程'
        },

      ],
      num: 0,
      spaceList: [
         {
          src: require('~/assets/image/index-space1.jpeg'),
         },
         {
          src: require('~/assets/image/index-space2.jpeg'),
         },
         {
          src: require('~/assets/image/index-space3.jpeg'),
         },
      ],
      foodList: [
         {
          src: require('~/assets/image/index-food1.jpeg'),
         },
         {
          src: require('~/assets/image/index-food2.jpeg'),
         },
         {
          src: require('~/assets/image/index-food3.jpeg'),
         },
      ],
      spaceIndex: 0,
      clickTime: '',
      isLeft: true,
      foodIndex: 0,
      timer: ''
    };
  },
  components: {
    Team,BabyAttend,MotherAttend,BirthCare,FunnyCourse
  },
  created () {
     //在DOM加载完成后，下个tick中开始轮播
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 4000);
    });
  },
  methods: {
    tab(index) {
      this.num = index
      window.scrollTo(0, 0)
    },
    handlePrev() {
      if (new Date() - this.clickTime > 850) {
        this.isLeft = false;
        this.spaceIndex --;
        if (this.spaceIndex < 0) {
          this.spaceIndex = this.spaceList.length - 1;
        }

        this.clickTime = new Date();
      }
    },
    handleNext() {
      if (new Date() - this.clickTime > 850) {
        this.isLeft = true;
        this.spaceIndex ++;
        if (this.spaceIndex > this.spaceList.length - 1) {
          this.spaceIndex = 0;
        }

        this.clickTime = new Date();
      }
    },
    change(index) {
      this.foodIndex = index
    },
    go (){
      this.timer = setInterval(()=>{
        this.autoPlay()
      },4000)
    },
    stop (){
      clearInterval(this.timer);
      this.timer = null;
    },
    autoPlay() {
      this.foodIndex++;
      if (this.foodIndex > this.foodList.length - 1) {
        this.foodIndex = 0;
      }
    },
  }
};
</script>

<style lang='scss' scoped>
// 服务
.service{
  background: #ffffff;
  width: 100%;
  height: 497px;
  .service-list{
    padding: 0 30px;
    padding-top: 125px;
    .service-item{
      width: 20%;
      text-align: center;
      cursor: pointer;
      img{
        display: inline-block;
        width: 146px;
        height: 124px;
      }
      .title{
        font-size: 16px;
        color: #444a53;
        line-height: 28px;
        margin-top: 35px;
      }
    }
    .service-item:hover{
      .title{
        color: #ea546b;
      }
    }
    .service-active{
      .title{
        color: #ea546b;
      }
    }
  }
  .more-btn{
    width: 140px;
    height: 40px;
    text-align: center;
    margin: 0 auto;
    line-height: 40px;
    font-size: 12px;
    color: #fff;
    background: #ea546b;
    border-radius: 20px;
    margin-top: 75px;
    cursor: pointer;
  }
}

// 空间
.space{
  .space-bg{
    width: 100%;
    height: 680px;
    background: url('../assets/image/index-space.png') no-repeat center;
    background-size: 100%;
  }
  .space-box{
    background: #ffffff;

  }
  .space-info{
    text-align: center;
    padding-top: 60px;
    position: relative;
    padding-bottom: 68px;

    h3{
      font-size: 36px;
      line-height: 46px;
      color: #252525;
      margin-bottom: 95px;
    }
    p{
      font-size: 14px;
      line-height: 26px;
      color:#717171 ;
    }
    .space-container{
        margin-top: 62px;
        margin-bottom: 65px;
        position: relative;
        display: inline-block;
        width: 700px;
        height: 408px;
        border-radius: 20px;
        overflow: hidden;
        box-shadow:6px 9px 13px 8px #d7d7d7;
      .space-slide{
        position: absolute;
        height: 100%;
        width: 100%;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
      }

    }
    .btn-pre,.btn-next{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #ea546b;
      position: absolute;
      top: 527px;
      line-height: 50px;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
    }
    .btn-pre{
      left: 110px;
    }
    .btn-next{
      right: 110px;
    }
    .more-btn{
      width: 200px;
      cursor: pointer;
      font-size: 14px;
      color: #ea546b;
      line-height: 24px;
      margin: 0 auto;
      
    }
  }
}

// 月子料理
.birth-food{
  height: 680px;
  background: url('../assets/image/index-food.jpeg') no-repeat center;
  width: 100%;
  background-size: 100% 100%;
  .food-wrapper{
    position: relative;
    height: 100%;
    .food-info{
      padding-left: 40px;
      padding-top: 80px;
      position: absolute;
      left: 0;
      top: 96px;
      z-index: 99;
      width: 675px;
      height: 484px;
      background: #fff;
      border-radius: 20px;
      box-sizing: border-box;
      h3{
        font-size: 36px;
        line-height: 46px;
        color: #2e2e2e;
      }
      .foot-tip{
        font-size: 18px;
        color: #ea546b;
        line-height: 28px;
        margin-top: 85px;
        font-weight: 500;
      }
      p{
        margin-top: 8px;
        font-size: 14px;
        color: #9c9c9c;
        line-height: 28px;
      }
      .more-btn{
        width: 160px;
        height: 40px;
        background: #ea546b;
        font-size: 14px;
        color:#fff;
        line-height: 40px;
        text-align: center;
        border-radius: 120px;
        margin-top: 60px;
        font-weight: 500;
      }
    }
    .food-images{
      position: absolute;
      z-index: 100;
      width: 606px;
      height: 400px;
      right: 0;
      top:138px;
      overflow: hidden;
      border-radius: 5px;
      .food-slide{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      
    }
    .food-dot{
      position: absolute;
      z-index: 101;
      bottom: 102px;
      right: 232px;
      text-align: center;
      .food-dot-item{
        display:  inline-block;
        width:  10px;
        height:  10px;
        margin-right: 19px;
        background:  #fff;
        border-radius:  50%;
        cursor:  pointer;
      }
      .food-dot-item-active{
        background: #ea546b;
      }
    }
  }
}

// 宝妈见证
.mother-witness{
  width: 100%;
  height: 734px;
  background: #fff;
  .witness-container{
    text-align: center;
    padding-top: 60px;
    h3{
      font-size: 32px;
      color: #2e2e2e;
      font-weight: bold;
      line-height: 42px;
    }
    p{
      font-size: 16px;
      color: #919191;
      font-weight: 500;
      line-height: 26px;
      margin-top: 60px;
    }
    .witness-story{
      margin-top: 80px;
      height: 350px;
      width: 100%;
    }
    .more-btn{
      width: 200px;
      cursor: pointer;
      font-size: 14px;
      color: #ea546b;
      line-height: 24px;
      margin: 0 auto;
      margin-top: 35px;
      
    }
  }

}

// 数据
.us-data{
  height: 334px;
  background: #fbe1e0;
}
</style>