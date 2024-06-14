<script>
  import { navigate } from "svelte-routing"; 
  // import { errors, formValues } from "../components/formStore.js";
  // import { onDestroy } from "svelte";
  import { errors, formData, formRegisterValidation } from "../components/formData/formValidation.js";

  // let unsubscribeFormValues
  // let unsubscribeErrors
  // let formState = {}
  // let errorState={}
//   unsubscribeFormValues = formValues.subscribe(value => {
//     formState = value
//   })


  
//  unsubscribeErrors= errors.subscribe(value=>{
//     errorState=value
//  })

  // onDestroy(() => {
  //   unsubscribeFormValues()
  //   unsubscribeErrors()
  // })

  // function validatePasswords() {
  //   let errorMessages = {
  //     password: '',
  //     confirmPassword: ''
  //   }



  //   if (formState.password !== formState.confirmPassword) {
  //     errorMessages.confirmPassword = "Passwords do not match"
  //   }

  //   errors.set(errorMessages)

  //   return(!Object.values(errorMessages).some(Boolean))
  // }

  function handleClick(){
    navigate('/login')
    
  }
  function goBackToLoginPage(e){
      e.preventDefault()
      // handleClick(alert('you have been registered!'))
      // if (validatePasswords()) {
      //   handleClick(alert('you have been registered!'))
      // }
      errors.name=''
      errors.email=''
      errors.password=''
      errors.confirmPassword=''
      errors.message=''
      formRegisterValidation()
      if(formData.email.trim() !== '' && formData.password.trim()!=='' && formData.name.trim()!=='' && formData.confirmPassword.trim()!==''){
        navigate('/login')
      }
  }
</script>


<div class='register h-screen overflow-y-scroll flex rounded-lg border border-black flex-col items-center justify-around bg-white'>
    <div class="flex flex-col mr-auto ml-7 justify-between">
        <h1 class='font-bold  mr-auto text-xl'>Create an account</h1>
        <h5 class='max-w-[190px] text-xs '>Let’s help you set up your account, it won’t take long.</h5>
    </div>

    <div class='flex flex-col mr-auto ml-7 justify-center gap-[10px]'>
        <form on:submit={goBackToLoginPage} class="flex flex-col accent-color: inherit justify-between gap-[15px]">
          <div class="text-sm flex flex-col  gap-[7px]">
                <label class="font-bold" for="name">Name</label>
                <input type="text" 
                       class="p-2 rounded-lg border border-gray-300 w-[315px] h-[55px]" 
                       placeholder="Enter name"  bind:value={formData.name}
                />
                {#if errors.name}
                  <h1 class='text-red-600'>{errors.name}</h1>
                {/if}
          </div>

          <div class="text-sm flex flex-col gap-[7px]">
            <label class="font-bold" for="email">Email</label>
            <input type="email" 
                   class="p-2 rounded-lg border border-gray-300 w-[315px] h-[55px]" 
                   placeholder="Enter email"  bind:value={formData.email}
            />
            {#if errors.email}
            <h1 class='text-red-600'>{errors.email}</h1>
          {/if}

          </div>

          <div class="text-sm flex flex-col gap-[7px]">
              <label class="font-bold" for="password" >Enter Password</label>
              <input type="password" class="p-2 rounded-lg border border-gray-300 w-[315px] h-[55px]" 
                     id="password" placeholder="Enter password" bind:value={formData.password} />
             {#if errors.password}
                    <p class=" text-red-600">{errors.password}</p>
             {/if}
          </div>

          <div class="text-sm flex flex-col gap-[7px]">
            <label class="font-bold" for="password" >Confirm Password</label>
            <input type="password" class="p-2 rounded-lg border border-gray-300 w-[315px] h-[55px]" 
                   id="confirmPassword" placeholder="Confirm password" bind:value={formData.confirmPassword} />
            {#if errors.confirmPassword}
                   <p class="text-red-500">{errors.confirmPassword}</p>
            {/if}
          </div>
        
          <div class="flex mr-auto gap-[3px]">
            <input type="checkbox" class="rounded-xl focus:ring-red-200 border border-green-800"
                    >
            <label class=" font-semibold text-xs text-orange-400" for="password">Accept terms and conditions</label>
          </div>
          <button type="submit" 
                  class="btn  p-3 rounded-lg text-white w-[315px] h-[60px]">
              Sign Up
          </button>
          </form>
          


        <div class=" flex flex-col items-center justify-evenly gap-[20px]">
          <div class="text-center font-light text-sm opacity-70 text-gray-600">
            ------Or Sign in With------
          </div>

          <div class="flex items-center justify-around gap-[30px] ">
            <img src="./googleIcon.png" class="w-[44px] h-[44px] border border-gray rounded-lg p-3" alt="googleicon">
            <img src="./fbIcon.png" class="w-[44px] h-[44px] border  border-gray rounded-lg p-3" alt="fbIcon">
          </div>
        </div>

        <div class='flex mx-auto gap-[3px]'>
            <label class="font-bold text-2xs "for="memberInfo">Already a member?</label>
            <button type='button' class='text-orange-400 text-2xs'
                    on:click={handleClick}>Sign In</button>
        </div>
</div>
</div>



<style>
  .btn{
    background-color: rgba(18, 149, 117, 1);
  }

  .register::-webkit-scrollbar{
    display: none;

  }
</style>