<script>
  import { get } from 'svelte/store'
  import { error,loading, meals } from '../../mealStore.js'
  import FetchMealComponent from './FetchMealComponent.svelte';
  let selectedMeal = null
  let meal = {}
  let searchTerm=''
  let debounceTimer

  async function searchMeals() {
      loading.set(true)
      error.set(null)
      
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        const data = await response.json()
        meal = data.meals[0]
    
        if (data.meals) {
          meals.set(data.meals)
        } else {
          meals.set([])
          error.set('No meals found')
        }
        } catch (err) {
        error.set('An error occurred while fetching data')
        } finally {
        loading.set(false)
        }

      
  }
  

  function handleInput(event) {
      searchTerm=event.target.value
      clearTimeout(debounceTimer)
      debounceTimer=setTimeout(searchMeals,750)
  }

 

</script>
  

<div>
    <input type="text" bind:value={searchTerm} class='border p-2 border-gray-300 rounded-xl w-[255px] h-[40px]' 
           placeholder="Search Recipe" on:input={handleInput} />
           <FetchMealComponent/> 
</div>