<template>
  <div>
    <input type="text" ref="my-input" placeholder="Your Name" />

    <ul v-for="item in List" ref="items">
      <li>{{ item }}</li>
    </ul>
    <h1>{{ props.Title }}</h1>
    <h2>{{ props.Content }}</h2>


  </div>
</template>

<script setup lang="ts">
import { useTemplateRef, onUnmounted, watchEffect, ref } from "vue";
const input = useTemplateRef("my-input");
const itemsList = useTemplateRef("items");
const List = ref([]);
let props = defineProps(["Title", "Content"]);


onUnmounted(() => {
  input.value?.focus();
});

// If you are trying to watch the changes of a template ref, make sure to account for the case where the ref has null value:
watchEffect(() => {
  if (input.value) {
    input.value.focus();
  }
  {
    console.log("te page is not rendered");
  }
});

watchEffect(() => console.log(itemsList.value));
</script>

<style scoped></style>
