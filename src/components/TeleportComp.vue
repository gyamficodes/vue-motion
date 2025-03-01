<template>
    <button @click="handdleShowModal">Open Modal</button>
  
    <Teleport to="body">
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <h2>Modal Title</h2>
          <p>This is a teleport modal.</p>
          <button @click="handdleShowModal">Close Modal</button>
        </div>
      </div>
    </Teleport>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const showModal = ref(false);
  
    const handdleShowModal = () => {
      showModal.value = !showModal.value
    }
  </script>
  
  <style>
  /* Basic modal styling */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
  }
  </style>
  