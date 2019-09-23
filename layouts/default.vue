<template>
  <div>
    <v-header></v-header>
    <main class="content-container" ref="container">
      <nuxt keep-alive/>
    </main>
    <v-footer></v-footer>

  </div>
</template>
<script>
import VHeader from '~/components/home/header';
import VFooter from '~/components/home/footer';

export default {
  components: {
    VHeader,
    VFooter
  },
  methods: {
     addClassName(element, className) {
      if (!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) element.className += ' ' + className;
    },
    /**
      * 为DOM对象删除样式类名称
      * @param {dom} element dom对象
      * @param {string} className 样式名称
      * @return {dom}
      */
    removeClassName(element, className) {
      if (element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        element.className = element.className.replace(reg, ' ');
      }
    },
    scroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      let h = window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.offsetHeight;
      let naiping = document.getElementsByClassName('naiping')[0]
      let session = document.getElementsByClassName('session')
      Array.from(session).forEach(el => {
        let elTop = el.offsetTop
        if (scrollTop + h > elTop + 1450) {
          this.addClassName(el, 'move')
        } else {
          this.removeClassName(el, 'move')
        }
      })

    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroll, false)
  },
}
</script>

<style lang="scss" scoped>
.content-container {
  width: 100%;
  // padding-top: 80px;
}
</style>
