<template>
  <div>
    <div 
      class="flex justify-between transition-all duration-300"
      :class="scrollPercentage > 95 ? 'opacity-0 -translate-y-3' : 'opacity-100'">
      <img
        class="h-[27px] hover:-rotate-12 transition-transform hover:scale-150"
        :src="Logo"
        alt="Clash of dev logo">

      <span class="text-content-bold">
        {{ Math.round(scrollPercentage) }}%
      </span>

      <div class="w-[54px] h-[27px] bg-dark flex justify-end rounded-full p-0.5">
        <img
          :src="SwitchCircle"
          alt="Switch circle">
      </div>
    </div>

    
    <div
      class="fixed top-0 left-0 h-2 bg-dark"
      :style="{width: scrollPercentage + '%'}" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue"
import Logo from "@/assets/images/logo.svg"
import SwitchCircle from "@/assets/images/switch-circle.svg"

const scrollPercentage = ref(0)

window.addEventListener("scroll", () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollPercentage.value = (window.scrollY / scrollableHeight) * 100
})
</script>