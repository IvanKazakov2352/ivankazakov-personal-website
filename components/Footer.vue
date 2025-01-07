<template>
  <section
    id="footer-section"
    class="flex w-full h-14 bg-[#f5f5f5] justify-center items-center 1sm:text-sm"
    :title="footerText"
  >
    {{ footerText }}
  </section>
</template>
<script setup lang="ts">
  const footerText = ref<string>(`${new Date().getFullYear()} - Created by Ivan Kazakov`)
</script>
