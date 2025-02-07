<template>
  <div>
    <SlotComp  >
       <template  v-slot="{data}">
       {{ data }}
       </template> 
      <template #header> <h1 class=" text-blue-600">This is footer design</h1> </template>

      <template #content>
        <p>This will go into the default slot.</p>
      </template>




      <template #footer> <p class=" text-blue-600">This is footer design</p>  </template>
    </SlotComp>
  </div>
</template>

<script setup lang="ts">
import SlotComp from "@/components/SlotAndProvideComp.vue";
import { provide, ref } from "vue";



const dispayMessage = () => {
    alert("This is a message");
}

const Page = ref<number>(50);


provide("display", {dispayMessage, Page});


 
</script>

<style scoped></style>
