import { defineStore } from "pinia";

export  const   useInfoStore = defineStore('info', () => {
    state: () => ({
        Message: "Hello World"
    })

    getters:{
      function updateMessage(this : any): string{
        return this.Message = "learn Hard";
        }
    }


})


