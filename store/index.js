import Vuex from 'vuex'
import axios from 'axios'

const videoStore = () => {
  return new Vuex.Store({
    state: () => ({
      videos: undefined,
      survey: undefined,
      thumbnails: {}

    }),
    mutations: {
      setVideos(state, videos) {
        state.videos = videos;
      },
      setSurvey(state, survey) {
        state.survey = survey;
      },
      addThumbnail(state, payload){
        state.thumbnails[payload.id] = payload.thumbnail
        console.log(payload.id + 'has this: ' + payload.thumbnail)
        console.log(state.thumbnails)
      }
    },
    getters: {
      getThumbnailById: (state) => (id) => {
        return state.thumbnails[id]
      }
    },
    actions: {
      async nuxtServerInit({ commit }, { app }) {
        const { data } = await axios.post(`${process.env.cockpit.apiUrl}/collections/get/Video?token=${process.env.cockpit.apiToken}`,
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

        const survey = await axios.post(`${process.env.cockpit.apiUrl}/singletons/get/Survey?token=${process.env.cockpit.apiToken}`,
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
        // console.log(survey)
        commit('setSurvey', survey.data)

      }
    }
  })
}

export default videoStore