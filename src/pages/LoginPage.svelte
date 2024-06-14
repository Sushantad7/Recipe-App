<script>
  import { navigate } from "svelte-routing"; 
  import {  errorsLogin,formDataLogin,formLoginValidation } from "../components/formData/formValidation.js";

  function goToHomePage(e){
    e.preventDefault()
    errorsLogin.email=''
    errorsLogin.password=''
    formLoginValidation()
    if(formDataLogin.email.trim() !== '' && formDataLogin.password.trim()!==''){
        navigate('/homePage')
    }
}
 
function handleEmailInput(e){
  e.preventDefault()
  errorsLogin.email=''
}

function handlePasswordInput(e){
  e.preventDefault()
  errorsLogin.password=''
}
  
  function goToRegisterPage(e){
    e.preventDefault()
    navigate('/registerPage')
  }
  
  

</script>

<div class='h-screen rounded-lg flex flex-col items-center justify-around bg-white'>
  <div class='flex flex-col mr-auto ml-7 mt-auto justify-evenly  text-black '>
    <h1 class='font-bold text-2xl'>
      Hello,
    </h1>
    <h1 class='text-lg'>
      Welcome back!
    </h1>
  </div>
  <div class='relative mt-auto flex flex-col items-center justify-center'>
        <form class="flex flex-col justify-between gap-[20px]" on:submit={goToHomePage}>
          <div class="text-sm flex flex-col gap-[10px]">
            <label class="font-bold" for="email">Email</label>
            <input type="email" 
                   class="rounded-xl border p-2 border-gray-300 w-[315px] h-[55px]" 
                   placeholder="Enter email" bind:value={formDataLogin.email} on:input={handleEmailInput}
            />
            {#if errorsLogin.email}
              <h1 class='text-red-600'>{errorsLogin.email}</h1>
            {/if}
          </div>

          <div class="text-sm flex flex-col gap-[10px]">
              <label class="font-bold" for="password" >Enter Password</label>
              <input type="password" class="rounded-xl p-2 border border-gray-300 w-[315px] h-[55px]" 
                  id="password" placeholder="Enter password" bind:value={formDataLogin.password} on:input={handlePasswordInput}/>
              {#if errorsLogin.password}
                <h1 class='text-red-600'>{errorsLogin.password}</h1>

              {/if}
          </div>
          <div class="flex flex-col  items-center gap-[25px]">

            <div class='flex mr-auto text-yellow-500 font-bold text-xs'>
              Forgot Password?
          </div>
                    <button type="submit" 
                            class="btn bg-green-700 p-3 rounded-xl text-white w-[315px] h-[60px]"
                    >
                        Sign In
                    </button>
       
                      <div class="text-center text-gray-300 text-xs">
                       --------Or Sign in With-------
                      </div>

                      <div class="flex items-center gap-[30px]">
                        <img src="./googleIcon.png" class="w-[44px] h-[44px] border border-gray rounded-lg p-3" alt="googleicon">
                        <img src="./fbIcon.png" class="w-[44px] h-[44px] border  border-gray rounded-lg  p-3" alt="fbIcon">
                      </div>  
            </div>
          </form>
  
  
        </div>
    
    
      <div class="flex items-center my-auto gap-[3px] mx-auto  text-black">
          <h1 class="font-bold text-sm">Don’t have an account?</h1>
          <button class="text-yellow-400 text-sm font-bold"
                  on:click={goToRegisterPage}>
                  Sign Up
          </button>
      </div>
</div>

<style>
  .btn{
    background-color: rgba(18, 149, 117, 1);
  }
</style>





