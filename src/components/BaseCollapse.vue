<template>
  <Disclosure as="div" class="mx-auto w-full bg-transparent py-3">
    <DisclosureButton
      @click="toggleOpen"
      class="score-rule relative flex w-full items-center justify-center px-4 py-3 text-center focus:outline-none"
    >
      <slot name="title">
        <span
          class="section-label relative z-10 rounded-full border border-[rgba(181,154,92,0.72)] bg-[var(--color-paper)] px-4 py-2 text-[var(--text-primary-light)] shadow-[0_8px_24px_rgba(22,24,29,0.08)]"
          :class="titleClass"
        >
          {{ title }}
        </span>
      </slot>
    </DisclosureButton>

    <Transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <DisclosurePanel v-if="localOpen" static>
        <div class="w-full text-center center-slot">
          <slot>
            <div
              class="inline-block text-sm text-[var(--text-secondary-light)]"
            >
              {{ content }}
            </div>
          </slot>
        </div>
      </DisclosurePanel>
    </Transition>
  </Disclosure>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: "",
  },
  content: {
    type: String,
    required: false,
    default: "",
  },
  titleClass: {
    type: String,
    required: false,
    default: "",
  },
  isOpen: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emit = defineEmits<{
  (e: "update:isOpen", value: boolean): void;
}>();

const localOpen = ref(props.isOpen);

watch(
  () => props.isOpen,
  (newVal) => {
    localOpen.value = newVal;
  },
);

watch(localOpen, (newVal) => {
  emit("update:isOpen", newVal);
});

function toggleOpen() {
  localOpen.value = !localOpen.value;
}

const beforeEnter = (el: Element) => {
  const e = el as HTMLElement;
  e.style.height = "0";
  e.style.opacity = "0";
  e.style.overflow = "hidden";
};
const enter = (el: Element) => {
  const e = el as HTMLElement;
  const height = e.scrollHeight;
  e.style.transition =
    "height 320ms cubic-bezier(0.22, 1, 0.36, 1), opacity 320ms cubic-bezier(0.22, 1, 0.36, 1)";
  e.style.height = height + "px";
  e.style.opacity = "1";
};
const afterEnter = (el: Element) => {
  const e = el as HTMLElement;
  e.style.height = "auto";
  e.style.overflow = "";
};
const beforeLeave = (el: Element) => {
  const e = el as HTMLElement;
  e.style.height = e.scrollHeight + "px";
  e.style.opacity = "1";
  e.style.overflow = "hidden";
};
const leave = (el: Element) => {
  const e = el as HTMLElement;
  void e.offsetHeight;
  e.style.transition =
    "height 320ms cubic-bezier(0.22, 1, 0.36, 1), opacity 320ms cubic-bezier(0.22, 1, 0.36, 1)";
  e.style.height = "0";
  e.style.opacity = "0";
};
const afterLeave = (el: Element) => {
  const e = el as HTMLElement;
  e.style.height = "";
  e.style.opacity = "";
  e.style.overflow = "";
};
</script>
