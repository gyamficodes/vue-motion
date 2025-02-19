<template>
    <div>
     <p v-highlight>Hello world this content is hightlight by custom directive</p>
    </div>
</template>

<script setup lang="ts">
// enables v-highlight in templates
const vHighlight = {
  mounted: (el:any) => {
    el.classList.add('is-highlight');
  }
}
</script>

<style scoped>

</style>