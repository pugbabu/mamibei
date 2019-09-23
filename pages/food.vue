<!-- 月子膳食 -->
<template>
  <div class="food-page">
    <!-- 轮播图 -->
    <div class="banner-box">
      <nav-banner :banner="banner1"></nav-banner>
    </div>

    <!-- 主体 -->
    <div class="content" ref="content">
       <!-- 绳子 -->
      <div class="rope-top"></div>
      <div class="panzi"></div>
      <div class="taozi"></div>

      <div class="main" ref="main">

        <div class="session1 session">
          <div class="info clearfix outer">
            <div class="image fl"></div>
            <div class="detail fl ">
               <h3>资深台湾月子餐大厨<br>匠心独运的烹饪达人</h3>
               <p>台湾厨艺总监<br>获美国认证协会（ACI）注册国际营养师执照<br>曾任台湾创意餐厅“番茄主义主厨”<br>十五年餐饮工作经历<br>多家高端私人会所 主厨</p>
                <div class="words">
                  <span class="line"></span>
                  <span>林政佑（台籍）</span>
                </div>
            </div>
          </div>
        </div>

        <div class="session2 session">
          <div class="info outer">
            <h3>创意月子料理<br>美味宗旨：发奶不发福</h3>
            <div class="icon"></div>
            <p>呗家营养部研制出丰富多样的月子菜品<br>32种米饭，84种主菜，138种副菜，119种汤品，41种蔬菜，<br>每天不重样，色香味俱全，鲜美不寡淡，<br>用饮食调味月子生活，吃出满足感和幸福感。</p>
          </div>
          <div class="image"></div>
        </div>

        <div class="session3 session">
          <div class="title">营养调理四部曲<br>每周沟通，按需定制</div>
          <div class="icon"></div>
          <div class="list clearfix">
            <div class="item outer">
              <div class="image image1"></div>
              <div class="text">
                <h3>第一周：排恶露</h3>
                <p>促进子宫收缩，排出体内恶露加强伤口愈合；</p>
              </div>
            </div>
            <div class="item item-no-margin outer">
              <div class="image image2"></div>
              <div class="text">
                <h3>第二周：促发奶</h3>
                <p>强腰健骨，促进代谢、补血生血，促进乳汁分泌，恢复生理机能；</p>
              </div>
            </div>
            <div class="item outer" style="margin-bottom:0;">
              <div class="image image3"></div>
              <div class="text">
                 <h3>第三周：调气血</h3>
                  <p>气血双补，增强体力，促进腑脏复位；</p>
              </div>
            </div>
            <div class="item item-no-margin outer" style="margin-bottom:0;">
              <div class="image image4"></div>
              <div class="text">
                 <h3>第四周：滋养颜</h3>
                <p>滋阴助阳，通脉理气，预防产后忧郁，活血养颜。</p>
              </div>
             
            </div>
          </div>
        </div>

        <div class="session4 session">
          <div class="info outer">
            <h3>月子餐四原则<br>有品味的舌尖美味</h3>
            <div class="icon"></div>
          </div>
          <div class="image"></div>
        </div>

        <div class="session5 session">
          <ul class="list">
            <li class="item clearfix outer">
              <i class="circle fl"></i>
              <div class="words fl">
                <p>评估</p>
                <p>由营养部根据产后妈妈忌口、饮食习惯等，定制月子期间饮食方案。</p>
              </div>
            </li>
            <li class="item clearfix outer">
              <i class="circle fl"></i>
              <div class="words fl">
                <p>原则</p>
                <p>以产后温补为原则，恢复妈妈体力、回复血气和催乳，做到发奶不发福。</p>
              </div>
            </li>
            <li class="item clearfix outer">
              <i class="circle fl"></i>
              <div class="words fl">
                <p>味道</p>
                <p>少油少盐，原滋原味，荤素搭配，药食同源。</p>
              </div>
            </li>
            <li class="item clearfix outer">
              <i class="circle fl"></i>
              <div class="words fl">
                <p>品味</p>
                <p>厨房引进台湾诚品厨具规划建造，可视化五星级设备，让月子餐充满惊喜。</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="session6 session">
           <div class="info">
            <div class="title">特色营养月子火锅<br>月子尾声的趣味狂欢</div>
            <div class="icon"></div>
            <p>呗家产妈火锅宴 一口热汤 一桌盛宴，美味势不可挡</p>
          </div>
          <div class="list">
            <div class="item outer">
              <div class="image image1">
                
              </div>
              <div class="text">
                <h3>配菜食材</h3>
                <p>根据妈妈情况精选月子期间可用食材</p>
              </div>
            </div>
            <div class="item outer">
              <div class="image image2">
                
              </div>
              <div class="text">
                <h3>营养锅底</h3>
                <p>现熬大骨+乌鸡锅底，配以药膳，兼顾食物的营养与鲜美</p>
              </div>
            </div>
            <div class="item outer">
              <div class="image image3">
                
              </div>
              <div class="text">
                <h3>定量原则</h3>
                <p>产后妈妈肠胃脆弱，不可贪食哦</p>
              </div>
            </div>
          </div>
        </div>

        <div class="session7"></div>
      </div>
       <!-- 绳子 -->
      <div class="rope-bottom"></div>
    </div>

    
  </div>
</template>

<script>
import NavBanner from '../components/banner/navBanner'

export default {
  data() {
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
          title: '国际营养师定制月子餐',
          subTitle: '美国ACI认证营养师，打造呗家特色月子餐，鲜美不寡淡的<br>舌尖食物，开启月子期间专属美食体验，每周一次营养沟通<br>定制，科学调配发奶不发福。',
          picUrl: 'http://pic.yupoo.com/pugbabu/f7b52657/95b41a13.jpg',
        },
        // {
        //   fullUrl: '',
        //   picUrl: 'http://www.xymyysg.com/upload/201801/04/201801041850099301.jpg',
        // },
      ],
    };
  },
  components: {
    NavBanner
  },
  mounted() {
    let contentWrapper = this.$refs['content'];
    let mainWrapper = this.$refs['main']
    contentWrapper.style.height = mainWrapper.offsetHeight + 300 + 'px';
  }
};
</script>

<style lang='scss' scoped>
@import "../assets/scss/page/food.scss";


</style>