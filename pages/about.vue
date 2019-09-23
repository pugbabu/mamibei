<!--  -->
<template>
  <div class="about-page">
    <!-- 轮播图 -->
    <div class="banner-box">
      <nav-banner v-if="tabInd == 0" :banner="banner1"></nav-banner>
      <nav-banner1 v-if="tabInd == 1" :banner="banner2"></nav-banner1>

    </div>

    <!-- 主体部分 -->
    <div class="content" ref="content">
      <div class="rope-top"></div>
      <div class="food" v-if="tabInd == 1"></div>
      <div class="main" ref="main">
        <div class="kids" v-if="tabInd == 0"></div>

        <div class="about-btn">
          <div class=" btn" :class="{'active-btn': tabInd == 0}" @click="changeContent(0)">品牌故事</div>
          <div class="btn" :class="{'active-btn': tabInd == 1}" @click="changeContent(1)">宝妈见证</div>
        </div>
        <div v-if="tabInd == 0">
          <story></story>
        </div>
        <div v-else>
          <witness></witness>
        </div>
      
      </div>
       <!-- 绳子 -->
      <div class="rope-bottom"></div>
    </div>


  </div>
</template>

<script>
import Story from '../components/about/story'
import Witness from '../components/about/witness'
import NavBanner from '../components/banner/navBanner'
import NavBanner1 from '../components/banner/navBanner1'


export default {
  data () {
     return {
       swiperOption: {
        speed: 1000,
        effect: "fade",
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
      isShowStory: true,
      tabInd: sessionStorage.getItem('tabInd') || 0,
      banner1: [
         {
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/5574e203/b247dadd.jpg',
          title: '书写独一无二的生命故事',
          subTitle: '妈咪呗呗不仅是月子休养空间，更是温馨甜蜜母婴生活的起点。我们怀揣“关爱、责任、喜<br>悦”之心，为诞育新生命的母亲创造有品质的产后新生活，也为新生命执笔，写下人生完美<br>起笔。',
        },
        // {
        //   fullUrl: '',
        //   picUrl: 'http://www.xymyysg.com/upload/201802/27/201802271051071936.jpg',
        // },
        // {
        //   fullUrl: '',
        //   picUrl: 'http://www.xymyysg.com/upload/201803/05/201803051146224501.jpg',
        // },
      ],
      banner2: [
        {
          fullUrl: '',
          title: '宝妈见证',
          subTitle: '呗家妈妈的精彩故事，经历了一个月的女王享受<br>让呗家妈妈为大家讲述她们所遇到的幸福故事',
          picUrl: 'http://pic.yupoo.com/pugbabu/3b37aded/5e256269.jpg',
        },
      ]
     }
  },
  components: {
    Story,
    Witness,
    NavBanner,
    NavBanner1
  },
  methods: {
    changeContent(n) {
      this.tabInd = n;
      sessionStorage.setItem('tabInd', n);
      // this.isShowStory = n == 0 ? true : false;
      this.$nextTick(() => {
         let contentWrapper = this.$refs['content'];
        let mainWrapper = this.$refs['main']
        contentWrapper.style.height = mainWrapper.offsetHeight + 300 + 'px';
      })
    }
  },
  mounted() {
    let contentWrapper = this.$refs['content'];
    let mainWrapper = this.$refs['main']
    console.log(contentWrapper, 'dsfdsf ')
    contentWrapper.style.height = mainWrapper.offsetHeight + 300 + 'px';
  },

 }
</script>

<style lang='scss' scoped>
@import "../assets/scss/page/about.scss";

</style>