// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devServerHandlers: [],
  components: [
    {
      path: "~/components", // Базовая папка для компонентов
      pathPrefix: false, // Убирает префиксы папок из имен компонентов
      extensions: ["vue"], // Указывает, какие файлы обрабатывать
      global: true, // Включает автоматический импорт компонентов
    },
    {
      path: "~/components/common/ui",
      pathPrefix: false, // Для UI
    },
    {
      path: "~/components/icons",
      pathPrefix: false, // Для Icons
    },
  ],
  pages: true,
  devtools: {
    enabled: false,
  },
  modules: [
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "nuxt-swiper",
    "@nuxtjs/html-validator",
  ],
  srcDir: "./src",
  alias: {
    "@": fileURLToPath(new URL("./src", import.meta.url)),
    "/public/": fileURLToPath(new URL("./public", import.meta.url)),
  },
  css: ["@/assets/scss/index.scss"],
  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      title: "LineArt | alumo",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, interactive-widget=resizes-content, minimal-ui",
        },
        // {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        // {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
      ],
      link: [{ rel: "icon", type: "image/x-ico", href: "/favicon.ico" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "opacity", mode: "out-in" },
    // pageTransition: false,
    // layoutTransition: false
  },
  googleFonts: {
    families: {
      Montserrat: {
        wght: [400, 500, 600, 700],
      },
      Inter: {
        wght: [400, 500, 600, 700],
      },
    },
    display: "swap",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          additionalData: `
																				@use "@/assets/scss/reset" as *;
																				@use "@/assets/scss/fonts" as *;
																				@use "@/assets/scss/vars" as *;
																				@use "@/assets/scss/mixins" as *;
																				`,
        },
      },
    },
    plugins: [
      {
        name: "log-static-files",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url?.startsWith("/_nuxt/")) {
              console.log(`Static file accessed: ${req.url}`);
            }
            next();
          });
        },
      },
    ],
  },
});
