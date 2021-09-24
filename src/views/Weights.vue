<script setup lang="ts">
import { onMounted, ref } from 'vue'
import localforage from 'localforage'
import { Data } from '../types/types'
import BaseButton from '../components/BaseButton.vue'
import calculateMax from '../composables/maxCalc'

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
const unit = ref('')

const showModal = ref(false)
const tempExercise = ref('')
const tempWeight = ref(0)
const tempReps = ref(0)

const toggleModal = (exercise: string) => {
  showModal.value = !showModal.value
  tempExercise.value = exercise
}

const calculateWeights = () => {
  if (tempExercise.value === 'Squats') {
    squat.value = calculateMax(+tempWeight.value, tempReps.value)
    tempWeight.value = 0
    tempReps.value = 0
  } else if (tempExercise.value === 'Deadlifts') {
    deadlift.value = calculateMax(+tempWeight.value, tempReps.value)
    tempWeight.value = 0
    tempReps.value = 0
  } else if (tempExercise.value === 'Benchpress') {
    benchpress.value = calculateMax(+tempWeight.value, tempReps.value)
    tempWeight.value = 0
    tempReps.value = 0
  } else if (tempExercise.value === 'Overheadpress') {
    overheadpress.value = calculateMax(+tempWeight.value, tempReps.value)
    tempWeight.value = 0
    tempReps.value = 0
  }
  toggleModal('')
}

const updateWeights = async () => {
  data.value.squat = squat.value
  data.value.deadlift = deadlift.value
  data.value.benchpress = benchpress.value
  data.value.overheadpress = overheadpress.value

  await localforage
    .removeItem('data')
    .then(() => console.log('Cleared old data.'))
    .catch((err) => console.log(err))

  await localforage
    .setItem('data', data.value)
    .then((value) => console.log(value))
    .catch((err) => console.log(err))
}

onMounted(() => {
  // @ts-expect-error: Can't change order of params
  localforage.getItem('data', (err?: unknown, value: Data) => {
    if (value) {
      data.value = value
      squat.value = data.value.squat
      deadlift.value = data.value.deadlift
      benchpress.value = data.value.benchpress
      overheadpress.value = data.value.overheadpress
      data.value.unit === true ? (unit.value = 'kg') : (unit.value = 'lbs')
    } else {
      console.error(err)
    }
  })
})
</script>

<template>
  <div>
    <TheHeader class="col-span-full dark:bg-dark-100" pageName="settings" />

    <!-- Modal -->
    <teleport to="body">
      <div
        v-if="showModal"
        class="
          h-screen
          w-screen
          absolute
          top-0
          bg-black bg-opacity-50
          flex
          justify-center
          items-center
        "
      >
        <div
          class="
            h-3/5
            w-3/4
            relative
            flex flex-col
            items-center
            justify-center
            bg-white
            shadow-lg
          "
        >
          <div class="absolute top-3 right-3">
            <svg
              @click="toggleModal('')"
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
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div class="font-bold text-lg mx-10 my-3">
            <span> Calculate 1 Rep Max for {{ tempExercise }}:</span>
          </div>
          <form
            v-on:submit.prevent="calculateWeights()"
            class="flex flex-col items-center mb-3"
          >
            <label for="weight" class="font-semibold py-1 my-1">Weight:</label>
            <input
              v-model="tempWeight"
              type="number"
              id="weight"
              class="w-1/2 text-center border shadow-inner py-2"
              required
              min="10"
            />
            <label for="reps" class="font-semibold py-1 my-1">Reps:</label>
            <input
              v-model="tempReps"
              type="number"
              id="reps"
              class="w-1/2 text-center border shadow-inner py-2"
              required
              min="1"
              max="10"
            />
            <BaseButton type="submit" variant="primary" class="px-10 mt-5"
              >Submit</BaseButton
            >
          </form>
        </div>
      </div>
    </teleport>

    <div
      class="
        col-start-3 col-end-11
        row-start-2 row-end-12
        flex flex-col
        justify-center
      "
    >
      <form v-on:submit.prevent="updateWeights" class="flex flex-col mt-5">
        <label for="squat" class="font-semibold text-lg">Squats:</label>
        <div class="flex justify-between items-center">
          <input
            type="number"
            v-model="squat"
            id="squat"
            class="
              my-2
              py-2
              mr-5
              text-center
              bg-white
              dark:bg-dark-50
              shadow-inner
            "
          />

          <svg
            @click="toggleModal('Squats')"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--pixelarticons"
            width="42"
            height="42"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                d="M5 2H3v20h18V2H5zm14 18H5V4h14v16zM17 6H7v4h10V6zM7 12h2v2H7v-2zm6 0h-2v2h2v-2zm2 0h2v2h-2v-2zm-6 4H7v2h2v-2zm2 0h2v2h-2v-2zm6 0h-2v2h2v-2z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </div>

        <label for="deadlift" class="mt-5 font-semibold text-lg"
          >Deadlifts</label
        >
        <div class="flex justify-between items-center">
          <input
            type="number"
            v-model="deadlift"
            id="deadlift"
            class="
              my-2
              py-2
              mr-5
              text-center
              bg-white
              dark:bg-dark-50
              shadow-inner
            "
          />
          <svg
            @click="toggleModal('Deadlifts')"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--pixelarticons"
            width="42"
            height="42"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                d="M5 2H3v20h18V2H5zm14 18H5V4h14v16zM17 6H7v4h10V6zM7 12h2v2H7v-2zm6 0h-2v2h2v-2zm2 0h2v2h-2v-2zm-6 4H7v2h2v-2zm2 0h2v2h-2v-2zm6 0h-2v2h2v-2z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </div>
        <label for="benchpress" class="mt-5 font-semibold text-lg"
          >Benchpress</label
        >
        <div class="flex justify-between items-center">
          <input
            type="number"
            v-model="benchpress"
            id="benchpress"
            class="
              my-2
              py-2
              mr-5
              text-center
              bg-white
              dark:bg-dark-50
              shadow-inner
            "
          />
          <svg
            @click="toggleModal('Benchpress')"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--pixelarticons"
            width="42"
            height="42"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                d="M5 2H3v20h18V2H5zm14 18H5V4h14v16zM17 6H7v4h10V6zM7 12h2v2H7v-2zm6 0h-2v2h2v-2zm2 0h2v2h-2v-2zm-6 4H7v2h2v-2zm2 0h2v2h-2v-2zm6 0h-2v2h2v-2z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </div>
        <label for="overheadpress" class="mt-5 font-semibold text-lg"
          >Overheadpress</label
        >
        <div class="flex justify-between items-center">
          <input
            type="number"
            v-model="overheadpress"
            id="overheadpress"
            class="
              my-2
              py-2
              mr-5
              text-center
              bg-white
              dark:bg-dark-50
              shadow-inner
            "
          />
          <svg
            @click="toggleModal('Overheadpress')"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--pixelarticons"
            width="42"
            height="42"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                d="M5 2H3v20h18V2H5zm14 18H5V4h14v16zM17 6H7v4h10V6zM7 12h2v2H7v-2zm6 0h-2v2h2v-2zm2 0h2v2h-2v-2zm-6 4H7v2h2v-2zm2 0h2v2h-2v-2zm6 0h-2v2h2v-2z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </div>
        <BaseButton type="submit" variant="primary" class="mt-5 p-3"
          >Update Weights</BaseButton
        >
      </form>
    </div>

    <TheFooter class="col-span-full dark:bg-dark-100" />
  </div>
</template>
