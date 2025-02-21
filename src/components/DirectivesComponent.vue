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


// const myDirective = {
//   // called before bound element's attributes
//   // or event listeners are applied
//   created(el, binding, vnode) {
//     // see below for details on arguments
//   },
//   // called right before the element is inserted into the DOM.
//   beforeMount(el, binding, vnode) {},
//   // called when the bound element's parent component
//   // and all its children are mounted.
//   mounted(el, binding, vnode) {},
//   // called before the parent component is updated
//   beforeUpdate(el, binding, vnode, prevVnode) {},
//   // called after the parent component and
//   // all of its children have updated
//   updated(el, binding, vnode, prevVnode) {},
//   // called before the parent component is unmounted
//   beforeUnmount(el, binding, vnode) {},
//   // called when the parent component is unmounted
//   unmounted(el, binding, vnode) {}
// }



</script>

<style scoped>
.is-highlight{
    background-color: yellow;
    color: black;
    font-weight: bold;
    transition: background-color 0.3s ease;
}




</style>