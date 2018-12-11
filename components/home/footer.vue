<!-- 页脚 -->
<template>
  <footer id="v-footer">
    <div class="footer-box container">
      <div class="footer-info clearfix">
        <div class="logo-box fl">
          <div class="footer-logo">
            <nuxt-link to="/">
              <img src="~/assets/image/footer-logo.png" />
            </nuxt-link>
          </div>
          <div class="phone-wrapper">
            <div class="phone-box">
              <p class="title">杭州旗舰店预约热线</p>
              <p class="phone-number">4009006290</p>
            </div>
            <div class="phone-box">
              <p class="title">全国品牌连锁咨询</p>
              <p class="phone-number">4009005922</p>
            </div>
          </div>
          
        </div>
        <div class="nav-box fl clearfix">
          <ul class="nav-news fl">
            <h3>最新资讯</h3>
            <li class="news-item">
              <nuxt-link to="/">
                <i class="news-icon"></i>
                <span>新闻中心</span>
              </nuxt-link>
            </li>
            <li class="news-item">
              <nuxt-link to="/">
                <i class="news-icon"></i>
                <span>招贤纳士</span>
              </nuxt-link>
            </li>
            <li class="news-item">
              <nuxt-link to="/">
                <i class="news-icon"></i>
                <span>加盟方式</span>
              </nuxt-link>
            </li>
          </ul>
          <ul class="nav-links fl">
            <h3>快速导航</h3>
             <li class="link-item">
              <nuxt-link to="/">
                <i class="link-icon"></i>
                <span>关于我们</span>
              </nuxt-link>
            </li>
            <li class="link-item">
              <nuxt-link to="/">
                <i class="link-icon"></i>
                <span>专业照护</span>
              </nuxt-link>
            </li>
            <li class="link-item">
              <nuxt-link to="/">
                <i class="link-icon"></i>
                <span>创意空间</span>
              </nuxt-link>
            </li>
            <li class="link-item">
              <nuxt-link to="/">
                <i class="link-icon"></i>
                <span>月子膳食</span>
              </nuxt-link>
            </li>
            <li class="link-item">
              <nuxt-link to="/">
                <i class="link-icon"></i>
                <span>产后康复</span>
              </nuxt-link>
            </li>
            <li class="link-item">
              <nuxt-link to="/">
                <i class="link-icon"></i>
                <span>企业发展</span>
              </nuxt-link>
            </li>
           
          </ul>
        </div>
        <div class="code-box fr">
          <p>扫一扫</p>
          <p>了解更多</p>
          <div class="code-image clearfix">
            <div class="wechat fl"></div>
            <div class="wechat fl"></div>
          </div>

        </div>

      </div>
      <div class="footer-bottom clearfix">
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
      </div>
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
  height: auto;
  background: #eaeaeb;
  padding-bottom: 25px;
  padding-top: 50px;
}
.footer-info{
  margin-bottom: 83px;
  .logo-box{
    .footer-logo{
      img{
        display: block;
        width: 220px;
        height: 60px;
      }
    }
    .phone-wrapper{
      padding-top: 32px;
    }
    .phone-box{
      padding-left: 58px;
      padding-right: 16px;
      .title{
        font-size: 14px;
        color: #999999;
        line-height: 28px;
      }
      .phone-number{
        font-size: 20px;
        color: #000000;
        font-weight: 500;
        line-height: 34px;
      }
    }
  }
  .nav-box{
    margin-left: 80px;
    h3{
      font-size: 16px;
      line-height: 36px;
      padding-left: 17px;
      margin-bottom: 24px;
    }
    .nav-news{
      
      .news-item{
        line-height: 28px;
        height: 28px;
        margin-bottom: 40px;
        .news-icon{
          display: inline-block;
          width: 12px;
          height: 12px;
          background: url('../../assets/image/footer-arrow.png') no-repeat center;
          background-size: 100%;
        }
        span{
          font-size: 14px;
          color: #aaaaaa;
          margin-left: 14px;
        }
      }
    }
    .nav-links{
      margin-left: 80px;
      .link-item{
        line-height: 28px;
        height: 28px;
        margin-bottom: 5px;
        .link-icon{
          display: inline-block;
          width: 12px;
          height: 12px;
          background: url('../../assets/image/footer-arrow.png') no-repeat center;
          background-size: 100%;
        }
        span{
          font-size: 14px;
          color: #aaaaaa;
          margin-left: 14px;
        }
      }
    }
  }
  .code-box{
    text-align: left;
    padding-top: 5px;
    p{
      font-size: 16px;
      color: #393939;
      line-height: 26px;
    }
    .code-image{
      margin-top: 15px;
      .wechat{
        width: 175px;
        height: 175px;
        background: #999999;
        border-radius: 5px;
        margin-right: 20px;
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