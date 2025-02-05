<template>
  <div>
    <SlotComp>
      <template #header> <h1 class=" text-blue-600">This is footer design</h1> </template>

      <template #default>
        <p>This will go into the default slot.</p>
      </template>
      
      <template #footer> <p class=" text-blue-600">This is footer design</p>  </template>
    </SlotComp>
  </div>
</template>

<script setup lang="ts">
import SlotComp from "@/components/SlotComp.vue";
</script>

<style scoped></style>
