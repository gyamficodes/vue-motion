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
    <VueHooksLesson />
  </div>
  <PropsComponent
    :post="post"
    name="Gyamfi John"
    Cobro="Kader Develoveper"
    greeting-message="Good evening"
    @increase-by="increaseCount"
  />
  <h1>{{ count1 }}</h1>

  <ModelComp
    v-model:countModel="countModel"
    v-model:messaging="messaging"
  />
</template>

<script setup lang="ts">
import {  ref } from "vue";

import Todo from "@/components/Todo.vue";
import Eventhandle from "@/components/Eventhandle.vue";
import WatchesLesson from "@/components/WatchesLesson.vue";
import OtherLesson from "@/components/OtherLesson.vue";
import Texting from "@/components/Texting.vue";
import VueHooksLesson from "@/components/VueHooksLesson.vue";
import PropsComponent from "@/components/PropsComponent.vue";
const postFontSize = ref<number>(1);
import { provide } from "vue";
import ModelComp from "@/components/ModelComp.vue";

//two way binding
let countModel = ref<number>(5);
const messaging = ref<string>("Hello from parent");

interface Data {
  title: string;
  content: string;
}

let post = ref<Data>({
  title: "Welcome to my blog",
  content: "This is my first blog post",
});

const count = ref<number>(0);

const count1 = ref<number>(0);
const addData = () => {
  count.value++;
};

provide("counter", { count, addData });

function increaseCount() {
  console.log(count.value++);
}
// increaseCount();
</script>

<style></style>
