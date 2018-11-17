<template>
<section class="reflection">
    <div class="container">
        <div class="title">Reflection</div>
        <img class="question" src="" alt="">
        <div class="question">Bobby is leading mock Code Blue sims throughout the hospital.
            The coordinator of a challenging unit, where sim has never been done before,
            requests for the mock code to be a “surprise,” be- cause “it’ll be more like the real thing.”
            How should Bobby respond to the coordinator?</div>
        <div class="options">
            <div class="option" data-feedback="First option, lorem ipsum dolor sit amet consectetur, adipisicing elit.">LUllam
                rerum sed, alias vel officiis dolores tempora. Cupiditate eius totam magnam in,
                minima tempora, perferendis a voluptate fugiat natus fugit ipsa</div>
            <div class="option" data-feedback="Second option, lorem ipsum dolor sit amet consectetur, adipisicing elit.">LUllam
                rerum sed, alias vel officiis dolores tempora. Cupiditate eius totam magnam in,
                minima tempora, perferendis a voluptate fugiat natus fugit ipsa</div>
        </div>
        <div class="divider"></div>
        <img class="feedback" src="" alt="">
        <div class="feedback">lol</div>
    </div>

</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.container {
    display: grid;
    height: 100%;
    grid-template-columns: 30px 1fr;
    grid-template-rows: auto auto;
    grid-gap: 25px 25px;
    grid-template-areas: "title title"
        "question-image question"
        "feedbackicon feedbacktext"
        ". options";

    @include breakpoint(phablet) {
        grid-template-columns: 60px 1fr;
    }

    @include breakpoint(tablet) {
        grid-template-columns: 60px 1.5fr 2px 1fr;
        grid-template-rows: auto auto 1fr;
        grid-gap: 25px 25px;
        grid-template-areas: "title title title title"
            "question-image question divider feedbackicon"
            ". options divider feedbacktext";
    }
}

.title {
    grid-area: title;
}

img.question {
    grid-area: question-image;
    // width: 60px;
    height: 60px;
    background-color: black;
}

div.question {
    grid-area: question;
    font-size: 1.15em;
}

.divider {
    grid-area: divider;
    background-color: #cecece;
}

img.feedback {
    grid-area: feedbackicon;
    // width: 60px;
    height: 60px;
    background-color: black;
}

.options {
    grid-area: options;

    .option {
        margin-bottom: 25px;
        cursor: pointer;

        &:hover {
            background-color: antiquewhite;
        }
    }
}

div.feedback {
    grid-area: feedbacktext;
}
</style>
