<script setup>
const tabs = [
  { name: 'Customization', icon: "grids" , component: defineAsyncComponent(() => import('~/components/tab/Customization')) },
  { name: 'Screen Layouts', icon: "magic-wind" , component: defineAsyncComponent(() => import('~/components/tab/ScreenLayouts')) },
  { name: 'Multiple Management', icon: "user-engagement" , component: defineAsyncComponent(() => import('~/components/tab/MultipleManagement')) },
];
</script>
<template>
  <section class="why-choose bg-gray-300 pt-16 lg:pt-24">
    <div class="container">
      <h1 class="font-42 font-semibold text-center mb-11 lg:mb-16">
        Why Choose EZ-AD TV Digital Signage
        <span class="lg:block"> for Gyms? </span>
      </h1>
      <BaseTabs :tabs="tabs"/>
    </div>
  </section>
</template>