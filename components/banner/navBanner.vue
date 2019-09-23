<template>
  <div class="banner3D" >
    <div class="bg" ref="bg"
      @mouseover="bgOver($refs.bg)" @mousemove="bgMove($refs.bg,$event)" @mouseout="bgOut($refs.bg)">
      <transition name="listNext">
        <div class="imgs" v-for="(item, i) in banner" v-if="i===mark" :key="i" @click="linkTo(item)" @mouseover="stopTimer" @mouseout="startTimer">
          <!-- <img :src="item.picUrl" class="img1" /> -->
          <div class="img1" :style="bgStyle(item.picUrl)"></div>
          <div class="banner-text">
            <h1 v-html="item.title"></h1>
            <p v-html="item.subTitle"></p>
          </div>
        </div>
      </transition>
    </div>
    <div class="page" v-if="banner.length > 1">
      <ul class="dots">
        <li class="dot" v-for="(item, i) in banner" :class="{ 'dot-active':i==mark }" :key="i" @click="change(i)"></li>
      </ul>
    </div>
   
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
    }
  },
  props: ['banner'],
  computed: {
    hText() {
      return this.banner[this.mark].title;
    },
    
  },
  methods: {
    bgStyle(url) {
      // console.log(document.body.clientWidth)
      // let w = document.body.clientWidth;
      // if (w > 1920) {
      //   return `background:url(${url}) no-repeat center;background-size:100% auto;`
      // }
      return `background-image:url(${url}; background-repeat: no-repeat;
          background-size: 2560px 900px;background-position-x: center;`
    },
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
      clearInterval(this.timer)
      this.mark = i
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
  height: 100%;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.18), 0px 2px 6px 0px rgba(0, 0, 0, 0.16), 0px 5px 10px 0px rgba(0, 0, 0, 0.14);
}
.bg {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-size: 100% 100%;
  // border-radius: 10px;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  transform: rotateY(0deg) rotateX(0deg);
  & div {
    height: 100%;
    width: 100%;
  }
  .banner-text{
  width: 1260px;
  position: absolute;
  top: 200px;
  margin-left: 123px;
  // padding-left: 200px;
  left: 50%;
  transform: translateX(-50%);
  // transform: translateX(-50%);
  color: #2D3A4B;
  z-index: 101;
  box-sizing: border-box;
  text-align: left;
  h1{
   font-size:48px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(45,58,75,1);
    line-height:64px;
    animation: fadeInUp 0.8s linear;   
    -webkit-background-clip:text;
   
  }
  p{
    margin-top: 30px;
    font-size:21px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(45,58,75,1);
    line-height:32px;
    animation: fadeInUp 0.8s linear;   

    // opacity: 0;
    // transition: all 1s;

  }
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
  font-size:40px;
  top: 0;
  color:#fff;
  height: 900px;
}
.img2 {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 5px;
  left: 0;
  background-size: 95% 100%;
  // border-radius: 10px;
}
.img3 {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  // border-radius: 10px;
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
  top: 770px;
  z-index: 30;
  .dots {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .dot {
      display: inline-block;
      width:  10px !important;
      height:  10px !important;
      margin-right: 5px !important;
      background:  #fff !important;
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

@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@-webkit-keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@-webkit-keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>
