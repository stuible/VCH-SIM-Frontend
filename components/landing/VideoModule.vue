<template>
<div>
    <nuxt-link :to="'/video/' + video.slug">
        <div class="video">
            <div class="thumbnail" v-bind:style="{ backgroundImage: 'url(' + thumbnail + ')' }"></div>
            <div class="info">
                <div class="timestamp">{{video.length}}</div>
            </div>
            <div class="description">{{video.description}}</div>
        </div>
    </nuxt-link>
    <div class="title">{{video.title}}</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    props: {
        video: {
            type: Object,
            required: true
        },
        apiBaseURL: {

        }
    },
    data() {
        return {
            thumbnail: ''
        }
    },
    computed: {
        // thumbnailURL(){
        //     return this.$store.getters.getThumbnailById(this.video._id);
        // }
    },
    created() {
        this.getThumbnail()
    },
    methods: {
        getThumbnail() {
            if (!(this.video._id in this.$store.state.thumbnails)) {
                // console.log("don't have the thumbnails, grabbing via API")
                axios.post(`${process.env.cockpit.apiUrl}/cockpit/image?token=${process.env.cockpit.apiToken}`,
                    JSON.stringify({
                        src: this.video.thumbnail,
                        w: 500,
                        options: {
                            "mode": "fitToWidth",
                            "quality": 80
                        },
                    }), {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                ).then(response => {
                    this.$store.commit('addThumbnail', {
                        thumbnail: response.data,
                        id: this.video._id
                    })
                    this.thumbnail = response.data
                }).catch(error => {
                    console.log(error)
                })
            }
            else {
                // console.log("We DO have the thumbnails, grabbing via Store")
                this.thumbnail = this.$store.getters.getThumbnailById(this.video._id)
            }

        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    margin-top: 15px;
    color: $primaryBody;
    font-weight: 700;
}

.video {
    background-color: rgb(223, 223, 223);
    height: 150px;
    position: relative;
    // cursor: pointer;
    color: #fff;
    border-radius: 5px;
    overflow: hidden;
    // box-shadow: 0px 0px 10px rgba(0, 0, 0, .2);
    border: rgb(223, 223, 223) 1px solid;

    .thumbnail {
        position: absolute;
        height: 100%;
        width: 100%;
        background-position: center;
        background-size: cover;
        transform: scale(1.1);
        transition: filter 300ms linear;
    }

    .description {
        padding: 0 10px;
        position: absolute;
        font-weight: 300;
        letter-spacing: 0.25px;
        top: 15px;
        margin: 0 15px 0 15px;
        opacity: 0;
        border-left: 5px solid #fff;
        font-size: 1em;
        transition: opacity 300ms linear;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &:hover {

        .description {
            opacity: 1;
        }

        .thumbnail {
            filter: blur(5px) brightness(70%);
        }
    }

    .info {
        position: absolute;
        bottom: 0;
        width: 100%;

        .timestamp {
            float: right;
            background-color: #fff;
            color: #000;
            margin: 10px;
            padding: 5px;
            border-radius: 5px;
        }
    }

  @include breakpoint(phablet) {
    grid-template-columns: 50% 50%;
  }
  
  @include breakpoint(tablet) {
      grid-template-columns: 33% 33% 33%;
  }
  
  @include breakpoint(desktophd) {
      grid-template-columns: 25% 25% 25% 25%;
  }
}

// If IE 11, use flexbox instead of CSS Grid
@media all and (-ms-high-contrast: none),
(-ms-high-contrast: active) {

    .video {
        // width: 100%;
        min-width: 100%;
        padding: 0;

        @include breakpoint(phablet) {
            min-width: 250px;
            padding: 20px;
        }

        @include breakpoint(tablet) {
            min-width: 350px;
        }

        @include breakpoint(desktophd) {
            min-width: 250px;
        }
    }
}
</style>
