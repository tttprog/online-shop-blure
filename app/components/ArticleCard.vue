<template>
  <div class="flex flex-col gap-5 bg-white/20 p-5 rounded-2xl cursor-pointer" data-aos="fade-up" @click="navigateTo('#')">
    <img :src="item.imageUrl" alt="title" class="select-none">
    <div class="flex flex-col gap-3 justify-center items-center">
      <h5 class="text-white text-lg font-bold line-clamp-2">{{ item.title }}</h5>
      <p class="text-white/80 line-clamp-2">{{ item.content }}</p>
    </div>
    <u-button to="#" class="w-full lg:w-1/3 justify-center" color="neutral">بیشتر بخوانید</u-button>
  </div>
</template>

<script lang="ts" setup>

interface Item {
  title: string,
  slug: string,
  content: string,
  imageUrl: string
}

const props = defineProps<{ item: Item }>()

</script>

<style></style>