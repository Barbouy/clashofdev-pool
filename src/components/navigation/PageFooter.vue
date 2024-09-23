<template>
  <div
    class="flex justify-between py-8">
    <img
      class="h-[27px] hover:rotate-12 transition-transform hover:scale-150"
      :src="Logo"
      alt="Clash of dev logo">

    <span class="text-content-bold">
      100%
    </span>

    <div
      class="relative w-20 h-5 overflow-hidden cursor-pointer text-content-bold"
      @click="openTwitter"
      @mouseover="isHover = true"
      @mouseleave="isHover = false">
      <span
        class="absolute right-0 transition-all duration-300 ease-out"
        :class="isHover ? '-top-6' : 'top-0'">
        @2024
      </span>
      <span
        class="absolute right-0 underline transition-all duration-300 ease-out"
        :class="isHover ? 'top-0' : 'top-6'">
        @barbouy_
      </span>
    </div>
  </div>
</template>

<script setup>
import Logo from "@/assets/images/logo.svg?image"
import { ref } from "vue";

const isHover = ref(false)

const openTwitter = () => {
  window.open("https://twitter.com/barbouy_", "_blank")
}
</script>