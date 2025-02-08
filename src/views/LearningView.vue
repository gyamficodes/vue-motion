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

    <AsyncComp/>
  </div>
</template>

<script setup lang="ts">
import SlotComp from "@/components/SlotAndProvideComp.vue";
import { onUnmounted, provide, ref } from "vue";
import { myInjectionsKeys } from "@/keys/keys";
import { defineAsyncComponent } from "vue";

// async component
const AsyncComp = defineAsyncComponent(() => 
import('../components/AsyncCom.vue')
)




const dispayMessage = () => {
    alert("This is a message");
}

const Page = ref<number>(50);


provide("display", {dispayMessage, Page});

const usingkey = ref<string>('Learn hard Bro')
provide(myInjectionsKeys, usingkey);
 
</script>

<style scoped></style>
