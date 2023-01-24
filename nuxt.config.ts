// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  mode: "universal",
  modules: ["nuxt-icon"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  },
  generate: {
    
    async routes() {
      const paths = [];

      projects.forEach((project) => {
        paths.push(`/project/${project.slug}`);
      });

      return paths;
    },
  },
});
