<template>
    <div>
<h1>This is  props componen</h1>
<h1>{{ props.name }}</h1>
<h1>{{ props.Cobro }}</h1>
<h1>{{ greetingMessage }}</h1>
    </div>
</template>

<script setup lang="ts">


let  props = defineProps<{
    name: string,
    Cobro: string
    greetingMessage: string;
}>()




</script>

<style scoped>

</style>