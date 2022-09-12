import { defineStore } from 'pinia'

export const useCounterStore = defineStore('student', {
  state: () => ({ 
    students:[
      {
        first_name:"Kea",last_name:"Nhor",gender:"Male",profile_img:"kea.png",role:"Student",
        password:'ererer',email:"kea.nhor@gmail.com"
      },
      {
        first_name:"Ka",last_name:"Ka",gender:"Male",profile_img:"ka.png",role:"Student",
        password:'jj',email:"ka.ka@gmail.com"
      }
    ]
  }),
  getters: {
    
  },
  actions: {
    
  },
})
