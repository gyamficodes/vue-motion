<template>
    <div>
  <h1>{{ props.msg }}</h1>
<button @click="handleEnlargeText" class=" border">Enlarge Text</button>
    </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['enlarge-text'])
  const props = defineProps<{msg: string}>()
  
  const handleEnlargeText = () => {
    emit('enlarge-text')
  }
</script>

<style scoped>


</style>