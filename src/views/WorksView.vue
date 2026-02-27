<template>
  <base-timeline
    title="Claudia Sofia Alvarez' Works By Year"
    :subtitle="subtitle"
    :timeline-data="worksByYear"
    :sidebar-header="sidebarHeader"
    :sidebar-footer="sidebarFooter"
  />
</template>

<script setup lang="ts">
import BaseTimeline from "../components/BaseTimeline.vue";
import worksByYear from "../data/worksByYear.json" with { type: "json" };

const subtitle = `
  Claudia Sofia Alvarez is a Peruvian composer Lorem ipsum dolor sit amet,
  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

const sidebarHeader = "Works By Year";
const sidebarFooter = "© 2026 Claudia Sofia Alvarez";
</script>

<style scoped></style>
