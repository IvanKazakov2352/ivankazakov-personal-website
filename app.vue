<template>
  <Navbar></Navbar>
  <Image></Image>
  <Main></Main>
  <Footer></Footer>
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
  ogImage: "https://objects.ikazakov.com/main.jpg",
  keywords: 'site, Ivan Kazakov, personal, software, programming, resume, freelance-finder, Иван Казаков',
  ogUrl: 'https://ikazakov.com/',
  ogSiteName: 'Ivan Kazakov',
  ogImageWidth: '944',
  ogImageHeight: '630',
  ogLocale: 'ru_RU',
  ogType: 'website',
  twitterTitle: 'Ivan Kazakov',
  twitterDescription: 'Персональный веб-сайт разработчика и начинающего продукт менеджера - Ивана Казакова!',
  twitterImage: "https://objects.ikazakov.com/main.jpg",
  twitterImageAlt: 'Main image',
  charset: 'utf-8',
  colorScheme: 'only light',
  robots: 'index, follow, nosnippet',
  rating: 'adult',
  formatDetection: 'telephone=no'
})
useHead({
  meta: [
    { property: 'vk:image', content: 'https://objects.ikazakov.com/vk.jpg' },
    { property: 'fb:image', content: 'https://objects.ikazakov.com/main.jpg' }
  ]
})
</script>