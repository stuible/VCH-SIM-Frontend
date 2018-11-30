import Vuex from 'vuex'
import axios from 'axios'

const videoStore = () => {
  return new Vuex.Store({
    state: () => ({
      videos: undefined,

    }),
    mutations: {
      setVideos(state, videos) {
        state.videos = videos;
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
        console.log(data)
        commit('setVideos', data.entries)

      }
    }
  })
}

export default videoStore