<template>
    <div>
        <video-player :video="video" :baseURL="baseURL" v-on:videoDone="showPopup()"/>
        <reflection :video="video"/>
        <resources :video="video"/>
        <survey :video="video" :questions="surveyQuestions"/>
        <next-popup :video="nextVideo" v-if="nextVideo" ref="popup"/>
    </div>
</template>

<script>
import axios from "axios";
import VideoPlayer from "~/components/video/VideoPlayer.vue";
import Reflection from "~/components/video/Reflection.vue";
import Resources from "~/components/video/Resources.vue";
import Survey from "~/components/video/Survey.vue";
import NextPopup from "~/components/video/NextPopup.vue";
import { setTimeout } from "timers";
import { resolve } from "url";
const consola = require("consola");

export default {
  components: {
    VideoPlayer,
    Reflection,
    Resources,
    Survey,
    NextPopup
  },
  head: {
    title: "Video"
  },
  props: {
    videoSlug: String
  },
  async asyncData({ env, params, store }) {

    consola.log(store.state.survey.data);

    consola.log('about to iterate videos');

    let video = store.state.videos.find(x => x.slug === params.slug)
    let nextVideo = store.state.videos[parseInt(video.order)]

    consola.log(video);
    consola.log(nextVideo);

    return {
      video: video,
      nextVideo: nextVideo,
      surveyQuestions: store.state.survey,
      baseURL: "http://vchdesign.ca/stuible/cockpit"
    };
  },
  methods: {
      showPopup(){
          console.log('show popup called')
          this.$refs.popup.toggle()
      }
  }
};
</script>


<style>
</style>
