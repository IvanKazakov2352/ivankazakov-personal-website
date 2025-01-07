<template>
  <section id="navbar" class="flex w-full h-12 bg-[#f5f5f5] justify-between items-center sticky top-0">
    <div id="navbar-title-block" class="flex font-raleway items-center cursor-pointer hover:bg-[#e0e0e0] h-6 ml-2 rounded-[10px]" aria-label="Ivan Kazakov" title="Ivan Kazakov">
      <img id="navbar-image" class="h-6 w-6 ml-2 select-none pointer-events-none" :src="image('siba.svg')" alt="siba-inu">
      <p id="navbar-title" class="whitespace-nowrap ml-2 mr-4 select-none 1sm:text-sm">Ivan Kazakov</p>
    </div>
  </section>
</template>
<script setup lang="ts">
const { image } = useImage()
</script>