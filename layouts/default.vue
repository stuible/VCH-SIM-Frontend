<template>
<div>
    <NavBar />
    <nuxt />
    <Footer />
</div>
</template>

<script>
import NavBar from '~/components/partials/NavBar.vue'
import Footer from '~/components/partials/Footer.vue'

const consola = require('consola')

export default {
    components: {
        NavBar,
        Footer
    },
    data() {
        return {
            videos: {}
        }
    },
    mounted() {
        // const page = this.$nuxt.$children;
        // this.videos = page.videos;
        // consola.info(this.$nuxt.$children[1].$children)
    }
}
</script>

<style lang="scss">
@import 'normalize-scss/sass/normalize/_import-now.scss';
@import '~/assets/scss/layout.scss';
</style>
