<template>
  <div>
    <button @click="handdleShow" class="p-4 bg-[#f8f8f8] text-black">
      ShowData
    </button>
    <Transition name="fade">
      <h1 v-if="showData">Hello World fade</h1>
    </Transition>
    <Transition name="slide-fade">
      <h1 v-if="showData">Hello World fade</h1>
    </Transition>

    <Transition name="bounce">
  <p v-if="showData" style="text-align: center;">
    Hello here is some bouncy text!
  </p>
</Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showData = ref<boolean>(false);

const handdleShow = () => {
  showData.value = !showData.value;
};
</script>

<style scoped>
/* we will explain what these classes do next! */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.slide-fade-enter-active{
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
transform: translateX(30px);
opacity: 0;
}


.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}



</style>
