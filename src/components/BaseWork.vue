<template>
  <div class="flex justify-center">
    <div class="w-[800px] py-8 px-10 mx-2 my-5 border">
      <div class="flex justify-start">
        <p class="text-xl inline-block">{{ title }}</p>
        <p class="italic inline-block px-3">{{ `(${year})` }}</p>
        <p class="inline-block px-2">{{ duration }}</p>
      </div>
      <div class="flex justify-start text-left py-1">
        <p>{{ `for ${formattedInstrumentation}` }}</p>
      </div>
      <div class="flex justify-start text-left py-1">
        <p>{{ description }}</p>
      </div>
      <div v-if="premierePlace" class="flex justify-start text-left py-1">
        <p>{{ `Premiered at ${premierePlace} on ${formattedPremiereDate}` }}</p>
      </div>
      <div class="flex justify-center py-5">
        <iframe :src="videoUrl" width="320" height="180"></iframe>
      </div>
      <div class="flex justify-center">
        <a v-if="videoUrl" :href="videoUrl" class="mx-3">
          <button
            type="button"
            class="border rounded-lg bg-gray-700 hover:bg-gray-500 text-gray-200 px-3 py-2"
          >
            Video
          </button>
        </a>
        <a :href="scoreUrl || ''" class="mx-3">
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
  scoreUrl: {
    type: String,
    required: false,
  },
});

const formattedPremiereDate = computed(() => {
  if (!props.premiereDate) return "";
  const date = new Date(props.premiereDate);

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
