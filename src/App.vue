<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="">
      <nav class="space-x-1 text-slate-900 mx-auto">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/learning">learning</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  
</template>

<style></style>
