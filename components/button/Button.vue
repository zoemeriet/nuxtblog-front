<template>
  <button class="button--component">
    <slot/>
  </button>
</template>

<script lang="ts" setup>
interface ButtonProps {
  to?: string
}

const props = withDefaults(defineProps<ButtonProps>(), {
  to: undefined
})
</script>

<style lang="scss">
.button {
  &--component {
    min-width: 140px;
    padding: 20px;
    color: $white;
    font-size: 14px;
    font-weight: $bold;
    border-radius: 100px;
    background-color: $primary;
    border: none;
    box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  }
}
</style>