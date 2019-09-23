<!--  -->
<template>
  <div class="mendian-container">
      <div class="session1 session">
        <div class="info outer">
          <h3>天辰店<br>城市中心的温馨产后休养中心</h3>
          <div class="icon"></div>
          <p style="margin-bottom:30px;margin-top:37px;">天辰店是妈咪呗呗第一家门店，也是台湾ISD创意设计公司在大陆与妈咪呗呗合作的首个作品，<br>温馨典雅的格局布置备受妈妈们喜爱。 </p>
          <p>人性化的室内空间设计，让宝宝婴儿室与妈咪居住房间分别独立，新风系统单独工作24小时无限循环，<br>房间内备受关注的小细节，时刻关注产后妈妈独特的状态，给孕产家庭的生活带来极大的便利。</p>
        </div>
      </div>

      <div class="session2">
        <home-banner2 :banner="tianchenBanner"></home-banner2>
        <!-- <banner3D :banner="tianchenBanner"></banner3D> -->
        <!-- <div v-swiper:mySwiper1="spaceOption" class="space-banner">
          <div class="swiper-wrapper">
            <div class="swiper-slide">图片1</div>
            <div class="swiper-slide">图片2</div>
            <div class="swiper-slide">图片3</div>
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
      </div>

      <div class="session3 session">
        <div class="info clearfix outer">
          <div class="image fl"></div>
          <div class="detail fr">
            <h3>湘湖店<br>国家5A级景区的家庭度假式月子中心</h3>
            <div class="icon"></div>
            <p>湘湖店坐落于杭州著名的生态天然氧吧湘湖景区内，享受青山环抱的温馨，呼吸纯净新鲜的空气。室内静谧美好，自然与艺术的碰撞，宛若身在画中。<br><br>每个房间都有不同的风格，精致房、loft艺术房，兼具个性与专业实用，让产后妈妈得到身心的全面滋养。</p>
          </div>
        </div>
      </div>

      <div class="session4">
        <!-- <banner3D :banner="xianghuBanner"></banner3D> -->
        <home-banner2 :banner="xianghuBanner"></home-banner2>
      </div>

      <div class="session5 session">
        <div class="image"></div>
        <div class="info outer">
          <h3>钱江新城店<br>钱江新城核心CBD的多元化科技月子中心</h3>
          <div class="icon"></div>
          <p>妈咪呗呗钱江店在杭城最繁华的钱江世纪城中<br>取得一片幽静，城市涌动的朝气与房间的静谧<br>相互融合，公共空间凸显的绿意，映照钱江<br>设计的园林主题，到处生机盎然。<br>感受繁华都市的慢生活，是一种享受。</p>
        </div>
      </div>

      <div class="session6">
        <!-- <banner3D :banner="qianjiangBanner"></banner3D> -->
        <home-banner2 :banner="qianjiangBanner"></home-banner2>
      </div>

      <div class="session7 session">
        <div class="info outer">
          <h3>合肥店</h3>
          <div class="icon"></div>
          <p>2016年12月，妈咪呗呗合肥店开始营业，分店开设在合肥<br>政务区新地中心，重新定义安徽高端月子中心新高度。<br>妈妈们感受到的不仅是高品质的月子服务，更是一种极致<br>生活的体验。</p>
        </div>
        <div class="image"></div>
      </div>

      <div class="session8">
       <!-- <banner3D :banner="hefeiBanner"></banner3D> -->
       <home-banner2 :banner="hefeiBanner"></home-banner2>
      </div>

      <div class="session9 session">
        <div class="info clearfix outer">
          <div class="image fl"></div>
          <div class="detail fr">
            <h3>丽水店</h3>
            <div class="icon"></div>
            <p>妈咪呗呗丽水店坐落于丽水市如诗如画的莲都区，将高端<br>都市风格气息融入月子休养中，闹中取静，心旷神怡，<br>给妈妈一个美妙的休养体验的同时，<br>也为整个孕产家庭创造出和谐专业的生活环境，帮助整个家<br>庭度过难忘的特殊时期。</p>
          </div>
        </div>
      </div>

      <div class="session10">
       <!-- <banner3D :banner="lishuiBanner"></banner3D> -->
       <home-banner2 :banner="lishuiBanner"></home-banner2>
      </div>

  </div>
</template>

<script>
import Banner3D from '../../components/banner/banner-3d'
import HomeBanner2 from '../../components/banner/home-banner2'

export default {
  data () {
     return {
       spaceOption: {
        pagination: {
          el: ".swiper-pagination",
          bulletClass : 'my-bullet',
          bulletActiveClass: 'my-bullet-active',
          clickable :true,
          clickableClass : 'my-pagination-clickable',
        },
        autoplay: true,
        loop : true,
        speed:1000,
        lazy: {
          loadPrevNext: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
       
      },
       banner1: [
        {
          type: 0,
          productId: 150635087972564,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/9b48d705/0f6f68ba.jpg',
        },
        {
          type: 0,
          productId: 150642571432835,
          fullUrl: '',
          picUrl: 'https://i1.mifile.cn/a4/xmad_15471333544761_iIFgE.jpg',
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'https://i1.mifile.cn/a4/xmad_15471129430061_HgNMC.jpg',
        },
        
      ],
      tianchenBanner: [
        {
          type: 0,
          productId: 150635087972564,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/e31719b1/f8d68c02.jpg',
          storeName: '玫瑰公主房型'
        },
        {
          type: 0,
          productId: 150642571432835,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/7b5ebf40/f1fe9086.jpg',
          storeName: '尊尚百合房型'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/6c516bcc/38ac8c37.jpg',
          storeName: '优雅茉莉房型'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/c9c04421/0231efb3.jpg',
          storeName: '清新玉兰房型'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/618eb8e5/bbb5c510.jpg',
          storeName: '精致茶花房型'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/f5662971/3a609201.jpg',
          storeName: '粉红佳人房型'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/bf570906/6c0daa03.jpg',
          storeName: '妈咪教室'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/d9f9a426/39135270.jpg',
          storeName: '婴儿室'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/38da1e77/5ee027be.jpg',
          storeName: '休闲室'
        },
        
      ],
      xianghuBanner: [
        {
          type: 0,
          productId: 150635087972564,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/167b1714/2c006ea5.jpg',
          storeName: '乐之野房型'
        },
        {
          type: 0,
          productId: 150642571432835,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/108c14c2/037d1e71.jpg',
          storeName: '复式艺术房房型'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/c3522c30/562bcd48.jpg',
          storeName: '雅之境房型'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/e437fb9c/a38c2957.jpg',
          storeName: '精致房房型'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/faddda19/6bb7d6c6.jpg',
          storeName: '雅致房房型'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/6eb084f4/24f7b34f.jpg',
          storeName: 'unique-墅房型'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/68ddedb9/9a6a1b9c.jpg',
          storeName: '湖景房房型'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/38e1df00/bcdf99fc.jpg',
          storeName: '妈咪教室'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/1b22918b/1b7582cc.jpg',
          storeName: '婴儿室'
        },
        
      ],
      qianjiangBanner: [
        {
          type: 0,
          productId: 150635087972564,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/296e0ff5/114205f2.jpg',
          storeName: 'Taipei101房型'
        },
        {
          type: 0,
          productId: 150642571432835,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/18dd4f55/188f8823.jpg',
          storeName: '都会房房型'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/49b65e91/3a89b09e.jpg',
          storeName: '摩登房房型'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/84698fda/118aa236.jpg',
          storeName: '新城房房型'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/31e132b8/b9bba288.jpg',
          storeName: '休闲房房型'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/8b95e308/89cc3b39.jpg',
          storeName: '妈咪教室'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/d0e72c10/92e688a3.jpg',
          storeName: '婴儿室'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/28f6963e/d990c91e.jpg',
          storeName: '休闲室'
        },
        
      ],
      hefeiBanner: [
        {
          type: 0,
          productId: 150635087972564,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/1f29a958/d8a1e70c.jpg',
          storeName: ''
        },
        {
          type: 0,
          productId: 150642571432835,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/54b1fc7b/ef9a616a.jpg',
          storeName: '天鹅房房型'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/af15f922/6b1463c5.jpg',
          storeName: '精致房房型'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/4e70f9a8/54bb42be.jpg',
          storeName: '丽致房房型'
        },
      ],
      lishuiBanner: [
        {
          type: 0,
          productId: 150635087972564,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/169f6895/d215416d.jpg',
          storeName: '优雅茉莉房房型'
        },
        {
          type: 0,
          productId: 150642571432835,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/12999693/cf194fba.jpg',
          storeName: '优雅茉莉房2房型'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/abfe2acd/36bf9981.jpg',
          storeName: '清新玉兰房'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/ce2ab9ba/eae87b95.jpg',
          storeName: '婴儿室'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/4dd2dde5/8701c247.jpg',
          storeName: '妈咪教室'
        },
        {
          type: 0,
          productId: 150642571432843,
          fullUrl: '',
          picUrl: 'http://pic.yupoo.com/pugbabu/133a484b/efa1442a.jpg',
          storeName: '休闲室'
        },
      ],
     }
  },
  components: {
    Banner3D,
    HomeBanner2
  }
 }
</script>

<style lang='scss' scoped>
@import "../../assets/scss/page/mendian.scss";

</style>