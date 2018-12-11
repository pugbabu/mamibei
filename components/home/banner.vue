<!-- 首页轮播 -->
<template>
  <div id="index-banner">
    <div class="banner-container container">
      <!-- <transition-group tag="div" class="banner-box" name="listNext" v-show="isLeft">
        <div class="banner-item" v-for="(item, index) in bannerData" :key="index" v-show="index === currentIndex" @mouseenter="stop" @mouseleave="go">
          <nuxt-link :to="item.url" target="_blank">
            <h3 v-html="item.title"></h3>
            <p v-html="item.subTitle"></p>
            <img :src="item.src"/>
          </nuxt-link>
        </div>
      </transition-group> -->
      <ul class="banner-dot">
        <li class="dot-item" v-for="(item,index) in bannerData" :key="index" :class="{active: index === currentIndex}" @click="change(index)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['bannerData'],
  data() {
    return {
      isLeft: true,
      currentIndex: 0,
      timer: '',
      
    };
  },
  created() {
    //在DOM加载完成后，下个tick中开始轮播
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 4000);
    });
  },
  methods: {
    go (){
      this.timer = setInterval(()=>{
        this.autoPlay()
      },4000)
    },
    stop (){
      clearInterval(this.timer);
      this.timer = null;
    },
    autoPlay() {
      this.isLeft = true;
      this.currentIndex++;
      if (this.currentIndex > this.bannerData.length - 1) {
        this.currentIndex = 0;
      }
    },
    change (index){
      this.currentIndex = index;
    },
  }
};
</script>

<style lang='scss' scoped>
#index-banner {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 772px;
  .banner-container {
    position: relative;
    height: 100%;
    .banner-item {
      position: absolute;
      top: 0;
      left: 50%;
      z-index: 90;
      overflow: hidden;
      width: 1920px;
      height: 100%;
      margin-left: -960px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
      h3{
        position: absolute;
        left: 375px;
        top: 290px;
        z-index: 91;
        font-size: 36px;
        color: #2e2e2e;
        line-height: 46px;
      }
      p{
        position: absolute;
        left: 375px;
        top: 470px;
        z-index: 91;
        font-size: 16px;
        color: #4a4850;
        line-height: 26px;
      }

    }
    .banner-dot{
      position: absolute;
      z-index: 99;
      bottom: 173px;
      width: 100%;
      overflow: hidden;
      text-align: left;
      .dot-item{
        display:  inline-block;
		    width:  10px;
		    height:  10px;
		    margin-right: 19px;
		    background:  #fff;
		    border-radius:  50%;
		    cursor:  pointer;
      }
      .dot-item.active{
        background: #eb5168;
      }
    }
  }
}
.listNext-enter-to {
  transition: all 1.5s ease;
  transform: translateX(0);
}

.listNext-leave-active {
  transition: all 1.5s ease;
  transform: translateX(-100%);
}

.listNext-enter {
  transform: translateX(100%);
}

.listNext-leave {
  transform: translateX(0);
}

.listPrev-enter-to {
  transition: all 1.5s ease;
  transform: translateX(0);
}

.listPrev-leave-active {
  transition: all 1.5s ease;
  transform: translateX(100%);
}

.listPrev-enter {
  transform: translateX(-100%);
}

.listPrev-leave {
  transform: translateX(0);
}
</style>