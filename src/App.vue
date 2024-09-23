<template>
  <div
    v-if="isFirstStepActive"
    class="flex flex-col items-center h-dvh"
    :class="{'overflow-hidden': isOverflowHidden}">
    <div
      id="container"
      class="w-full max-w-[1440px] relative px-4 lg:px-8">
      <PageHeader class="sticky z-40 top-4 lg:top-8" />

      <HeroBanner class="py-20 lg:py-44 " />

      <ImageScroll
        class="pb-20"
        :source="Banner"
        alt="ScrollImage" />

      
      <div>
        <ItemCard 
          v-for="item in items"
          :key="item.type"
          class="sticky top-0"
          v-bind="item" />
        
        <div class="sticky top-0">
          <ButtonFooter @open-next-step="handleOpenNextStep" />
        </div>
      </div>

      <PageFooter />
    </div>

    <div
      class="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-out bg-dark"
      :class="isNextStepOpen ? 'rounded-0 scale-100' : 'rounded-full scale-0'">
      <img
        :class="isOverflowHidden ? 'opacity-100' : 'opacity-0'"
        :src="SwitchCircle"
        class="size-[200px] transition-all duration-1000 ease-out"
        alt="logo">

      <div class="flex flex-col items-center gap-1">
        <span class="text-content-medium text-light">
          Welcome to the next step.
        </span>
  
        <span
          class="transition-opacity duration-300 ease-out text-content-medium text-light"
          :class="isNextTitleVisible ? 'opacity-60' : 'opacity-0'">
          Or not ?
        </span>
      </div>

      <div>
        <img
          :src="SmileyIcon"
          alt="smiley"
          class="duration-300 ease-out size-[80px] hover:animate-spin transition-all cursor-pointer" 
          :class="isNextButtonVisible ? 'opacity-100' : 'opacity-0'"
          @click="resetClashOfDev">
      </div>
    </div>
  </div>

  <div
    v-else
    class="flex flex-col items-center justify-center h-dvh">
    <span class="text-content-bold">
      Step 2
    </span>
    <span class="text-content-medium">
      Code me Google. You have 20 minutes.
    </span>

    <span
      class="mt-10 underline cursor-pointer text-content-medium opacity-60 hover:opacity-100"
      @click="resetSecondStep">Go back</span>
  </div>
</template>

<script setup>
import Banner from "@/assets/images/banner.svg?image"
import ButtonFooter from "@/components/navigation/ButtonFooter.vue"
import PageHeader from "@/components/navigation/PageHeader.vue"
import PageFooter from "@/components/navigation/PageFooter.vue"
import HeroBanner from "@/components/navigation/HeroBanner.vue"
import ImageScroll from "@/components/ui/ImageScroll.vue"
import ItemCard from "@/components/ui/ItemCard.vue"
import ItemsService from "@/services/ItemsService.js"
import SwitchCircle from "@/assets/images/switch-circle.svg?image"
import SmileyIcon from "@/assets/icons/smiley.svg?image"
import { ref } from "vue"

const items = ItemsService.getItems()
const isNextStepOpen = ref(false)
const isOverflowHidden = ref(false)
const isNextTitleVisible = ref(false)
const isNextButtonVisible = ref(false)
const isFirstStepActive = ref(true)

function handleOpenNextStep() {
  isNextStepOpen.value = true

  setTimeout(() => {
    isOverflowHidden.value = true
  }, 300)

  setTimeout(() => {
    isNextTitleVisible.value = true
  }, 800)

  setTimeout(() => {
    isNextButtonVisible.value = true
  }, 2000)
}

function resetClashOfDev() {
  isNextStepOpen.value = false
  isOverflowHidden.value = false
  isNextTitleVisible.value = false
  isNextButtonVisible.value = false
  isFirstStepActive.value = false
}

function resetSecondStep() {
  isFirstStepActive.value = true
}
</script>
