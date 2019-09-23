<!-- 头部组件 -->
<template>
  <header class="v-header" :class="whiteBg ? 'header-bg' : ''" ref="header">
    <div class="header-container clearfix">
      <!-- <div class="fl clearfix"> -->
        <nuxt-link to="/" class="logo fl">
          <img src="~/assets/image/home/logo.png" alt="妈咪呗" class="logo-img">
        </nuxt-link>
        <ul class="nav-list fl">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="nav-item link-item fl"
            :class="{'nav-item-active': item.route == $route.path}"
          >
            <a  @click="toUrl(item)">{{ item.title }}</a>
          </li>
        </ul>
      <!-- </div> -->
       <a href="#vFooter" class="contact-btn text-center fr">联系我们</a>
     
    </div>
    
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeInd: 0,
      initRatio: 0,
      maskFlag: false,
      whiteBg: false,
       items: [
        { route: '/', title: '首页' },
        { route: '/about', title: '我们的故事' },
        { route: '/attend', title: '专业照护' },
        { route: '/space', title: '创意空间' },
        { route: '/food', title: '月子膳食' },
        { route: '/recovery', title: '产后康复' },
        { route: '/news', title: '行业资讯' },


        // { route: '/expand', title: '企业发展' },
      ]
    };
  },
  mounted () {
    window.addEventListener('scroll', this.headAnima, false);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.headAnima, false);
  },
  methods: {
    goTo(item, index) {
      this.activeInd = index;
      this.$router.push({
        path: item.route
      })
    },
    headAnima() {
      var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      if (scrollTop > 10) {
        this.whiteBg = true;
      } else {
        this.whiteBg = false;
      }

    },
    barClick() {
      console.log(this.$refs.sidebar)
      let bar = this.$refs.sidebar;
      console.log(this.maskFlag)
      this.maskFlag = true;
      console.log(this.maskFlag)
      bar.style.right = 0;

    },
    maskClick() {
      let bar = this.$refs.sidebar;
      this.maskFlag = false;
      bar.style.right = '-200px';
    },
    toUrl(item) {
      if (item.route.indexOf('about') > -1) {
        sessionStorage.setItem('tabInd', 0)
      }
      this.$router.push({
        path: item.route
      })
    },

  }
};
</script>

<style lang='scss' scoped>
.v-header {
  height: 80px;
  position: fixed;
  z-index: 9999999;
  top: 0px;
  left: 0;
  right: 0;
  background: transparent;
  // background: #fff;
  -webkit-transform: translateZ(0);
  text-align: center;
  transition: opacity .6s ease, background .6s ease, box-shadow .6s ease;
  transition-property: opacity, background, box-shadow;
  transition-duration: 0.6s, 0.6s, 0.6s;
  transition-timing-function: ease, ease, ease;
  transition-delay: 0s, 0s, 0s;
  // line-height: 95px;
  .header-container {
    width:1260px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    text-align: center;
    box-sizing: border-box;
  }
  .logo{
    margin-top: 18px;
    // margin-left: 36px;
    display: inline-block;
    position: relative;
    // top: -27px;
  }
  .logo-img{
    width: 45px;
    height: 42px;
  }
  .nav-list {
    margin-left: 155px;
    // padding-top: 36px;
    display: inline-block;
    .nav-item{
      line-height: 80px;
      font-size:18px;
      font-family:Helvetica;
      color:rgba(45,58,75,1);
      margin-right: 50px;
      -webkit-transition: all 0.3s ease;
	    -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    .nav-item:hover{
      color:rgba(233,83,106,1);
    }
    .nav-item-active{
      color:rgba(233,83,106,1);
    }
  }
  .contact-btn{
    display: inline-block;
    height:40px;
    background:rgba(234,84,106,1);
    border-radius:100px;
    width: 120px;
    font-size: 14px;
    font-size:16px;
    font-family:Helvetica;
    color:rgba(255,255,255,1);
    line-height:40px;
    cursor: pointer;
    text-align: center;
    margin-top: 20px;
    // margin-right: 24px;

  }
}
.header-bg{
  transition: all linear .8s;
  background-color: #fff;
}

</style>