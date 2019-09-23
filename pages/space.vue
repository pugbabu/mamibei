<!-- 专业照护 -->
<template>
  <div class="space-page">
     <!-- 轮播图 -->
    <div class="banner-box">
      <!-- <nav-banner :banner="tabInd == 0 ? banner1 : banner2"></nav-banner> -->
      <nav-banner v-if="tabInd == 0" :banner="banner1"></nav-banner>
      <nav-banner1 v-if="tabInd == 1" :banner="banner2"></nav-banner1>

    </div>

    <div class="content" ref="content">
      <!-- 绳子 -->
      <div class="rope-top"></div>

      <div class="main" ref="main">
        <div class="about-btn">
          <div class=" btn" :class="{'active-btn': tabInd == 0}" @click="changeContent(0)">空间设计</div>
          <div class="btn" :class="{'active-btn': tabInd == 1}" @click="changeContent(1)">门店信息</div>
        </div>
        <div v-if="isShowSheji">
          <sheji></sheji>
        </div>
        <div v-else>
          <men-dian></men-dian>
        </div>
      </div>

       <!-- 绳子 -->
      <div class="rope-bottom"></div>
    </div>

  </div>
</template>

<script>
import MenDian from '../components/space/mendian'
import Sheji from '../components/space/sheji'
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
       banner1: [
         {
          fullUrl: '',
          title: '打造专业产后空间',
          subTitle: '专业休养环境从设计开始，搭建独属妈妈与宝宝的专属生活空间<br>每家门店都有独特的风格，享受游走艺术空间的美 <br>滋养身心，解放心灵',
          picUrl: 'http://pic.yupoo.com/pugbabu/6ea2ac15/29d05f42.jpg',
        },
        //  {
        //   fullUrl: '',
        //   picUrl: 'http://www.xymyysg.com/upload/201802/27/201802271314249571.jpg',
        // },
      ],
      banner2: [
        {
          fullUrl: '',
          title: '温馨艺术房型展示',
          subTitle: '妈咪呗呗不同门店的房间设计各不相同，风格从温馨典雅到时尚现代，<br>精致单间到豪华复式，满足不同家庭对房型的需求',
          picUrl: 'http://pic.yupoo.com/pugbabu/37b80242/e218ae50.jpg',
        },
      ],
      tabInd: 0,
      isShowSheji: true,
     }
  },
  components: {
    MenDian,
    Sheji,
    NavBanner,
    NavBanner1
  },
  methods: {
    changeContent(n) {
      this.tabInd = n;
      this.isShowSheji = n == 0 ? true : false;
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
    contentWrapper.style.height = mainWrapper.offsetHeight + 300 + 'px';
  }
 }
</script>

<style lang='scss' scoped>
@import "../assets/scss/page/space.scss";

</style>