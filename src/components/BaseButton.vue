<template>
  <button :class="buttonColor">
    {{ props.message }}
  </button>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";

type ButtonType = "primary" | "secondary" | "cancel";

const props = defineProps({
  type: {
    type: String as PropType<ButtonType>,
    required: false,
    default: () => "primary",
  },
  message: {
    type: String,
    required: false,
    default: () => "",
  },
});

const buttonColor = computed<string>(() => {
  const colors = {
    primary: "bg-sky-600",
    secondary: "bg-sky-900",
    cancel: "bg-gray-600",
  };

  return colors[props.type];
});
</script>
