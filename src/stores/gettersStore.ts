import { defineStore } from "pinia";
import { computed, ref } from "vue";

export  const   useInfoStore = defineStore('info', () => {
 // State
 const Message = ref<string>("Hello World");

 // Getters
 const updateMessage = computed(() => {
     return Message.value + " - Learn Hard";
 });

 // Actions (if needed)
 function setMessage(newMessage: string) {
     Message.value = newMessage;
 }

 return {
     Message,
     updateMessage,
     setMessage,
 };

})


