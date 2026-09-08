<script setup>
import { ref, computed } from "vue";

// Variables
const category = ref("thermal-printer");
const cat_id = ref([57, 9, 56]);

// Convert params to query string manually
const queryString = new URLSearchParams();
cat_id.value.forEach((id) => queryString.append("id", id));

const { data, pending, error } = await useFetch(
  `https://admindash.comcitybd.com/api/brands/Rongta/4?`,
  {
    default: () => [],
    method: "GET",
  },
);

// Reactive products
const products = computed(() => data.value?.products?.data || []);
</script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-col items-center mt-8">
      <h2 class="text-3xl font-bold uppercase tracking-wider">
        Thermal Printer
      </h2>

      <NuxtImg src="/bt-i.png" class="mt-4" />
    </div>

    <div
      class="grid lg:grid-flow-col lg:grid-cols-4 grid-cols-1 gap-6 px-6 py-12"
      v-if="products.length > 0"
    >
      <div
        class="border-4 border-gray-200 hover:border-rongta"
        v-for="product in products"
        :key="product?.slug"
      >
        <NuxtLink :to="`/product/${product.slug}`">
          <img :src="product.photo" :alt="product.name" />
          <p class="text-rongtatext text-sm font-semibold px-8 py-2">
            {{ product?.name }}
          </p>
        </NuxtLink>
      </div>
    </div>
    <div v-else class="text-center py-12 text-gray-500">No products found.</div>
  </div>
</template>
