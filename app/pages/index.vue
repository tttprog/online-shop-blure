<template>
  <div class="mt-30 flex flex-col gap-10 container mx-auto">
    <Hero />
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
      <MiniCard v-for="item in feauturItems" :item="item" />
    </div>
    <div class="flex flex-col gap-5">
      <h6 class="text-2xl text-white font-bold text-center">خرید بر اساس دسته بندی</h6>
    </div>
    <div class="w-full flex flex-col gap-5">
      <h6 class="text-2xl text-white font-bold">آخرین محصولات</h6>
      <u-carousel v-slot="{ item }" :items="products" arrows dir="ltr" :ui="{ item: 'sm:basis-1 md:basis-1/2 lg:basis-1/6' }">
        <ProductCard :item="item" />
      </u-carousel>
    </div>
  </div>
</template>

<script lang="ts" setup>

const feauturItems = ref([
  {
    "icon": "solar:call-chat-bold",
    "title": "پشتیبانی 24 ساعته"
  },
  {
    "icon": "solar:sort-by-time-bold",
    "title": "ارسال سریع"
  },
  {
    "icon": "solar:dollar-bold",
    "title": "عودت وجه"
  },
  {
    "icon": "solar:check-circle-bold",
    "title": "تضمین کیفیت"
  },
])

const products = ref([
  {
    title: "موبایل آیفون 17 پرو (2025)",
    content: "حافظه 1 ترابایتی و رام 12 گیگ،‌ دوربین 48 مگاپیکسلی",
    price: "1200000",
    category: "موبایل",
    imageUrl: "/images/iphone.png",
  },
  {
    title: "موبایل آیفون 17 پرو (2025)",
    content: "حافظه 1 ترابایتی و رام 12 گیگ،‌ دوربین 48 مگاپیکسلی",
    price: "1200000",
    category: "موبایل",
    imageUrl: "/images/iphone.png",
  },
  {
    title: "موبایل آیفون 17 پرو (2025)",
    content: "حافظه 1 ترابایتی و رام 12 گیگ،‌ دوربین 48 مگاپیکسلی",
    price: "1200000",
    category: "موبایل",
    imageUrl: "/images/iphone.png",
  },
  {
    title: "موبایل آیفون 17 پرو (2025)",
    content: "حافظه 1 ترابایتی و رام 12 گیگ،‌ دوربین 48 مگاپیکسلی",
    price: "1200000",
    category: "موبایل",
    imageUrl: "/images/iphone.png",
  },
  {
    title: "موبایل آیفون 17 پرو (2025)",
    content: "حافظه 1 ترابایتی و رام 12 گیگ،‌ دوربین 48 مگاپیکسلی",
    price: "1200000",
    category: "موبایل",
    imageUrl: "/images/iphone.png",
  },
  {
    title: "موبایل آیفون 17 پرو (2025)",
    content: "حافظه 1 ترابایتی و رام 12 گیگ،‌ دوربین 48 مگاپیکسلی",
    price: "1200000",
    category: "موبایل",
    imageUrl: "/images/iphone.png",
  },
  {
    title: "موبایل آیفون 17 پرو (2025)",
    content: "حافظه 1 ترابایتی و رام 12 گیگ،‌ دوربین 48 مگاپیکسلی",
    price: "1200000",
    category: "موبایل",
    imageUrl: "/images/iphone.png",
  },
  {
    title: "موبایل آیفون 17 پرو (2025)",
    content: "حافظه 1 ترابایتی و رام 12 گیگ،‌ دوربین 48 مگاپیکسلی",
    price: "1200000",
    category: "موبایل",
    imageUrl: "/images/iphone.png",
  },
])


</script>

<style></style>