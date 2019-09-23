<template>
  <div class="banner3D" >
    <div class="bg" ref="bg"
      @mouseover="bgOver($refs.bg)" @mousemove="bgMove($refs.bg,$event)" @mouseout="bgOut($refs.bg)">
      <transition name="fade">
        <div class="imgs" v-for="(item, i) in banner" v-if="i===mark" :key="i" @click="linkTo(item)" @mouseover="stopTimer" @mouseout="startTimer">
          <img  class="img1" :src="item.picUrl"/>
          <p class="store-name" v-if="item.storeName">{{item.storeName}}</p>
        </div>
      </transition>
    </div>
    <!-- <div class="page">
      <ul class="dots">
        <li class="dot-active" v-for="(item, i) in banner" :class="{ 'dot':i!=mark }" :key="i" @click="change(i)"></li>
      </ul>
    </div> -->
    <div class="arrow-left arrow-icon" :class="{'arrow-icon-disabled': mark == 0}" @click="leftClick"  @mouseover="stopTimer" @mouseout="startTimer"></div>
    <div class="arrow-right arrow-icon" :class="{'arrow-icon-disabled': mark == banner.length - 1}" @click="rightClick"  @mouseover="stopTimer" @mouseout="startTimer"></div>

   
  </div>
</template>

<script>
export default {
  props: ['banner'],
  data () {
    return {
      
      mark: 0,
      bgOpt: {
        px: 0,
        py: 0,
        w: 0,
        h: 0
      }
    }
  },
  methods: {
    autoPlay () {
      this.mark++
      if (this.mark > this.banner.length - 1) {
        // 当遍历到最后一张图片置零
        this.mark = 0
      }
    },
    play () {
      // 每2.5s自动切换
      this.timer = setInterval(this.autoPlay, 2500)
    },
    change (i) {
      this.mark = i
    },
    startTimer () {
      this.timer = setInterval(this.autoPlay, 2500)
    },
    stopTimer () {
      clearInterval(this.timer)
    },
    linkTo (item) {
      if (item.type === 0) {
        // 关联商品
        window.location.href = 'http://xmall.exrick.cn/#/goodsDetails?productId=' + item.productId
      } else {
        // 完整链接
        window.location.href = item.fullUrl
      }
    },
    bgOver (e) {
      // this.bgOpt.px = e.offsetLeft
      // this.bgOpt.py = e.offsetTop
      // this.bgOpt.w = e.offsetWidth
      // this.bgOpt.h = e.offsetHeight
    },
    bgMove (dom, eve) {
      // let bgOpt = this.bgOpt
      // let X, Y
      // let mouseX = eve.pageX - bgOpt.px
      // let mouseY = eve.pageY - bgOpt.py
      // if (mouseX > bgOpt.w / 2) {
      //   X = mouseX - bgOpt.w / 2
      // } else {
      //   X = mouseX - bgOpt.w / 2
      // }
      // if (mouseY > bgOpt.h / 2) {
      //   Y = bgOpt.h / 2 - mouseY
      // } else {
      //   Y = bgOpt.h / 2 - mouseY
      // }
      // dom.style['transform'] = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`
      // dom.style.transform = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`
    },
    bgOut (dom) {
      // dom.style['transform'] = 'rotateY(0deg) rotateX(0deg)'
      // dom.style.transform = 'rotateY(0deg) rotateX(0deg)'
    },
    leftClick() {
      if (this.mark == 0) return;
      this.mark--;
    },
    rightClick() {
      if (this.mark == this.banner.length - 1) return;
      this.mark++;
    }
  },
  created () {
    this.play()
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1.5s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
.banner3D,
.banner3D span,
.banner3D div {
  font-family: "Microsoft YaHei";
  transition: all 0.3s;
  transition-timing-function: linear;
}
.banner3D {
  cursor: pointer;
  perspective: 3000px;
  position: relative;
  z-index: 19;
  margin: 0 auto;
  width: 100%;
  height: 100%
}
.bg {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-size: 100% 100%;
  border-radius: 10px;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  transform: rotateY(0deg) rotateX(0deg);
  & div {
    height: 100%;
    width: 100%;
  }
}
.imgs {
  position:absolute;
}
.img1 {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 10px;
}
.img2 {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 5px;
  left: 0;
  background-size: 95% 100%;
  border-radius: 10px;
}
.img3 {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 10px;
}
.a {
  z-index: 20;
  transform: translateZ(40px);
}
.b {
  z-index: 20;
  transform: translateZ(30px);
}
.page {
  position: absolute;
  width: 100%;
  top: 470px;
  z-index: 30;
  .dots {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .dot-active {
      display: inline-block;
      width: 15px;
      height: 15px;
      background-color: whitesmoke;
      border-radius: 8px;
      margin-right: 10px;
      cursor: pointer;
    }
    .dot {
      opacity: 0.2;
    }
  }
}
.arrow-icon{
  width:48px;
  height:48px;
  background:rgba(255,255,255,1);
  position: absolute;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  border-radius: 50%;
}
.arrow-left{
  background: url("../../assets/image/home/arrow-left.png") no-repeat center;
  background-size: 100%;
  left: -24px;
}
.arrow-right{
  background: url("../../assets/image/home/arrow-right.png") no-repeat center;
  background-size: 100%;
  right: -24px;
}
.arrow-icon-disabled{
  opacity: 0.5;
}
.store-name{
  position: absolute;
  height: 25px;
  font-size: 22px;
  font-family: PingFangSC-Regular;
  color: white;
  line-height: 25px;
  right: 30px;
  bottom: 20px;
  font-weight: 600;
}
</style>
