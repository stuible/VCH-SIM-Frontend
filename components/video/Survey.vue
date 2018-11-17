<template>
<section class="survey">
    <div class="container">
        <div class="questions">
            <div class="question">
                <div class="title fade-in-slide">Was this video informative?</div>
                <div class="stars">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </div>
        </div>

        <div class="dots">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            <span class="dot" onclick="currentSlide(4)"></span>
        </div>
    </div>

</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

section.survey {
    padding-bottom: 25px;
}

.container {

    text-align: center;

    @include breakpoint(phablet) {}

    @include breakpoint(tablet) {}

}

.title {
    font-size: 1.1em;
    font-weight: 700;
    margin-bottom: 20px;
    display: inline-block;
}

.question {
    display: none;

    &.active {
        display: block;
    }
}

.stars {
    font-size: 1.15em;
    margin-bottom: 50px;

    span {
        padding: 0 0.25em;
        cursor: pointer;

        &.hover {
            color: rgb(196, 196, 196);
        }

        &.selected {
            color: gold;
        }
    }
}

.dots {
    text-align: center;

    .dot {
        cursor: pointer;
        height: 10px;
        width: 10px;
        margin: 0 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;

        &.active {
            background-color: #717171;
        }
    }
}
</style>
