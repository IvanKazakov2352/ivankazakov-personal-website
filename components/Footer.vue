<template>
  <div
    id="footer"
    class="flex w-full h-14 bg-[#f5f5f5] justify-center items-center 1sm:text-sm"
    :title="new Date().getFullYear() + '- Created by Ivan Kazakov'"
    :aria-label="new Date().getFullYear() + '- Created by Ivan Kazakov'"
  >
    {{ new Date().getFullYear() }} - Created by Ivan Kazakov
  </div>
</template>
<script setup lang="ts"></script>
