<template>
  <div class="relative flex flex-col justify-center gap-20 lg:gap-44">
    <div class="relative flex flex-col items-center gap-20 lg:flex-row">
      <div class="flex flex-col lg:hidden">
        <div class="flex items-center gap-6">
          <strong class="text-header-mobile">
            Que le
          </strong>
          <img
            :src="Decoration"
            alt="Decoration">
        </div>
        <strong class="text-header-mobile">
          plus fort,
        </strong>
        <strong class="italic text-header-mobile">
          l'emporte!
        </strong>
      </div>


      <div class="z-10 flex-col hidden lg:flex">
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
        class="right-0 lg:absolute w-96 "
        :src="CardHero"
        alt="Card hero">
    </div>
  </div>
</template>

<script setup>
import CardHero from "@/assets/images/card-hero.svg?image"
import Decoration from "@/assets/images/decoration.svg?image"
</script>