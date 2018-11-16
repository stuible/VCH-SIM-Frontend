<template>
<div>
    <hero />
    <div class="video-grid container" id="modules">
        <div class="video-container" v-for="v in videos" :key="v.id">
            <video-module :video="v" />
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import VideoModule from '~/components/landing/VideoModule.vue'
import Hero from '~/components/landing/Hero.vue'
const consola = require('consola')

export default {
    components: {
        VideoModule,
        Hero
    },
    async asyncData({
        env,
        params
    }) {
        const {
            data
        } = await axios.post(`${env.cockpit.apiUrl}/collections/get/Video?token=${env.cockpit.apiToken}`,
            JSON.stringify({
                // filter: { published: true },
                sort: {
                    _created: -1
                },
                populate: 1
            }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        consola.info(data.entries)
        return {
            videos: data.entries
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

    @include breakpoint(tablet) {
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
