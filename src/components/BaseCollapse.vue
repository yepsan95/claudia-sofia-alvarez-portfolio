<template>
  <Disclosure as="div" class="mx-auto w-full rounded-2xl bg-white py-2">
    <DisclosureButton
      @click="toggleOpen"
      class="relative flex w-full items-center justify-center rounded-lg px-4 py-2 text-center text-sm font-medium text-black focus:outline-none before:absolute before:left-0 before:top-1/2 before:w-full before:border-t before:border-gray-500 before:-translate-y-1/2 before:content-['']"
    >
      <slot name="title">
        <span
          class="relative z-10 border rounded-xl border-gray-600 bg-white px-3 py-1"
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
            <div class="inline-block text-sm text-gray-500">
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
  e.style.transition = "height 300ms ease, opacity 300ms ease";
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
  e.style.transition = "height 300ms ease, opacity 300ms ease";
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
