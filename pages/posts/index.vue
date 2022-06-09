<template>
  <div>
    <h1>Discover our blog</h1>
    <div class="posts--list">
      <Card v-for="post in posts" :key="post.id" :title="post.title" image="https://via.placeholder.com/250" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PostRessource } from 'utils/ressources';
import Card from 'components/card/Card.vue';

const { $api } = useNuxtApp()

const posts = ref<[PostRessource] | []>([])

onMounted(async () => {
  const response = await $api().posts.getAll()
  if (response.data.data) {
    posts.value = response.data.data
  }
})
</script>

<style lang="scss">
.posts {
  &--list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
}
</style>