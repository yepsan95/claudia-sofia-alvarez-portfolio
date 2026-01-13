<template>
  <div id="app">
    <base-nav-bar :title="navBarTitle" :options="navBarOptions" />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import BaseNavBar from "./components/BaseNavBar.vue";

const navBarTitle = "Claudia Sofia Alvarez";
const navBarOptions = [
  { name: "about", label: "About", to: "/" },
  { name: "biography", label: "Biography", to: "/biography" },
  { name: "works", label: "Works", to: "/works" },
  { name: "recordings", label: "Recordings", to: "/recordings" },
  { name: "news", label: "News", to: "/news" },
  { name: "pressNotes", label: "Press Notes", to: "/press-notes" },
  { name: "contact", label: "Contact", to: "/contact" },
];
</script>

<style scoped></style>
