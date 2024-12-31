<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <h3 v-html="HelloWorld"></h3>
    <h1 class="text-lg text-red-600">
      <!-- {{ message.split("").reverse().join("") }} -->
    </h1>
    <h1>
      {{
        age > 18
          ? "Please you can Vote"
          : "Please you are under age and cannot vote."
      }}
    </h1>

    <h1>{{ age }}</h1>
    <button @click="handdleAge">Check Age</button>
    <p>{{ message }}</p>

    <!-- using dynamic attribute -->
    <a :[attributeName]="Url" target="_blank">Company Website</a>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const HelloWorld = ref<string>("HelloWorld");
const age = ref<number>(23);
const message = ref<string>("");

const handdleAge = () => {
  if (age.value > 18) {
    message.value = "Plesae yor are elegible to vote.";
  } else {
    message.value = "Please you are not eligible to vote.";
  }
};


const attributeName = ref<string>("href");
const Url = ref<string>("http://fennelsoft.com")
</script>

<style scoped></style>
