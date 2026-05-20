<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <article
      class="my-5 w-full border border-[var(--border-soft)] bg-[rgba(248,244,237,0.88)] shadow-[var(--shadow-soft)]"
    >
      <div class="grid gap-0 lg:grid-cols-[minmax(10rem,12rem)_minmax(0,1fr)]">
        <div
          class="border-b border-[var(--border-soft)] bg-[rgba(232,225,212,0.44)] px-5 py-5 lg:border-b-0 lg:border-r"
        >
          <p class="section-label text-[var(--color-wine)]">Year</p>
          <p
            class="mt-3 font-[var(--font-mono)] text-xl text-[var(--text-primary-light)]"
          >
            {{ year }}
          </p>
          <div v-if="duration" class="mt-6">
            <p class="section-label text-[var(--color-cypress)]">Duration</p>
            <p class="mt-2 text-sm text-[var(--text-secondary-light)]">
              {{ duration }}
            </p>
          </div>
        </div>
        <div class="px-5 py-6 sm:px-8 sm:py-8">
          <div class="flex flex-wrap items-baseline gap-x-3 gap-y-2 text-left">
            <p
              class="font-display text-[2rem] leading-[0.95] text-[var(--text-primary-light)] sm:text-[2.45rem]"
            >
              {{ title }}
            </p>
            <p class="section-label text-[var(--color-slate-blue)]">
              archival entry
            </p>
          </div>
          <div class="mt-5 border-t border-[var(--border-soft)] pt-5 text-left">
            <p class="section-label text-[var(--color-wine)]">
              Instrumentation
            </p>
            <p
              class="mt-2 text-[1rem] leading-8 text-[var(--text-primary-light)]"
            >
              {{ `for ${formattedInstrumentation}` }}
            </p>
          </div>
          <div
            v-if="description"
            class="mt-5 text-left text-[var(--text-secondary-light)]"
          >
            <p>{{ description }}</p>
          </div>
          <div
            v-if="premierePlace"
            class="mt-5 border-t border-[var(--border-soft)] pt-5 text-left text-[var(--text-secondary-light)]"
          >
            <p class="section-label text-[var(--color-cypress)]">Premiere</p>
            <p class="mt-2">
              {{ `Premiered at ${premierePlace} on ${formattedPremiereDate}` }}
            </p>
          </div>
          <div v-if="embeddedVideoUrl" class="mt-7 flex justify-center">
            <div
              class="w-full max-w-2xl border border-[var(--border-soft)] p-2"
            >
              <iframe
                :src="embeddedVideoUrl"
                class="aspect-video w-full"
                title="Embedded performance video"
              />
            </div>
          </div>
          <div class="mt-8 flex flex-wrap gap-3">
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
                Watch Performance
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
        </div>
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
