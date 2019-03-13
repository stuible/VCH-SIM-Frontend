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
    border-bottom: 2px solid rgb(228, 228, 228);
    padding-bottom: 1em;
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
    color: darkgray;
    font-size: 1.25em;
}
.position {
    font-size: 0.8em;
}

.register {
    // display: inline-block;
    align-self: center;
}

.button{
    background-color: darkgray;
    text-decoration: none;
    color: white;
    font-weight: 600;
    padding: 1em 2em;
    border-radius: 1em;
    transition: background-color 100ms ease-in;

    &:hover {
        background-color: $accentTeal;
    }
}
</style>
