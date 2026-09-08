<template>
  <div class="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div
        class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"
      >
        <div class="flex items-center gap-12">
          <h2
            class="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white"
          >
            Products Category
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
        <!-- image - start -->
        <a
          href="#"
          class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
        >
          <img
            src="/receipt-printer.webp"
            loading="lazy"
            alt="receipt-printer"
            class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
          ></div>

          <span
            class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"
          >
            Receipt Printer
          </span>
        </a>
        <!-- image - end -->

        <!-- image - start -->
        <a
          href="#"
          class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
        >
          <img
            src="/labelprinter.webp"
            loading="lazy"
            alt="labelprinter"
            class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
          ></div>

          <span
            class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"
          >
            Label Printer
          </span>
        </a>
        <!-- image - end -->

        <!-- image - start -->
        <a
          href="#"
          class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
        >
          <img
            src="/cash.webp"
            loading="lazy"
            alt="Cash Dwawer"
            class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
          ></div>

          <span
            class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"
          >
            Cash Drawer
          </span>
        </a>
        <!-- image - end -->

        <!-- image - start -->
        <a
          href="#"
          class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
        >
          <img
            src="/mobile-printer.webp"
            loading="lazy"
            alt="Mobile Printer"
            class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
          ></div>

          <span
            class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"
          >
            Mobile Printer
          </span>
        </a>
        <!-- image - end -->
      </div>
    </div>
  </div>
</template>
