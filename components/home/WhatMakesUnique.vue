<script setup>
const items = ref([
  {
    title: "Thousands of Templates",
    content:
      "<span class='block mb-3'> Gym-Specific Templates at Your Fingertips </span> Dive into an immense library of templates specifically tailored for gyms. From workout plans to class schedules, our digital signage solutions cater to every gym's style and theme.",
  },
  {
    title: "EZAD Tv Mobile App",
    content: "",
  },
  {
    title: "AI Generated Motivation Templates",
    content: "",
  },
  {
    title: "Seamless Youtube Integration",
    content: "",
  },
  {
    title: "Plug-and-Play EdTech Advertisements",
    content: "",
  },
  {
    title: "Social Media Connectivity",
    content: "",
  },
  {
    title: "More Than Just Gym Signage",
    content: "",
  },
]);
</script>
<template>
  <section class="affordable flex relative my-11 sm:my-24">
    <div class="container self-center">
      <h1 class="font-50 font-semibold mb-8 xl:mb-10">
        What Makes Our Gym’s
        <span class="block"> Digital Signage Unique? </span>
      </h1>
      <div
        class="wrapper flex flex-col lg:flex-row-reverse gap-11 bg-gray-900 rounded-[30px] p-7 sm:p-14"
      >
        <div class="right xl:w-3/6">
          <img
            src="/images/banner7.webp"
            loading="lazy"
            class="w-full h-full object-contain"
            alt="Affordable Digital Signage Banner"
          />
        </div>
        <div class="left xl:w-3/6 mb-5 xl:mb-0">
          <base-accordion
            :AccordionItems="items"
            AccordionStylesType="accordion-styles-type2"
            Icon="arrow-up.svg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

