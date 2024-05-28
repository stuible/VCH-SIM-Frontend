<template>
<section class="reflection">
    <div class="container">
        <div class="title">Reflection</div>
        <svg class="question" id="i-book" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M16 7 C16 7 9 1 2 6 L2 28 C9 23 16 28 16 28 16 28 23 23 30 28 L30 6 C23 1 16 7 16 7 Z M16 7 L16 28" />
        </svg>
        <div class="question">{{video.question}}</div>
        <div class="options" ref="options">
            <div class="option" v-for="(a, index) in videoData.answers" v-bind:key="index" @click="select(index)" :class="{'selected': a.selected, 'true': a.value.correct,  'false': !a.value.correct}">
                <div class="checkbox-container">
                    <div class="number">{{numberToLetter(index + 1)}}</div>
                    <div class="checkbox"><i class="fas fa-check"></i></div>
                </div>
                <div class="text"> {{a.value.answer}}</div>
            </div>
            <button @click="submit()">Submit</button>
        </div>
        <div class="divider"></div>
        <svg class="feedback" id="i-msg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M2 4 L30 4 30 22 16 22 8 29 8 22 2 22 Z" />
        </svg>
        <div class="feedback" ref="feedbackEl" v-html="feedback"></div>
    </div>
</section>
</template>

<script>
const sanitizeHtml = require('sanitize-html');
export default {
    props: {
        video: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            submitted: false,
            videoData: this.$props.video,
            feedback: 'Select all correct answers and click submit to view feedback.'
        }
    },
    methods: {
        submit() {
            this.$refs.options.classList.add('reveal')
            this.feedback = sanitizeHtml(this.video.feedback, {
                allowedTags: ['p', 'b', 'i', 'em', 'strong', 'a'],
                allowedAttributes: {
                    'a': ['href']
                },
                // allowedIframeHostnames: ['www.youtube.com']
            });

            this.submitted = true
        },
        select(index) {
            console.log(`index is: ${this.videoData.answers[index].selected}`);
            if (!this.submitted) {
                if (this.videoData.answers[index].selected === undefined) {
                    // this.videoData.answers[index].selected = true;
                    this.$set(this.videoData.answers[index], 'selected', true)
                } else this.$set(this.videoData.answers[index], 'selected', !this.videoData.answers[index].selected);
                console.log(`index is now: ${this.videoData.answers[index].selected}`);
                // console.log(div);
                // div.classList.toggle('selected')
            }
        },
        numberToLetter(num) {
            let mod = num % 26,
                pow = num / 26 | 0,
                out = mod ? String.fromCharCode(64 + mod) : (--pow, 'Z');
            return pow ? this.numberToLetter(pow) + out : out;
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-gap: 25px 25px;
    grid-template-areas:
        "title"
        "question-image"
        "question"
        "options"
        "feedbackicon"
        "feedbacktext";

    @include breakpoint(phone) {
        grid-template-columns: 60px 1fr;
        grid-template-areas:
            "title title"
            "question-image question"
            ". options"
            "feedbackicon feedbacktext";
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
        display: flex;
        margin-bottom: 15px;
        padding: 1em 1em 1em 1em;
        // border-left: solid 1em #ffffff00;
        // margin-left: -1em;
        border-radius: 1em;
        cursor: pointer;
        border: solid 2px #EDEDED;
        color: #7a7a7a;
        transition: background-color 300ms linear, border-left 300ms linear;

        .checkbox-container {
            // width: 50px;
            // height: 50px;
            // background-color: grey;
            // display: inline-block;
            display: flex;
            align-items: center;

            .number {
                font-size: 1.5em;
                font-weight: 200;
                border-right: 2px solid #EDEDED;
                color: #b8b8b8;
                margin-right: 0.4em;
                padding-right: 0.4em;
            }

            .checkbox {
                border: #7a7a7a solid 1px;
                padding: 5px;
                border-radius: 1em;
            }

            i {
                height: 1.1em;
                width: 1.1em;
                opacity: 0;
            }
        }

        .text {
            padding-left: 1em;
            // display: inline-block;
        }

        &:hover {
            background-color: #f3f3f3;
            // border-left: solid 1em #f3f3f3;
        }

        &.selected {
            // background-color: #EDEDED;
            // color: #5a5a5a;
            // border-left: solid 1em #d8d8d8;

            i {
                opacity: 1;
            }
        }
    }
}

.options.reveal {

/*
    .option.selected.true,
    .option.false:not(.selected) {
        border: solid 2px #50b350;
    }

    .option.selected.false,
    .option.true:not(.selected) {
        border: solid 2px #c54646;
    }
*/
    
    .option.true{
        border: solid 2px #50b350;
    }
    
    .option.false{
        border: solid 2px #c54646;
    }
}

button {
    background-color: $accentTeal;
    cursor: pointer;
    text-decoration: none;
    color: white;
    font-weight: 600;
    padding: 1em 2em;
    border-radius: 1em;
    transition: background-color 100ms ease-in;
    border-style: none;

    &:hover {
        background-color: $accentTeal;
    }

    &:focus {
        outline: none;
    }

    &:active {
        // border-style: none;
    }
}

div.feedback {
    grid-area: feedbacktext;
}
</style>
