export default async (ctx) => {
    await ctx.store.dispatch('nuxtServerInit', ctx)
  }