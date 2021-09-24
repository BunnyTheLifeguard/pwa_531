<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import localforage from 'localforage'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import SwiperCore, { Pagination } from 'swiper'
import Toggle from '@vueform/toggle'
import router from '../router'
import calculateMax from '../composables/maxCalc'
import BaseButton from '../components/BaseButton.vue'

SwiperCore.use([Pagination])

const squat = ref<number>(0)
const deadlift = ref<number>(0)
const benchpress = ref<number>(0)
const overheadpress = ref<number>(0)
const unit = ref(true)
const trainingDays = ref<string[]>([])
const notification = ref('')

const buttonDisabled = ref(true)
const buttonVariant = ref('disabled')

watchEffect(() => {
  if (
    squat.value !== 0 &&
    deadlift.value !== 0 &&
    benchpress.value !== 0 &&
    overheadpress.value !== 0 &&
    trainingDays.value.length !== 0
  ) {
    buttonDisabled.value = false
    buttonVariant.value = 'primary'
  } else {
    buttonDisabled.value = true
    buttonVariant.value = 'disabled'
  }
})

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

const storeValues = async () => {
  if (
    squat.value === 0 ||
    deadlift.value === 0 ||
    benchpress.value === 0 ||
    overheadpress.value === 0 ||
    trainingDays.value.length === 0
  ) {
    notification.value = 'Please enter a value for every exercise.'
    setTimeout(() => {
      notification.value = ''
    }, 3000)
  } else {
    await localforage.setItem('data', {
      week: 1,
      day: 1,
      date: new Date(),
      trainingDays: trainingDays._rawValue,
      unit: unit.value,
      squat: +squat.value,
      deadlift: +deadlift.value,
      benchpress: +benchpress.value,
      overheadpress: +overheadpress.value
    })
    console.log('push home')
    await router.push({ name: 'home' })
  }
}
</script>

<template>
  <Swiper
    :pagination="{ dynamicBullets: true }"
    class="h-screen w-screen bg-white dark:bg-dark-100"
  >
    <!-- Slide 1 -->
    <SwiperSlide
      class="
        h-screen
        flex flex-col
        justify-center
        items-center
        font-semibold
        text-black
        dark:text-white
      "
    >
      <img
        src="../assets/logo_dark.svg"
        alt="531 logo"
        class="mb-20 block dark:hidden"
        width="150"
        height="150"
      />
      <img
        src="../assets/logo.svg"
        alt="531 logo"
        class="mb-20 hidden dark:block"
        width="150"
        height="150"
      />
      <span class="mx-10 mb-5 text-center"
        >An app based on Jim Wendler's 5/3/1 workout.</span
      >

      <span class="mb-3 font-bold text-left uppercase tracking-wide"
        >Features:</span
      >
      <ul class="list-square leading-loose">
        <li>Automatic weight calculation</li>
        <li>Workout sets & weights</li>
        <li>Progress analytics with charts</li>
      </ul>
    </SwiperSlide>

    <!-- Slide 2 -->
    <SwiperSlide
      class="
        h-screen
        flex flex-col
        justify-center
        items-center
        font-semibold
        text-black
        dark:text-white
      "
    >
      <span class="mb-10 font-bold uppercase tracking-wide"
        >Automatic Weight Calculation</span
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="iconify iconify--mdi mb-10"
        width="96"
        height="96"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          d="M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57L3.43 12L7 8.43L15.57 17L12 20.57L13.43 22l1.43-1.43L16.29 22l2.14-2.14l1.43 1.43l1.43-1.43l-1.43-1.43L22 16.29l-1.43-1.43z"
          fill="currentColor"
        ></path>
      </svg>
      <span>Forget Excel sheets!</span>
      <span>Forget notebooks and calculators!</span>
      <span class="mt-5 mx-10 text-center"
        >Enter your 1 Rep Max once and let the app do the weight calculation for
        you.</span
      >
    </SwiperSlide>

    <!-- Slide 3 -->
    <SwiperSlide
      class="
        h-screen
        flex flex-col
        justify-center
        items-center
        text-center
        font-semibold
        text-black
        dark:text-white
      "
    >
      <span class="mb-10 font-bold uppercase tracking-wide">Analytics</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="iconify iconify--vaadin mb-10"
        width="96"
        height="96"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 16 16"
      >
        <path fill="currentColor" d="M1 15V0H0v16h16v-1H1z"></path>
        <path fill="currentColor" d="M9 8L6 5L2 9v2l4-4l3 3l7-7V1z"></path>
      </svg>
      <span class="mx-10">Track your progress using the generated charts.</span>
      <span class="mt-5 mx-10 text-center"
        >After every completed workout your progress gets updated.</span
      >
    </SwiperSlide>

    <!-- Slide 4 -->
    <SwiperSlide
      class="
        h-screen
        flex flex-col
        justify-center
        items-center
        font-semibold
        text-black
        dark:text-white
      "
    >
      <span class="mx-10 mb-3 text-center"
        >To start, enter your 1 Rep Max for every exercise.</span
      >
      <span class="mx-10 mb-3 text-center"
        >If you don't know your 1RM, tap on each calculator for help.</span
      >
      <form v-on:submit.prevent="storeValues" class="flex flex-col">
        <!-- Unit switch -->
        <div class="flex justify-center mb-3">
          <Toggle
            v-model="unit"
            on-label="KG"
            off-label="LBS"
            :classes="{
              container: 'inline-block',
              toggle:
                'flex w-16 h-5 relative cursor-pointer transition items-center box-content border-2 text-xs leading-none',
              toggleOn:
                'bg-gradient-to-tl from-blue-600 to-light-blue-400 border-blue-500 justify-start text-white',
              toggleOff:
                'bg-gradient-to-tl from-red-600 to-orange-500 border-red-500 justify-end text-black',
              toggleOnDisabled:
                'bg-gray-300 border-gray-300 justify-start text-gray-400 cursor-not-allowed',
              toggleOffDisabled:
                'bg-gray-200 border-gray-200 justify-end text-gray-400 cursor-not-allowed',
              handle:
                'inline-block bg-white w-5 h-5 top-0 absolute transition-all',
              handleOn: 'left-full transform -translate-x-full',
              handleOff: 'left-0',
              handleOnDisabled:
                'bg-gray-100 left-full transform -translate-x-full',
              handleOffDisabled: 'bg-gray-100 left-0',
              label: 'text-center w-8 border-box whitespace-nowrap select-none'
            }"
          />
        </div>

        <!-- Squats -->
        <label for="squat">1 RM Squats:</label>
        <div class="flex items-center">
          <input
            v-model="squat"
            type="number"
            id="squat"
            class="
              my-2
              py-2
              mr-5
              text-center
              shadow-inner
              bg-white
              dark:bg-dark-50
            "
          />
          <svg
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

        <!-- Deadlifts -->
        <label for="deadlift">1 RM Deadlifts</label>
        <div class="flex items-center">
          <input
            v-model="deadlift"
            type="number"
            id="deadlift"
            class="
              my-2
              py-2
              mr-5
              text-center
              shadow-inner
              bg-white
              dark:bg-dark-50
            "
          />
          <svg
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

        <!-- Benchpress -->
        <label for="benchpress">1 RM Benchpress</label>
        <div class="flex items-center">
          <input
            v-model="benchpress"
            type="number"
            id="benchpress"
            class="
              my-2
              py-2
              mr-5
              text-center
              shadow-inner
              bg-white
              dark:bg-dark-50
            "
          />
          <svg
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

        <!-- Overheadpress -->
        <label for="overheadpress">1 RM Overheadpress</label>
        <div class="flex items-center">
          <input
            v-model="overheadpress"
            type="number"
            id="overheadpress"
            class="
              my-2
              py-2
              mr-5
              text-center
              shadow-inner
              bg-white
              dark:bg-dark-50
            "
          />
          <svg
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

        <!-- Training days -->
        <span class="my-3"
          >Training days <i class="font-normal">(3-4 recommended)</i>:</span
        >
        <div class="flex items-center mb-1">
          <div class="flex flex-col items-center mx-3">
            <input
              type="checkbox"
              value="mon"
              id="mon"
              v-model="trainingDays"
            />
            <label for="mon" class="mb-1">M</label>
          </div>
          <div class="flex flex-col items-center mx-3">
            <input
              type="checkbox"
              value="tue"
              id="tue"
              v-model="trainingDays"
            />
            <label for="tue" class="mb-1">T</label>
          </div>
          <div class="flex flex-col items-center mx-3">
            <input
              type="checkbox"
              value="wed"
              id="wed"
              v-model="trainingDays"
            />
            <label for="wed" class="mb-1">W</label>
          </div>
          <div class="flex flex-col items-center mx-3">
            <input
              type="checkbox"
              value="thu"
              id="thu"
              v-model="trainingDays"
            />
            <label for="thu" class="mb-1">T</label>
          </div>
          <div class="flex flex-col items-center mx-3">
            <input
              type="checkbox"
              value="fri"
              id="fri"
              v-model="trainingDays"
            />
            <label for="fri" class="mb-1">F</label>
          </div>
          <div class="flex flex-col items-center mx-3">
            <input
              type="checkbox"
              value="sat"
              id="sat"
              v-model="trainingDays"
            />
            <label for="sat" class="mb-1">S</label>
          </div>
          <div class="flex flex-col items-center mx-3">
            <input
              type="checkbox"
              value="sun"
              id="sun"
              v-model="trainingDays"
            />
            <label for="sun" class="mb-1">S</label>
          </div>
        </div>

        <BaseButton
          :key="buttonVariant"
          :variant="buttonVariant"
          :disabled="buttonDisabled"
          class="mt-3 p-3"
          >Start</BaseButton
        >
      </form>
    </SwiperSlide>

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
  </Swiper>
</template>

<style>
.swiper-pagination-bullet {
  background-color: #38bdf8;
}
</style>
