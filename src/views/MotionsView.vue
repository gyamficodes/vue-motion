<template>
  <div>
    <h1>Adding Framer Motion To Vue</h1>


    <Transition
     @enter="onEnter"
     @leave="onLeave"
     @appear="onEnter"
     >
     <div v-if="showBox" class=" w-[100px] h-[100px] bg-green-500 rounded-lg mt-5 ml-4"></div>
    </Transition>

<button @click="showBox = !showBox" class="  px-2 py-2 bg-green-700 text-white rounded-lg mt-3">ShowBTN</button>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { animate } from 'motion';
const showBox = ref<boolean>(true)

async function onEnter(el: any, onComplete: any){
   console.log(onEnter)
    await animate(el,  {opacity:1} , {duration:0.3} )
    onComplete();
}

async function onLeave(el: any, onComplete: any){
   console.log(onEnter)
    await animate(el,  {opacity:0} , {duration:0.3} )
    onComplete();
}



</script>

<style scoped></style>
