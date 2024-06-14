<script>
    import { onMount } from 'svelte'
    import { navigate } from 'svelte-routing';
  
    let categories = []
    let error=null
    let selectedCategory = ''
    let meal = {}
    let instructions=[]
    let meals=[]
    let loading=true

    onMount(async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      const data = await response.json()
      categories = data.categories
    })
  
    $: if (selectedCategory) {
      fetchMealsByCategory(selectedCategory)
    }
  
    async function fetchMealsByCategory(category) {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      const data = await response.json()
      meals = data.meals
    }
  
    function handleCategoryChange(event) {
      selectedCategory = event.target.value
    } 
   
  </script>
  
<main class='bg-white h-screen p-10 flex flex-col items-center justify-between '>
          <div class='flex flex-col gap-[10px] mb-auto'>
                      {#if categories.length > 0}
                        <h1 class='font-bold text-black'>Filter by Meal Category</h1>
                        <select class='border border-blue-300 rounded-lg' on:change={handleCategoryChange}>
                          <option value="" >Select a category</option>
                          {#each categories as category}
                            <option value={category.strCategory}>{category.strCategory}</option>
                          {/each}
                        </select>
                      {/if}
                    </div>
          
        {#if meals.length > 0}
             <div class='flex flex-col items-center justify-between'>
                <h2 class='text-black font-bold text-lg'>Meals in {selectedCategory} category</h2>
                 <div class='meal-grid '> 
                      {#each meals as meal} 
                        <div class='meal rounded-xl w-[150px] '> 
                          <button class='button relative flex flex-col justify-center'>
                          
                              <img class='meal-image' src="{meal.strMealThumb}" alt="{meal.strMeal}"/>
                              <div class='overlay'></div>
                              <h2 class='meal-name p-10 max-w-[180px] max-h-[140px] text-white text-center text-xl font-bold'>{meal.strMeal}</h2>
                          </button>
                 </div>
                        {/each}
                 </div> 
            </div> 
         {/if}
  </main>

  <style>
    .meal-grid {                                                           
      display: grid;
      align-items: center;
      justify-items: center;
      grid-template-columns: repeat(2,1fr);
      gap: 1.7rem;
      max-height: 60vh;
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

    