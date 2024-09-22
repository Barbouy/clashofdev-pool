<template>
  <div class="relative overflow-hidden">
    <div class="flex w-[7360px]">
      <img
        v-for="i in 2"
        :key="i"
        class="w-[3680px] shrink-0 animate-scroll-left object-cover"
        :src="props.source"
        :alt="props.alt">
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
  source: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  }
})
</script>