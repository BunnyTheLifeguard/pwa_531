<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
</script>

<template>
  <div>
    <TheHeader class="col-span-full" />
    <div class="col-start-2 col-end-12 row-start-4 row-end-12">
      <div class="border font-semibold uppercase tracking-wide shadow">
        <div class="p-5 border-b">Weights</div>
        <div class="p-5 border-b">Training days</div>
        <div class="p-5 border-b">About 5/3/1</div>
        <div class="p-5 border-b">Support</div>
        <div class="p-5 bg-red-500 text-white">Reset</div>
      </div>
    </div>
    <TheFooter class="col-span-full row-end-13" />
  </div>
</template>

<style></style>
