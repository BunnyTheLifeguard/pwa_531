<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import SwiperCore, { Pagination } from 'swiper'
import BaseButton from '../components/BaseButton.vue'

SwiperCore.use([Pagination])
</script>

<template>
  <Swiper
    :pagination="{ dynamicBullets: true }"
    class="h-screen w-screen bg-white dark:bg-dark-100"
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
      <span class="mb-10 font-bold uppercase tracking-wide">Start</span>
      <span class="mx-10 mb-3 text-center"
        >To start, enter your 1 Rep Max for every exercise.</span
      >
      <span class="mx-10 mb-5 text-center"
        >If you don't know your 1RM, use the calculators.</span
      >
      <form action="" class="flex flex-col mt-5">
        <label for="squat">1RM Squats:</label>
        <div class="flex items-center">
          <input type="number" id="squat" class="my-2 py-2 mr-5" />
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

        <label for="deadlift">1RM Deadlifts</label>
        <div class="flex items-center">
          <input type="number" id="deadlift" class="my-2 py-2 mr-5" />
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
        <label for="benchpress">1RM Benchpress</label>
        <div class="flex items-center">
          <input type="number" id="benchpress" class="my-2 py-2 mr-5" />
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
        <label for="overheadpress">1RM Overheadpress</label>
        <div class="flex items-center">
          <input type="number" id="overheadpress" class="my-2 py-2 mr-5" />
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
        <BaseButton class="mt-3 p-3 bg-blue-600">Start</BaseButton>
      </form>
    </SwiperSlide>
  </Swiper>
</template>

<style>
.swiper-pagination-bullet-active-main {
  background-color: #dc2626;
}
</style>
