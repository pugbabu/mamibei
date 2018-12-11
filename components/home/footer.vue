<!-- 页脚 -->
<template>
  <footer id="v-footer">
    <div class="footer-box">
      <div class="footer-info clearfix">
        <div class="logo-box fl">
          <div class="footer-logo">
            <nuxt-link to="/">
              <img src="~/assets/image/home/footer-logo.png" />
            </nuxt-link>
          </div>
          <div class="phone-wrapper">
            <div class="phone-box">
              <p class="title">杭州旗舰店预约热线</p>
              <p class="phone-number">400.900.6290</p>
            </div>
            <div class="phone-box">
              <p class="title">全国品牌连锁咨询</p>
              <p class="phone-number">400.900.6290</p>
            </div>
          </div>
          
        </div>
        <div class="nav-box fl clearfix">
          <ul class="nav-news fl">
            <h3>最新资讯</h3>
            <li class="news-item">
              <nuxt-link to="/">
                <!-- <i class="news-icon"></i> -->
                <span>新闻中心</span>
              </nuxt-link>
            </li>
            <li class="news-item">
              <nuxt-link to="/">
                <!-- <i class="news-icon"></i> -->
                <span>招贤纳士</span>
              </nuxt-link>
            </li>
            <li class="news-item">
              <nuxt-link to="/">
                <!-- <i class="news-icon"></i> -->
                <span>加盟方式</span>
              </nuxt-link>
            </li>
          </ul>
          <ul class="nav-links fl">
            <h3>快速导航</h3>
             <li class="link-item">
              <nuxt-link to="/">
                <!-- <i class="link-icon"></i> -->
                <span>关于我们</span>
              </nuxt-link>
            </li>
            <li class="link-item">
              <nuxt-link to="/">
                <!-- <i class="link-icon"></i> -->
                <span>专业照护</span>
              </nuxt-link>
            </li>
            <li class="link-item">
              <nuxt-link to="/">
                <!-- <i class="link-icon"></i> -->
                <span>创意空间</span>
              </nuxt-link>
            </li>
            <li class="link-item">
              <nuxt-link to="/">
                <!-- <i class="link-icon"></i> -->
                <span>月子膳食</span>
              </nuxt-link>
            </li>
            <li class="link-item">
              <nuxt-link to="/">
                <!-- <i class="link-icon"></i> -->
                <span>产后康复</span>
              </nuxt-link>
            </li>
            <li class="link-item">
              <nuxt-link to="/">
                <!-- <i class="link-icon"></i> -->
                <span>企业发展</span>
              </nuxt-link>
            </li>
           
          </ul>
        </div>
        <div class="code-box fr">
          <h3>扫一扫<br>了解更多</h3>
          <!-- <p>扫一扫</p>
          <p>了解更多</p> -->
          <div class="code-image clearfix">
            <div class="wechat fl"></div>
            <div class="wechat fl"></div>
          </div>

        </div>

      </div>
      <!-- <div class="footer-bottom clearfix">
        <div class="fl">
          <p>COPYRIGHT © 2017-2020 MAMMY BEST 版权所有</p>
          <p>浙ICP6790800号</p>
          <p>地址：杭州市钱江世纪城市天辰国际广场（市心北路与建设二路交叉口）</p>
        </div>
        <div class="footer-icon fr">
          <span>icon1</span>
          <span>icon2</span>
          <span>icon3</span>
          <span>icon4</span>

        </div>
      </div> -->
    </div>
  </footer>
</template>

<script>
export default {
 //  data () {
 //     return {
 //     }
 //  },
 }
</script>

<style lang='scss' scoped>
#v-footer{
  width: 100%;
  background:rgba(247,247,247,1);
  .footer-box{
    width: 1254px;
    margin: 0 auto;
    height: 520px;
    padding-top: 84px;
    box-sizing: border-box;
  }
}
.footer-info{
  // margin-bottom: 83px;
  .logo-box{
    .footer-logo{
      img{
        display: block;
        width: 236px;
        height: 64px;
      }
    }
    .phone-wrapper{
      margin-top: 60px;
      // padding-top: 32px;
    }
    .phone-box{
      // padding-left: 58px;
      // padding-right: 16px;
      margin-bottom: 32px;
      .title{
        font-size:22px;
        font-family:Helvetica;
        color:rgba(45,58,75,1);
        line-height:26px;
      }
      .phone-number{
        font-size:36px;
        font-family:Helvetica;
        color:rgba(233,83,106,1);
        line-height:43px;
        margin-top: 15px;
      }
    }
  }
  .nav-box{
    margin-left: 166px;
    h3{
      line-height: 64px;
      font-size:22px;
      font-family:Helvetica;
      color:rgba(233,83,106,1);
      font-weight: normal;
      margin-bottom: 60px;

    }
    .nav-news{
      .news-item{
        font-size:16px;
        font-family:Helvetica;
        color:rgba(45,58,75,1);
        line-height:19px;
        margin-bottom: 22px;
        // .news-icon{
        //   display: inline-block;
        //   width: 12px;
        //   height: 12px;
        //   background: url('../../assets/image/footer-arrow.png') no-repeat center;
        //   background-size: 100%;
        // }
      }
    }
    .nav-links{
      margin-left: 120px;
      .link-item{
       font-size:16px;
        font-family:Helvetica;
        color:rgba(45,58,75,1);
        line-height:19px;
        margin-bottom: 22px;
        // .link-icon{
        //   display: inline-block;
        //   width: 12px;
        //   height: 12px;
        //   background: url('../../assets/image/footer-arrow.png') no-repeat center;
        //   background-size: 100%;
        // }
        // span{
        //   font-size: 14px;
        //   color: #aaaaaa;
        //   margin-left: 14px;
        // }
      }
    }
  }
  .code-box{
    text-align: left;
    margin-left: 120px;
    h3{
      // font-size: 16px;
      // color: #393939;
      // line-height: 26px;
      font-size:22px;
      padding-top: 18px;
      font-family:Helvetica;
      color:rgba(233,83,106,1);
      line-height:30px;
      font-weight: normal;
    }
    .code-image{
      margin-top: 45px;
      padding-left: 11px;
      .wechat{
        width: 175px;
        height: 175px;
        background: #999999;
        border-radius: 5px;
        margin-right: 30px;
      }
      .wechat:last-child{
        margin-right: 0;
      }
    }

  }
}
.footer-bottom{
  overflow: hidden;
  font-size: 12px;
  width: 100%;
  height: 28px;
  line-height: 28px;
  text-align: left;
  color: #656565;
  p{
    display: inline-block;
  }
  p:nth-child(2) {
    margin: 0 18px 0 5px;
  }
  .footer-icon{
    span{
      margin-left: 14px;
    }
  }
}
</style>