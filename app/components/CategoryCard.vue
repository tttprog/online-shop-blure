<template>
  <div>
    <div class="p-3 bg-white/20 border border-white/20 rounded-2xl" @click="navigateTo('#')" data-aos="fade-up">
      <div class="backdrop-blur-sm flex flex-col justify-between gap-3 items-center text-white">
        <img :src="item.image" :alt="item.title" :title="item.title" class="rounded-full h-[200px]">
        <nuxt-link to="#" class="font-bold">{{ props.item?.title }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

interface Item {
  image: string,
  title: string,
  slug: string,
}

const props = defineProps<{ item: Item }>()



</script>

<style></style>