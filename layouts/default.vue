<template>
  <div>
    <NavBar />
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/partials/NavBar.vue'
import Footer from '~/components/partials/Footer.vue'
export default {
  components: {NavBar, Footer},
}
</script>


<style lang="scss">
@import 'normalize-scss/sass/normalize/_import-now.scss';
@import '~/assets/scss/layout.scss';
</style>

