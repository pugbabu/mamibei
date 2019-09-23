<!-- 专业照护 -->
<template>
  <div class="recovery-page">
     <!-- 轮播图 -->
    <div class="banner-box">
      <nav-banner :banner="banner1"></nav-banner>
    </div>

    <div class="content" ref="content">
       <!-- 绳子 -->
       <div class="rope-top"></div>
       <div class="line"></div>
       <div class="main" ref="main">
         <div class="session1">
           <div class="info">
            <h3>产后康复科技引领<br>告别尴尬期</h3>
            <div class="icon"></div>
            <p class="first">聘请台湾、韩国和国内产后康复调理医师做技术指导</p>
            <p>引进荷兰、韩国、台湾、日本<br>产后康复设备和产品量身定制产后康复调理计划</p>
          </div>
          <div class="image"></div>
         </div>

         <div class="session2">
           <h3>五个检测维度<br>全面了解产后身体状态</h3>
           <ul class="list">
            <li class="item clearfix">
              <i class="circle fl"></i>
              <div class="words fl">
                <p>产后NBS人体全器官功能检测（源于国家宇航员健康诊断系统）</p>
              </div>
            </li>
            <li class="item clearfix">
              <i class="circle fl"></i>
              <div class="words fl">
                <p>产后人体经络科学脉诊检测（智能脉诊系统）</p>
              </div>
            </li>
            <li class="item clearfix">
              <i class="circle fl"></i>
              <div class="words fl">
                <p>产后骨盆及全身脊椎诊断（脊椎专家一对一检测）</p>
              </div>
            </li>
            <li class="item clearfix">
              <i class="circle fl"></i>
              <div class="words fl">
                <p>产后盆底肌功能评估</p>
              </div>
            </li>
            <li class="item clearfix">
              <i class="circle fl"></i>
              <div class="words fl">
                <p>产后身材数据与体脂检测</p>
              </div>
            </li>
          </ul>
         </div>

         <div class="session3">
           <div class="info">
            <div class="title">科技引领 八大时尚产康</div>
            <p>全球顶级产康设备与产品<br>台湾、韩国、国内20年以上产康专家技术指导</p>
            <div class="icon"></div>
          </div>
          <div class="red-bg red-bg1"></div>
          <div class="red-bg red-bg2"></div>

          <div class="list clearfix">
            
            <div class="item">
              <div class="image image1">
                
              </div>
              <div class="text">
                <h3>乳腺管理</h3>
                <p>
                  <i class="circle"></i>科学泌乳
                  <i class="circle"></i>乳腺疏通
                  <i class="circle"></i>防增生
                </p>
              </div>
            </div>
             <div class="item">
              <div class="image image2">
                
              </div>
              <div class="text">
                <h3>子宫修复</h3>
                <p>
                  <i class="circle"></i>子宫复位
                  <i class="circle"></i>排恶净霸
                  <i class="circle"></i>防肌瘤
                </p>
              </div>
            </div>
             <div class="item">
              <div class="image image3">
                
              </div>
              <div class="text">
                <h3>体制调理</h3>
                <p>
                  <i class="circle"></i>增气血
                  <i class="circle"></i>强筋骨
                </p>
              </div>
            </div>
             <div class="item" >
              <div class="image image4">
                
              </div>
              <div class="text">
                <h3>骨盆闭合</h3>
                <p>
                  <i class="circle"></i>科学矫正骨盆
                  <i class="circle"></i>防漏尿
                </p>
              </div>
            </div>
            <div class="item">
              <div class="image image5">
                
              </div>
              <div class="text">
                <h3>局部塑形</h3>
                <p>
                  <i class="circle"></i>全身疏通
                  <i class="circle"></i>淋巴代谢
                </p>
              </div>
            </div>
            <div class="item">
              <div class="image image6">
                
              </div>
              <div class="text">
                <h3>腹部年轻化</h3>
                <p>
                  <i class="circle"></i>腹直肌修复
                  <i class="circle"></i>妊娠纹祛除
                </p>
              </div>
            </div>
              <div class="item">
              <div class="image image7">
                
              </div>
              <div class="text">
                <h3>脊椎调衡</h3>
                <p>
                  <i class="circle"></i>修复受损脊椎
                  <i class="circle"></i>改善痛症
                </p>
              </div>
            </div>
              <div class="item">
              <div class="image image8">
                
              </div>
              <div class="text">
                <h3>私密养护</h3>
                <p>
                  <i class="circle"></i>修复炎症
                  <i class="circle"></i>恢复紧致与动力
                </p>
              </div>
            </div>
           
          </div>
         </div>

        <div class="session4">
           <div class="info clearfix">
              <div class="image fl"></div>
              <div class="detail fl">
                <h3>呗家辣妈<br>产后修复最美代言人</h3>
                <div class="icon"></div>
                <p>
                  产后修复团队致力于打造“呗家辣妈”，<br>数百位产后妈妈焕然新生，<br>每一位辣妈都代表着不同的产后经历，<br>用她们自己的故事和经验向更多新手妈妈传递力量。
                </p>
              </div>
          </div>
        </div>

        <div class="session5">
          <div class="item">
            <div class="image image1"></div>
          </div>
          <div class="item">
            <div class="image image2"></div>
          </div>
          <div class="item" style="margin-right:0;">
            <div class="image image3"></div>
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
          title: '科技引领打造健康辣妈',
          subTitle: '妈咪呗呗专业配备独立的产后康复中心，聘请国内外专业调理医师，<br>引进高科技设备，及时细致地服务所有在住妈妈，三年的陪伴与见证，<br>打造数百位产后辣妈。',
          picUrl: 'http://pic.yupoo.com/pugbabu/9e38b447/2f873ea0.jpg',
        },
        //  {
        //   fullUrl: '',
        //   picUrl: 'http://www.megastarcare.com/images/config-munspa/banner-pc.jpg',
        // },
        
      ],
     }
  },
  components: {
    NavBanner
  },
  mounted() {
    let contentWrapper = this.$refs['content'];
    let mainWrapper = this.$refs['main']
    contentWrapper.style.height = mainWrapper.offsetHeight + 300 + 'px';
  }
 }
</script>

<style lang='scss' scoped>
@import "../assets/scss/page/recovery.scss";

</style>