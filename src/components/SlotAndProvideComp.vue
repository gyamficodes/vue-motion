<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>

    <main>
      <slot :data="data"></slot>
    </main>

    <main>
      <slot name="content"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>

    <!-- conditional slots -->

    <!-- 
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    
    <div v-if="$slots.default" class="card-content">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div> -->
    <button
      @click="injectData?.dispayMessage"
      class="px-3 bg-red-500 text-white"
    >
      DispalyMessage
    </button>
    <h1>{{ injectData?.Page }}</h1>
    <h1>{{ sms }}</h1>
    <h1>{{ usingkey }}</h1>
  </div>
</template>

<script setup lang="ts">
// inject this data from learning components
import { inject, type Ref, ref } from "vue";
import { myInjectionsKeys } from "@/keys/keys";
const data = ref<string>("John is going to school");

const injectData = inject<{ Page: Ref<number>; dispayMessage: () => void }>(
  "display"
);
if (injectData) {
  const { Page, dispayMessage } = injectData;
} else {
  console.error("Injection failed: 'counter' not found.");
}

const sms = inject<Ref<string>>("sms1");

if (sms) {
  console.log("Injected sms:", sms.value); // Access the value using .value
} else {
  console.log("Injection failed: 'sms1' not found.");
}

const usingkey = inject(myInjectionsKeys);



</script>

<style scoped></style>
