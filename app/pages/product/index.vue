<script setup>
const cat_id = ref([57, 9, 56]);

const queryString = new URLSearchParams();
cat_id.value.forEach((id) => queryString.append("id", id));

const { data, pending, error } = await useFetch(
  `https://admindash.comcitybd.com/api/brands/Rongta/20?`,
  {
    default: () => [],
    method: "GET",
  },
);

const products = computed(() => data.value?.products?.data || []);
// console.log(products.value);

useHead(() => ({
  title: `Products`,
  meta: [
    {
      name: "description",
      content: "Products page For Rongta",
    },
  ],
}));
</script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-col items-center mt-8">
      <h2 class="text-3xl font-bold uppercase tracking-wider">All Products</h2>
      <img src="/bt-i.png" class="mt-4" />
    </div>

    <!-- Loader -->
    <div v-if="pending" class="text-center py-12 text-gray-500">
      Loading products...
    </div>

    <!-- Error -->
    <div v-if="error" class="text-center py-12 text-red-500">
      Failed to load products.
    </div>

    <!-- Products Grid -->
    <div
      v-if="products && products.length > 0"
      class="grid lg:grid-cols-4 grid-cols-1 gap-6 px-6 py-12"
    >
      <div
        class="border-4 border-gray-200 hover:border-rongta"
        v-for="product in products"
        :key="product.slug"
      >
        <NuxtLink :to="`/product/${product.slug}`">
          <img :src="product.photo" :alt="product.name" />
          <p class="text-rongtatext text-sm font-semibold px-8 py-2">
            {{ product.name }}
          </p>
        </NuxtLink>
      </div>
    </div>

    <!-- No products -->
    <div
      v-else-if="!pending && (!products || products.length === 0)"
      class="text-center py-12 text-gray-500"
    >
      No products found.
    </div>
  </div>
</template>
