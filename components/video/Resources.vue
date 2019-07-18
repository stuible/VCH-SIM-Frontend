<template>
<section class="resources">
    <div class="container">
        <div class="title">Resources</div>
        <div class="resources">
            <a class="item" v-for="r in video.resources" :key="r.id" :href="r.value.url" target="_blank">
                <i :class="'fa ' + getFAIconClass(r.value.type)" style="font-size: 25px" src="" alt=""></i>
                <div class="info">
                    <div class="name">{{r.value.title}}</div>
                    <!-- <div class="size">2.5MB</div> -->
                </div>
            </a>
            <!-- <div class="item">
                <img src="" alt="" class="fas fa-file-pdf" style="font-size: 25px">
                <div class="info">
                    <div class="name">PDF Transcript</div>
                </div>
            </div> -->
        </div>
    </div>

</section>
</template>

<script>
export default {
    props: {
        baseURL: String,
        video: {
            type: Object,
            required: true
        }
    },
    methods: {
        getFAIconClass(type) {
            console.log(type);
            switch (type) {
                case 'pdf':
                    return 'fa-file-pdf'
                    break;

                case 'file':
                    return 'fa-file'
                    break;

                default:
                    return 'fa-link'
                    break;
            }
        }
    }

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
    display: block;
    color: $fontColour;
    text-decoration: none;
    cursor: pointer;
    max-width: 500px;
    margin-bottom: 15px;
    padding: 1em;
    border-radius: 1em;
    display: flex;
    align-items: center;

    transition: all 200ms linear;

    &:hover {
        background-color: rgb(245, 245, 245);
    }

    i {
        display: inline-block;
        margin-right: 15px;
        width: 25px;
    }

    .info {
        display: inline-block;
    }
}
</style>
