<template>
    <div>
this hook
    </div>
</template>

<script setup lang="ts">
//unmounted hook
import { onUnmounted, ref } from 'vue';


const life = ref('never give up')
onUnmounted(() => { 
     alert(life.value);
 })



</script>

<style scoped>

</style>