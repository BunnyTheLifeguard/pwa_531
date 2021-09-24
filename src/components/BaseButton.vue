<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    required: true,
    validators: (value: string) =>
      ['primary', 'secondary', 'success', 'warning', 'danger'].includes(value)
  }
})

const color1 = ref('')
const color2 = ref('')
const textColor = ref('text-white')

if (props.variant === 'primary') {
  color1.value = 'from-blue-600'
  color2.value = 'to-light-blue-400'
} else if (props.variant === 'secondary') {
  color1.value = 'from-gray-500'
  color2.value = 'to-gray-300'
} else if (props.variant === 'success') {
  color1.value = 'from-green-600'
  color2.value = 'to-lime-500'
} else if (props.variant === 'warning') {
  color1.value = 'from-yellow-500'
  color2.value = 'to-yellow-300'
} else if (props.variant === 'danger') {
  color1.value = 'from-red-600'
  color2.value = 'to-orange-500'
} else if (props.variant === 'disabled') {
  color1.value = 'from-true-gray-600'
  color2.value = 'to-true-gray-500'
  textColor.value = 'text-true-gray-400'
}
</script>

<template>
  <button
    type="submit"
    :class="`p-3
      font-bold
      uppercase
      tracking-wide
      ${textColor}
      bg-gradient-to-tl ${color1} ${color2}
      shadow-lg`"
  >
    <slot />
  </button>
</template>
