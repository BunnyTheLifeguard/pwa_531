<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'

const btc = 'BITCOIN ADDRESS'
const xmr = 'MONERO ADDRESS'

const copyBitcoin = async () => {
  console.log('Copy btc address')
  // await Clipboard.write({
  //   string: btc
  // })
}

const copyMonero = async () => {
  console.log('Copy xmr address')
  // await Clipboard.write({
  //   string: xmr
  // })
}
</script>

<template>
  <div>
    <TheHeader class="col-span-full dark:bg-dark-100" pageName="settings" />

    <div
      class="
        col-start-2 col-end-12
        row-start-2 row-end-12
        flex flex-col
        justify-center
      "
    >
      <div class="text-base pm:text-lg text-center mb-3 pm:mb-5">
        If you want to support the development of the project, you can do so
        via:
      </div>

      <!-- BTC -->
      <div class="flex flex-col justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--fa-brands"
          width="48"
          height="48"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 512 512"
        >
          <path
            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256S119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702l-27.213-6.781l-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81l-27.198-6.781l-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14l-37.53-9.37l-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907c-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464c.271.395-19.78-4.937-19.78-4.937l-13.51 31.147l35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213l27.182 6.781l11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523l27.213 6.781l11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727c11.836-33.79-.589-53.281-25.004-65.991c17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"
            fill="currentColor"
          ></path>
        </svg>
        <span class="my-3 pm:my-5 font-bold uppercase">Bitcoin:</span>
        <span id="bitcoin">{{ btc }}</span>
        <BaseButton
          @click="copyBitcoin"
          variant="primary"
          id="btnBTC"
          class="py-2 pm:py-3 px-10 my-3 pm:my-5"
          >Copy Address</BaseButton
        >
      </div>

      <!-- XMR -->
      <div class="flex flex-col justify-center items-center mt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--fa-brands"
          width="48"
          height="48"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 496 512"
        >
          <path
            d="M352 384h108.4C417 455.9 338.1 504 248 504S79 455.9 35.6 384H144V256.2L248 361l104-105v128zM88 336V128l159.4 159.4L408 128v208h74.8c8.5-25.1 13.2-52 13.2-80C496 119 385 8 248 8S0 119 0 256c0 28 4.6 54.9 13.2 80H88z"
            fill="currentColor"
          ></path>
        </svg>
        <span class="my-3 pm:my-5 font-bold uppercase">Monero:</span>
        <span id="monero">{{ xmr }}</span>
        <BaseButton
          @click="copyMonero"
          variant="primary"
          id="btnXMR"
          class="py-2 pm:py-3 px-10 my-3 pm:my-5"
          >Copy Address</BaseButton
        >
      </div>

      <div class="text-lg text-center">Thank you.</div>
    </div>
    <TheFooter class="col-span-full dark:bg-dark-100" />
  </div>
</template>
