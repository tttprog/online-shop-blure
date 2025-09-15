<template>
  <div class="mt-30 flex flex-col gap-10 container mx-auto">
    <LazyHero />
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
      <LazyMiniCard v-for="item in feauturItems" :item="item" />
    </div>
    <div class="flex flex-col gap-5">
      <h6 class="text-2xl text-white font-bold text-center">خرید بر اساس دسته بندی</h6>
      <u-carousel v-slot="{ item }" :items="categories" arrows dir="ltr"
        :ui="{ item: 'basis-1/2 md:basis-1/4 lg:basis-1/6' }">
        <LazyCategoryCard :item="item" />
      </u-carousel>
    </div>
    <div class="w-full flex flex-col gap-5 border p-5 border-white/20 rounded-2xl">
      <div class="flex items-center justify-between">
        <h6 class="text-2xl text-white font-bold">آخرین محصولات</h6>
        <nuxt-link to="#" class="text-white underline">مشاهده همه</nuxt-link>
      </div>
      <u-carousel v-slot="{ item }" :items="products" arrows dir="ltr"
        :ui="{ item: 'sm:basis-1 md:basis-1/2 lg:basis-1/6' }">
        <LazyProductCard :item="item" />
      </u-carousel>
    </div>
    <LazySpecialOffer />
    <div class="w-full flex flex-col gap-5 border p-5 border-white/20 rounded-2xl">
      <div class="flex items-center justify-between">
        <h6 class="text-2xl text-white font-bold">پر طرفدار ها 💥</h6>
        <nuxt-link to="#" class="text-white underline">مشاهده همه</nuxt-link>
      </div>
      <u-carousel v-slot="{ item }" :items="products" arrows dir="ltr"
        :ui="{ item: 'sm:basis-1 md:basis-1/2 lg:basis-1/6' }">
        <LazyProductCard :item="item" />
      </u-carousel>
    </div>
    <div class="grid grid-cols-2 gap-5">
      <LazyCategoryCard v-for="item in popularCategories" :item="item" />
    </div>
    <div class="w-full flex flex-col gap-5 border p-5 border-white/20 rounded-2xl">
      <h6 class="text-2xl text-white font-bold">اخیرا مشاهده کردید</h6>
      <u-carousel v-slot="{ item }" :items="products" arrows dir="ltr"
        :ui="{ item: 'sm:basis-1 md:basis-1/2 lg:basis-1/6' }">
        <LazyProductCard :item="item" />
      </u-carousel>
    </div>
    <div class="flex flex-col items-center justify-center gap-5 border border-white/20 p-5 rounded-2xl">
      <h6 class="text-2xl text-white font-bold">اخرین مقاله ها</h6>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <ArticleCard v-for="article in articles" :item="article" />
      </div>
    </div>
    <JoinNews />
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

const categories = ref([
  {
    "image": "/images/iphone.png",
    "title": "موبایل",
    "slug": "mobile"
  },
  {
    "image": "/images/iphone.png",
    "title": "لباس مردانه و زنانه",
    "slug": "clothes"
  },
  {
    "image": "/images/iphone.png",
    "title": "کفش",
    "slug": "shoes"
  },
  {
    "image": "/images/iphone.png",
    "title": "کیف و ساک",
    "slug": "bags"
  },
  {
    "image": "/images/iphone.png",
    "title": "دارو",
    "slug": "bags"
  },
  {
    "image": "/images/iphone.png",
    "title": "کامپیوتر",
    "slug": "bags"
  },
  {
    "image": "/images/iphone.png",
    "title": "آشپزخانه",
    "slug": "bags"
  },

])

const popularCategories = ref([
  {
    "image": "/images/iphone.png",
    "title": "موبایل",
    "slug": "mobile"
  },
  {
    "image": "/images/iphone.png",
    "title": "لباس مردانه و زنانه",
    "slug": "clothes"
  },
  {
    "image": "/images/iphone.png",
    "title": "کفش",
    "slug": "shoes"
  },
  {
    "image": "/images/iphone.png",
    "title": "کیف و ساک",
    "slug": "bags"
  },

])

const articles = ref([
  {
    title: "مقاله تستی 1",
    content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز ",
    slug: "test-article-1",
    imageUrl: "/images/iphone.png",
  },
  {
    title: "مقاله تستی 2",
    content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز ",
    slug: "test-article-1",
    imageUrl: "/images/iphone.png",
  },
  {
    title: "مقاله تستی 3",
    content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز ",
    slug: "test-article-1",
    imageUrl: "/images/iphone.png",
  },
  {
    title: "مقاله تستی 4",
    content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز ",
    slug: "test-article-1",
    imageUrl: "/images/iphone.png",
  },
])

</script>

<style></style>