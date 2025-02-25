<template>
    <div>
        <h1>Type the Keep alive message</h1>
     <input class=" border border-gray-800 mt-3 px-2" type="text" v-model="Message"  placeholder="Message">
     <h1>Message to the world: {{ Message }}</h1>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';

  const  Message = ref<string>('');

</script>

<style scoped>

</style>