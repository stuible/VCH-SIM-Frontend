<template>
<div class="class">
    <div class="info">
        <h2>{{ classInfo.site }}</h2>
        <h3 class="duration" v-if="classInfo.duration">{{ classInfo.duration }} minutes</h3>
        <!-- <h5 class="location" v-if="classInfo.location">{{ classInfo.location }}</h5> -->
        <div>For more info, contact:</div>
        <h5 class="instructor" v-if="classInfo.instructor"><a :href="'mailto:' + classInfo.instructorEmail">{{ classInfo.instructor }}</a></h5>
        <div class="position">{{classInfo.instructorPosition}}</div>
    </div>
    <div class="register"><a class="button" :href="classInfo.url" target="_blank">Register</a></div>
</div>
</template>

<script>
export default {
    props: {
        classInfo: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.class {
    margin-bottom: 2em;
    border-bottom: 2px solid #e9e8e8;
    padding-bottom: 2em;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
}

h2 {
    margin-block-start: 10px;
    margin-block-end: 10px;
    text-transform: uppercase;
    font-weight: 900;
}

h3,
h4,
h5 {
    margin-block-start: 10px;
    margin-block-end: 10px;
}

.info {
    display: inline-block;
}
.instructor a{
    color: rgb(65, 65, 65);
    // text-decoration: none;
    // border-bottom: 2px solid $accentTeal;
    font-size: 1.25em;

    // &:hover {
    //     text-decoration: underline;
    // }
}
.position {
    font-size: 0.8em;
}

.register {
    // display: inline-block;
    align-self: center;
}

.button{
    background-color: none;
    text-decoration: none;
    color: $accentTeal;
    font-weight: 600;
    padding: 1em 2em;
    border-radius: 1em;
    border: 2px solid $accentTeal;
    transition: background-color 100ms ease-in;

    &:hover {
        background-color: $accentTeal;
        color: white;
    }
}
</style>
