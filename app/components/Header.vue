<script setup>
const router = useRouter();
const showSearch = ref(false);
const query = ref("");
const data = ref([]);

const toggleSearch = () => {
  showSearch.value = !showSearch.value;
};

const search = (event) => {
  console.log(event);
  if (event.trim() !== "") {
    console.log("Search query submitted:", event);
    router.push({ path: `/search/${event}` });
  }
};
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-12 h-24 px-8 relative">
      <div class="col-span-4 flex items-center justify-start">
        <NuxtLink to="/">
          <NuxtImg src="/logo.png" class="w-20" />
        </NuxtLink>
      </div>

      <div class="col-span-8 flex items-center justify-end">
        <ul class="uppercase text-[#333] font-bold">
          <li class="inline-block px-3">
            <NuxtLink
              class="py-2 hover:text-rongta hover:border-b-2 hover:border-rongta"
              to="/"
              >Home</NuxtLink
            >
          </li>
          <li class="inline-block px-3">
            <NuxtLink
              class="py-2 hover:text-rongta hover:border-b-2 hover:border-rongta"
              to="/about"
              >About Us</NuxtLink
            >
          </li>

          <li class="inline-block px-3">
            <NuxtLink
              class="py-2 hover:text-rongta hover:border-b-2 hover:border-rongta"
              to="/product"
              >Products</NuxtLink
            >
          </li>

          <li class="inline-block px-3">
            <NuxtLink
              class="py-2 hover:text-rongta hover:border-b-2 hover:border-rongta"
              to="/solution"
              >Solution</NuxtLink
            >
          </li>

          <li class="inline-block px-3">
            <NuxtLink
              class="py-2 hover:text-rongta hover:border-b-2 hover:border-rongta"
              to="/contact"
              >Contact Us</NuxtLink
            >
          </li>

          <li class="inline-block px-3" @click="toggleSearch">
            <NuxtLink to>
              <NuxtImg src="/search.svg" class="w-4" />
            </NuxtLink>
          </li>
        </ul>
      </div>

      <transition
        enter-active-class="transition ease-out duration-300"
        enter-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-200"
        leave-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div
          class="grid grid-flow-col grid-cols-8 absolute bottom-1 right-10 gap-1"
          v-if="showSearch"
        >
          <div class="col-span-6">
            <form class="inline" @submit.prevent="search(query)">
              <input
                class="border px-2 rounded"
                type="text"
                placeholder="Search.."
                v-model="query"
              />
              <span>
                <button type="submit" class="bg-rongta p-1 rounded">
                  <NuxtImg src="/search.svg" class="h-4" />
                </button>
              </span>
            </form>
          </div>

          <div class="col-span-1">
            <button class="bg-rongta p-1 rounded" @click="toggleSearch">
              <NuxtImg src="/close.svg" class="h-4" />
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
