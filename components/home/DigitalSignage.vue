<script setup>
</script>
<template>
  <section class="digital-signage bg-banner flex relative my-7 sm:my-16 xl:my-8">
    <div class="container self-center">
      <div class="left xl:w-3/6 mb-5 xl:mb-0">
        <h6 class="font-14 mb-3">Digital Signage for Gyms</h6>
        <h1 class="font-50 font-semibold">
          Digital Signage for Gyms That Improves Member Experience
        </h1>
        <p class="font-16 w-5/6 my-6">
          Experience enhanced engagement with EZ-AD TV's digital signage for
          gyms. Promote health and fitness with captivating content.
        </p>
        <nuxt-link to="/" class="btn btn-primary btn-lg animate-icon-right inline-flex gap-5">
          Get Started Today!
          <img src="/images/icons/arrow-right.svg" alt="arrow-right" />
        </nuxt-link>
      </div>
      <div class="right hidden sm:block xl:hidden">
       <img src="/images/banner1.webp" alt="Digital Signage Banner">
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.bg-banner {
  @apply xl:bg-[url('/images/banner1.webp')] bg-right bg-contain bg-no-repeat min-h-[480px] 2xl:min-h-[600px];
}
</style>

