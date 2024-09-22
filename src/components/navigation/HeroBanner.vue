<template>
  <div class="flex flex-col justify-center gap-44 py-44 relative">
    <div class="relative flex items-center">
      <div class="flex flex-col z-10">
        <strong class="text-header-desktop">
          Que le plus fort,
        </strong>
  
        <div class="flex items-center gap-10 px-8">
          <img
            :src="Decoration"
            alt="Decoration">
          <strong class="italic text-header-desktop">
            l'emporte!
          </strong>
        </div>
      </div>
  
      <img
        class="absolute w-96 right-0 "
        :src="CardHero"
        alt="Card hero">
    </div>

    <ImageScroll
      :source="Banner"
      alt="ScrollImage" />
  </div>
</template>

<script setup>
import Banner from "@/assets/images/banner.svg"
import CardHero from "@/assets/images/card-hero.svg"
import Decoration from "@/assets/images/decoration.svg"
import ImageScroll from "@/components/ui/ImageScroll.vue"
</script>