<script setup>
</script>

<template>
  <section class="container overflow-hidden">
    <h4 class="text-[20px] leading-[24px] text-center mb-6">Trusted by</h4>
      <div
        class="brands-wrapper whitespace-nowrap flex gap-5 sm:gap-8 lg:gap-14 justify-center items-center"
      >
        <img
          v-for="items in 7"
          :key="items"
          :src="`/images/brands/brand${items}.webp`"
          class="w-[100px] h-[50px] object-contain"
          alt="brands"
        />
        <img
          v-for="items in 7"
          :key="items"
          :src="`/images/brands/brand${items}.webp`"
          class="w-[100px] h-[50px] object-contain"
          alt="brands"
        />
        <img
          v-for="items in 7"
          :key="items"
          :src="`/images/brands/brand${items}.webp`"
          class="w-[100px] h-[50px] object-contain"
          alt="brands"
        />
      </div>
  </section>
</template>

<style lang="postcss" scoped>
.brands-wrapper {
  animation: scrollText 10s linear infinite;
}
@keyframes scrollText {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
