<script setup lang="ts">
import { onMounted, ref } from 'vue'
import localforage from 'localforage'
import calculateWeights from '../composables/weightCalc'
import { Data, Workout } from '../types/types'
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'

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

const squatWorkout = ref<Workout>({
  weights: [0, 0, 0],
  reps: ['', '', '']
})
const deadliftWorkout = ref<Workout>({
  weights: [0, 0, 0],
  reps: ['', '', '']
})
const benchpressWorkout = ref<Workout>({
  weights: [0, 0, 0],
  reps: []
})
const overheadpressWorkout = ref<Workout>({
  weights: [0, 0, 0],
  reps: ['', '', '']
})

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

      let SQ = calculateWeights(squat.value, week.value, unit.value, 'lower')
      if (SQ) {
        squatWorkout.value = SQ
      }

      let DL = calculateWeights(deadlift.value, week.value, unit.value, 'lower')
      if (DL) {
        deadliftWorkout.value = DL
      }

      let BP = calculateWeights(
        benchpress.value,
        week.value,
        unit.value,
        'upper'
      )
      if (BP) {
        benchpressWorkout.value = BP
      }

      let OHP = calculateWeights(
        overheadpress.value,
        week.value,
        unit.value,
        'upper'
      )
      if (OHP) {
        overheadpressWorkout.value = OHP
      }
    } else {
      console.error(err)
    }
  })
})
</script>

<template>
  <div>
    <TheHeader class="col-span-full dark:bg-dark-100" />

    <div
      class="
        col-span-full
        row-start-2 row-end-12
        flex
        items-center
        justify-center
      "
    >
      <div class="w-10/12 flex flex-col justify-center">
        <div class="text-center font-bold text-xl pm:text-2xl mb-5 pm:mb-10">
          Workout for DATE
        </div>
        <div class="text-center text-xl pm:text-2xl font-semibold mb-3">
          Squats:
        </div>
        <div class="text-xl pb-5 mb-5 border-b-3">
          <div class="mt-1 flex justify-around">
            <span>Set 1:</span>
            <span>{{ squatWorkout.weights[0] }} {{ unit }}</span>
            <span>x {{ squatWorkout.reps[0] }} &nbsp;</span>
          </div>
          <div class="mt-1 flex justify-around">
            <span>Set 1:</span>
            <span>{{ squatWorkout.weights[1] }} {{ unit }}</span>
            <span>x {{ squatWorkout.reps[1] }} &nbsp;</span>
          </div>
          <div class="mt-1 flex justify-around">
            <span>Set 1:</span>
            <span>{{ squatWorkout.weights[2] }} {{ unit }}</span>
            <span>x {{ squatWorkout.reps[2] }}</span>
          </div>
        </div>

        <div class="text-center text-xl pm:text-2xl font-semibold mt-5 mb-3">
          Benchpress:
        </div>
        <div class="text-xl">
          <div class="mt-1 flex justify-around">
            <span>Set 1:</span>
            <span>{{ benchpressWorkout.weights[0] }} {{ unit }}</span>
            <span>x {{ benchpressWorkout.reps[0] }} &nbsp;</span>
          </div>
          <div class="mt-1 flex justify-around">
            <span>Set 1:</span>
            <span>{{ benchpressWorkout.weights[1] }} {{ unit }}</span>
            <span>x {{ benchpressWorkout.reps[1] }} &nbsp;</span>
          </div>
          <div class="mt-1 flex justify-around">
            <span>Set 1:</span>
            <span>{{ benchpressWorkout.weights[2] }} {{ unit }}</span>
            <span>x {{ benchpressWorkout.reps[2] }}</span>
          </div>
        </div>
      </div>
    </div>

    <TheFooter class="col-span-full dark:bg-dark-100" />
  </div>
</template>

<style></style>
