<template>
    <div>
      <h1>{{ state.count }}</h1>
      <button @click="hanfleIncrement">Add</button>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({count:0});

const hanfleIncrement = () => {
    state.count++;
}

</script>

<style scoped>

</style>