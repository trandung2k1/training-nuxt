// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    ssr: true,
    devtools: { enabled: true },
    //  Nuxt cho phép các trang được hiển thị tĩnh tại thời điểm xây dựng để cải thiện hiệu suất hoặc số liệu SEO nhất định
    //  Kết xuất trước các tuyến đường tại thời điểm xây dựng và bao gồm chúng trong bản dựng của bạn dưới dạng tài sản tĩnh
    nitro: {
        prerender: {
            routes: ['/posts/1', '/posts/2'],
        },
    },
    //  Prerendering auto page
    routeRules: {
        '/': { prerender: true },
        '/about': { prerender: true },
    },
    devServer: {
        port: 8000,
    },
});
