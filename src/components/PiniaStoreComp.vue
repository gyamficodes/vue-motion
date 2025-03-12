<template>
    <div>

<h1>{{ count }} </h1>
<button @click="increment">IncreaseStore</button>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const Store = useCounterStore();
const  count = storeToRefs(Store);
const {doubleCount, increment} = Store;


</script>

<style scoped>

</style>

