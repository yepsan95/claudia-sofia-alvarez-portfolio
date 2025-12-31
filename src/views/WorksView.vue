<template>
  <base-timeline
    title="Beethoven's Works By Year"
    :subtitle="subtitle"
    :timeline-data="worksByYear"
  />
</template>

<script setup lang="ts">
import BaseTimeline from "../components/BaseTimeline.vue";
import worksByYear from "../data/beethovenWorks";

const subtitle = `
  Ludwig van Beethoven was a German composer and pianist from the Classical to Romantic eras,
  widely considered one of history's greatest composers. He revolutionized music with works like his nine symphonies and thirty-two piano sonatas,
  transitioning Western art music from the Classical to the Romantic period. Despite experiencing deafness in his adult life, he continued to compose,
  creating some of his most celebrated pieces during this challenging time.
`;
</script>

<style scoped></style>
