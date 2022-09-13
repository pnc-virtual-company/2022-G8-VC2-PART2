import { defineStore } from 'pinia'

export const studentstore = defineStore('student', {
  state: () => ({ 
    users:[],
    isTrue:false,
    isShow:false,
  }),
  actions: {
    onCreate(){
      this.isTrue= true
    },
  },
  getters: {
  },
})
