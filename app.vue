<template>
  <Navbar></Navbar>
  <Image></Image>
  <Main></Main>
  <Footer></Footer>
</template>
<script setup lang="ts">
useSeoMeta({
  applicationName: 'Personal website of Ivan Kazakov',
  author: 'Ivan Kazakov',
  title: 'Ivan Kazakov',
  ogTitle: 'Ivan Kazakov',
  description: 'Personal website of developer and product manager Ivan Kazakov!',
  ogDescription: 'Personal website of developer and product manager Ivan Kazakov!',
  ogImage: "https://objects.ikazakov.com/main.jpg",
  keywords: 'site, Ivan Kazakov, personal, software, programming, resume',
  ogUrl: 'https://ikazakov.com/',
  ogSiteName: 'Ivan Kazakov',
  ogImageWidth: '944',
  ogImageHeight: '630',
  ogLocale: 'ru_RU',
  ogType: 'website',
  twitterTitle: 'Ivan Kazakov',
  twitterDescription: 'Personal website of developer and product manager Ivan Kazakov!',
  twitterImage: "https://objects.ikazakov.com/main.jpg",
  twitterImageAlt: 'Main image',
  charset: 'utf-8',
  colorScheme: 'only light',
  rating: 'adult',
  googlebotNews: 'noindex',
  googlebot: 'noarchive',
  google: 'nopagereadaloud'
})
</script>