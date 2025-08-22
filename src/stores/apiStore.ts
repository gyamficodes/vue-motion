import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
interface ApiDetails {
    title: string;
    id: number;
}


export const useApiStore = defineStore("apistore", () => {
  const data = ref<ApiDetails[]>([]);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  async function fetchData() {
    loading.value = true;  
    error.value = null;
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typic.ode.com/posts"
      );
      data.value = response.data;
    } catch (error: any | null) {
      error.value =
        Error instanceof Error ? Error.message : "An error occurred";
    } finally {
      loading.value = !true;
    }
  }
  function deleteItem(id: number){
    data.value = data.value.filter((item : ApiDetails) => item.id !== id)
  };

  return {
    data,
    loading,
    error,
    fetchData,
    deleteItem,
  };
});
