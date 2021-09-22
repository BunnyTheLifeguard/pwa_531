<script setup lang="ts">
import { useRouter } from 'vue-router'
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'

const router = useRouter()

const goToSupport = () => router.push({ name: 'support' })
</script>

<template>
  <div>
    <TheHeader class="col-span-full dark:bg-dark-100" />
    <div class="col-start-2 col-end-12 row-start-4 row-end-12">
      <div class="font-semibold uppercase tracking-wide shadow">
        <div class="p-5 flex justify-between items-center">
          <span>Weights</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--mdi"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div class="p-5 border-t flex justify-between items-center">
          <span>Training days</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--mdi"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div class="p-5 border-t flex justify-between items-center">
          <span>About 5/3/1</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--mdi"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div
          @click="goToSupport"
          class="p-5 border-t flex justify-between items-center"
        >
          <span>Support</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--mdi"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div class="p-5 bg-red-500 text-white">Reset</div>
      </div>
    </div>
    <TheFooter class="col-span-full row-end-13 dark:bg-dark-100" />
  </div>
</template>

<style></style>
