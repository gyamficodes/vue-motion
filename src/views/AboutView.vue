<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Todo />
    <Eventhandle />
    <WatchesLesson />
    <OtherLesson Title="Post 1" Content="This is about blog post" />
    <div class="mt-5" :style="{ fontSize: postFontSize + 'em' }">
    <Texting @enlarge-text="postFontSize += 10" msg="Texting Page" />\

</div>
    <VueHooksLesson/>
  </div>
  <PropsComponent :post="post" name="Gyamfi John"  Cobro="Kader Develoveper" greeting-message="Good evening"/>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Todo from "@/components/Todo.vue";
import Eventhandle from "@/components/Eventhandle.vue";
import WatchesLesson from "@/components/WatchesLesson.vue";
import OtherLesson from "@/components/OtherLesson.vue";
import Texting from "@/components/Texting.vue";
import VueHooksLesson from "@/components/VueHooksLesson.vue";
import PropsComponent from "@/components/PropsComponent.vue";
const postFontSize = ref<number>(1);


interface Data {
  title: string;
  content: string;
}

let post = ref<Data>({
  title: "Welcome to my blog",
  content: "This is my first blog post",
});







</script>

<style></style>
