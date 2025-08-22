<template>
  <div>
    <div>
      <h1>Ask yes/no questions ?</h1>
      <input type="text" v-model="questions" :disabled="loader" />
    </div>

    <h1>{{ answers }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const questions = ref<string>("");
const answers = ref<string>("Questions usually contain a question mark. ;-)");
const loader = ref<boolean>(false);

// watches code

watch(questions, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes("?")) {
    loader.value = true;
    answers.value = "thinking...";
    try {
      const res = await fetch("https://yesno.wtf/api");
      const data = await res.json(); // Parse the response
      answers.value = data.answer; // Adjust based on API response
    } catch (error) {
      answers.value = "Error! Could not reach the API. " + error;
    } finally {
      loader.value = false; // Ensure loader is turned off in all cases
    }
  }
});

const X = ref<number>(5);
const y = ref<number>(5);
const total = ref<number>();
watch(
  () => X.value + y.value,
  (sum) => {
    console.log(`${sum}`);
  }
);
</script>

<style scoped></style>

