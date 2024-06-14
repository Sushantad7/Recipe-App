<script>
    import { onMount } from 'svelte'
    import { Circle3 } from 'svelte-loading-spinners'
    import { createEventDispatcher } from 'svelte'
    import Ratings from '../../components/api/userFeatures/Reviews/Ratings.svelte';

    export let id;
    let loading = true
    let error = null
    let meal = {}
    let instructions = []
    let ingredients=[]

    let showDescription=true
    let bookmarked=true
    let showRating=false
    let activeButton=null

    function setActive(button){
      activeButton=button
    }

    function goBack() {
        history.back()
    }

    const dispatch=createEventDispatcher()

    function handleUndoBookmark() {
    dispatch('undoBookmark')
    bookmarked = true
    }
    
    async function fetchMealDetails(id){
      try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
          const data = await response.json()
          meal = data.meals[0]
          ingredients=[]
          for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
          if (ingredient && ingredient.trim() !== "") {
            ingredients.push(`${ingredient} - ${measure}`);
          }

          if (meal && meal.strInstructions) {
            instructions = meal.strInstructions.split('.').map(instr => instr.trim()).filter(instr => instr.length > 0)
          }
        }
          
      }
  
      catch(err){
        error = 'Failed to fetch meal page. Please try again later.'
      }
  
      finally{
        loading=false
      }
    }
      onMount(()=>{
          fetchMealDetails(id)
      })
      

  </script>
  
  <div class="description flex flex-col items-center justify-center gap-[5px] bg-white h-screen ">
       
        {#if loading}
               <p class='flex items-center font-bold'>Loading</p>
                <Circle3 size="50"  unit="px" duration="1s" />
        {:else if error}
              <p>{error}</p>
        {:else if meal}

              <div class='description flex flex-col items-center justify-around gap-[15px] overflow-y-auto'>
                  <button class=' w-[20px] h-[20px] mr-auto mt-3'
                          on:click={goBack}>
                    <img src='/backArrow.jpg' alt='backArrow'>
                  </button>

               
                <div class='container flex flex-col items-center justify-between'>
                  <img class='meal-image rounded-xl w-[315px] h-[201px]' src={meal.strMealThumb} alt={meal.strMeal}
                  />
                   <button class='bookmark-button border rounded-full w-[26px] h-[26px]'
                          on:click={()=>bookmarked=false}>
                    <img class='bookmarkIcon p-1' src='/bookmark.png' alt='bookmark'> 
                  </button>  
                </div>
                <h1 class='font-bold text-lg mr-auto'>{meal.strMeal}</h1>


                

                {#if !bookmarked}
                          {#if showRating}
                            <div class='popup-rating'>
                                  <Ratings/>
                            </div>
                          {/if}

                   <div class="popup-container mx-auto ">
                        <div class="popup flex flex-col items-center justify-center mx-auto">
                          <p class='font-bold text-lg'>Bookmarked!</p>
                          <div class='flex flex-col items-center'>
                            <button class=' p-1 w-full flex items-center gap-[10px] rounded-lg hover:bg-gray-400 hover:text-white'
                                  >
                              <img class='share p-1 h-[26px] w-[26px]' src='/shareIcon.png' alt='bookmark'>
                              Share
                            </button>

                            <button class=' p-1 w-full flex items-center gap-[10px] rounded-lg hover:bg-gray-400 hover:text-white'
                                   on:click={()=>{
                                    showRating=true
                                    bookmarked=false
                                    }}>
                              <img class='rate p-1 h-[26px] w-[26px]'   src='/starIcon.png' alt='bookmark'>
                              Rate Recipe
                            </button>
                            <button class=' p-1 w-full flex items-center gap-[10px] rounded-lg hover:bg-gray-400 hover:text-white'
                                 >
                              <img class=' review p-1 h-[26px] w-[26px]' src='/reviewText.png' alt='bookmark'>
                              Review
                            </button>
                            <button class=' p-1 w-full flex items-center gap-[10px] rounded-lg hover:bg-gray-400 hover:text-white'
                                  on:click={handleUndoBookmark}>
                              <img class=' bookmark p-1 h-[26px] w-[26px]' src='/bookmark.png' alt='bookmark'>
                              Unsave
                            </button>
                          </div>
                        </div>
                    </div>
                {/if}
               
                 
    
              <div class='flex items-center justify-evenly gap-[10px]'>
                 <button class='button font-semibold {activeButton!==1? 'active' : ''} text-white bg-[rgba(18, 149, 117, 1)] rounded-xl border text-center '
                        on:click={()=>{
                          showDescription=true
                          setActive(2)
                          }}>Ingredients
                </button>
                <button class='button  rounded-xl {activeButton===1 ? 'active' : ''} '
                        on:click={()=>{
                        showDescription=false
                        setActive(1)    
                      }}>Procedure
                 </button>
              </div>
              {#if showDescription}
                    {#if !showRating}
                          <Ratings/>
                    {/if}
                  <div class='flex flex-col w-[315px] h-[334px]'>
                            <ul class="ingredients-list">
                                {#each ingredients as ingredient}
                                <li class='p-2 font-semibold text-lg border rounded-lg border-cyan-700'>{ingredient},</li>
                                {/each}
                            </ul>
                  </div>

               {:else}
                  <div class='description flex flex-col items-center max-w-[315px] h-[334px] overflow-y-auto'>
                    <h1 class='font-bold text-xl max-w-[300px] mr-auto '>Cooking Steps for {meal.strMeal}</h1>
                    <ol class='instructions-list p-2 font-bold text-sm mr-auto '>
                        {#each instructions as instruction,index}
                            <li class='p-3 font-bold text-md border rounded-lg'> <h3 class='font-bold text-black'>Step {index+1}</h3>{instruction}.</li>
                        {/each}
                    </ol>
                  </div>
                {/if}
                </div>
        {:else}
              <p>No meal details found.</p> 
        {/if} 
      </div>

  <style>

    .container{
      position: relative;
      display: inline-block;
    }

  .meal-image {
     display: block;
    }

    .bookmark-button{
      position:absolute;
      bottom: 10px;  
      right: 10px;  
      padding: 5px 10px;
      background-color: white;
      /* color: white; */
      /* border: none; */
      border-color:rgba(18, 149, 117, 1) ;
      cursor: pointer;
    }

    .bookmark-button:hover{
      background-color: rgba(18, 149, 117, 1) ;
    }

    .bookmarkIcon{
      position: absolute;
      bottom: 0.7px;  
      right: 0.5px; 
      
    }

  .button{
        width: 150px;
        height: 33px;
        cursor: pointer;
        color:rgba(18, 149, 117, 1);
    }

    .button.active {
      background-color:rgba(18, 149, 117, 1);
      color: white;
    }

    .button:hover{
        background-color: rgba(18, 149, 117, 1);
        color:white;
    }

    .description::-webkit-scrollbar{
        display:none
    }

    .ingredients-list {
        list-style-type: none;
        font-weight: bolder;
        padding: 2px;
    }
    .ingredients-list li {
        margin: 5px 0;
        background-color: rgba(168, 169, 169, 0.17);
        font-weight: 500;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0);
    }
    
    .instructions-list li {
        margin: 5px 0;
        background-color: rgba(169, 169, 169, 0.3);
        font-weight: 500;
    }

    ol{  
        color:rgb(24, 74, 74);
        font-weight: bold;
    }

    li {
      margin-bottom: 0.5em;
    }  

    .popup-container {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 990;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .popup {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      text-align: center;
    }

    .popup-rating{
          z-index: 10000;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: gold;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
    }
  </style>
  
  
  
  
  