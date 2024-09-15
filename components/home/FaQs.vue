<script setup>
const items = ref([
  { title: 'How easy is it to install digital signage for gyms?', content: '' },
  { title: 'Can I manage multiple screens across different gym locations?', content: '' },
  { title: 'How can digital signage gym and fitness enhance member engagement?', content: '' },
  { title: 'What kind of content can i display with signage for gym?', content: '' }
])
</script>
<template>
  <section class="why-choose py-16 lg:py-24">
    <div class="container">
      <h1 class="font-42 font-semibold text-center mb-11 lg:mb-16">
       Frequently Asked Questions About <span class="text-primary">Digital</span>
        <span class="lg:block text-primary"> Signage Fo<span class="text-black">r Gyms</span>
        </span>
      </h1>
      <base-accordion :AccordionItems="items" />
    </div>
  </section>
</template>