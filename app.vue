<template>
  <main>
    <Navbar></Navbar>
    <Image></Image>
    <Main></Main>
    <Footer></Footer>
  </main>
</template>
<script setup lang="ts">
useSeoMeta({
  author: 'Ivan Kazakov',
  title: 'Ivan Kazakov',
  creator: 'Ivan Kazakov',
  ogTitle: 'Ivan Kazakov',
  applicationName: 'Персональный веб-сайт Ивана Казакова',
  description: 'Персональный веб-сайт разработчика и начинающего продукт менеджера - Ивана Казакова!',
  ogDescription: 'Персональный веб-сайт разработчика и начинающего продукт менеджера - Ивана Казакова!',
  ogImage: "https://cdn.ikazakov.com/main.jpg",
  keywords: 'site, Ivan Kazakov, personal, software, programming, resume, freelance-finder, Иван Казаков',
  ogUrl: 'https://ikazakov.com/',
  ogSiteName: 'Ivan Kazakov',
  ogImageWidth: '944',
  ogImageHeight: '630',
  ogLocale: 'ru_RU',
  ogType: 'website',
  twitterTitle: 'Ivan Kazakov',
  twitterDescription: 'Персональный веб-сайт разработчика и начинающего продукт менеджера - Ивана Казакова!',
  twitterImage: "https://cdn.ikazakov.com/main.jpg",
  twitterImageAlt: 'Main image',
  charset: 'utf-8',
  colorScheme: 'only light',
  robots: 'index, nofollow, nosnippet, noarchive',
  googlebot: 'noarchive',
  googleSiteVerification: 'u9Qh0jlqzzVFIP0SxcbFa5EPQ5shYQmkuAc0m3BX2yo',
  rating: 'adult',
  formatDetection: 'telephone=no',
  articleModifiedTime: '2024-07-30'
})
useHead({
  meta: [
    { property: 'vk:image', content: 'https://cdn.ikazakov.com/vk.jpg' },
    { property: 'fb:image', content: 'https://cdn.ikazakov.com/main.jpg' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://cdn.ikazakov.com/siba-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://cdn.ikazakov.com/siba-16x16.png' },
  ]
})
</script>