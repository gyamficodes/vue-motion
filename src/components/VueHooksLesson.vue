<template>
    <div>
this hook
    </div>
</template>

<script setup lang="ts">
//unmounted hook
import { onUnmounted } from 'vue';

onUnmounted(() => {{ 
     alert("Hello eorld");
 }})

 

</script>

<style scoped>

</style>