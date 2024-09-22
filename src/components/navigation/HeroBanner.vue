<template>
  <div class="flex flex-col py-44">
    <div class="flex flex-col">
      <strong class="text-header-desktop">
        Que le plus fort,
      </strong>

      <div class="flex items-center gap-12">
        <img
          :src="Decoration"
          alt="decoration">
        <strong class="italic text-header-desktop">
          l'emporte!
        </strong>
      </div>
    </div>
  </div>
</template>

<script setup>
import Decoration from "@/assets/images/decoration.svg"
</script>