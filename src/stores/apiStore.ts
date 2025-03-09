import { defineStore } from "pinia";
import { ref } from "vue";


export const  useApiStore = defineStore('apistore', () => {
      const data = ref<string[]>([]);
      const loading = ref<boolean>(false);
      const error = ref<string | null>(null)

   async  function fetchData() {

    

   }
})