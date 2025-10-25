<template>
  <div>
    <h1 class="mt-5">Todo</h1>
    <form v-on:submit.prevent="addTodo">
      <label for=""></label>
      <input
        type="text"
        v-model="inputText"
        class="border h-[40px] mr-1"
        placeholder="Enter your Todo"
      />
      <button class="h-[40px] border bg-[#f8f8f8]">AddTod</button>
    </form>

    <TodoItem
      v-for="(todo, index) in todos"
      :key="todo.id"
      :title="todo.title"
      @remove="todos.splice(index, 1)"
    >
    </TodoItem>

    <br />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TodoItem from "./TodoItem.vue";
let inputText = ref<string>("");

interface todoDatails {
  id: number;
  title: string;
}
let nextTodoId = 4;
const todos = ref<todoDatails[]>([
  {
    id: 1,
    title: "Do the dishes",
  },
  {
    id: 2,
    title: "Take out the trash",
  },
  {
    id: 3,
    title: "Mow the lawn",
  },
]);

const addTodo = () => {
  if (inputText.value) {
    todos.value.push({
      id: nextTodoId++,
      title: inputText.value,
    });
    inputText.value = "";
  }
};
</script>

<style scoped></style>


