<script>
    let val=''
    let timer
    import { navigate } from "svelte-routing";
    import { error, loading, meals } from "../../mealStore";
    import {  Circle3, RingLoader, SyncLoader } from "svelte-loading-spinners";
    function handleClick(id){
          navigate(`/mealPage/${id}`);
    }

</script>

<div class='flex flex-col items-center justify-center mt-auto mx-auto'>
    {#if $loading}
      <div class='flex flex-col mb-20 mt-20'>
        <p class='flex items-center'>Loading</p>
        <Circle3 size="40"  unit="px" duration="1s" />
      </div>

    {:else if $error}
       <p>{$error}</p>
    {:else if $meals.length>0}
    <div class="meal-grid">
        {#each $meals as meal}
          <div class="meal rounded-lg">
            <button class='button relative flex flex-col justify-evenly' 
                    on:click={()=>handleClick(meal.idMeal)}>
              <img class='meal-image ' src={meal.strMealThumb} alt={meal.strMeal}/>
              <div class='overlay'></div>
                <h3 class='meal-name  absolute p-11 text-white text-center text-xl font-bold box-border'>{meal.strMeal}</h3>
            </button>
          </div>
        {/each}
    </div>
    
      {:else}
      <p class='font-bold text-cyan-600 text-sm'>No recipes found. Try searching for your favourite meal.</p> 
      {/if}
   </div>
  
  
  <style>
      .meal-grid {
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: repeat(2,1fr);
        gap: 1.75rem;
        max-height: 70vh;
        overflow-y: auto;
        padding: 0.8rem;
      }
  
    .meal-grid::-webkit-scrollbar{
      display:none;
    }
  
    .meal {
      
        overflow: hidden;
        text-align: center;
        
    }
  
    .meal-image{
        
  
        max-width: 100%;
        height: auto;
    }
  
      .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.45); 
        }
  
  
      .meal-name {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      color: white;
      font-weight: bold;
      z-index: 2; 
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); 
    }
      
      
    </style>
    

  
  