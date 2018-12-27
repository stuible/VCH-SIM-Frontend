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


    @include breakpoint(phablet) {
        grid-template-columns: 50% 50%;
    }

    @include breakpoint(desktop) {
        grid-template-columns: 33% 33% 33%;
    }

    // @include breakpoint(desktophd) {
    //     grid-template-columns: 25% 25% 25% 25%;
    // }

    // If IE 11, use flexbox instead of CSS Grid
    @media all and (-ms-high-contrast: none),
    (-ms-high-contrast: active) {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

}
</style>
