<script setup>
const links = [
  { id: 1, title: "How It Works", redirectTo: "/" },
  { id: 2, title: "Pricing", redirectTo: "/pricing" },
  {
    id: 3,
    title: "Industries", redirectTo: "/",
    subLinks: [
      { id: 31, title: "Banking", redirectTo: "/" },
      { id: 32, title: "Business", redirectTo: "/" },
      { id: 33, title: "Education", redirectTo: "" },
    ],
  },
  { id: 4, title: "Our Products", redirectTo: "/" },
  { id: 5, title: "Blogs", redirectTo: "/" },
  { id: 6, title: "Contact Us", redirectTo: "/" }
];

const toggleMenu = () => {
  const body = document.body;
  body.classList.toggle("show-menu");
};
</script>
<template>
  <header class="container">
    <!-- navbar lg  -->
    <nav class="navbar-lg">
      <ul class="navbar">
        <li class="mr-auto">
          <nuxt-link to="/" class="navbar-logo">
            <img src="/images/ez-ad-logo.svg" alt="ez-ad-logo" />
          </nuxt-link>
        </li>
        <li v-for="link in links" :key="link.id" class="hidden lg:block">
          <nuxt-link :to="link.redirectTo" class="navbar-link">
            {{ link?.title }}
            <img
              v-if="link.subLinks"
              src="/images/icons/chevron-down.svg"
              alt="chevron-down"
            />
          </nuxt-link>
        </li>
        <li class="hidden lg:inline-flex ml-auto items-center">
          <nuxt-link to="/" class="navbar-link xl:mr-5">
            EN
            <img src="/images/icons/chevron-down.svg" alt="chevron-down" />
          </nuxt-link>
          <nuxt-link to="/" class="btn btn-secondary mx-4"> Login </nuxt-link>
          <nuxt-link to="/" class="btn btn-primary"> Buy </nuxt-link>
        </li>
        <li class="lg:hidden">
          <!-- menu icon  -->
          <div @click="toggleMenu()" class="menu-icon cursor-pointer">
            <span class="block relative bg-black transition rounded-sm"></span>
            <span class="block relative bg-black transition rounded-sm"></span>
            <span class="block relative bg-black transition rounded-sm"></span>
          </div>
        </li>
      </ul>
    </nav>

    <!-- navbar sm -->
    <nav class="navbar-sm fixed bg-primary-dark z-50 pt-4">
      <ul
        class="flex flex-col items-center justify-center text-center gap-4 overflow-y-auto custom-scrollbar h-full mb-0 pr-4 mr-1"
      >
        <li v-for="link in links" :key="link.id" class="lg:hidden">
          <nuxt-link :to="link.redirectTo" class="navbar-link text-white">
            {{ link?.title }}
            <img
              v-if="link.subLinks"
              src="/images/icons/chevron-down.svg"
              class="filter-image-white"
              alt="chevron-down"
            />
          </nuxt-link>
        </li>
         <li class="lg:hidden inline-flex flex-col gap-4 mt-5 items-center">
          <nuxt-link to="/" class="navbar-link text-white">
            EN
            <img src="/images/icons/chevron-down.svg" class="filter-image-white" alt="chevron-down" />
          </nuxt-link>
          <nuxt-link to="/" class="btn btn-light"> Login </nuxt-link>
          <nuxt-link to="/" class="btn btn-dark"> Buy </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>