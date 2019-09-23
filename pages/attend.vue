<!-- 专业照护 -->
<template>
  <div class="attend-page">
    <!-- 轮播图 -->
    <div class="banner-box">
      <nav-banner :banner="banner1"></nav-banner>
    </div>
    <!-- 主体 -->
    <div class="content" ref="content">
       <!-- 绳子 -->
      <div class="rope-top"></div>
      <div class="main" ref="main">
        <div class="session1 session">
          <div class="info outer">
            <h3>高等院校母婴专业护理团队<br>专业的力量</h3>
            <div class="icon"></div>
            <p>每位护理人员必备国家认证职业证书<br>接受3个月理论与实操统一培训<br>课程分为专业技能考核、理论知识考核、情景模拟演练等<br>实施台式全面、专业、科学、系统的护理标准</p>
          </div>
          <div class="image"></div>
        </div>

        <div class="session2 session">
          <div class="info outer">
            <h3>资深国际泌乳顾问担任护理指导<br>体验专家的力量</h3>
            <p>资深国际认证泌乳顾问IBCLC<br>华人泌乳顾问协会CLCA理事<br>台湾母乳哺育学会会员<br>国际婴儿按摩讲师</p>
            <div class="words">
              <span class="line"></span>
              <span>刘珮伶（台籍）——妈咪呗呗护理顾问</span>
            </div>
          </div>
        </div>

        <!-- 第三块 -->
        <div class="session3 session">
          <h3>几十项母婴护理服务<br>把享受变成习惯</h3>
          <div class="title">
            <span class="icon"></span>
            <span class="text">妈妈服务</span>
            <span class="icon"></span>
          </div>
          <div class="service-list">
              <div class="swiper-slide clearfix">
                <div class="item outer">
                  母婴专业护理24小时轮班照护
                </div>
                <div class="item outer">
                  母乳喂养指导
                </div>
                <div class="item item-no-margin outer">
                  哺乳期乳腺炎防治及指导
                </div>
                <div class="item outer">
                  产褥期妈妈健康动态信息观测与评估
                </div>
                <div class="item outer">
                  医院产儿科主任医生巡房
                </div>
                <div class="item item-no-margin outer">
                  产后及家庭关系心理咨询与辅导
                </div>
              </div>
            

          </div>

        </div>

        <!-- 第四块 -->
        <div class="session4">
          <div class="title">
            <span class="icon"></span>
            <span class="text">宝宝照护</span>
            <span class="icon"></span>
          </div>
          <div class="service-list">
            <!-- <div class="swiper-wrapper"> -->
              <div class="swiper-slide clearfix">
                <div class="item outer">
                  类医疗婴儿室24小时托婴服务
                </div>
                <div class="item outer">
                  新生儿动态健康评估
                </div>
                <div class="item item-no-margin outer">
                  新生儿日常健康生活护理
                </div>
                <div class="item outer">
                  新生儿喂养指导及护理
                </div>
                <div class="item outer">
                  新生儿沐浴与皮肤护理
                </div>
                <div class="item item-no-margin outer">
                  良好睡眠、饮食习惯养成基础护理与指导
                </div>
              </div>
          
            <!-- </div> -->
          </div>
        </div>

        <div class="session5 session">
          <div class="image"></div>
          <div class="info outer">
            <h3>专业藏在细节中</h3>
            <div class="title">28日呗家宝宝照护SOP<br>（标准化照护流程）</div>
            <div class="icon"></div>
            <p>从新生儿入住到满月的28天，<br>专业护理人员严格按照照护流程<br>全天陪同照护,出住后定期追<br>踪，保障宝宝稳定成长。</p>
          </div>
        </div>

        <div class="session6 session">
          <p class="outer">宝宝信息记录</p>
          <p class="outer">出住后护理部定期<br>追踪宝宝成长情况</p>
          <p class="outer">进入大婴儿室<br>护理团队28日精心照料</p>
          <p class="outer">初次入住<br>评估生命体征</p>
          <p class="outer">建立宝宝<br>专属证件</p>
          <p class="outer">隔离室观察<br>8小时</p>
          <div class="image"></div>

        </div>

        <div class="session7 session">
          <div class="image"></div>
          <div class="info outer">
            <h3>每天都是新的起点</h3>
            <div class="title">
              每日24小时宝宝照护SOP<br>（标准化照护流程）
            </div>
            <div class="icon"></div>
            <p>母婴专业护理团队24小时轮班照护，<br>时刻关注新生儿成长情况，<br>严格书写护理记录。</p>
          </div>
        </div>

         <div class="session8">
          <p>每2-3小时<br>翻身、查看排便情况、哺乳</p>
          <p>每班（三班轮）<br>量体温、测黄疸<br>关注宝宝异常情况</p>
          <p>护理团队24小时轮班护理，严格书写护理记录</p>
          <p>早晨<br>称体重、洗澡、肚脐消毒、<br>抚触</p>
          <div class="image"></div>

        </div>

        <div class="session9 clearfix session">
          <div class="info outer">
            <h3>国内首个全可视化操作的婴儿室<br>保护宝宝，从每一口空气开始</h3>
            <div class="icon"></div>
            <p>国际级设计师类医疗场所设计：<br>医疗级别新风过滤系统，每小时换气8次；<br>独有的负压隔离室和独立排风系统，防止交叉感染；<br>全区域无死角视频监控；<br>一对一24小时远程视讯系统，随时随地看到宝宝动态；<br>每晚20:00-21:00定时紫外线消毒；<br>360°全透明流线设计婴儿室（湘湖店）。</p>
          </div>
          <div class="image"></div>
        </div>

        <div class="session10 session">
          <div class="image outer"></div>
          <p>*360°全透明流线设计婴儿室（湘湖店）</p>
        </div>
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
      serviceOption: {
        pagination: {
          el: ".swiper-pagination",
          bulletClass : 'my-bullet',
          bulletActiveClass: 'my-bullet-active',
          clickable :true,
          clickableClass : 'my-pagination-clickable',
        },
        // autoplay: true,
        // loop : true,
        speed:1000,
      },
      serviceOption2: {
        pagination: {
          el: ".swiper-pagination1",
          bulletClass : 'my-bullet1',
          bulletActiveClass: 'my-bullet-active1',
          clickable :true,
          clickableClass : 'my-pagination-clickable1',
        },
        // autoplay: true,
        // loop : true,
        speed:1000,
      },
      serviceOption3: {
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
      },
      banner1: [
        {
          fullUrl: '',
          title: '高标准专业化妈宝护理',
          subTitle: '实施台式全面、专业、科学、系统的护理标准，<br>24小时贴心照护',
          picUrl: 'http://pic.yupoo.com/pugbabu/690b4fd2/f8a3d98d.jpg',
        },
        // {
        //   fullUrl: '',
        //    title: '高标准专业化妈宝护理',
        //   subTitle: '实施台式全面、专业、科学、系统的护理标准，<br>24小时贴心照护',
        //   picUrl: 'http://www.hzxiyuege.com/Myapp/Common/images/b3.jpg',
        // },
      ]
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
@import "../assets/scss/page/attend.scss";


</style>