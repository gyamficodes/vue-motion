<template>
  <div>
    <header>
        <slot name="header"></slot>
    </header>

    <main>
        <slot></slot>
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


  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
