<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import localforage from 'localforage'
import { Data } from '../types/types'
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import BaseButton from '../components/BaseButton.vue'

const router = useRouter()

const data = ref<Data>({
  week: 0,
  day: 0,
  date: new Date(),
  trainingDays: [''],
  unit: true,
  squat: 0,
  deadlift: 0,
  benchpress: 0,
  overheadpress: 0
})
const squat = ref<number>(0)
const deadlift = ref<number>(0)
const benchpress = ref<number>(0)
const overheadpress = ref<number>(0)
const week = ref<number>(0)
const day = ref<number>(0)
const date = ref<string>('')
const unit = ref('')

onMounted(() => {
  // @ts-expect-error: Can't change order of params
  localforage.getItem('data', (err?: unknown, value: Data) => {
    if (value) {
      data.value = value
      squat.value = data.value.squat
      deadlift.value = data.value.deadlift
      benchpress.value = data.value.benchpress
      overheadpress.value = data.value.overheadpress
      week.value = data.value.week
      day.value = data.value.day
      date.value = data.value.date.toLocaleDateString()
      data.value.unit === true ? (unit.value = 'kg') : (unit.value = 'lbs')
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
    <div
      class="
        col-start-2 col-end-12
        row-start-2 row-end-12
        flex flex-col
        justify-center
      "
    >
      <!-- Week & day -->
      <div class="flex font-bold text-xl pm:text-3xl justify-evenly mb-5">
        <span>Week: {{ week }}</span>
        <span>Day: {{ day }}</span>
      </div>
      <!-- Current weights -->
      <!-- <div class="text-center font-semibold text-lg pm:text-xl mt-3 mb-5">
        Current weights:
      </div> -->
      <div
        class="
          grid grid-cols-2 grid-rows-2
          gap-3
          leading-loose
          font-bold
          text-base
          pm:text-xl
          text-black
          dark:text-white
          mx-8
        "
      >
        <div
          class="
            col-start-1 col-end-2
            row-start-1 row-end-2
            flex flex-col
            justify-center
            items-center
            shadow-lg
            border-3 border-black
            dark:border-white
            bg-white
            dark:bg-dark-200
          "
          id="tile"
        >
          <span>Squats:</span>
          <span>{{ squat }} {{ unit }}</span>
        </div>
        <div
          class="
            col-start-2 col-end-3
            row-start-1 row-end-2
            flex flex-col
            justify-center
            items-center
            shadow-lg
            border-3 border-black
            dark:border-white
            bg-white
            dark:bg-dark-200
          "
          id="tile"
        >
          <span>Deadlifts:</span>
          <span>{{ deadlift }} {{ unit }}</span>
        </div>
        <div
          class="
            col-start-1 col-end-2
            row-start-2 row-end-3
            flex flex-col
            justify-center
            items-center
            shadow-lg
            border-3 border-black
            dark:border-white
            bg-white
            dark:bg-dark-200
          "
          id="tile"
        >
          <span>Benchpress:</span>
          <span>{{ benchpress }} {{ unit }}</span>
        </div>
        <div
          class="
            col-start-2 col-end-3
            row-start-2 row-end-3
            flex flex-col
            justify-center
            items-center
            shadow-lg
            border-3 border-black
            dark:border-white
            bg-white
            dark:bg-dark-200
          "
          id="tile"
        >
          <span>OH Press:</span>
          <span>{{ overheadpress }} {{ unit }}</span>
        </div>
      </div>
      <!-- Next workout -->
      <div
        class="
          flex flex-col
          font-semibold
          text-center text-lg
          pm:text-2xl
          mx-8
          mt-5
        "
      >
        <span>Next workout:</span>
        <span>---</span>
        <BaseButton variant="danger" class="text-lg mt-3">Postpone</BaseButton>
      </div>
      <div class="flex justify-center font-normal text-sm pm:text-base mt-3">
        <span>Started on: {{ date }}</span>
      </div>
    </div>
    <TheFooter class="col-span-full dark:bg-dark-100" />
  </div>
</template>

<style>
#tile {
  aspect-ratio: 1;
}
</style>
