<template>
    <div>
 <h1>Mouse position is at: {{ x }}, {{ y }}</h1>
    </div>

    <div>
        <h1 :class=" count <= 1  || count >= 1 ?'text-red-900' : ' text-black'"  class=" text-[30px]">{{ count }}</h1>
        <div class=" flex items-center gap-1">
        <button class="w-[auto] p-1 bg-[#ccc] text-black" @click="decrement">DecreamentCount</button>
        <button class="w-[auto] p-1 bg-[#ccc] text-black" @click="reset" >REset</button>
        <button class=" w-[auto] p-1 bg-[#ccc] text-black" @click="increment">increaseCount</button>

    </div>
        </div>
</template>

<script setup lang="ts">
import { useMouse } from '@/composables/mouse';
import { useCounter } from '@/composables/counter';

const { x, y } = useMouse();
const store = useCounter()
const {count, increment, decrement, reset} = store;
</script>

<style scoped>

</style>