<template>
  <div>
    <button @click="count++">Add Data</button>
    <h2>{{ count }}</h2>
    <button @keydown="HanddleMessage('Hello World')">SowMessage</button>

    <!-- the click event's propagation will be stopped -->
    <!-- <a @click.stop="doThis"></a> -->

    <!-- the submit event will no longer reload the page -->
    <!-- <form @submit.prevent="onSubmit"></form> -->

    <!-- modifiers can be chained -->
    <!-- <a @click.stop.prevent="doThat"></a> -->

    <!-- just the modifier -->
    <!-- <form @submit.prevent></form> -->

    <!-- only trigger handler if event.target is the element itself -->
    <!-- i.e. not from a child element -->
    <!-- <div @click.self="doThat">...</div>
  -->

    <!-- Forms Binding  -->
    <br />
    <input type="text" v-model="Message" placeholder="Edit Me" />
    <p>{{ Message }}</p>

    <span>Multiline message is:</span>
    <p style="white-space: pre-line">{{ news }}</p>
    <textarea v-model="news" placeholder="add multiple lines"></textarea>

    <!-- Dealing with checkbox -->
    <br />
    <input type="checkbox" id="checkbox" v-model="checked" />
    <button class="px-3 py-3 border" @click="handdleSucscribe">
      Subscribe
    </button>
    <h1 :class="checked ? 'text-2xl text-green-600' : 'text-2xl text-red-600'">
      {{ SubscribesMessage }}
    </h1>

    
    <!-- Select Input -->
    <select v-model="selected">
  <option v-for="option in options" :value="option.value">
    {{ option.text }}
  </option>
</select>

<div>Selected: {{ selected }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const Message = ref<string>("");
const news = ref<string>("");
const checked = ref<boolean>(false);
const SubscribesMessage = ref<string>("");
const count = ref<number>(0);
 const selected = ref('A')

 interface optionData {
    text: string;
    value: string;
 
 }

const options = ref<optionData[]>([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' }
])

const HanddleMessage = (message: string) => {
  alert(message);
};

const handdleSucscribe = () => {
  const checkbox = document.getElementById("checkbox") as HTMLInputElement;
  if (checkbox && checkbox.checked) {
    SubscribesMessage.value = "You have Subscribe Succesfully to the channel";
  } else {
    SubscribesMessage.value =
      "You have not Subscribe Yet , And you can do that by pressing the button below.";
  }
};
</script>

<style scoped></style>
