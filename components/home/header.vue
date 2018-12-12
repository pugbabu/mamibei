<!-- 头部组件 -->
<template>
  <div class="v-header" ref="header">
    <div class="header-container clearfix">
      <nuxt-link to="/" class="fl logo">
        <img src="~/assets/image/home/logo.png" alt="妈咪呗" class="logo-img">
      </nuxt-link>
      <ul class="nav-list fl">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="nav-item link-item fl"
          :class="{'nav-item-active': item.route == $route.path}"
        >
          <nuxt-link :to="item.route">{{ item.title }}</nuxt-link>
        </li>
      </ul>
       <div class="contact-btn text-center fr">联系我们</div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeInd: 0,
      initRatio: 0,
       items: [
        { route: '/', title: '关于我们' },
        { route: '/attend', title: '专业照护' },
        { route: '/space', title: '创意空间' },
        { route: '/food', title: '月子膳食' },
        { route: '/recovery', title: '产后康复' },
        { route: '/expand', title: '企业发展' },
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
      this.initRatio = scrollTop/100;
      // console.log(this.initRatio)
      this.$refs.header.style.background = 'rgba(255,255,255,'+this.initRatio+')';

    }

  }
};
</script>

<style lang='scss' scoped>
.v-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  height: 70px;
  background: transparent;
  .header-container {
    width: 1380px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    text-align: center;
    box-sizing: border-box;
  }
  .logo{
    margin-top: 15px;
    // display: inline-block;
  }
  .logo-img{
    width: 45px;
    height: 42px;
  }
  .nav-list {
    // display: inline-block;
    margin-left: 155px;
    line-height: 70px;
    .nav-item{
      // height: 100%;
      width:72px;
      // height:18px;
      font-size:18px;
      font-family:Helvetica;
      color:rgba(45,58,75,1);
      // line-height:22px;
      // margin-top: 36px;
      margin-right: 50px;
      -webkit-transition: all 0.3s ease;
	    -o-transition: all 0.3s ease;
	    transition: all 0.3s ease;
    }
    .nav-item-active{
      color:rgba(233,83,106,1);
    }
  }
  .contact-btn{
    // display: inline-block;

    height:40px;
    background:rgba(255,255,255,1);
    border-radius:100px;
    width: 120px;
    font-size: 14px;
    font-size:16px;
    font-family:Helvetica;
    color:rgba(233,83,106,1);
    line-height:40px;
    cursor: pointer;
    text-align: center;
    margin-top: 15px;
    // margin-left: 378px;

  }
}

</style>