<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => router.push({ name: 'home' })
const goToWorkout = () => router.push({ name: 'workout' })
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

    <!-- Workout -->
    <svg
      @click="goToWorkout"
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
        d="M12 5c-1.11 0-2 .89-2 2s.89 2 2 2s2-.89 2-2s-.89-2-2-2m10-4v5h-2V4H4v2H2V1h2v2h16V1h2m-7 10.26V23h-2v-5h-2v5H9V11.26C6.93 10.17 5.5 8 5.5 5.5V5h2v.5C7.5 8 9.5 10 12 10s4.5-2 4.5-4.5V5h2v.5c0 2.5-1.43 4.67-3.5 5.76z"
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
