<template>
  <div>
    <SlotComp>
      <template v-slot="{ data }">
        {{ data }}
      </template>
      <template #header>
        <h1 class="text-blue-600">This is footer design</h1>
      </template>

      <template #content>
        <p>This will go into the default slot.</p>
      </template>

      <template #footer>
        <p class="text-blue-600">This is footer design</p>
      </template>
    </SlotComp>

    <AsyncComp />
    <CompoComp />
    <DirectivesComponent />
    <AnimationsComp />
        
    <KeepAlive>
      <component :is="activeComponent" />
    </KeepAlive>
    <TeleportComp/>
    <PiniaStoreComp/>
  </div>
</template>

<script setup lang="ts">
import SlotComp from "@/components/SlotAndProvideComp.vue";
import CompoComp from "@/components/CompoComp.vue";
import DirectivesComponent from "@/components/DirectivesComponent.vue";
import AnimationsComp from "@/components/AnimationsComp.vue";
import KeepAliveComp from "@/components/KeepAliveComp.vue";
import { markRaw, provide, ref } from "vue";
import { myInjectionsKeys } from "@/keys/keys";
import { defineAsyncComponent } from "vue";
import TeleportComp from "@/components/TeleportComp.vue";
import PiniaStoreComp from "@/components/PiniaStoreComp.vue";

// async component
const AsyncComp = defineAsyncComponent(
  () => import("../components/AsyncCom.vue")
);

const dispayMessage = () => {
  alert("This is a message");
};

const Page = ref<number>(50);

provide("display", { dispayMessage, Page });

const usingkey = ref<string>("Learn hard Bro");
provide(myInjectionsKeys, usingkey);

const activeComponent = ref(markRaw(KeepAliveComp)); // Prevents making it reactive

</script>

<style scoped></style>
