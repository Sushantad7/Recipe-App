<script>
  
  import SearchResults from "../components/api/search/SearchResults.svelte"
  import { navigate } from 'svelte-routing'

  import SearchComponent from "../components/api/search/SearchComponent.svelte"
  import Categories from "./Category/Categories.svelte";
  import { fly } from "svelte/transition";

  let openFilter=false
  let showInitialSearch=true

  function handleProfileClick(){
    navigate('/profile')
  }
  
</script>

<div class='h-screen rounded-lg flex flex-col gap-[25px]  bg-white'>
    <div class="flex  mt-[20px] justify-evenly gap-[87px]">
        <div class='flex flex-col justify-around'>        
            <h1 class="font-bold text-2xl">Hello User</h1>
            <h4 class='text-gray-400 font-bold text-xs'>What are you cooking today?</h4>
        </div>

        <div class='flex items-center justify-between'>
            <button on:click={handleProfileClick}>
                <img src='./userImage.png' 
                class='w-[40px] h-[40px] border rounded-lg bg-yellow-600' 
                alt="user">
            </button>
        </div>
    </div>
    <div class='filter-container flex justify-evenly'>
          <SearchComponent/>
        <button type='button' 
                on:click={
                    ()=>{
                        openFilter=!openFilter
                        showInitialSearch=!showInitialSearch
                    }
                }   	>
        
            <img src='https://cdn.iconscout.com/icon/free/png-256/free-filter-3583346-3007732.png' alt='filterIcon'
            class='filterIcon border rounded-lg w-[40px] h-[40px]'>
        </button>     
    </div>

    {#if openFilter}
     <div transition:fly={{ delay: 250, duration: 300,y:400, opacity: 0.5}}>
        <Categories/>
    </div>
    {/if}

    {#if showInitialSearch}
                <div class='mr-4 ml-4 flex items-center justify-center mb-auto' >
                    <SearchResults/>
                </div>
    {/if}
</div>

<style>
    .filterIcon{
        background-color: rgba(18, 149, 117, 1);
    }
</style>











