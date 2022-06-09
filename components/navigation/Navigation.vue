<template>
  <nav class="navigation--component">
    <NuxtLink to="/"><LogoBox /></NuxtLink>
    <ul class="navigation--menu">
      <li><NuxtLink to="/" class="navigation--link">Home page</NuxtLink></li>
      <li><NuxtLink to="/posts" class="navigation--link">Blog</NuxtLink></li>
      <li><NuxtLink to="/login"><Button>Log in</Button></NuxtLink></li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import Button from 'components/button/Button.vue'
import LogoBox from 'components/logo-box/LogoBox.vue'
</script>

<style lang="scss">
.navigation {
  &--component {
    display: flex;
    align-items: center;
    padding: 30px 80px;
    background-color: $white;
    box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  }

  &--menu {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 50px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  &--link {
    color: $primary;
    text-decoration: none;
  }
}
</style>