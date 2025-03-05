<template>
  <div>
    <div>Parent bound v-model is: {{ countModel }}</div>
    <div>Parent bound v-model is: {{ messaging }}</div>
    <h1>update message</h1>
    <input type="text" class="border" v-model="up" placeholder="message" />
    <button @click="update" class="p-3 py-3 mr-2 bg-gray-400 text-black">
      Increment
    </button>
    <button @click="updateMessage" class="p-3 py-3 bg-gray-400 text-black">
      Update Message!
    </button>
    
    <input type="text" placeholder="typae news" v-model="News" class="border">
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let countModel = defineModel<number>("countModel");
let messaging = defineModel<string>("messaging");
let News = defineModel<string>("News");
let up = ref<string>("");

function update() {
  if (countModel.value !== undefined) {
    countModel.value++;
  }
}

function updateMessage() {
  messaging.value = up.value;
}
</script>

<style scoped></style>
