<!--  -->
<template>
  <div id="mother-attend">
    <section class="section-attend-one">
      <div class="container container-text">
        <h3>专业团队<br>五大专业部门，24小时贴心照护</h3>
        <p>实施台式全面、专业、科学、系统的护理标准，护理人员必备国家护士资格证书、<br>公立医院临床经验、入职前参加产后护理知识相关知识课程培训。</p>
        <div class="more">了解更多</div>
      </div>
    </section>
    <v-banner :bannerData="bannerData"></v-banner>
    
  </div>
</template>

<script>
import VBanner from './banner'

export default {
  data () {
     return {
       bannerData: [
        {
          title: "专业团队<br>享受为人父母的幸福",
          subTitle: "宝宝照护<br>用科学的护理专业，温馨守护新生软萌宝宝",
          src: require("~/assets/image/attend2.jpg"),
          url: "/about"
        },
        {
          title: "fskfsdksg<br>享受为人父母的幸福",
          subTitle: "宝宝照护<br>用科学的护理专业，温馨守护新生软萌宝宝",
          src: require("~/assets/image/attend3.jpg"),
          url: "/expand"
        },
        {
          title: "但是看风景都是看风景<br>享受为人父母的幸福",
          subTitle: "宝宝照护<br>用科学的护理专业，温馨守护新生软萌宝宝",
          src: require("~/assets/image/attend4.jpg"),
          url: "/"
        },
        {
          title: "全方位专业月子照护<br>享受为人父母的幸福",
          subTitle: "宝宝照护<br>用科学的护理专业，温馨守护新生软萌宝宝",
          src: require("~/assets/image/attend1.jpg"),
          url: "/"
        },
        {
          title: "全方位专业月子照护<br>享受为人父母的幸福",
          subTitle: "宝宝照护<br>用科学的护理专业，温馨守护新生软萌宝宝",
          src: require("~/assets/image/attend4.jpg"),
          url: "/"
        }
      ]
     }
  },
  components: {
    VBanner,
  },
 }
</script>

<style lang='scss' scoped>
.section-attend-one {
  height: 905px;
  width: 100%;
  background: url('../../assets/image/attend1.jpg') no-repeat center;
  background-size: 100%;
  .container-text {
    color: #fff;
    padding-top: 231px;
    h3 {
      font-size: 56px;
      line-height: 82px;
    }
    p {
      font-size: 20px;
      line-height: 34px;
      color: #faf6f5;
      margin-top: 62px;
    }
    .more {
      width: 260px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #fff;
      background: #e9546b;
      border-radius: 50px;
      font-weight: 500;
      margin-top: 93px;
    }
  }
}
</style>