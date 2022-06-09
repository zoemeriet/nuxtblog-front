<template>
  <div>
    <Navigation />
    <div class="layout--content">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navigation from 'components/navigation/Navigation.vue'
</script>

<style lang="scss">
.layout {
  &--content {
    padding: 80px;
  }
}
</style>