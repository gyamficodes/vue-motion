<template>
    <div>
<h1>This is  props componen</h1>
<h1>{{ props.name }}</h1>
<h1>{{ props.Cobro }}</h1>
<h1>{{ greetingMessage }}</h1>
   <div>
<h1>{{ props.post.title }}</h1>
   </div>
    </div>
</template>

<script setup lang="ts">
interface Data {
  title: string;
  content: string;
}



let  props = defineProps<{
    name: string,
    Cobro: string;
    greetingMessage: string;
    post:  Data;
}>()





</script>

<style scoped>

</style>