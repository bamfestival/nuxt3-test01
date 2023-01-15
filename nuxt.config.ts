// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  mode: "universal",
    modules: ['nuxt-icon'],
    css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    generate: {
      async routes() {
        const paths = [];

        projects.forEach(project => {
          paths.push(`/project/${project.slug}`);
        });

        return paths;
      }
    }
  })