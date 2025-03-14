import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { inject } from 'vue'
export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})



export const useCounterStoreB = defineStore("counterB" ,() => {
 
   const countB = ref<number>(0)

     function incrementData(this: any){
      countB.value++ 
     }

  function $reset(){
    countB.value = 0;
  }
      
  return {
    countB, 
    incrementData,
    $reset
  };

})


