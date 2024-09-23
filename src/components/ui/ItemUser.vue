<template>
  <div
    :class="[backgroundColor, borderColor]"
    class="flex items-center px-2 py-1 border-2 rounded-full !rounded-tl-md shrink-0 relative">
    <CursorIcon
      :class="fillColor"
      class="absolute -left-5 -top-5" />
    <span class="text-light text-content-medium">
      @{{ user }}
    </span>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue"
import CursorIcon from "@/assets/icons/small-cursor.svg?component"

const props = defineProps({
  user: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
})

const fillColor = computed(() => {
  switch (props.color) {
    case "purple":
      return "!fill-fg-purple"
    case "pink":
      return "!fill-fg-pink"
    case "blue":
      return "!fill-fg-blue"
    case "green":
      return "!fill-fg-green"
    case "yellow":
      return "!fill-fg-yellow"
    case "orange":
      return "!fill-fg-orange"
    default:
      return "!fill-fg-dark"
  }
})

const backgroundColor = computed(() => {
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

const borderColor = computed(() => {
  switch (props.color) {
    case "purple":
      return "border-bd-purple"
    case "pink":
      return "border-bd-pink"
    case "blue":
      return "border-bd-blue"
    case "green":
      return "border-bd-green"
    case "yellow":
      return "border-bd-yellow"
    case "orange":
      return "border-bd-orange"
    default:
      return "border-bd-dark"
  }
})
</script>