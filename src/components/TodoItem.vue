<template>
  <div>
    <li>
      {{ props.title }}
      <button @click="$emit('remove')">Delete</button>
    </li>
  </div>
</template>

<script setup lang="ts">
let props = defineProps<{ title: string }>();
defineEmits<{ remove: () => void }>();
</script>

<style scoped></style>
