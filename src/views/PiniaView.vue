<template>
  <div>
    <h1 class=" text-[50px]">{{ countB }}</h1>
    <button class=" p-5 bg-black text-white rounded-lg" @click="incrementData">Increase</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStoreB } from "@/stores/counter";
import { storeToRefs } from "pinia";

const counterStore = useCounterStoreB();

let {countB} = storeToRefs(counterStore);
let {incrementData} = counterStore;


</script>

<style scoped></style>
