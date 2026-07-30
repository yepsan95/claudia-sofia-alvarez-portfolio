<template>
  <base-timeline
    title="Works By Year"
    :timeline-data="worksByYear"
    :filter-options="filterOptions"
    :sidebar-header="sidebarHeader"
    :sidebar-footer="sidebarFooter"
  />
</template>

<script setup lang="ts">
import BaseTimeline from "../components/BaseTimeline.vue";
import worksByYear from "../data/worksByYear.json" with { type: "json" };
import data from "../data/data.json" with { type: "json" };

const sidebarHeader = "Works By Year";

const categories = [
  ...new Set(
    data.flatMap((work) =>
      work.categories
        ? work.categories.split(", ").map((category) => category.trim())
        : [],
    ),
  ),
];

const filterOptions = categories.map((category) => ({
  id: category,
  label: category.charAt(0).toUpperCase() + category.slice(1),
}));

const sidebarFooter = "© 2026 Claudia Sofía Alvarez";
</script>

<style scoped></style>
