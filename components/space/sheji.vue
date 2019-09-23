<!--  -->
<template>
  <div class="sheji-container">
    <div class="session1 session">
      <div class="info outer">
        <h3>专业打造公共空间</h3>
        <div class="icon"></div>
        <p>专业，从空间打造开始，妈咪呗呗专为孕产家庭打造专属空间，让每一位妈妈与宝宝在踏入的那一刻起，便享受专业带来的健康与便利。休闲空间占整体面积的30%，超越行业标准，服务理念超前，让生活更舒适。</p>
      </div>
      <div class="image"></div>
    </div>
    <div class="session2">
      <!-- <banner3D :banner="banner1"></banner3D> -->
       <home-banner2 :banner="banner1"></home-banner2>

    </div>
    <div class="session3 session">
      <div class="info">
        <div class="title">安全门禁，有效隔离</div>
        <div class="icon"></div>
        <p>中心设置五道安全门禁，避免无关人员随意进出。馆内所有工作人员，均需测量体温，佩戴口罩。 护理作业的流程上，步步有记录、处处需消毒。接触新生儿各类用品做到一婴一用一消毒。</p>
      </div>
      <div class="list">
        <div class="item outer">
          <div class="image image1">
           
          </div>
          <div class="text">
            <h3>安全门禁</h3>
          </div>
        </div>
        <div class="item outer">
          <div class="image image2">
           
          </div>
          <div class="text">
            <h3>测量体温</h3>
          </div>
        </div>
        <div class="item outer">
          <div class="image image3">
            
          </div>
          <div class="text">
            <h3>全身消毒</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="session4 clearfix session">
      <div class="info fl outer">
        <h3>独立婴儿室</h3>
        <div class="icon"></div>
        <p>新生儿独立婴儿室，全玻璃设计，<br>方便妈妈随时看宝宝，独立新风过滤系统24h运作，<br>独有的负压隔离室和独立排风系统，有效防止病毒交叉感染<br>专业护理团队3班照护宝贝，为妈妈创造休息时间。</p>
      </div>
      <div class="image fr"></div>
    </div>
    <div class="session5 session">
      <div class="image"></div>
      <div class="info outer">
        <h3>妈咪教室</h3>
        <div class="icon"></div>
        <p>妈咪教室为精致有趣的宝宝护理指导、 定期母婴专家咨询课、瑜伽身材修复课、休闲烹饪课提供了宽阔的教学授课<br>以及活动场地。</p>
      </div>
    </div>
    <div class="session6">
      <!-- <banner3D :banner="banner2"></banner3D> -->
       <home-banner2 :banner="banner2"></home-banner2>

      <!-- <div v-swiper:mySwiper2="spaceOption" class="space-banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide">图片1</div>
          <div class="swiper-slide">图片2</div>
          <div class="swiper-slide">图片3</div>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
    </div>
    <div class="session7 session">
      <div class="info outer">
        <h3>洗手间的独特<br>“小心思”</h3>
        <div class="icon"></div>
        <p>洗手间是使用最频繁的地方之一，妈咪呗呗采用合理的设计， 关注产后妈妈站立困难，易滑易摔等问题，<br>让妈妈安心使用无负担。</p>
      </div>
      <div class="image"></div>
    </div>
    <div class="session8 session">
      <div class="title">贴心专业细节控</div>
      <div class="icon"></div>
      <div class="list clearfix">
        <div class="item outer">
          <div class="image-box image1"></div>
          <p>多功能智能马桶，细节处呵护产后妈妈清洁处理。</p>
        </div>
        <div class="item item-no-margin outer">
          <div class="image-box image2"></div>
          <p style="background:#66C3C3;color:#ffffff;">医疗级防摔扶手，帮助产后妈妈站立。</p>
        </div>
        <div class="item outer" style="margin-bottom:0;color:#fff;">
          <div class="image-box image3"></div>
          <p style="background:#66C3C3;color:#ffffff;">分离式洗漱盆，防止交叉感染。</p>
        </div>
        <div class="item item-no-margin outer" style="margin-bottom:0;">
          <div class="image-box image4"></div>
          <p>卫生间紧急呼叫设备，时刻关注产后妈妈的安全。</p>
        </div>
      </div>
    </div>
    <div class="session9 session">
      <div class="image"></div>
      <div class="info outer">
        <h3>套间私密呵护</h3>
        <div class="icon"></div>
        <p>妈咪呗呗休养房采用隔断式设计，<br>无论是套间还是单间房型，皆会在房间内设计<br>灵活挡板，可推开增大活动空间，<br>更方便妈妈随时哺乳，静享与宝宝亲密接触。</p>
      </div>
    </div>
    <div class="session10 session">
      <div class="info outer">
        <h3>安稳睡眠的秘密</h3>
        <div class="icon"></div>
        <p>每个房间都配置了舒适柔软有承托效果的高端床垫，减轻妈妈的身体负担，感受安稳舒适睡眠带来的幸福体验感</p>
      </div>
      <div class="image"></div>
    </div>
  </div>
</template>

<script>
  import Banner3D from '../../components/banner/banner-3d'
import HomeBanner2 from '../../components/banner/home-banner2'

  export default {
    data() {
      return {
        spaceOption: {
          pagination: {
            el: ".swiper-pagination",
            bulletClass: 'my-bullet',
            bulletActiveClass: 'my-bullet-active',
            clickable: true,
            clickableClass: 'my-pagination-clickable',
          },
          autoplay: true,
          loop: true,
          speed: 1000,
          lazy: {
            loadPrevNext: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        banner1: [
        {
          type: 0,
          productId: 150635087972564,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/17e7ca5d/355501b9.jpg',
        },
        {
          type: 0,
          productId: 150642571432835,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/e65f489c/1abf7669.jpg',
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/a894fca8/f8189d61.jpg',
        },
        {
          type: 0,
          productId: 150642571432848,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/60f3ed09/0d5a1649.jpg',
        },
        {
          type: 0,
          productId: 150642571432840,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/39369a18/5e0e9e0b.jpg',
        },
      ],
      banner2: [
        {
          type: 0,
          productId: 150635087972564,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/6e9ed9e8/3c2bdf5c.jpg',
        },
        {
          type: 0,
          productId: 150642571432835,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/06dcaae0/daaaa993.jpg',
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/97ec9890/41aaa6f8.jpg',
        },
        {
          type: 0,
          productId: 150642571432848,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/addf34cb/bd3b928a.jpg',
        },
        {
          type: 0,
          productId: 150642571432840,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/28a373bb/d97acb40.jpg',
        },
        {
          type: 0,
          productId: 150642571432840,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/51086600/00eb3689.jpg',
        },
      ],
      }
    },
    components: {
      Banner3D,
      HomeBanner2
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../assets/scss/page/sheji.scss";
</style>