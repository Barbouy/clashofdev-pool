<template>
  <div class="flex p-20 bg-dark text-light h-[900px] rounded-[60px] flex-col justify-center">
    <span
      class="transition-all duration-300 ease-out text-content-medium"
      :class="{'blur': isHover}">
      /FINALE02
    </span>

    <div
      class="flex flex-col py-10 transition-all duration-300 ease-out"
      :class="{'blur': isHover}">
      <strong class="text-header-mobile lg:text-header-desktop">
        Click me ?
      </strong>
      <strong class="text-header-mobile lg:text-header-desktop">
        Might enter the finals
      </strong>

      <img
        class="size-[80px] absolute right-16 top-16"
        :src="SmileyIcon"
        alt="smiley">
    </div>

    <div
      class="flex justify-center">
      <img
        class="size-[200px] cursor-pointer transition-all duration-300 ease-out hover:scale-125"
        :src="FooterButton"
        alt="footer cta"
        @click="handleOpenNextStep"
        @mouseover="isHover = true"
        @mouseleave="isHover = false">
    </div>
  </div>
</template>

<script setup>
import FooterButton from "@/assets/images/footer-button.svg?image"
import SmileyIcon from "@/assets/icons/smiley.svg?image"

import { ref } from "vue"
const isHover = ref(false)
const emit = defineEmits(["openNextStep"])

function handleOpenNextStep() {
  emit("openNextStep")
}
</script>