<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => router.push({ name: 'home' })
const goToCal = () => router.push({ name: 'calendar' })
const goToAnalytics = () => router.push({ name: 'analytics' })
const goToSettings = () => router.push({ name: 'settings' })
</script>

<template>
  <div class="flex justify-around items-center shadow">
    <!-- Home -->
    <svg
      @click="goToHome"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      class="iconify iconify--mdi"
      width="24"
      height="24"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z"
        fill="currentColor"
      ></path>
    </svg>
    <!-- Calendar -->
    <svg
      @click="goToCal"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      class="iconify iconify--mdi"
      width="24"
      height="24"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5v-5z"
        fill="currentColor"
      ></path>
    </svg>
    <!-- Chart -->
    <svg
      @click="goToAnalytics"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      class="iconify iconify--mdi"
      width="24"
      height="24"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        d="M22 21H2V3h2v16h2v-9h4v9h2V6h4v13h2v-5h4v7z"
        fill="currentColor"
      ></path>
    </svg>
    <!-- Settings -->
    <svg
      @click="goToSettings"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      class="iconify iconify--mdi"
      width="24"
      height="24"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</template>
