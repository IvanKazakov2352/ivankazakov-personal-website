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
  description: 'Personal website of developer and product manager Ivan Kazakov! It contains all information about my activity and portfolio!',
  ogDescription: 'Personal website of developer and product manager Ivan Kazakov! It contains all information about my activity and portfolio!',
  keywords: 'site, Ivan Kazakov, personal, software, programming, resume',
  ogUrl: 'https://ikazakov.com/',
  ogSiteName: 'Ivan Kazakov',
  ogLocale: 'ru_RU',
  ogType: 'website',
  twitterTitle: 'Ivan Kazakov',
  twitterDescription: 'Personal website of developer and product manager Ivan Kazakov! It contains all information about my activity and portfolio!'
})
</script>