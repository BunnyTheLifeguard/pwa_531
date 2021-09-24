<script setup lang="ts">
import { useRouter } from 'vue-router'
import BaseButton from '../components/BaseButton.vue'

const router = useRouter()

const goHome = () => router.push({ name: 'home' })
</script>

<template>
  <div>
    <div
      class="
        col-start-2 col-end-12
        row-start-2 row-end-12
        flex flex-col
        justify-center
        items-center
      "
    >
      <span class="text-4xl font-bold tracking-wide">404</span>
      <span class="text-lg mt-3">Page not found.</span>
      <BaseButton @click="goHome" variant="primary" class="px-7 mt-10"
        >Go back</BaseButton
      >
    </div>
  </div>
</template>
