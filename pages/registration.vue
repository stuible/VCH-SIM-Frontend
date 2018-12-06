<template>
<section>
    <div class="container">
        <h1 class="title">Class Registration</h1>
        <class v-for="c in classes" :key="c.id" :classInfo="c.value"> {{c.value.autority}}</class>
    </div>
</section>
</template>

<script>
import axios from 'axios'

import Class from '~/components/registration/Class.vue'

export default {
    components: {
        Class
    },
    async asyncData({ env, params }) {
    const { data } = await axios.post(`${env.cockpit.apiUrl}/singletons/get/Registration?token=${env.cockpit.apiToken}`,
      JSON.stringify({
        // filter: { slug: params.slug },
        // sort: {
        //   order: 1
        // }
        // populate: 1
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    console.log(data.Class)
    return {
      classes: data.Class,
    };
  },
}
</script>

<style lang="scss" scoped>
.title {
    margin-bottom: 2em;
}
section {
  background-color: #FBFBFB;
}
</style>
