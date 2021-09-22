<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import SwiperCore, { Pagination } from 'swiper'
import Toggle from '@vueform/toggle'
import localforage from 'localforage'
import BaseButton from '../components/BaseButton.vue'
import Toast from '../components/Toast.vue'

const router = useRouter()

SwiperCore.use([Pagination])

const unit = ref(true)
const squatMax = ref(0)
const deadliftMax = ref(0)
const benchpressMax = ref(0)
const overheadMax = ref(0)
const trainingDays = ref([])

const notification = ref('')

const storeValues = async () => {
  if (
    squatMax.value === 0 ||
    deadliftMax.value === 0 ||
    benchpressMax.value === 0 ||
    overheadMax.value === 0 ||
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
      squat: +squatMax.value,
      deadlift: +deadliftMax.value,
      benchpress: +benchpressMax.value,
      overheadpress: +overheadMax.value
    })
    console.log('push home')
    await router.push({ name: 'home' })
  }
}
</script>

<template>
  <Swiper
    :pagination="{ dynamicBullets: true }"
    class="h-screen w-screen bg-white dark:bg-dark-200"
  >
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

      <span class="mb-3 font-bold uppercase tracking-wide">Features:</span>
      <ul class="list-square leading-relaxed">
        <li>Automatic weight calculation</li>
        <li>Progress analytics with charts</li>
        <li>Workout calendar</li>
      </ul>
    </SwiperSlide>
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
        >Enter your 1 Rep Max once and let the app do the calculation for each
        workout automatically.</span
      >
    </SwiperSlide>
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
      <Toast v-if="notification">{{ notification }}</Toast>
      <!-- <span class="mb-10 font-bold uppercase tracking-wide">Start</span> -->
      <span class="mx-10 mb-3 text-center"
        >To start, enter your 1 Rep Max for every exercise.</span
      >
      <span class="mx-10 mb-5 text-center"
        >If you don't know your 1RM, use the calculators.</span
      >
      <form class="flex flex-col justify-items-center mt-5">
        <div class="mb-5 flex justify-center">
          <Toggle
            v-model="unit"
            on-label="KG"
            off-label="LBS"
            :classes="{
              container: 'inline-block',
              toggle:
                'flex w-16 h-5 relative cursor-pointer transition items-center box-content border-2 text-xs leading-none',
              toggleOn: 'bg-blue-500 border-blue-600 justify-start text-white',
              toggleOff:
                'bg-gray-200 border-gray-200 justify-end text-gray-700',
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
        <label for="squat">1RM Squats:</label>
        <div class="flex items-center">
          <input
            v-model="squatMax"
            type="number"
            id="squat"
            class="
              my-2
              py-2
              mr-5
              bg-transparent
              dark:bg-dark-50
              text-center
              border border-dark-50
              dark:border-transparent
              shadow-inner
            "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--oi"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 8 8"
          >
            <path
              d="M.09 0C.03 0 0 .04 0 .09V7.9c0 .05.04.09.09.09H6.9c.05 0 .09-.04.09-.09V.09C6.99.03 6.95 0 6.9 0H.09zM1 1h5v2H1V1zm0 3h1v1H1V4zm2 0h1v1H3V4zm2 0h1v3H5V4zM1 6h1v1H1V6zm2 0h1v1H3V6z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <!-- Deadlifts -->
        <label for="deadlift">1RM Deadlifts</label>
        <div class="flex items-center">
          <input
            v-model="deadliftMax"
            type="number"
            id="deadlift"
            class="
              my-2
              py-2
              mr-5
              bg-transparent
              dark:bg-dark-50
              text-center
              border border-dark-50
              dark:border-transparent
              shadow-inner
            "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--oi"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 8 8"
          >
            <path
              d="M.09 0C.03 0 0 .04 0 .09V7.9c0 .05.04.09.09.09H6.9c.05 0 .09-.04.09-.09V.09C6.99.03 6.95 0 6.9 0H.09zM1 1h5v2H1V1zm0 3h1v1H1V4zm2 0h1v1H3V4zm2 0h1v3H5V4zM1 6h1v1H1V6zm2 0h1v1H3V6z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <!-- Benchpress -->
        <label for="benchpress">1RM Benchpress</label>
        <div class="flex items-center">
          <input
            v-model="benchpressMax"
            type="number"
            id="benchpress"
            class="
              my-2
              py-2
              mr-5
              bg-transparent
              dark:bg-dark-50
              text-center
              border border-dark-50
              dark:border-transparent
              shadow-inner
            "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--oi"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 8 8"
          >
            <path
              d="M.09 0C.03 0 0 .04 0 .09V7.9c0 .05.04.09.09.09H6.9c.05 0 .09-.04.09-.09V.09C6.99.03 6.95 0 6.9 0H.09zM1 1h5v2H1V1zm0 3h1v1H1V4zm2 0h1v1H3V4zm2 0h1v3H5V4zM1 6h1v1H1V6zm2 0h1v1H3V6z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <!-- OH Press -->
        <label for="overheadpress">1RM Overheadpress</label>
        <div class="flex items-center">
          <input
            v-model="overheadMax"
            type="number"
            id="overheadpress"
            class="
              my-2
              py-2
              mr-5
              bg-transparent
              dark:bg-dark-50
              text-center
              border border-dark-50
              dark:border-transparent
              shadow-inner
            "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--oi"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 8 8"
          >
            <path
              d="M.09 0C.03 0 0 .04 0 .09V7.9c0 .05.04.09.09.09H6.9c.05 0 .09-.04.09-.09V.09C6.99.03 6.95 0 6.9 0H.09zM1 1h5v2H1V1zm0 3h1v1H1V4zm2 0h1v1H3V4zm2 0h1v3H5V4zM1 6h1v1H1V6zm2 0h1v1H3V6z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <!-- Training days -->
        <span class="my-3"
          >Training days <i class="font-normal">(3-4 recommended)</i>:</span
        >
        <div class="flex items-center mb-3">
          <div class="flex flex-col items-center m-3">
            <label for="mon" class="mb-1">M</label>
            <input
              type="checkbox"
              value="mon"
              id="mon"
              v-model="trainingDays"
            />
          </div>
          <div class="flex flex-col items-center m-3">
            <label for="tue" class="mb-1">T</label>
            <input
              type="checkbox"
              value="tue"
              id="tue"
              v-model="trainingDays"
            />
          </div>
          <div class="flex flex-col items-center m-3">
            <label for="wed" class="mb-1">W</label>
            <input
              type="checkbox"
              value="wed"
              id="wed"
              v-model="trainingDays"
            />
          </div>
          <div class="flex flex-col items-center m-3">
            <label for="thu" class="mb-1">T</label>
            <input
              type="checkbox"
              value="thu"
              id="thu"
              v-model="trainingDays"
            />
          </div>
          <div class="flex flex-col items-center m-3">
            <label for="fri" class="mb-1">F</label>
            <input
              type="checkbox"
              value="fri"
              id="fri"
              v-model="trainingDays"
            />
          </div>
          <div class="flex flex-col items-center m-3">
            <label for="sat" class="mb-1">S</label>
            <input
              type="checkbox"
              value="sat"
              id="sat"
              v-model="trainingDays"
            />
          </div>
          <div class="flex flex-col items-center m-3">
            <label for="sun" class="mb-1">S</label>
            <input
              type="checkbox"
              value="sun"
              id="sun"
              v-model="trainingDays"
            />
          </div>
        </div>
        <BaseButton
          @click.prevent="storeValues"
          type="submit"
          class="mt-3 p-3 bg-blue-600"
          >Start</BaseButton
        >
      </form>
    </SwiperSlide>
  </Swiper>
</template>

<style>
.swiper-pagination-bullet-active-main {
  background-color: #2563eb;
}
</style>
