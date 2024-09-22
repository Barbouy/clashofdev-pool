<template>
  <div class="flex flex-col items-center h-dvh scroll-smooth">
    <div class="w-full max-w-[1440px] p-4 lg:p-8 relative">
      <PageHeader class="sticky z-50 top-4 lg:top-8" />

      <HeroBanner />

      <div class="h-[600px] bg-purple rounded-[60px] sticky top-0" />
      <div class="h-[600px] bg-pink rounded-[60px] sticky top-0" />
      <div class="h-[600px] bg-orange rounded-[60px] sticky top-0" />
      <div class="h-[600px] bg-green rounded-[60px] sticky top-0" />
      <div class="h-[600px] bg-yellow rounded-[60px] sticky top-0" />

      <PageFooter class="" />
    </div>
  </div>
</template>

<script setup>
import PageHeader from "@/components/navigation/PageHeader.vue"
import PageFooter from "@/components/navigation/PageFooter.vue"
import HeroBanner from "@/components/navigation/HeroBanner.vue"
</script>
