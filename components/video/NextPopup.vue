<template>
<div class="next-video">
    <div class="header">
        <div class="title">{{video.title}}</div>
        <div class="close fa fa-times"></div>
    </div>
    <a href="video.html">
            <div class="video" href="#">
                <div class="thumbnail" :style="{ backgroundImage: `url(${thumbnail})` }"></div>
                <div class="info">
                    <div class="timestamp">4:20</div>
                </div>
                <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi, aut
                    nulla,
                    quo, adipisci sint eaque praesentium.</div>
            </div>
        </a>
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
        return { thumbnail }
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
            filter: blur(5px);
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
