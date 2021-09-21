<script setup lang="ts">
import { ref } from 'vue'
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import Onboarding from './Onboarding.vue'

const onboardingStatus = ref(localStorage.onboarding)
</script>

<template>
  <Onboarding v-if="!onboardingStatus" />
  <div v-else>
    <TheHeader class="col-span-full" />
    <div class="row-start-2 row-end-12">Home</div>
    <TheFooter class="col-span-full" />
  </div>
</template>

<style></style>
