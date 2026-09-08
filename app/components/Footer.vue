<template>
  <div>
    <div
      style="background-image: url(&quot;/footer-bg.jpg&quot;)"
      class="h-[480px] bg-cover bg-no-repeat bg-center bg-fixed grid grid-flow-row"
    >
      <div
        id="alert-1"
        class="flex w-full p-4 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200"
        role="alert"
        v-if="showThanks"
      >
        <svg
          class="flex-shrink-0 w-5 h-5 text-blue-700 dark:text-blue-800"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          />
        </svg>
        <div class="ml-3 text-sm font-medium text-blue-700 dark:text-blue-800">
          Your Email Address has been submitted
        </div>
        <button
          @click="toggleThanks"
          type="button"
          class="ml-auto -mx-1.5 -my-1.5 bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300"
          data-collapse-toggle="alert-1"
          aria-label="Close"
        >
          <span class="sr-only">Close</span>
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div class="border-t border-gray-600"></div>

      <!-- Links Section -->

      <div
        class="grid lg:grid-flow-col lg:grid-cols-4 gap-4 justify-items-center px-8 container mx-auto"
      >
        <div class="col-span-1">
          <ul>
            <li class="text-white uppercase py-2 text-xl font-semibold">
              Contact Us
            </li>
            <li class="text-sm text-gray-400 py-2">
              75-76, B.S. Bhaban, 3rd Floor Laboratory Road Dhaka-1205,
              Bangladesh
            </li>
            <li class="text-sm text-gray-400 py-2">Tel:+88 09604700800</li>
            <li class="text-sm text-gray-400 py-2">info AT rongta.com.bd</li>
          </ul>
        </div>

        <div class="col-span-1 lg:block hidden">
          <ul>
            <li class="text-white uppercase py-2 text-xl font-semibold">
              Service & Support
            </li>

            <NuxtLink to="/privacy">
              <li class="text-sm text-gray-400 py-2">Privacy Policy</li>
            </NuxtLink>

            <a href="https://www.rongtatech.com/category/downloads/3">
              <li class="text-sm text-gray-400 py-2">User Manual</li>
            </a>

            <a href="https://www.rongtatech.com/category/downloads/1">
              <li class="text-sm text-gray-400 py-2">Driver Download</li>
            </a>

            <NuxtLink to="/faq">
              <li class="text-sm text-gray-400 py-2">Faq</li>
            </NuxtLink>
          </ul>
        </div>

        <div class="col-span-1 lg:block hidden">
          <ul>
            <li class="text-white uppercase py-2 text-xl font-semibold">
              New Products
            </li>
            <li class="text-sm text-gray-400 py-2">RP327-UP</li>
            <li class="text-sm text-gray-400 py-2">RP328-UP</li>
            <li class="text-sm text-gray-400 py-2">RP328-UW</li>
          </ul>
        </div>

        <div class="col-span-1 lg:block hidden">
          <ul>
            <li class="text-white uppercase py-2 text-xl font-semibold">
              Categories
            </li>
            <NuxtLink to="/product">
              <li class="text-sm text-gray-400 py-2">Mobile Printer</li>
            </NuxtLink>
            <NuxtLink to="/product">
              <li class="text-sm text-gray-400 py-2">Label Printer</li>
            </NuxtLink>
            <NuxtLink to="/product">
              <li class="text-sm text-gray-400 py-2">Receipt Printer</li>
            </NuxtLink>
            <NuxtLink to="/product">
              <li class="text-sm text-gray-400 py-2">Thermal Printer</li>
            </NuxtLink>
          </ul>
        </div>
      </div>

      <div class="border-b border-gray-600"></div>

      <!-- Copyright Section -->

      <div class="grid grid-cols-2 px-8 py-4">
        <div class="col-span-1">
          <p class="text-sm text-gray-400">
            Copyright © 2026 Rongta Bangladesh
          </p>
        </div>

        <div class="col-span-1 flex justify-end">
          <a href="https://www.facebook.com/comcity.bd">
            <NuxtImg src="/facebook.png" class="w-8" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: null,
      honeyPot: false,
      showThanks: false,
    };
  },

  methods: {
    sendMail() {
      this.$axios
        .post("https://submit-form.com/eNqzBhtY", {
          email: this.email,
          _honeypot: this.honeyPot,
        })
        .then((response) => {
          console.log(response.data);
          this.showThanks = true;
        });
    },

    toggleThanks() {
      this.showThanks = !this.showThanks;
    },
  },
};
</script>
