<!-- 页脚 -->
<template>
  <footer id="vFooter">
    <div class="footer-box">
      <div class="logo-box">
         <nuxt-link to="/">
            <img src="http://pic.yupoo.com/pugbabu/f481195b/69490288.png"  />
          </nuxt-link>
      </div>
      <div class="info">
        <ul class="item item-left">
          <h3>快速导航</h3>
          <li>
            <nuxt-link to="/attend">
              <span>专业照护</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/space">
              <span>创意空间</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/food">
              <span>月子膳食</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/recovery">
              <span>产后康复</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">
              <span>关于我们</span>
            </nuxt-link>
          </li>
        </ul>
        <ul class="item item-middle">
          <h3>门店地址</h3>
          <div class="shop-list">
            <div class="shop-item shop-left">
              <p>天辰店：市心北路58号天辰国际2层<br>电话：0571-82666466</p>
              <p>湘湖店：湘湖路337号湘湖驿站二期<br>电话：0571-82338333</p>
              <p>新城店：钱江新城钱塘航空大厦3层<br>电话：0571-57573339</p>
            </div>
            <div class="shop-item shop-middle">
              <p>丽水店：丽水市莲都区白云花苑1幢三楼<br>电话：0578-2831913</p>
              <p>合肥店：政务区新地中心A座5楼<br>电话：0551-65520668</p>
              <p>合肥高新店：合肥市高新区创新<br>大道2809号创新中心群楼<br>电话：0551-65520668</p>
            </div>
            <div class="shop-item shop-right">
              <p>宁波店筹建中</p>
            </div>
          </div>
        </ul>
        <ul class="item item-right">
          <h3>全国洽谈合作</h3>
          <h2>158-6841-3555</h2>
          <div class="code-list">
            <div class="code code-left">
              <p>了解<br>呗家专业服务</p>
              <div class="code-image code-image1"></div>
            </div>
            <div class="code code-right">
              <p>更多<br>招商合作资讯</p>
              <div class="code-image code-image2"></div>
            </div>
          </div>
        </ul>
      </div>
  
    </div>
    <div class="copy-right">
      <p>COPYRIGHT&nbsp;©&nbsp;2017-2020 MAMMY BEST 版权所有 浙icp6790800号</p>
    </div>
      <!-- 回到顶部 -->
    <transition 
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
    >
      <a @click="toTop" class="cd-top" v-show="showTop"></a>
    </transition>
  </footer>
</template>

<script>
export default {
  data () {
     return {
       showTop: false
     }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.scroll, false)
    })
  },
  methods: {
    scroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      if (scrollTop > 600) {
        this.showTop = true
      } else {
        this.showTop = false
      }
  
    },
    toTop() {
      window.scrollTo(0,0)
    }
  }
 }
</script>

<style lang='scss' scoped>
#vFooter{
  width: 100%;
  background:rgba(247,247,247,1);
  position: relative;
  // top: -6px;
  // position: fixed;
  // bottom: 0;
  .copy-right{
    background: #E9536A;
    height: 52px;
    line-height: 52px;
    text-align: center;
    color:#fff;
    font-weight: 600;
  }
  .footer-box{
    width: 1438px;
    margin: 0 auto;
    // height: 605px;
    box-sizing: border-box;
    padding-left: 90px;
    padding-right: 105px;
    padding-bottom: 63px;
    .logo-box{
      height: 185px;
      line-height: 185px;
      img{
        display: inline-block;
        width: 220px;
        height: 64px;
        vertical-align: middle;
      }
    }
    .info{
      overflow: hidden;
      .item{
        float: left;
        h3{
          height:30px;
          font-size:22px;
          font-family:PingFangSC-Semibold;
          font-weight:600;
          color:rgba(233,83,106,1);
          line-height:30px;
          border-bottom: 1px solid #ddd;
          margin-bottom: 10px;
          padding-bottom: 15px;
        }
      }
      .item-left{
        li{
          font-size:16px;
          font-family:PingFangSC-Semibold;
          font-weight:600;
          color:rgba(45,58,75,1);
          line-height:27px;
          margin-bottom: 20px;
        }
        li:hover{
          color: rgba(233,83,106,1);
        }
      }
      .item-middle{
        margin-left: 50px;
        p{
          font-size:16px;
          font-family:PingFangSC-Semibold;
          font-weight:600;
          color:rgba(45,58,75,1);
          line-height:27px;
          margin-bottom: 20px;
        }
        .shop-list{
          overflow: hidden;
          .shop-item{
            float: left;
            margin-right: 46px;
          }
        }
        
      }
      .item-right{
        margin-left: 50px;
        h2{
          font-size:35px;
          font-family:PingFangSC-Semibold;
          font-weight:600;
          color:rgba(233,83,106,1);
          line-height:49px;
        }
        p{
          font-size:16px;
          font-family:PingFangSC-Semibold;
          font-weight:600;
          color:rgba(45,58,75,1);
          line-height:20px;
          padding-left: 5px;
          margin-bottom: 5px;
          margin-top: 23px;
        }
        .code-list{
          overflow: hidden;
        }
        .code{
          float: left;
        }
        .code-left{
          margin-right: 20px;
        }
        .code-image{
          width:121px;
          height:121px;
        }
        .code-image1{
          background: url("http://pic.yupoo.com/pugbabu/ce3e0116/6b954b64.jpg") no-repeat center;
          background-size: 100% 100%;
        }
        .code-image2{
          background: url("http://pic.yupoo.com/pugbabu/48e47aa1/09a81a3c.jpeg") no-repeat center;
          background-size: 100% 100%;
        }
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
a.cd-top{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    font-size: 14px;
    text-align: center;
    position: fixed;
    bottom: 65px;
    right: 50px;
    overflow: hidden;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    transition: all 1s;
    z-index: 99;
    cursor: pointer;
    background: #E9536A url("../../assets/image/top.png") no-repeat center;
    background-size: 20px 20px;
}
a.cd-is-visible{
    visibility: visible;
    opacity: 1;
}
.animated {
  -webkit-animation-duration: 0.8s;
  animation-duration: 0.8s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.bounceInUp {
  -webkit-animation-name: bounceInUp;
  animation-name: bounceInUp;
}
@keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

.bounceOutDown {
  -webkit-animation-name: bounceOutDown;
  animation-name: bounceOutDown;
}
@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}
@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}

.zoomOut {
  -webkit-animation-name: zoomOut;
  animation-name: zoomOut;
}
</style>