<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    validators: (value: string) =>
      ['primary', 'secondary', 'success', 'warning', 'danger'].includes(value)
  }
})

const bgColor = ref('')

if (props.variant === 'primary') {
  bgColor.value = 'blue'
} else if (props.variant === 'secondary') {
  bgColor.value = 'gray'
} else if (props.variant === 'success') {
  bgColor.value = 'green'
} else if (props.variant === 'warning') {
  bgColor.value = 'yellow'
} else {
  bgColor.value = 'red'
}
</script>

<template>
  <button
    type="submit"
    :class="`p-3
      font-bold
      uppercase
      tracking-wide
      text-white
      bg-${bgColor}-600
      shadow`"
  >
    <slot />
  </button>
</template>
