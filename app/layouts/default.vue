<template>
  <div class="relative flex flex-col gap-10 bg-[url('/images/bg-blur.png')] bg-cover bg-repeat-space bg-center h-full"
    v-auto-animate>
    <div class="flex flex-col mx-2">
      <Header />
      <slot />
      <div class="mt-50"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>