<template>
  <div>
    <h1>Adding Framer Motion To Vue</h1>

    <!-- //animate -->
    <!-- <Transition @enter="onEnter" @leave="onLeave" @appear="onEnter">
      <div
        v-if="showBox"
        class="w-[100px] h-[100px] bg-green-500 rounded-lg mt-5 ml-4"
      ></div>
    </Transition> -->

    <!-- <button
      @click="showBox = !showBox"
      class="px-2 py-2 bg-green-700 text-white rounded-lg mt-3"
    >
      ShowBTN
    </button> -->`

    <!-- //view -->
    <div ref="boxRef" v-motion="boxMotion" class="box"></div>

    <h1>Staggered List Animation</h1>

    <button
      @click="toggleList"
      class="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Toggle List
    </button>

    <Transition @enter="onEnter" @leave="onLeave">
      <ul v-if="showList" class="list">
        <li v-for="(item, index) in items" :key="index"></li>
      </ul>
    </Transition>




  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";
import { animate, stagger } from "motion";

import { useMotion } from "@vueuse/motion";

// Create a ref for the DOM element
const boxRef = ref<HTMLElement | null>(null);

// Create a motion instance for the element
const boxMotion = useMotion(boxRef, {
  initial: { x: 0, rotate: 0 },
  enter: { x: 100, rotate: 90, transition: { duration: 1000 } },
});

// const showBox = ref<boolean>(true);

// async function onEnter(el: any, onComplete: any) {
//   console.log(onEnter);
//   await animate(el, { opacity: 1 }, { duration: 0.3 });
//   onComplete();
// }

// async function onLeave(el: any, onComplete: any) {
//   console.log(onEnter);
//   await animate(el, { opacity: 0 }, { duration: 0.3 });
//   onComplete();
// }

const showList = ref(false);
const items = ref([1, 2, 3, 4, 5]); // Example list items

const toggleList = () => {
  showList.value = !showList.value;
};

const onEnter = async (el: Element, done: () => void) => {
  await nextTick(); // Wait for DOM update
  animate(
    ".list li",
    { opacity: [0, 1], y: [50, 0] },
    { duration: 0.5, delay: stagger(0.1) }
  ).finished.then(done);
};

const onLeave = (el: Element, done: () => void) => {
  animate(
    ".list li",
    { opacity: [1, 0], y: [0, -50] },
    { duration: 0.3, delay: stagger(0.1, { start: 0.05 }) }
  ).finished.then(done);
};




</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: #42b983;
}

.list {
  padding: 0;
  list-style: none;
  display: flex;
  gap: 1em;
}

.list li {
  width: 100px;
  height: 40px;
  background-color: #4caf50;
  margin: 5px 0;
  border-radius: 5px;
}
</style>
