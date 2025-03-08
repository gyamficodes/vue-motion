<template>
  <div>
    <h1 class="text-[50px]">{{ countB }}</h1>
    <button class="p-5 bg-black text-white rounded-lg" @click="incrementData">
      Increase
    </button>
    <button class="p-5 bg-black text-white rounded-lg" @click="$reset">
      Reset
    </button>


    <p>Message from Store: {{ message }}</p>
    <p>Updated Message: {{ updateMessage }}</p>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStoreB } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { useInfoStore } from "@/stores/gettersStore";



const counterStore = useCounterStoreB();
let { countB } = storeToRefs(counterStore);
let { incrementData, $reset } = counterStore;




// Access the store
const infoStore = useInfoStore();

// Use storeToRefs to destructure reactive state/getters
const { Message: message, updateMessage} = storeToRefs(infoStore);

// Access actions (if needed)
const { setMessage } = infoStore;

// Method to update the message
function changeMessage() {
  setMessage("New Message from Component");
}




</script>

<style scoped></style>
