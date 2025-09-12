<template>
  <div>
    <div class="p-3 bg-white/20 border border-white/20 rounded-2xl">
      <div class="backdrop-blur-sm flex flex-col justify-between gap-3 items-center text-white">
        <Icon :name="props.item?.icon" size="60" />
        <span class="font-bold">{{ props.item?.title }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

interface Item {
  icon: string,
  title: string
}

const props = defineProps<{ item: Item }>()

</script>

<style></style>