<template>
  <div>
    <div class="flex flex-col gap-10">
      <div class="flex justify-between items-center w-full bg-[#111827] p-3">
        <div class="flex gap-5 items-center">
          <div class="flex items-center gap-1">
            <Icon name="solar:bag-smile-bold" size="20" />
            <span>ارسال رایگان برای سفارشات برای 500 هزار تومان</span>
          </div>
          <div class="flex items-center gap-1">
            <Icon name="solar:phone-bold" size="20" />
            <span>09112223344</span>
          </div>
        </div>
        <div class="flex gap-5 items-center">
          <a href="#">پیگیری سفارش</a>
          <a href="#">مشاوره</a>
        </div>
      </div>
      <div class="flex items-center justify-between container mx-auto w-full">
        <div class="flex items-center gap-2 lg:w-1/4">
          <Icon name="solar:bag-smile-bold" size="55" class="bg-primary" />
          <h1 class="text-2xl text-primary font-bold">آنلاین شاپ آلمان</h1>
        </div>
        <div class="lg:w-1/2">
          <u-input v-model="saerchValue" leading-icon="solar:magnifer-linear" size="xl"
            placeholder="نام محصول،‌برند۷ دسته بندی و ..." class="w-full hidden lg:flex">
            <template #trailing>
              <u-button icon="solar:arrow-to-top-left-bold" variant="subtle" v-if="saerchValue.length > 0" />
            </template>
          </u-input>
        </div>
        <div class="lg:w-1/4 justify-end items-center gap-3 hidden lg:flex">
          <u-dropdown-menu :items="authenticated ? dropdownItemsAuth : dropdownItemsNoAuth" size="xl" arrow :content="{
            align: 'center',
            side: 'bottom',
            sideOffset: 8
          }" :ui="{
            content: 'w-auto items-end',
            item: 'cursor-pointer',
            itemLabel: 'text-lg'
          }">
            <UButton :label="authenticated ? username : 'اکانت'" icon="solar:user-bold"
              trailing-icon="solar:alt-arrow-down-line-duotone" size="xl" color="neutral" variant="outline"
              class="cursor-pointer" />
          </u-dropdown-menu>
        </div>
        <USlideover v-model:open="sideover">
          <UButton icon="solar:hamburger-menu-bold" color="neutral" variant="soft" class="lg:hidden" size="xl"
            @click="sideover = true" />

          <template #content>
            <div class="flex flex-col justify-between h-screen p-5">
              <UButton icon="solar:close-circle-bold" color="error" variant="ghost" size="xl" @click="sideover = false"
                class="self-start" />
              <u-dropdown-menu :items="authenticated ? dropdownItemsAuth : dropdownItemsNoAuth" size="xl" arrow
                :content="{
                  align: 'center',
                  side: 'bottom',
                  sideOffset: 8
                }" :ui="{
            content: 'w-auto items-end',
            item: 'cursor-pointer',
            itemLabel: 'text-lg'
          }">
                <UButton :label="authenticated ? username : 'اکانت'" icon="solar:user-bold"
                  trailing-icon="solar:alt-arrow-up-line-duotone" size="xl" color="neutral" variant="outline"
                  class="cursor-pointer" />
              </u-dropdown-menu>
            </div>
          </template>
        </USlideover>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DropdownMenuItem } from '@nuxt/ui';


const authenticated = ref(true)
const username = "نام و نام خانوادگی"

const sideover = ref(false)

const dropdownItemsNoAuth = ref<DropdownMenuItem[]>(
  [
    {
      label: "ورود",
      icon: "solar:key-minimalistic-2-bold",
      // to: '/accounts/login'
      onSelect: () => authenticated.value = true
    },
    {
      label: "ثبت نام",
      icon: "solar:user-plus-rounded-bold",
      to: '/accounts/register'
    },
  ]
)

const dropdownItemsAuth = ref<DropdownMenuItem[]>(
  [
    {
      label: "پروفایل",
      icon: "solar:user-id-bold",
      to: '/accounts/profile'
    },
    {
      label: "سفارشات",
      icon: "solar:cart-large-minimalistic-bold",
      to: '/accounts/orders'
    },
    {
      label: "علاقه مندی ها",
      icon: "solar:bag-heart-bold",
      to: '/accounts/wishlist'
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