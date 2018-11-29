<template>
<div class="hero">
    <div class="background" v-lazy:background-image="require('~/assets/image/hero.jpg')"></div>

    <div class="content">
        <img class="title" alt="Simulation" draggable="false" src="~/assets/image/logos/simulation-hero.svg" />
        <div class="subtitle">is a techique - not a technology - to replace or amplify real expriences with guided
            expriences...</div>
    </div>

    <!-- OBJECTIVES -->
    <div class="objective dot one"></div>
    <div class="objective box one">Explore commonly used debriefing models</div>

    <div class="objective dot two"></div>
    <div class="objective box two">Recognize appropriate contexts for simulation based education</div>

    <div class="objective dot three"></div>
    <div class="objective box three">Identify the principles of simulation-based education</div>

    <div class="objective dot four"></div>
    <div class="objective box four">Describe the basic elements and stages of a simulation educational intervention</div>

    <a href="#modules" class="scroll-indicator"></a>
</div>
</template>

<script>
const heroImage = require('~/assets/image/hero.jpg')
export default {}
</script>

<style lang="scss" scoped>
@keyframes fadein {
    from { 
        opacity: 0; 
        transform: translateY(-25px);
        }
    to   { 
        opacity: 1; 
        }
}

.hero {
    position: relative;
    height: calc(100vh - #{$navHeight});
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    background-color: rgb(24, 24, 24);
}

.background {
    background: no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: filter 1000ms linear, opacity 500ms linear 500ms;

    &[lazy=loaded] {
        opacity: 1;
    }
}
.content {
    color: white;
    z-index: 1;
    width: 68vw;
    margin: 0 auto;

    @include breakpoint(phablet) {
        width: 38vw;
    }
}

.title {
    font-size: 11.25vw;
    text-align: center;
    font-weight: 900;
    color: #fff;

    .highlight {
        color: $accentTeal;
    }

    @include breakpoint(phablet) {
        font-size: 6.25vw;
    }
}

.subtitle {
    font-size: 1.30em;
    margin-top: 0.5em;
    opacity: 0;
    animation: fadein 700ms ease-in 500ms forwards;
}

.scroll-indicator {
    background: url("~assets/image/icon/chevron.svg") no-repeat;
    background-size: contain;
    height: 50px;
    width: 50px;
    margin: 0 auto;
    left: 0;
    right: 0;
    position: absolute;
    bottom: 50px;
}

.objective {
    display: none;

    @include breakpoint(phablet) {
        display: block;
    }

    $objectiveDotHorizontalPostion: 20%;
    $objectiveDotVerticlePostion: 20%;

    &.dot {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        position: absolute;
        border: 10px solid white;
        cursor: pointer;
        transition: transform 1s ease-in-out;
        animation: pulse 1s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);

        &.one {
            left: $objectiveDotHorizontalPostion;
            bottom: calc(#{$objectiveDotVerticlePostion});
            animation-delay: 200ms;
        }

        &.two {
            right: $objectiveDotHorizontalPostion;
            bottom: calc(#{$objectiveDotVerticlePostion});
            animation-delay: 0ms;
        }

        &.three {
            left: $objectiveDotHorizontalPostion;
            top: calc(#{$objectiveDotVerticlePostion} + #{$navHeight});
            animation-delay: 400ms;
        }

        &.four {
            right: $objectiveDotHorizontalPostion;
            top: calc(#{$objectiveDotVerticlePostion} + #{$navHeight});
            animation-delay: 600ms;
        }

        &:hover {
            animation: grow 300ms forwards cubic-bezier(0.455, 0.03, 0.515, 0.955);
            // transform: scale(1.25);
        }

        &:hover+.box {
            opacity: 1;
        }
    }

    $objectiveBoxHorizontalOffest: 20px;
    $objectiveBoxVerticleOffest: 50px;

    &.box {
        opacity: 0;
        padding: 10px;
        width: max-content;
        max-width: 300px;
        min-height: 32px;
        position: absolute;
        background: transparent;
        outline: none !important;
        transition: all 0.3s ease;
        display: inline-block;

        // border: 2px solid white;
        color: white;

        &.one {
            left: calc(#{$objectiveDotHorizontalPostion} + #{$objectiveBoxHorizontalOffest});
            bottom: calc(#{$objectiveDotVerticlePostion} + #{$objectiveBoxVerticleOffest});
            border-left-width: 7px;
        }

        &.two {
            right: calc(#{$objectiveDotHorizontalPostion} + #{$objectiveBoxHorizontalOffest});
            bottom: calc(#{$objectiveDotVerticlePostion} + #{$objectiveBoxVerticleOffest});
            border-right-width: 7px;
        }

        &.three {
            left: calc(#{$objectiveDotHorizontalPostion} + #{$objectiveBoxHorizontalOffest});
            top: calc(#{$objectiveDotVerticlePostion} + #{$navHeight + $objectiveBoxVerticleOffest});
            border-left-width: 7px;
        }

        &.four {
            right: calc(#{$objectiveDotHorizontalPostion} + #{$objectiveBoxHorizontalOffest});
            top: calc(#{$objectiveDotVerticlePostion} + #{$navHeight + $objectiveBoxVerticleOffest});
            border-right-width: 7px;
        }
    }

    &.box,
    &.box:link,
    &.box:visited {

        border: 2px solid transparent;
        transition: all 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);

        &:after,
        &:before {
            content: "";
            position: absolute;
            left: -2em;
            top: -2px;
            height: 46px;
            width: 0;
            transition: inherit;
        }

        &:after {
            left: auto;
            right: -2em;
        }

        &.one {
            &:before {
                border: 5px solid #fff;
            }
        }

        &.two {
            &:after {
                border: 5px solid #fff;
            }
        }

        &.three {
            &:before {
                border: 5px solid #fff;
            }
        }

        &.four {
            &:after {
                border: 5px solid #fff;
            }
        }

    }

    &.dot:hover+.box {
        border-color: #ffffff;
        transition: border-color 0.2s 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);

        &:after,
        &:before {
            right: -7px;
            transition: all 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
        }

        &:before {
            left: -7px;
            right: auto;
        }
    }
}
</style>
