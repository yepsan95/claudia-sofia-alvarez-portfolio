<template>
  <div class="flex justify-center px-4 sm:px-6 lg:px-8">
    <div class="my-4 w-full max-w-4xl border px-5 py-6 sm:my-5 sm:px-8 sm:py-8">
      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-left">
        <p class="text-2xl leading-tight">{{ title }}</p>
        <p class="italic">{{ `(${year})` }}</p>
        <p v-if="duration">{{ duration }}</p>
      </div>
      <div class="flex justify-start py-1 text-left">
        <p>{{ `for ${formattedInstrumentation}` }}</p>
      </div>
      <div class="flex justify-start py-1 text-left">
        <p>{{ description }}</p>
      </div>
      <div v-if="premierePlace" class="flex justify-start py-1 text-left">
        <p>{{ `Premiered at ${premierePlace} on ${formattedPremiereDate}` }}</p>
      </div>
      <div v-if="embeddedVideoUrl" class="flex justify-center py-5">
        <iframe
          :src="embeddedVideoUrl"
          class="aspect-video w-full max-w-xl"
          title="Embedded performance video"
        />
      </div>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <a
          v-if="videoUrl"
          :href="videoUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            class="border rounded-lg bg-gray-700 hover:bg-gray-500 text-gray-200 px-3 py-2"
          >
            Video
          </button>
        </a>
        <a v-if="scoreUrl" :href="scoreUrl || ''">
          <button
            type="button"
            class="border rounded-lg bg-gray-700 hover:bg-gray-500 text-gray-200 px-3 py-2"
          >
            Purchase score
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  year: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  instrumentation: {
    type: Array<string>,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  premiereDate: {
    type: String,
    required: false,
  },
  premierePlace: {
    type: String,
    required: false,
  },
  publishDate: {
    type: String,
    required: false,
  },
  duration: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: false,
  },
  embeddedVideoUrl: {
    type: String,
    required: false,
  },
  scoreUrl: {
    type: String,
    required: false,
  },
});

const formattedPremiereDate = computed(() => {
  if (!props.premiereDate) return "";
  const date = new Date(props.premiereDate.split("T")[0]);

  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date,
  );
  const day = date.getDate();
  const year = date.getFullYear();

  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
          ? "rd"
          : "th";

  const formattedDate = `${monthName} ${day}${suffix}, ${year}`;
  return formattedDate;
});

const formattedInstrumentation = computed(() => {
  const result = props.instrumentation.reduce((acc, instrument, index) => {
    if (acc) {
      if (index === props.instrumentation.length - 1) {
        acc += " and ";
      } else {
        acc += ", ";
      }
    }
    acc += instrument;
    return acc;
  }, "");
  return result;
});
</script>

<style scoped></style>
