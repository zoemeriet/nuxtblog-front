<template>
  <div class="card--component">
    <img :src="props.image" class="card--image" />
    <p class="card--title">{{ props.title }}</p>
  </div>
</template>

<script lang="ts" setup>
interface CardProps {
  title: string
  image: string
}

const props = withDefaults(defineProps<CardProps>(), {})
</script>

<style lang="scss">
.card {
  &--component {
    border-radius: 10px;
    overflow: hidden;
  }
  &--image {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  &--title {
    min-height: 75px;
    padding: 18px 30px;
    margin: 0;
    color: $white;
    font-size: 14px;
    font-family: $fontHeadline;
    background-color: $primary;
  }
}
</style>