<template>
  <div class="flex justify-center px-4 sm:px-6 lg:px-8">
    <article
      class="my-4 w-full max-w-4xl border border-[var(--border-soft)] bg-[rgba(248,244,237,0.88)] px-5 py-6 shadow-[var(--shadow-soft)] sm:my-5 sm:px-8 sm:py-8"
    >
      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-left">
        <p
          class="font-display text-[2rem] leading-[0.98] text-[var(--text-primary-light)]"
        >
          {{ title }}
        </p>
        <p class="font-[var(--font-mono)] text-sm text-[var(--color-plum)]">
          {{ `(${year})` }}
        </p>
        <p
          v-if="duration"
          class="font-[var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--text-secondary-light)]"
        >
          {{ duration }}
        </p>
      </div>
      <div class="flex justify-start py-2 text-left">
        <p>{{ `for ${formattedInstrumentation}` }}</p>
      </div>
      <div
        class="flex justify-start py-2 text-left text-[var(--text-secondary-light)]"
      >
        <p>{{ description }}</p>
      </div>
      <div
        v-if="premierePlace"
        class="flex justify-start py-2 text-left text-[var(--text-secondary-light)]"
      >
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
            class="button-primary rounded-sm px-4 py-2 text-sm"
          >
            Video
          </button>
        </a>
        <a v-if="scoreUrl" :href="scoreUrl || ''">
          <button
            type="button"
            class="button-secondary rounded-sm px-4 py-2 text-sm"
          >
            Purchase score
          </button>
        </a>
      </div>
    </article>
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
