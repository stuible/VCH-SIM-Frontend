<template>
<div>
    <nuxt-link :to="'/video/' + video.slug">
        <div class="video">
          <div class="thumbnail" v-bind:style="{ backgroundImage: 'url(' + video.thumbnail + ')' }"></div>
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
export default {
    props: {
        video: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>



    .title {
        margin-top: 15px;
        color: $fontColour;
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
        top: 15px;
        margin: 0 15px 0 15px;
        opacity: 0;
        border-left: 5px solid #fff;
        font-size: 0.9em;
        transition: opacity 300ms linear;
        overflow: hidden;
        text-overflow: ellipsis;
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
