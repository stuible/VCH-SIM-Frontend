<template>
<div class="next-video" v-bind:class="{ open: show }" ref="popup" :style="{ transform: `${popupTransform}` }">
    <div class="header" @click="toggle()">
        <div class="title">Next: {{video.title}}</div>
        <div class="close"></div>
    </div>
    <nuxt-link :to="{ path: '/video/' + video.slug, query: { play: true }}">
        <div class="video" href="#">
            <div class="thumbnail" :style="{ backgroundImage: `url(${baseURL + '/' +video.thumbnail})` }"></div>
            <div class="info">
                <div class="timestamp">{{video.length}}</div>
            </div>
            <div class="description">{{video.description}}</div>
        </div>
    </nuxt-link>
</div>
</template>

<script>
import thumbnail from '~/assets/image/still.jpg'
export default {
    props: {
        baseURL: String,
        video: {
            type: Object,
            required: true
        }
    },
    data() {

        return {
            thumbnail,
            show: Boolean,
            // isOpen: Boolean,
        }
    },
    mounted() {
        this.close();
    },
    computed: {
        popupTransform(){
            if(this.show){
                // this.$refs.popup.style.transform = ;
                // this.isOpen = true;
                return "translate(0, 0px)"
            }
            else {
                let headerHeight = this.$refs.popup.querySelector('.header').offsetHeight;
                // this.$refs.popup.style.transform = 
                // this.isOpen = false;
                return "translate(0, " + (this.$refs.popup.offsetHeight - headerHeight) + "px)";
            }
        }
    },
    methods: {
        open() {
            console.log('opening');
            // this.$refs.popup.style.transform = "translate(0, 0px)";
            // this.isOpen = true;
            this.show = true;
        },
        close() {
            console.log('closing');
            // let headerHeight = this.$refs.popup.querySelector('.header').offsetHeight;
            // this.$refs.popup.style.transform = "translate(0, " + (this.$refs.popup.offsetHeight - headerHeight) + "px)";
            // this.isOpen = false;
            this.show = false;
        },
        toggle() {
            
            console.log(this.show);

            if (this.show) {
                this.close();
            } else {
                this.open();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.next-video {
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: white;
    border-radius: 3px 3px 0 0;
    width: 100%;
    box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.05);
    transition: transform 200ms cubic-bezier(0.77, 0, 0.175, 1);

    @include breakpoint(phone) {
        width: 250px;
        right: 50px;
    }

    @include breakpoint(phablet) {
        width: 250px;
    }

    @include breakpoint(tablet) {
        width: 250px;
    }

    @include breakpoint(desktophd) {
        width: 350px;
    }

}

$videoPopupPadding: 15px;

.header {

    display: table;
    cursor: pointer;
    width: calc(100% - 30px);
    padding: $videoPopupPadding $videoPopupPadding;

    .title {
        float: left;
    }

    .close {
        float: right;
    }
}

.video {
    margin-top: 20px;
    background-color: rgb(223, 223, 223);
    height: 150px;
    // width: 100%;
    position: relative;
    color: #fff;
    border-radius: 5px;
    overflow: hidden;
    border: rgb(223, 223, 223) 1px solid;
    margin: 0 $videoPopupPadding $videoPopupPadding $videoPopupPadding;

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
        top: 15px;
        margin: 0 15px 0 15px;
        opacity: 0;
        border-left: 5px solid #fff;
        font-size: 0.9em;
        transition: opacity 300ms linear;
    }

    &:hover {

        .description {
            opacity: 1;
        }

        .thumbnail {
            filter: blur(5px) brightness(80%);
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
}
</style>
