<template>
    <div>
this hook
    </div>
</template>

<script setup lang="ts">
//unmounted hook
import { onUnmounted } from 'vue';

onUnmounted(() => {{ 
    alert('Continue learning')
 }})

</script>

<style scoped>

</style>