<template>
    <div>
<input type="text" ref="my-input"  placeholder="Your Name">\

<ul v-for="item in List" ref="items">
    <li>{{ item }}</li>
</ul>
    </div>
</template>

<script setup lang="ts">
import { useTemplateRef, onUnmounted, watchEffect, ref } from 'vue';
const input = useTemplateRef('my-input');
const List = ref([

])



onUnmounted(() => {
   input.value?.focus();
});


// If you are trying to watch the changes of a template ref, make sure to account for the case where the ref has null value:
watchEffect(() => {
    if(input.value){
        input.value.focus()
    }{
        console.log('te page is not rendered')
    }
})

watchEffect(() => console.log(itemsList.value));

const itemsList = useTemplateRef('items');




</script>

<style scoped>

</style>