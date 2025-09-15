<template>
  <div class="flex flex-col p-5 gap-5 bg-white/20 shadow justify-center items-center rounded-2xl" data-aos="fade-up">
    <div class="flex flex-col gap-3 justify-center items-center">
      <div class="flex items-center justify-center gap-2">
        <Icon name="solar:volume-bold" class="text-white rotate-200" size="60" />
        <h5 class="text-white text-2xl">در خبرنامه عضو شوید</h5>
      </div>
      <p class="text-white/90">با عضویت در خبرنامه، از محصولات و تخفیف ها زود تر از همه با خبر شو!</p>
    </div>
    <div class="flex flex-col lg:flex-row gap-2 w-full justify-center">
      <u-input :ui="{ base: 'bg-white/20 border border-white/20 text-white', }" class="w-full lg:w-3/4"
        size="xl"></u-input>
      <u-button color="neutral" size="xl" class="justify-center">عضویت</u-button>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>