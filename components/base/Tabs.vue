<template>
  <div class="w-full">
    <!-- Tab Headers -->
    <div class="custom-scrollbar overflow-x-auto pb-3">
      <div class="flex border-b min-w-max">
        <button
          v-for="(tab, index) in tabs"
          :key="tab.name"
          @click="activeTab = index"
          :class="[
            'transition-colors duration-300 ease-in-out flex-grow flex items-center justify-center gap-1 lg:gap-4 text-base lg:text-[20px] leading-[24px] p-3 md:p-5',
            activeTab === index
              ? 'text-black border-b-2 border-primary-dark2 font-semibold'
              : 'text-gray-600 hover:text-black',
          ]"
        >
          <img
            :src="`/images/icons/${tab?.icon}.svg`"
            :class="[
              activeTab === index ? '' : `filter-image-gray `,
              'w-5 h-5 lg:w-7 lg:h-7 mr-1',
            ]"
            alt=""
          />
          {{ tab.name }}
        </button>
      </div>
    </div>

    <!-- Tab Content -->
    <div class="p-4 mt-2">
      <Transition>
        <keep-alive>
          <component :is="tabs?.[activeTab]?.component" />
        </keep-alive>
      </Transition>
    </div>
  </div>
</template>

<script setup>
defineProps({
  tabs: {
    type: Array,
    default: () => [],
  },
});

const activeTab = ref(0);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
