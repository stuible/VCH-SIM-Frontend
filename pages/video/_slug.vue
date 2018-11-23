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
  async asyncData({ env, params }) {
    const { data } = await axios.post(
      `${env.cockpit.apiUrl}/collections/get/Video?token=${
        env.cockpit.apiToken
      }`,
      JSON.stringify({
        // filter: { slug: params.slug },
        sort: {
          order: 1
        }
        // populate: 1
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    const  survey  = await axios.post(`${env.cockpit.apiUrl}/singletons/get/Survey?token=${env.cockpit.apiToken}`,
      JSON.stringify({
        // filter: { slug: params.slug },
        // sort: {
        //   order: 1
        // }
        // populate: 1
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    consola.log(survey.data);

    consola.log('about to iterate videos');

    let video = data.entries.find(x => x.slug === params.slug)
    let nextVideo = data.entries[parseInt(video.order)]


    consola.log(video);
    consola.log(nextVideo);

    

    // consola.info("Single Video for " + params.slug)
    consola.log();
    // consola.info(data.entries[0])
    return {
      video: video,
      nextVideo: nextVideo,
      surveyQuestions: survey.data,
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
