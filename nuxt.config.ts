import {fileURLToPath} from "url";

export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: {enabled: true},
    srcDir: "./",
    alias: {
        "@": fileURLToPath(new URL("./", import.meta.url)),
    },
    css: ["@/assets/scss/index.scss"],
    app: {
        head: {
            htmlAttrs: {
                lang: "ru",
            },
            title: "LineArt | alumo",
            meta: [
                {charset: "utf-8"},
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
            ],
            link: [{rel: "icon", type: "image/x-ico", href: "/favicon.ico"}],
        },
        pageTransition: {name: "page", mode: "out-in"},
        layoutTransition: {name: "opacity", mode: "out-in"},
    },
    modules: [
        "@nuxt/image",
        "@nuxtjs/google-fonts",
        "nuxt-swiper",
        // "@nuxtjs/html-validator",
    ],
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
        server: {
            port: 3000,
            host: process.env.DEV_API_HOST,
        }
    },
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
            path: "~/components/ui",
            pathPrefix: false,
        },
        {
            path: "~/assets/icons",
            pathPrefix: false,
        },
    ],
    googleFonts: {
        families: {
            Montserrat: [400, 500, 600, 700],
            Inter: [400, 500, 600, 700],
        },
        display: "swap",
    },
});
