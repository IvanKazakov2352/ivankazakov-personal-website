<template>
  <img
    id="main-image"
    class="block object-cover rounded-[0px] w-full h-[30vh] object-center select-none pointer-events-none"
    :src="image('main.jfif')"
    alt="main-image"
  />
</template>
<script setup lang="ts">
const { image } = useImage()
</script>
