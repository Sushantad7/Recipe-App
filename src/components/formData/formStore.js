
  import { writable } from "svelte/store";
  export const formValues = writable({
    
    password: '',
    confirmPassword: ''
  })
  
  export const errors = writable({
    password: '',
    confirmPassword: ''
  })


  
  



