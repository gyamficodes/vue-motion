<template>
  <div>
    <h1>Adding Framer Motion To Vue</h1>

    //animate
    <Transition @enter="onEnter" @leave="onLeave" @appear="onEnter">
      <div
        v-if="showBox"
        class="w-[100px] h-[100px] bg-green-500 rounded-lg mt-5 ml-4"
      ></div>
    </Transition>

    <button
      @click="showBox = !showBox"
      class="px-2 py-2 bg-green-700 text-white rounded-lg mt-3"
    >
      ShowBTN
    </button>

    //view
    <div ref="boxRef" v-motion="boxMotion" class="box"></div>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { animate } from "motion";

import { useMotion } from '@vueuse/motion';

// Create a ref for the DOM element
const boxRef = ref<HTMLElement | null>(null);

// Create a motion instance for the element
const boxMotion = useMotion(boxRef, {
  initial: { x: -100, rotate: 0 },
  enter: { x: 100, rotate: 90, transition: { duration: 1000 }   },
});


const showBox = ref<boolean>(true);

async function onEnter(el: any, onComplete: any) {
  console.log(onEnter);
  await animate(el, { opacity: 1 }, { duration: 0.3 });
  onComplete();
}

async function onLeave(el: any, onComplete: any) {
  console.log(onEnter);
  await animate(el, { opacity: 0 }, { duration: 0.3 });
  onComplete();
}




</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: #42b983;
}
</style>
