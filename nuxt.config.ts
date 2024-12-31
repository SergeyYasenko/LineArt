import { fileURLToPath } from "url";

export default defineNuxtConfig({
   compatibilityDate: "2024-04-03",
   devtools: { enabled: true },
   nitro: {
      prerender: {
         routes: ["/api/loadPage"],
      },
   },
   components: [
      {
         path: "~/components",
         pathPrefix: false,
         extensions: ["vue"],
         global: true,
      },
      {
         path: "~/components/common/ui",
         pathPrefix: false,
      },
      {
         path: "~/components/icons",
         pathPrefix: false,
      },
   ],
   pages: true,
   modules: [
      "@nuxt/image",
      "@nuxtjs/google-fonts",
      "nuxt-swiper",
      "@nuxtjs/html-validator",
   ],
   srcDir: "./src",
   alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
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
               content: "width=device-width, initial-scale=1",
            },
         ],
         link: [{ rel: "icon", type: "image/x-ico", href: "/favicon.ico" }],
      },
      pageTransition: { name: "page", mode: "out-in" },
      layoutTransition: { name: "opacity", mode: "out-in" },
   },
   googleFonts: {
      families: {
         Montserrat: [400, 500, 600, 700],
         Inter: [400, 500, 600, 700],
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
   },
});
