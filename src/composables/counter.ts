import { ref } from "vue";


export const useCounter = () => {
    const count = ref<number>(0);
    const increment = () => count.value++;
    const decrement = () => count.value--;
    const reset = () => count.value = 0;
    return { count, increment, decrement, reset };
}




