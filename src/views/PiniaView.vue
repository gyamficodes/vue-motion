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
    <button class="p-3 bg-slate-500 text-white" @click="changeMessage">
      Change Message
    </button>

    <h1>API Data</h1>
    <button @click="fetchData" :disabled="loading">
      {{ loading ? "Loading..." : "Fetch Data" }}
    </button>

    <!-- Display error message if any -->
    <p v-if="error" class="error">{{ error }}</p>

    <!-- Display fetched data -->
    <ul class="grid grid-cols-4 gap-5" v-if="data.length">
      <li
        class="w-auto bg-slate-700 text-white rounded-lg"
        v-for="item in data"
        :key="item.id"
      >
        {{ item.title }}
        <button class="p-2 bg-red-400 text-white" @click="deleteItem(item.id)">
          Delete
        </button>
      </li>
    </ul>

    <!-- Display message if no data is fetched -->
    <p v-else-if="!loading">No data available.</p>

    <Counter/>
  </div>
</template>

<script setup lang="ts">
import { useCounterStoreB } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { useInfoStore } from "@/stores/gettersStore";
import { useApiStore } from "@/stores/apiStore";
import Counter from "@/components/VueTestComp/Counter.vue";
import { onMounted } from "vue";
const counterStore = useCounterStoreB();
let { countB } = storeToRefs(counterStore);
let { incrementData, $reset } = counterStore;

// Access the store
const infoStore = useInfoStore();

// Use storeToRefs to destructure reactive state/getters
const { Message: message, updateMessage } = storeToRefs(infoStore);

// Access actions (if needed)
const { setMessage } = infoStore;

// Method to update the message
function changeMessage() {
  setMessage("New Message from Component");
}

//pinia api store

// Access the store
const apiStore = useApiStore();

// Destructure reactive state and actions
const { data, loading, error } = storeToRefs(apiStore);
const { fetchData, deleteItem } = apiStore;

// Fetch data when the component is mounted (optional)n
onMounted(() => fetchData() )





</script>

<style scoped></style>
