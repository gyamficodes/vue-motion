<template>
    <div>
 <h1>Mouse position is at: {{ x }}, {{ y }}</h1>
    </div>
</template>

<script setup lang="ts">
import { useMouse } from '@/composables/mouse';

const { x, y } = useMouse();
</script>

<style scoped>

</style>