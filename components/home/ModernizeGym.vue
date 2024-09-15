<script setup>
</script>
<template>
  <section class="modernize-gym bg-banner">
    <div class="container flex">
      <div class="lg:w-3/6 py-8 sm:py-14 lg:py-20">
        <h1 class="font-42 text-white xl:text-black font-semibold mb-6 sm:mb-11">
          Modernize Your Gym with
          <span>Our Digital Gym Signage</span>
          <span class="lg:block"> Solutions </span>
        </h1>
        <nuxt-link
          to="/"
          class="btn btn-light btn-lg animate-icon-right inline-flex gap-5"
        >
          Get Started Today!
          <img src="/images/icons/arrow-right.svg" alt="arrow-right" />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.bg-banner {
  @apply bg-[url('/images/banner4.webp')] bg-right bg-primary bg-contain bg-no-repeat;
  @media screen and (min-width: 1600px) {
    background-position: right 200px center;
  }
}
</style>