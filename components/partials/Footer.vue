<template>
<footer>
    <div class="container">
        <div class="logos">
            <img src="~assets/image/logos/fraserhealth.svg" alt="">
            <img src="~assets/image/logos/vch.svg" alt="">
            <img src="~assets/image/logos/interiorhealth.svg" alt="">
            <img src="~assets/image/logos/bcemn.svg" alt="">
            <img src="~assets/image/logos/island.svg" alt="" style="width: 50%">
            <img src="~assets/image/logos/providence.svg" alt="" style="width: 75%">
            <img src="~assets/image/logos/northern.svg" alt="" style="width: 65%">
            <img src="~assets/image/logos/ubc.svg" alt="">
      </div>
            <div class="info">© 2018 . VCH | Powered by Clinical Education</div>
        </div>
</footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

footer {
    background-color: $footerColour;
}

.logos {
    padding: 5em 3em;
    // padding-top: 3em;
    // padding-bottom: 5em;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    justify-content: space-evenly;
    align-items: stretch;
    grid-gap: 75px 75px;
    grid-template-areas: "."
        "."
        "."
        ".";

    @include breakpoint(phablet) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: ". ."
            ". .";
    }

    @include breakpoint(tablet) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: ". . . .";
    }

    img {
        width: 100%;
        align-items: center;
        margin: 0 auto;
        max-width: 12em;
    }
}

.info {
    padding-bottom: 50px;
    text-align: center;
    color: $footerText;
}

</style>
