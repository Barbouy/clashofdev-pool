<template>
  <div
    class="rounded-[60px] p-8 flex flex-col gap-4 justify-between text-dark relative overflow-hidden"
    :class="backgroundColor">
    <div class="absolute flex flex-col gap-4 xl:flex-row right-4 top-32 xl:right-8 xl:top-8">
      <ItemUser
        v-for="user in fromUsers"
        :key="user"
        :user="user"
        :color="color" />
    </div>

    <div class="flex gap-16">
      <div class="flex flex-col content-medium">
        <span>
          {{ props.type }}
        </span>
        <span>
          /{{ props.pointCount }} pts
        </span>
      </div>

      <strong class="content-bold">
        {{ props.title }}
      </strong>
    </div>

    <div class="flex flex-col flex-1 w-full gap-4 mb-32 xl:flex-row xl:mb-0">
      <img
        class="max-h-[700px] object-contain rounded-[60px]"
        :src="imageUrl"
        :alt="type + 'image'">

      <div class="flex flex-col gap-2 xl:max-w-60">
        <span
          v-for="description in formattedDescriptions"
          :key="description"
          class="opacity-60"
          v-html="description" />
      </div>
    </div>

    <div
      class="absolute -bottom-[60px] -right-[40px] rounded-full size-[220px] xl:size-[310px] flex items-center justify-center"
      :class="iconBgColor">
      <footerIcon :style="{fill: iconColor}" />
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue"
import ItemUser from "@/components/ui/ItemUser.vue"

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  descriptions: {
    type: Array,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  pointCount: {
    type: [Number, String],
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  footerIcon: {
    type: Object,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  fromUsers: {
    type: Array,
    required: true
  }
})

const backgroundColor = computed(() => {
  switch (props.color) {
    case "purple":
      return "bg-purple"
    case "pink":
      return "bg-pink"
    case "blue":
      return "bg-blue"
    case "green":
      return "bg-green"
    case "yellow":
      return "bg-yellow"
    case "orange":
      return "bg-orange"
    default:
      return "bg-dark"
  }
})

const iconColor = computed(() => {
  switch (props.color) {
    case "purple":
      return "!fill-bg-purple"
    case "pink":
      return "!fill-bg-pink"
    case "blue":
      return "!fill-bg-blue"
    case "green":
      return "!fill-bg-green"
    case "yellow":
      return "!fill-bg-yellow"
    case "orange":
      return "!fill-bg-orange"
    default:
      return "!fill-bg-dark"
  }
})

const iconBgColor = computed(() => {
  switch (props.color) {
    case "purple":
      return "bg-fg-purple"
    case "pink":
      return "bg-fg-pink"
    case "blue":
      return "bg-fg-blue"
    case "green":
      return "bg-fg-green"
    case "yellow":
      return "bg-fg-yellow"
    case "orange":
      return "bg-fg-orange"
    default:
      return "bg-fg-dark"
  }
})

const formattedDescriptions = computed(() => {
  return props.descriptions.map((description) => {
    return description.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  })
})
</script>