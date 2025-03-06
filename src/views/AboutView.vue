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
  <h1>{{ News }}</h1>
  <ModelComp v-model:News="News" v-model:countModel="countModel" v-model:messaging="messaging" />


  <section
      v-for="(product, index) in products"
      :key="product.id"
      v-motion="`product-${index}`"
      :initial="{ opacity: 0, x: -100 }"
      :enter="{ opacity: 1, x: 0, transition: { delay: index * 200, duration: 600 } }"
    >
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
    </section>

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
import { provide } from "vue";
import ModelComp from "@/components/ModelComp.vue";

//two way binding
let countModel = ref<number>(5);
const messaging = ref<string>("Hello from parent");
const News = ref<string>("")

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

<style>


</style>
