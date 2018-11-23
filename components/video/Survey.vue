<template>
<section class="survey">
    <div class="container">
        <div class="questions">
            <div class="question" v-for="(q, index) in questionsTrimmed" :key="q.id" ref="questionsEl" v-bind:class="{'active' :(index == slideIndex)}">
                <div class="title fade-in-slide">{{ q[1] }}</div>
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
        stars() {
            console.log(document.querySelectorAll(".question.active .fa-star"))
            return document.querySelectorAll(".question.active .fa-star");
        },
        isActive() {
            console.log(el)
            // return (el => this.isActiveButton(el))).length === 0
            return false
        }
    },
    data() {

        if (process.browser) {
            // popupEl = document.querySelector('.next-video')
        }

        return {
            slideIndex: 0,
            // slides: this.$refs.questionsEl,
            // dots: this.$refs.dotsEl,
            // stars: null,
            starContainer: null
        }
    },
    mounted() {
        // this.slides = this.$refs.questionsEl;
        // this.dots = document.querySelectorAll(".survey .dot");
        // this.stars = document.querySelectorAll(".question.active .fa-star");
        // this.starContainer = document.querySelector(".question.active .stars");
        // console.log('slides:')
        // console.log(this.slides);
        this.showSlides(this.slideIndex);
        // this.updateActiveStars();
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
        updateActiveStars() {
            let stars = document.querySelectorAll(".question.active .fa-star");
            let starContainer = document.querySelector(".question.active .stars");
            stars.forEach(function (star, index) {
                star.removeEventListener("mouseover", function () {

                });
            });
            if (this.starContainer != null) {
                this.starContainer.removeEventListener('click', function () {});
            }

            stars = document.querySelectorAll(".question.active .fa-star");
            starContainer = document.querySelector(".question.active .stars");

            stars.forEach((star, index) => {
                star.addEventListener("mouseover", function () {

                    for (var i = 0; i < stars.length; i++) {
                        stars[i].classList.remove("hover");
                    }

                    for (var i = 0; i <= index; i++) {
                        stars[i].className += " hover";
                    }
                });
                let that = this
                star.addEventListener("click", () => {

                    for (var i = 0; i < stars.length; i++) {
                        stars[i].classList.remove("selected");
                    }

                    for (var i = 0; i <= index; i++) {
                        stars[i].className += " selected";
                    }
                    this.submitFeedback()
                    // setTimeout(() => that.showSlides(that.slideIndex + 1) = false, 500)
                    // setTimeout(() => { 
                    //     this.showSlides(this.slideIndex)
                    //  }, 1000)
                });

            })

            starContainer.addEventListener("mouseleave", function () {
                console.log('leaving star container');
                for (var i = 0; i < stars.length; i++) {
                    stars[i].classList.remove("hover");
                }

            });
        },
        plusSlides(n) {
            this.showSlides(this.slideIndex += n);
        },
        currentSlide(n) {
            this.showSlides(n);
        },
        showSlides(n) {
            this.slideIndex = n;
            var i;
            console.log(this.slideIndex)
            if (n > this.$refs.questionsEl.length) {
                console.log('n > this.$refs.questionsEl.length')
                this.slideIndex = 0
            }
            if (n < 0) {
                console.log('n < 0')
                this.slideIndex = this.$refs.questionsEl.length - 1
            }
            // for (i = 0; i < this.$refs.questionsEl.length; i++) {
            //     // console.log('i = 0; i < this.$refs.questionsEl.length; i++')
            //     this.$refs.questionsEl[i].classList.remove("active");
            // }
            // for (i = 0; i < this.$refs.dotsEl.length; i++) {
            //     this.$refs.dotsEl[i].className = this.$refs.dotsEl[i].className.replace(" active", "");
            // }
            // this.$refs.questionsEl[this.slideIndex - 1].className += " active";
            // this.$refs.dotsEl[this.slideIndex - 1].className += " active";
            this.updateActiveStars();
        },
        async submitFeedback() {
            const survey = await axios.post(`${process.env.cockpit.apiUrl}/forms/submit/Survey?token=${process.env.cockpit.apiToken}`,
                JSON.stringify({
                    form: { 
                        video : this.video.title,
                        'question' : this.questionsTrimmed[this.slideIndex][1],
                        'rating' : '10'
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
