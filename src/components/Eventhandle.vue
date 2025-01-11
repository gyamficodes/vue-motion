<template>
  <div>
    <button @click="count++">Add Data</button>
    <h2>{{ count }}</h2>
    <button @click="HanddleMessage('Hello World')">SowMessage</button>


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
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref<number>(0);
const HanddleMessage = (message: string) => {
  alert(message);
};

// event modifires

</script>

<style scoped></style>
