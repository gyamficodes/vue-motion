<template>
  <div>
    <h1>This is props componen</h1>
    <h1>{{ props.name }}</h1>
    <h1>{{ props.Cobro }}</h1>
    <h1>{{ greetingMessage }}</h1>
    <div>
      <div v-for="([key, value], index) in Object.entries(post)" :key="index">
        <h1>{{ key }}: {{ value }}</h1>
      </div>
    </div>

    //events
    <button @click="counter?.addData">AddData</button>
    <h1>{{ counter?.count }}</h1>
    <button @click="$emit('increaseCount')">addemiy</button>
  </div>
</template>

<script setup lang="ts">
import { inject, type Ref } from "vue";

interface Data {
  title: string;
  content: string;
}

let props = defineProps<{
  name: string;
  Cobro: string;
  greetingMessage: string;
  post: Data;
}>();

//event
// Emitting and Listening to Events
const counter = inject<{ count: Ref<number>; addData: () => void }>("counter");

if (counter) {
  const { count, addData } = counter; // ✅ No TypeScript error
} else {
  console.error("Injection failed: 'counter' not found.");
}


defineEmits(['increaseCount'])
</script>

<style scoped></style>
