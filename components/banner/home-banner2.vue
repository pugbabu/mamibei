<template>
  <div class="banner3D" >
    <div class="bg" ref="bg"
      @mouseover="bgOver($refs.bg)" @mousemove="bgMove($refs.bg,$event)" @mouseout="bgOut($refs.bg)">
      <transition name="listNext" v-if="isLeft">
        <div class="imgs" v-for="(item, i) in banner" v-if="i===mark" :key="i" @click="linkTo(item)" @mouseover="stopTimer" @mouseout="startTimer">
          <img :src="item.picUrl" class="img1" />
          <p class="store-name" v-if="item.storeName">{{item.storeName}}</p>

        </div>
      </transition>
      <transition name="listPrev" v-else>
        <div class="imgs" v-for="(item, i) in banner" v-if="i===mark" :key="i" @click="linkTo(item)" @mouseover="stopTimer" @mouseout="startTimer">
          <img :src="item.picUrl" class="img1" />
          <p class="store-name" v-if="item.storeName">{{item.storeName}}</p>

        </div>
      </transition>
    </div>
    <div class="page">
      <ul class="dots">
        <li class="dot" v-for="(item, i) in banner" :class="{ 'dot-active':i == mark }" :key="i" @click="change(i)"></li>
      </ul>
    </div>
    <div class="arrow-left arrow-icon"  @click="leftClick"  @mouseover="stopTimer" @mouseout="startTimer"></div>
    <div class="arrow-right arrow-icon"  @click="rightClick"  @mouseover="stopTimer" @mouseout="startTimer"></div>
   
  </div>
</template>

<script>
export default {
  data () {
    return {
      mark: 0,
      bgOpt: {
        px: 0,
        py: 0,
        w: 0,
        h: 0
      },
      delay: 3000,
      isLeft:true,
    }
  },
  props: ['banner'],
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
      this.timer = setInterval(this.autoPlay, this.delay)
    },
    change (i) {
      this.mark = i
      this.stopTimer()
    },
    startTimer () {
      this.timer = setInterval(this.autoPlay, this.delay)
    },
    stopTimer () {
      clearInterval(this.timer)
    },
    linkTo (item) {
     
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
      if (this.mark == 0) {
        this.mark = this.banner.length -1;
        return
      };
      this.mark--;
      this.isLeft = false;
    },
    rightClick() {
      if (this.mark == this.banner.length - 1) {
        this.mark = 0;
        return
      };
      this.isLeft = true;
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
.listNext-enter-to {
  transition: all 1s linear;
  transform: translateX(0);
}

.listNext-leave-active {
  transition: all 1s linear;
  transform: translateX(-100%)
}

.listNext-enter {
  transform: translateX(100%)
}

.listNext-leave {
  transform: translateX(0)
}
.listPrev-enter-to {
  transition: all 1s linear;
  transform: translateX(0);
}

.listPrev-leave-active {
  transition: all 1s linear;
  transform: translateX(100%)
}

.listPrev-enter {
  transform: translateX(-100%)
}

.listPrev-leave {
  transform: translateX(0)
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
  overflow: hidden;
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
  line-height: 900px;
  font-size:40px;
  top: 0;
  border-radius: 10px;
  color:#fff;
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
  bottom: -29px;
  z-index: 300;
  .dots {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .dot {
      display: inline-block;
      width:10px;
      height:10px;
      margin-right: 5px !important;
      background:#fff !important;
      border-radius:  50%;
      cursor:  pointer;
    }
     .dot-active {
      background: #eb5168 !important;
      border: none;
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
.slide1{
  background: rgb(75, 191, 195);
}
.slide2{
  background: rgb(123, 170, 190);
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
