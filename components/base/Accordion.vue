<template>
  <div
    :class="[
      AccordionStylesType,
      'w-full flex flex-col max-w-[1000px] mx-auto',
    ]"
  >
    <div
      v-for="(item, index) in AccordionItems"
      :key="index"
      class="accordion-wrapper rounded-lg"
    >
      <button
        :class="[
          openIndex === index ? 'active' : '',
          'accordion-header w-full flex items-center focus:outline-none rounded-t-lg p-4 sm:px-6 sm:py-5',
        ]"
        @click="toggleAccordion(index)"
      >
        <span
          class="accordion-items-count text-lg text-[#BBC2CF] self-start md:self-center mr-4 md:mr-8 mt-1"
        >
          {{ index + 1 }}.
        </span>
        <span class="accordion-title font-20 font-medium text-left">{{
          item?.title
        }}</span>
        <img
          :src="`/images/icons/${Icon}`"
          class="accordion-icon transition-all w-7 h-7 object-contain ml-auto self-start md:self-center pl-1"
          alt=""
        />
      </button>
      <div
        :class="[
          openIndex === index ? 'max-h-max py-2' : 'max-h-0 h-0 p-0',
          'accordion-body transition-all duration-300 overflow-hidden px-4',
        ]"
      >
        <p v-html="item?.content ? item?.content : defaultDummyText ">
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  AccordionItems: {
    type: Array,
    default: () => [],
  },
  AccordionStylesType: {
    type: String,
    default: "accordion-styles-type1",
  },
  Icon: {
    type: String,
    default: "plus.png",
  },
});

const openIndex = ref(null);

const toggleAccordion = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const defaultDummyText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime sed at vel aperiam fugit totam atque ullam nostrum unde dignissimos adipisci iusto numquam natus, ab et incidunt maiores sapiente.";
</script>


<style lang="postcss" scoped>
.accordion-styles-type1 {
    @apply gap-4 ;
  .accordion-wrapper {
    border: 1px solid #e2e8f0;
  }
  .accordion-header {
    @apply focus:border-t-2 focus:border-primary-dark2;
  }
  .accordion-header.active {
    .accordion-icon {
      @apply rotate-45 transform;
    }
  }
  .accordion-title {
    @apply text-gray-800;
  }
  .accordion-body{
    @apply text-gray-700
  }
}
.accordion-styles-type2 {
  .accordion-header {
    @apply text-gray-500;
    &.active{
    @apply text-black;
    }
  }
  .accordion-header:not(.active) {
    .accordion-icon {
      @apply rotate-180 transform;
      filter: brightness(0) invert(0.5);
    }
  }
  .accordion-items-count {
    display: none;
  }
  .accordion-header,
  .accordion-body {
    padding-inline: 0;
  }
  .accordion-body{
    @apply text-black font-medium;
  }
}
</style>
