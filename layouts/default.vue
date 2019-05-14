<template>
  <div>
    <NavBar/>
    <modal v-if="showIEWarning" @close="showIEWarning = false">
        <h3 slot="header">Incompatible Browser</h3>
        <p slot="body">
            You are running Internet Explorer, this browser is outdated and will not render parts of this site correctly.
            For a complete experience, please use a modern browser such as Mozilla Firefox or Google Chrome.
        </p>
    </modal>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import axios from "axios";

import NavBar from "~/components/partials/NavBar.vue";
import Footer from "~/components/partials/Footer.vue";
import Modal from "~/components/partials/Modal.vue";

export default {
  components: {
    NavBar,
    Footer,
    Modal
  },
  data(){
      return {
          showIEWarning: false
      }
  },
  mounted() {
      if(this.isIE()){
          this.showIEWarning = true;
          console.log('IE Detected, show warning');
      }
  },
  methods: {
    isIE() {
      var ua = window.navigator.userAgent;

      var msie = ua.indexOf("MSIE ");
      if (msie > 0) {
        // IE 10 or older => return version number
        return true;
      }

      var trident = ua.indexOf("Trident/");
      if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf("rv:");
        return true;
      }

      // other browser
      return false;
    }
  }
};
</script>

<style lang="scss">
@import "normalize-scss/sass/normalize/_import-now.scss";
@import "~/assets/scss/layout.scss";

</style>
