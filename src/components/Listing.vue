<template>
  <div>
    <button class="w-4 h-4 p-3 bg-[#ccc] border" @click="greeting = !greeting">
      Greeting
    </button>
    <h1 v-if="greeting">Good moring</h1>
    <h1 v-else>Good Afternoon</h1>

    <div class="flex flex-col gap-4">
      <div v-if="myType === 'A'">I like A</div>
      <div v-else-if="myType === 'B'">I like B</div>
      <div v-else-if="myType === 'C'">I like C</div>
      <div v-else>Not A/B/C</div>

      <div v-for="item in items">
        {{ item.message }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const greeting = ref<boolean>(true);
const myType = ref<string>("A");

interface itmess {
  message: string;
}

const items = ref<itmess[]>([{ message: "Foo" }, { message: "Bar" }]);
</script>

<style scoped></style>
