<template>
  <div class="mt-5 container mx-auto fixed left-0 right-0 rounded-2xl bg-white/20 border border-white/20 z-50">
    <div class="w-full py-2 px-10 backdrop-blur-sm rounded-full flex items-center justify-between">
      <div>
        <h1 class="lg:text-lg font-bold text-white">آنلاین شاپ آلمان</h1>
      </div>
      <div class="items-center gap-3 hidden lg:flex">
        <u-navigation-menu :items="menus" dir="rtl" class="w-full justify-center" content-orientation="vertical"
          :ui="{ link: 'text-white hover:text-white', }" variant="link">
          <template #item-label="{ item, active }">
            <span class="text-black" v-if="active">{{ item.label }}</span>
            <span class="text-white hover:text-white" v-if="!active">{{ item.label }}</span>
          </template>
        </u-navigation-menu>
      </div>
      <div class="lg:flex items-center gap-3 hidden">
        <u-button to="#" variant="solid" icon="solar:user-bold" size="lg"
          class="rounded-full bg-transparent text-white hover:bg-transparent hover:text-white border">ورود</u-button>
        <u-button to="#" variant="ghost" icon="solar:user-plus-bold" size="lg" class="rounded-full text-white ">ثبت
          نام</u-button>
      </div>
      <USlideover v-model:open="openMenu">
        <UButton class="text-white lg:hidden" variant="ghost" icon="solar:hamburger-menu-linear"
          @click="openMenu = true" />

        <template #content>
          <div class="flex flex-col gap-10 h-screen bg-[url('/images/bg-blur.png')] p-3 bg-cover bg-center">
            <div class="backdrop-blur-3xl h-screen p-5 flex gap-10 flex-col shadow-2xl rounded-3xl">
              <u-button variant="outline" color="neutral" icon="solar:close-circle-outline"
                class="w-auto self-start rounded-full" size="xl" @click="openMenu = false"></u-button>
              <u-navigation-menu :items="menus" dir="rtl" orientation="vertical" variant="link">
                <template #item-label="{ item, active }">
                  <span class="text-white" v-if="active">{{ item.label }}</span>
                  <span class="text-white hover:text-white" v-if="!active">{{ item.label }}</span>
                </template>
              </u-navigation-menu>
              <div class="flex items-center justify-between w-full gap-5">
                <u-button to="#" variant="solid" icon="solar:user-bold" size="lg"
                  class="w-1/2 justify-center rounded-full bg-transparent text-white hover:bg-transparent hover:text-white border">ورود</u-button>
                <u-button to="#" variant="ghost" icon="solar:user-plus-bold" size="lg"
                  class="w-1/2 justify-center rounded-full text-white hover:bg-transparent hover:text-white">ثبت
                  نام</u-button>
              </div>
            </div>
          </div>
        </template>
      </USlideover>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DropdownMenuItem } from '@nuxt/ui';


const authenticated = ref(true)
const username = "نام و نام خانوادگی"

const openMenu = ref(false)


const menus = ref([
  {
    label: "خانه",
    to: "/",
  },
  {
    label: "محصولات",
    to: "/products",
  },
  {
    label: "درباره ما",
    to: "#",
  },
  {
    label: "تماس با ما",
    to: "#",
  },


])

const dropdownItemsAuth = ref<DropdownMenuItem[]>(
  [
    {
      label: "پروفایل",
      icon: "solar:user-id-bold",
      to: '#'
    },
    {
      label: "سفارشات",
      icon: "solar:cart-large-minimalistic-bold",
      to: '#'
    },
    {
      label: "علاقه مندی ها",
      icon: "solar:bag-heart-bold",
      to: '#'
    },
    {
      label: "خروج",
      icon: "solar:exit-bold",
      class: 'text-red-500',
      onSelect: () => authenticated.value = false
    },
  ]
)



const saerchValue = ref('')

</script>

<style></style>