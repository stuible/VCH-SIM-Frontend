<template>
<section class="survey">
    <div class="container">
        <div class="questions">
            <div class="question" v-for="(q, index) in questionsTrimmed" :key="q.id" ref="questionsEl" v-bind:class="{'active' :(index == slideIndex)}">
                <div class="title fade-in-slide">{{ q[1] }}</div>
                <div class="stars fade-in-slide">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </div>
        </div>

        <div class="dots">
            <span class="dot" @click="currentSlide(index)" v-for="(q, index) in questionsTrimmed" :key="q.id" ref="dotsEl" v-bind:class="{'active' :(index == slideIndex)}"></span>
        </div>
    </div>

</section>
</template>

<script>
import axios from "axios";
export default {
    props: {
        questions: Object,
        video: Object,
    },
    computed: {

        isActive() {
            console.log(el)
            // return (el => this.isActiveButton(el))).length === 0
            return false
        },

    },
    data() {

        if (process.browser) {
            // popupEl = document.querySelector('.next-video')
        }

        return {
            slideIndex: 0,
            stars: null,
            starContainer: null
        }
    },
    watch: {
        // activeStars(){

        // },
        slideIndex() {
            console.log('detected stars have changed: ' + this.slideIndex)
            this.clearListeners();
            this.starContainer = this.$refs.questionsEl[this.slideIndex];
            this.stars = this.starContainer.querySelectorAll(".fa-star");
            this.updateActiveStars();
        }
    },
    mounted() {
        this.stars = document.querySelectorAll(".question.active .fa-star");
        this.starContainer = document.querySelector(".question.active .stars");
        this.updateActiveStars();
    },
    computed: {
        //The API returns two extra items that begin with '_' but are not questions.  This filters those out
        questionsTrimmed: function () {
            let trimmed = Object.entries(this.questions).filter(function (entry) {
                console.log(entry[1])
                return !entry[0].startsWith("_");
            })
            console.log(Object.values(trimmed))
            return trimmed
        }
    },
    methods: {
        clearListeners() {
            console.log('removing listeners')
            if (this.stars != null) {
                console.log('about to iterate through stars, there are ' + this.stars.length)
                this.stars.forEach(function (star, index) {
                    star.removeEventListener("mouseover", star.fn, false);
                });
                this.stars.forEach(function (star, index) {
                    star.removeEventListener("click", star.fn, false);
                });
            }
            if (this.starContainer != null) {
                this.starContainer.removeEventListener('click', this.starContainer.fn, false);
            }
        },
        updateActiveStars() {

            // console.log(this.stars)

            console.log(this.stars)

            let that = this;
            this.stars.forEach((star, index) => {
                star.addEventListener("mouseover", star.fn=function fn() {

                    for (var i = 0; i < that.stars.length; i++) {
                        that.stars[i].classList.remove("hover");
                    }

                    for (var i = 0; i <= index; i++) {
                        that.stars[i].className += " hover";
                    }
                }, false);

                star.addEventListener("click", star.fn=function fn() {

                    for (var i = 0; i < that.stars.length; i++) {
                        that.stars[i].classList.remove("selected");
                    }

                    for (var i = 0; i <= index; i++) {
                        that.stars[i].className += " selected";
                    }
                    that.submitFeedback()

                }, false);

            })

            this.starContainer.addEventListener("mouseleave", this.starContainer.fn=function fn() {

                console.log('leaving star container');
                for (var i = 0; i < that.stars.length; i++) {
                    that.stars[i].classList.remove("hover");
                }

            }, false);
        },
        plusSlides(n) {
            this.showSlides(this.slideIndex += n);
        },
        currentSlide(n) {
            console.log("cliicked dot: " + n)
            this.showSlides(n);
        },
        showSlides(n) {

            console.log("about to display: " + parseInt(n))
            if (parseInt(n) > this.$refs.questionsEl.length - 1) {
                console.log(parseInt(n) + ' > ' + this.$refs.questionsEl.length - 1)
                console.log("setting slide index to 0")
                this.slideIndex = 0
            } else if (parseInt(n) < 0) {
                console.log(n + ' < 0')
                this.slideIndex = this.$refs.questionsEl.length - 1
            } else {
                console.log("it's a legit slide")
                this.slideIndex = n;
            }
        },
        async submitFeedback() {
            let stars = document.querySelectorAll(".question.active .fa-star");
            let rating = 0;
            stars.forEach(function (star, index) {
                if (star.classList.contains('selected')) rating++
            })
            console.log(rating)

            const survey = await axios.post(`${process.env.cockpit.apiUrl}/forms/submit/Survey?token=${process.env.cockpit.apiToken}`,
                JSON.stringify({
                    form: {
                        video: this.video.title,
                        'question': this.questionsTrimmed[this.slideIndex][1],
                        'rating': rating
                    },
                    // sort: {
                    //   order: 1
                    // }
                    // populate: 1
                }), {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            console.log(survey);
            console.log(this.slideIndex)
            this.showSlides(this.slideIndex + 1);
        }
    }

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
        margin: 0 3px;
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
