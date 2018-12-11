<template>
  <div>
    <v-header></v-header>
    <main class="content-container" ref="container">
      <nuxt/>
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
  }
}
</script>

<style lang="scss" scoped>
.content-container {
  width: 100%;
  margin-top: 100px;

}
</style>
