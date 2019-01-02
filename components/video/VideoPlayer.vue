<template>
<section class="video">
    <div class="container full">
        <h1 class="title">{{ video.title }}</h1>
        <video controls ref="video" :poster="baseURL + '/' + video.thumbnail">
                <source :src="baseURL + '/storage/uploads' + video.video.path" type="video/mp4">
                Your browser does not support this video.
            </video>
        <div class="extras">
            <a class="extra" download :href="baseURL + '/storage/uploads' + video.audio.path" target="_blank">
                <img src="~assets/image/icon/download-audio.svg" alt="">
                <div class="info">
                    <div class="name">Download Audio</div>
                    <div class="size">{{ video.audio.size | prettyBytes }}</div>
                </div>
            </a>
            <a class="extra" download :href="baseURL + '/storage/uploads' + video.transcript.path" target="_blank">
                <img src="~assets/image/icon/pdf.svg" alt="">
                <div class="info">
                    <div class="name">Download Transcript</div>
                    <div class="size">{{ video.transcript.size | prettyBytes }}</div>
                </div>
            </a>
        </div>
    </div>
</section>
</template>

<script>
const consola = require('consola')
export default {
    props: {
        baseURL: String,
        video: {
            type: Object,
            required: true
        },
        autoplay: Boolean
    },
    mounted() {
        this.$refs.video.addEventListener('ended', this.ended, false);
        if (this.autoplay) {
            this.$refs.video.play()
            this.removeParams('play');
        }
    },
    methods: {
        ended() {
            console.log('video done')
            this.$emit('videoDone', {
                id: this.video.title,
            })
        },
        removeParams(sParam) {
            var uri = window.location.toString();
            if (uri.indexOf("?") > 0) {
                var clean_uri = uri.substring(0, uri.indexOf("?"));
                window.history.replaceState({}, document.title, clean_uri);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 45px 50px;
    grid-template-areas: "title title title title"
        "video video video video"
        "extras extras extras extras";

    @include breakpoint(phablet) {
        grid-template-areas: "title title title title"
            "video video video video"
            "extras extras extras extras";
        grid-template-rows: auto 1fr auto;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @include breakpoint(tablet) {
        grid-template-areas: "title title title title"
            "video video video extras";
        grid-template-columns: 1fr 1fr 1fr 1.75fr;
        grid-template-rows: auto 1fr;
    }

    @include breakpoint(desktop) {
        grid-template-areas: "title title title title"
            "video video video extras";
        grid-template-rows: auto 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

}

.title {
    grid-area: title;
}

video {
    grid-area: video;
    // height: 400px;
    width: 100%;

    &::-webkit-media-controls-panel {
        background: none;
        // box-shadow:  inset 0px -1em 0px 0px rgba(0,0,0,0.55);
        // background: linear-gradient(rgba(0,0,0,0) 50%,rgba(0,0,0,0.5), rgba(0,0,0,0.5) 50%);

        @include breakpoint(phone) {
            // background: linear-gradient(rgba(0,0,0,0) 72%,rgba(0,0,0,0.5), rgba(0,0,0,0.5) 72%);
            box-shadow:  inset 0px -80px 0px 0px rgba(0,0,0,0.55);
        }

        @include breakpoint(tablet) {
            // background: linear-gradient(rgba(0,0,0,0) 70%,rgba(0,0,0,0.5), rgba(0,0,0,0.5) 70%);
        }

        @include breakpoint(desktop) {
            // background: linear-gradient(rgba(0,0,0,0) 80%,rgba(0,0,0,0.5), rgba(0,0,0,0.5) 80%);
            box-shadow:  inset 0px -100px 0px 0px rgba(0,0,0,0.55);
        }

    }

}

.extras {
    grid-area: extras;
    align-self: end;
    margin-left: 25px;

    .extra {

        text-decoration: none;
        display: block;
        color: $fontColour;
        margin-top: 1em;
        cursor: pointer;
        padding: 1em;
        border-radius: 1em;
        transition: all 200ms linear;

        &:hover {
            background-color: rgb(245, 245, 245);
            // box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);
        }

        img {
            display: inline-block;
            width: 2.25em;

            @include breakpoint(tablet) {
                width: 1.75em;
            }

            @include breakpoint(desktop) {
                width: 2.25em;
            }
        }

        .info {
            display: inline-block;
            margin-left: 1em;
            max-width: 70%;
        }

    }

    @include breakpoint(phablet) {
        margin-left: 0;
    }
}
</style>
