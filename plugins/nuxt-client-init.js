// Runs Vuex nuxtServerInit on client side 
export default async (ctx) => {
    await ctx.store.dispatch('nuxtServerInit', ctx)
  }