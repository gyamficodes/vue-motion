<template>
  <div>
    <h1>{{ state.count }}</h1>
    <button @click="hanfleIncrement">Add</button>


    <div class="flex items-center gap-4">
    <div 
    :class="{active: activeTab === index}"
    @click.prevent="activeTab = index"
    v-for="({Text},index) in Tabs" :key="index"  class="w-[200px] h-[50px] bg-blue-800 text-white rounded-xl flex items-center justify-center cursor-pointer hover:bg-red-700 transition-all duration-300 ease">{{ Text }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
const state = reactive({ count: 0 });
const activeTab = ref<number>(0);


const hanfleIncrement = () => {
  state.count++;
};



interface TabInfo {
  Text: string,
}
const Tabs = ref<TabInfo[]>([
  { Text: "HAN"},
  { Text: "Nana"},
  { Text: "Yaw"},

]);


</script>

<style scoped>
.active{
  background: red;
  color: white;
}
</style>
