<template>
  <div
    class="relative overflow-scroll w-full p-5 
              bg-white/30 backdrop-blur-md rounded-2xl border border-white/20 flex flex-col-reverse lg:flex-row justify-between items-center gap-5 ">
    <div class="lg:w-1/2 flex flex-col gap-10 justify-around">
      <strong class="text-xl lg:text-3xl text-white text-center">🛍️ خرید آسان، تحویل سریع</strong>
      <p class="lg:text-xl text-center text-white lg:w-2/3 text-lg self-center">جدیدترین محصولات با بهترین قیمت‌ها، فقط
        چند کلیک با
        شما فاصله دارن. همین حالا خرید کن!</p>
      <u-button
        class="justify-center lg:w-1/4 self-center bg-transparent text-white hover:text-black cursor-pointer py-5 rounded-full"
        variant="outline" color="neutral" size="xl" to="/products">همین الان خرید کن!</u-button>
    </div>
    <div class="lg:w-1/2">
      <img src="/images/hero.png" alt="" class="w-screen h-[400] lg:h-[500px] rounded-2xl">
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>