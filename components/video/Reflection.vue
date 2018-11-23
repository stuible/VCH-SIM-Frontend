<template>
<section class="reflection">
    <div class="container">
        <div class="title">Reflection</div>
        <svg class="question" id="i-book" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M16 7 C16 7 9 1 2 6 L2 28 C9 23 16 28 16 28 16 28 23 23 30 28 L30 6 C23 1 16 7 16 7 Z M16 7 L16 28" />
        </svg>
        <div class="question">{{video.question}}</div>
        <div class="options">
            <div class="option" @click="showFeedback(video.feedback1)">{{video.answer1}}</div>
            <div class="option" @click="showFeedback(video.feedback2)">{{video.answer2}}</div>
        </div>
        <div class="divider"></div>
        <svg class="feedback" id="i-msg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M2 4 L30 4 30 22 16 22 8 29 8 22 2 22 Z" />
        </svg>
        <div class="feedback" ref="feedbackEl">feedback</div>
    </div>

</section>
</template>

<script>
export default {
    props: {
        video: {
            type: Object,
            required: true
        }
    },
    methods: {
        showFeedback(feedback) {
            this.$refs.feedbackEl.textContent = feedback
        }
    }
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

svg.question {
    grid-area: question-image;
    width: 60px;
    height: 60px;
    // background-color: black;
}

div.question {
    grid-area: question;
    font-size: 1.15em;
}

.divider {
    grid-area: divider;
    background-color: #cecece;
}

svg.feedback {
    grid-area: feedbackicon;
    height: 60px;
    width: 60px;
    // background-color: black;
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
