<script setup>
</script>
<template>
  <section class="affordable bg-banner flex relative my-24">
    <div class="container self-center">
      <div class="left xl:w-3/6 mb-5 xl:mb-0">
        <h1 class="font-50 font-semibold mb-8 xl:mb-10">
          Affordable Digital Signage for Gyms
        </h1>
        <ul class="list-disc list-inside flex flex-col gap-3 font-20 xl:gap-4">
          <li>
            Display inspirational videos strategically on digital signage for
            fitness centers to inspire members during their workouts.
          </li>
          <li>
            Curate dynamic playlists with energizing music on fitness signage to
            enhance the workout vibe.
          </li>
          <li>
            Use gym digital signage to display class schedule updates and
            important announcements.
          </li>
          <li>
            Deliver precise promotions with digital signage for gyms to boost
            sales for gym offerings beyond memberships.
          </li>
        </ul>
      </div>
      <div class="right xl:hidden">
        <img
          src="/images/banner2.webp"
          loading="lazy"
          alt="Affordable Digital Signage Banner"
        />
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.bg-banner {
  @apply xl:bg-[url('/images/banner2.webp')] bg-right bg-contain bg-no-repeat min-h-[480px];
}
</style>

