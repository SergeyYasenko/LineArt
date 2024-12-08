<template>
  <button
    type="button"
    :class="['btn', sizeClass, typeClass]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: "medium",
    validator: (value) => ["small", "medium", "large"].includes(value),
  },
  type: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "secondary", "danger"].includes(value),
  },
});

const typeClass = computed(() => `btn--${props.type}`);
const sizeClass = computed(() => `btn--${props.size}`);

const emit = defineEmits(["click"]);

function handleClick(event: Event) {
  emit("click", event);
}
</script>

<style lang="scss">
.btn {
  @include semiBoldMontserrat;
  color: $fontColorLight;
  border: none;
  border-radius: $radius;
  background-color: $btnColor;
  padding: 13px 15px;
  font-size: rem(14px);
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  @include transition;
}

.btn:hover {
  background-color: $hoverColor;
}

.btn-primary {
  background-color: $btnColor;
  color: $fontColorLight;
}
.btn-secondary {
  background-color: gray;
  color: white;
}
.btn-size-auto {
  max-width: none;
}
.btn-medium {
  max-width: 191px;
}
.btn-large {
  max-width: 253px;
}
</style>
