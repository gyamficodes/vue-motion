<script setup lang="ts">
import Listing from "@/components/Listing.vue";
import HelloWorld from "../components/HelloWorld.vue"
import Lesson from "@/components/Lesson.vue";
</script>

<template>
   <HelloWorld/>
   <Lesson/>
   <Listing/>
   <h1 v-highlight>using vhighlight</h1>
</template>



<style scoped>
.is-highlight{
    background-color: yellow;
    color: black;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

</style>
