<template>
<div class="homepage">
    <hero />
    <div class="video-grid container" id="modules">
        <div class="video-container" v-for="v in $store.state.videos" :key="v.id">
            <video-module :video="v" :apiBaseURL="cockpit.baseURL" />
        </div>
    </div>
</div>
</template>

<script>
import VideoModule from '~/components/landing/VideoModule.vue'
import Hero from '~/components/landing/Hero.vue'
// const consola = require('consola')
// import axios from 'axios'

export default {
    components: {
        VideoModule,
        Hero
    },
    async data(){
        

        return {
            // 'thumbnails': thumbnails
        }
    },
    asyncData ({env}){
        // let thumbnails = [];
        // for (let video in this.$store.state.videos) {
        
        //   const thumbnail = await axios.post(`${process.env.cockpit.apiUrl}/cockpit/image?token=${process.env.cockpit.apiToken}`,
        //     JSON.stringify({
        //       src: this.$store.state.videos[video].thumbnail,
        //       w:500,
        //       options: {
        //         "mode":"resize",
        //         "quality":80
        //       },
        //     }),
        //     {
        //       headers: {
        //         "Content-Type": "application/json"
        //       }
        //     }
        //   )
        //   console.log(thumbnail.data)
        //   thumbnails.push(thumbnail.data)
        // }

        return {
            cockpit: env.cockpit
        }
    }
}
</script>

<style lang="scss" scoped>
.video-container {
    padding: 20px;
}

.video-grid {

    display: grid;
    grid-template-columns: 100%;
    margin-top: 50px;
    margin-bottom: 100px;

    @include breakpoint(tablet) {
        grid-template-columns: 50% 50%;
    }

    @include breakpoint(desktop) {
        grid-template-columns: 33% 33% 33%;
    }

    @include breakpoint(desktophd) {
        grid-template-columns: 25% 25% 25% 25%;
    }

    // If IE 11, use flexbox instead of CSS Grid
    @media all and (-ms-high-contrast: none),
    (-ms-high-contrast: active) {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

}
</style>
