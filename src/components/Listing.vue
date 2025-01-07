<template>
  <div>
    <button class="w-4 h-4 p-3 bg-[#ccc] border" @click="greeting = !greeting">
      Greeting
    </button>
    <h1 v-if="greeting">Good moring</h1>
    <h1 v-else>Good Afternoon</h1>

    <div class="flex flex-col gap-4">
      <div v-if="myType === 'A'">I like A</div>
      <div v-else-if="myType === 'B'">I like B</div>
      <div v-else-if="myType === 'C'">I like C</div>
      <div v-else>Not A/B/C</div>

      <div v-for="item in items">
        {{ item.message }}
      </div>
    </div>



    <h1>Categories with Items</h1>
    <ul>
      <!-- Outer loop: Iterate through categories -->
      <li v-for="(category, categoryIndex) in categories" :key="categoryIndex">
        <strong>{{ category.name }}</strong>
        <ul>
          <!-- Inner loop: Iterate through items in each category -->
          <li v-for="(item, itemIndex) in category.items" :key="itemIndex">
            {{ item }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const greeting = ref<boolean>(true);
const myType = ref<string>("A");

interface itmess {
  message: string;
}

const items = ref<itmess[]>([{ message: "Foo" }, { message: "Bar" }]);


// Define the structure of a category and its items
interface Category {
  name: string; // Name of the category
  items: string[]; // List of items in the category
}


const categories = ref<Category[]>([
      {
        name: 'Fruits',
        items: ['Apple', 'Banana', 'Cherry'],
      },
      {
        name: 'Vegetables',
        items: ['Carrot', 'Broccoli', 'Spinach'],
      },
      {
        name: 'Dairy',
        items: ['Milk', 'Cheese', 'Yogurt'],
      },
    ]);


</script>

<style scoped></style>
