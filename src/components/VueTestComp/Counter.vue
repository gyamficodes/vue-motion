  

<template>
    <div>
        <h1 class=" text-[40px] text-red-400">{{ counter }}</h1>
        <div class=" flex items-center gap-4">
          <button @click="handdleCounterDecreament">Decrease</button>
          <button @click="handdleCounterReset">Reset</button>
          <button @click="handdleCounterIncreament">Increase</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const counter = ref<number>(0)

const  handdleCounterIncreament = () => counter.value++;
const  handdleCounterDecreament = () => counter.value--;
const  handdleCounterReset = () => counter.value = 0;


</script>

<style scoped>

</style>

// "type": "module",