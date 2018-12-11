<!-- 头部组件 -->
<template>
  <div class="v-header">
    <div class="header-container clearfix">
      <nuxt-link to="/" class="fl logo">
        <img src="~/assets/image/home/logo.png" alt="妈咪呗" class="logo-img">
      </nuxt-link>
      <ul class="nav-list fl">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="nav-item link-item"
          :class="{'nav-item-active': item.route == $route.path}"
        >
          <nuxt-link :to="item.route">{{ item.title }}</nuxt-link>
        </li>
      </ul>
       <div class="contact-btn text-center fl">联系我们</div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeInd: 0,
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
  methods: {
    goTo(item, index) {
      this.activeInd = index;
      this.$router.push({
        path: item.route
      })
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
  height: 100px;
  background: transparent;
  .header-container {
    height: 100%;
    margin: auto;
    position: relative;
  }
  .logo{
    margin-top: 24px;
  }
  .logo-img{
    width: 45px;
    height: 42px;
  }
  .contact-btn{
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
    margin-top: 25px;
    margin-left: 378px;

  }
}
  .nav-list {
    display: flex;
    margin-left: 155px;
    .nav-item{
      height: 100%;
      width:72px;
      height:18px;
      font-size:18px;
      font-family:Helvetica;
      color:rgba(45,58,75,1);
      line-height:22px;
      margin-top: 36px;
      margin-right: 50px;
      -webkit-transition: all 0.3s ease;
	    -o-transition: all 0.3s ease;
	    transition: all 0.3s ease;
    }
    .nav-item-active{
      color:rgba(233,83,106,1);
    }
  }
</style>