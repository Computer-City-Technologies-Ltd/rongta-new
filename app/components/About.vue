<template>
  <div>
    <div
      style="background-image: url(&quot;/about-bg.webp&quot;)"
      class="lg:h-[600px] h-[400px] bg-cover bg-no-repeat bg-center bg-fixed grid lg:grid-flow-col lg:grid-cols-2 grid-cols-1"
    >
      <div
        class="lg:col-span-1 lg:flex lg:justify-center lg:items-center lg:ml-8 hidden"
      >
        <div class="bg-white py-16 px-12 shadow">
          <h2 class="text-lg font-semibold">
            Rongta Technology (Xiamen) Group Co.,Ltd.
          </h2>
          <p class="text-rongtatext text-sm mt-8 mb-6">
            Rongta Technology (Xiamen) Group Co., Ltd. is a high-tech enterprise
            established in Jan 1st, 2009, specializing in R&D, manufacturing and
            marketing of pos printers, receipt printers, label scales, thermal
            transfer barcode printers, impact printers, printer mechanism,
            control boards and other POS peripherals.
          </p>
          <p class="text-rongtatext text-sm mt-8 mb-6">
            Computer City Technologies Ltd. is the authorized distributor for
            Rongta in Bangladesh
          </p>

          <NuxtLink
            class="text-white bg-rongta px-8 py-2 uppercase text-sm hover:bg-rongtatext"
            to="/about"
            >Read More</NuxtLink
          >
        </div>
      </div>
      <AboutBox />
    </div>
  </div>
</template>
