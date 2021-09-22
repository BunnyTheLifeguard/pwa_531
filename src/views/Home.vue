<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import localforage from 'localforage'
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import BaseButton from '../components/BaseButton.vue'

const router = useRouter()

interface Data {
  week: number
  day: number
  date: Date
  trainingDays: string[]
  unit: boolean
  squat: number
  deadlift: number
  benchpress: number
  overheadpress: number
}

const data = ref<Data>()
const squat = ref<number>(0)
const deadlift = ref<number>(0)
const benchpress = ref<number>(0)
const overheadpress = ref<number>(0)
const week = ref<number>(0)
const day = ref<number>(0)
const date = ref<string>('')
const unit = ref('')

onMounted(() => {
  localforage.getItem('data', (err, value) => {
    if (value) {
      data.value = value
      squat.value = data.value!.squat
      deadlift.value = data.value!.deadlift
      benchpress.value = data.value!.benchpress
      overheadpress.value = data.value!.overheadpress
      week.value = data.value!.week
      day.value = data.value!.day
      date.value = data.value!.date.toLocaleDateString()
      data.value!.unit === true ? (unit.value = 'kg') : (unit.value = 'lbs')
    } else {
      console.error(err)
      router.push({ name: 'onboarding' })
    }
  })
})
</script>

<template>
  <div>
    <TheHeader class="col-span-full dark:bg-dark-100" />
    <div class="col-start-2 col-end-12 row-start-2 row-end-12">
      <!-- Week & day -->
      <div class="flex font-bold text-3xl justify-evenly mt-20">
        <span>Week: {{ week }}</span>
        <span>Day: {{ day }}</span>
      </div>
      <!-- Current weights -->
      <div class="text-center font-semibold text-xl mt-8 mb-3">
        Current weights:
      </div>
      <div class="flex flex-col font-bold text-2xl mx-8">
        <div class="flex justify-between my-1">
          <span>Squats:</span>
          <span>{{ squat }} {{ unit }}</span>
        </div>
        <div class="flex justify-between my-1">
          <span>Deadlifts:</span>
          <span>{{ deadlift }} {{ unit }}</span>
        </div>
        <div class="flex justify-between my-1">
          <span>Benchpress:</span>
          <span>{{ benchpress }} {{ unit }}</span>
        </div>
        <div class="flex justify-between my-1">
          <span>Overheadpress:</span>
          <span>{{ overheadpress }} {{ unit }}</span>
        </div>
      </div>
      <!-- Next workout -->
      <div class="flex flex-col font-semibold text-center text-2xl mx-8 mt-10">
        <span>Next workout:</span>
        <span>---</span>
        <BaseButton variant="danger" class="text-xl mt-5"
          >Postpone +1</BaseButton
        >
      </div>
      <div class="flex font-normal text-center text-xl m-10">
        <span>Started on: {{ date }}</span>
      </div>
    </div>
    <TheFooter class="col-span-full dark:bg-dark-100" />
  </div>
</template>

<style></style>
