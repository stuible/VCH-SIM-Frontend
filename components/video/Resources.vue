<template>
<section class="resources">
    <div class="container">
        <div class="title">Resources</div>
        <div class="resources">
            <div class="item">
                <img class="fa fa-link" style="font-size: 25px" src="" alt="">
                <div class="info">
                    <div class="name">Download Video Title</div>
                    <div class="size">2.5MB</div>
                </div>
            </div>
            <div class="item">
                <img src="" alt="" class="fas fa-file-pdf" style="font-size: 25px">
                <div class="info">
                    <div class="name">PDF Transcript</div>
                    <div class="size">1.5MB</div>
                </div>
            </div>
        </div>
    </div>

</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.container {

    @include breakpoint(phablet) {}

    @include breakpoint(tablet) {}

}

div.resources {
    margin-top: 25px;
}

.item {
    cursor: pointer;
    max-width: 250px;
    margin-bottom: 15px;
    padding: 1em;
    border-radius: 1em;
    transition: all 200ms linear;

    &:hover {
        background-color: rgb(245, 245, 245);
    }

    img {
        display: inline-block;
        margin-right: 5px;
        width: 25px;
    }

    .info {
        display: inline-block;
    }
}
</style>
