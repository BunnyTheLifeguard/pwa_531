<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  pageName: String
})

const router = useRouter()

const goTo = () => router.push({ name: props.pageName })
</script>

<template>
  <div class="flex justify-center items-center shadow">
    <div v-if="props.pageName" @click="goTo" class="absolute left-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="iconify iconify--mdi"
        width="42"
        height="42"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
    <img
      src="../assets/logo_dark.svg"
      alt="531 logo"
      class="block dark:hidden"
      width="65"
      height="65"
    />
    <img
      src="../assets/logo.svg"
      alt="531 logo"
      class="hidden dark:block"
      width="65"
      height="65"
    />
  </div>
</template>
