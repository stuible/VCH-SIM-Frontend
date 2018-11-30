import Vuex from 'vuex'
import axios from 'axios'

const videoStore = () => {
  return new Vuex.Store({
    state: () => ({
      videos: undefined,
      survey: undefined

    }),
    mutations: {
      setVideos(state, videos) {
        state.videos = videos;
      },
      setSurvey(state, survey) {
        state.survey = survey;
      }
    },
    getters: {
      // videos(state) {
      //   return state.videos
      // }
    },
    actions: {
      async nuxtServerInit({ commit }, { app }) {
        const  {data}  = await axios.post(`${process.env.cockpit.apiUrl}/collections/get/Video?token=${process.env.cockpit.apiToken}`,
          JSON.stringify({
            // filter: { published: true },
            sort: {
              order: 1
            },
            populate: 1
          }), {
            headers: {
              'Content-Type': 'application/json'
            }
          })
        // console.log(data)
        commit('setVideos', data.entries)

        const  survey  = await axios.post(`${process.env.cockpit.apiUrl}/singletons/get/Survey?token=${process.env.cockpit.apiToken}`,
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
        console.log(survey)
        commit('setSurvey', survey.data)

      }
    }
  })
}

export default videoStore