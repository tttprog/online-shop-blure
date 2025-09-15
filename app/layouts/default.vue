<template>
  <div class="relative flex flex-col gap-10 bg-[url('/images/bg-blur.png')] bg-cover bg-repeat-space bg-center h-full">
    <div class="mx-auto flex h-full flex-col justify-start w-full items-center z-50 overflow-hidden fixed"
      v-if="loading">
      <div
        class="w-full h-screen backdrop-blur-sm bg-white/20 rounded-2xl flex flex-col items-center justify-center gap-5">
        <Icon name="solar:settings-broken" size="80" class="animate-spin text-white" />
        <span class="text-3xl font-bold text-white">درحال بارگذاری...</span>
      </div>
    </div>
    <div class="flex flex-col mx-2">
      <Header />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>

import { ref, onMounted } from "vue";

const loading = ref(true);

onMounted(() => {
  loading.value = false
})


</script>

<style></style>