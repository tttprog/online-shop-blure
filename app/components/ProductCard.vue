<template>
  <div>
    <div class="p-3 bg-white/20 border border-white/20 rounded-2xl select-none">
      <div class="relative backdrop-blur-sm flex flex-col justify-between gap-3 items-center text-white">
        <u-badge class="absolute self-end" color="neutral" size="lg">{{ item.category }}</u-badge>
        <img @click="navigateTo('#')" :src="item.imageUrl" :alt="item.title"
          class="w-full h-[200px] rounded-2xl cursor-pointer">
        <nuxt-link to="#"><strong class="text-xl font-bold line-clamp-2 text-center">
            {{ item.title }}</strong></nuxt-link>
        <p class="text-gray-100 text-center line-clamp-2">{{ item.content }}</p>
        <div class="flex items-center justify-between w-full">
          <u-button @click="addToCart" icon="solar:cart-plus-bold" variant="solid" color="neutral"
            class="cursor-pointer"></u-button>
          <span dir="rtl">{{ item.price }} تومان</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

interface Item {
  title: string,
  content: string,
  price: string,
  category: string,
  imageUrl: string,
}

const props = defineProps<{ item: Item }>()

const toast = useToast()

const addToCart = () => {
  toast.add({title: 'به سبد خرید اضافه شد.', icon: 'solar:check-circle-bold'})
}
</script>

<style></style>