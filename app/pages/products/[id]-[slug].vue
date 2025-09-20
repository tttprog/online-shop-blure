<template>
  <div class="mt-30 flex flex-col gap-10 container mx-auto">
    <UBreadcrumb :items="items" :ui="{ link: 'text-white', separatorIcon: 'rotate-180 text-white' }" />
    <div class="flex flex-col gap-10">
      <div class="flex flex-col gap-5">
        <h1 class="text-white font-bold text-2xl">کفش مردانه چرمی تبریز</h1>
        
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { BreadcrumbItem } from '@nuxt/ui';


const route = useRoute()
const items = ref<BreadcrumbItem[]>([
  {
    label: 'خانه',
    to: '/'
  },
  {
    label: 'محصولات',
    to: '/products'
  },
  {
    label: 'مردانه',
    to: '/products'
  },
  {
    label: 'کفش',
    to: '/products'
  },
])
</script>

<style></style>