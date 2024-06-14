<script>
  import { onMount } from "svelte"
  import { error,loading, meals } from "../../mealStore.js"

let selectedMeal = null
  let meal = {}
  let instructions = []
  // let searchQuery = ''
async function fetchMeals(query = '') {
    loading.set(true)
    error.set(null)
    const url = query ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}` : 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

    try {
      // const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      const response = await fetch(url)

      const data = await response.json()
      meals.set(data.meals)
      // heading.set(query? `Results for "${query}"` : 'Initial Meal List')
    } catch (err) {
      error.set('Failed to fetch meals. Please try again later.')
    } finally {
      loading.set(false)
    }

  }

  onMount(() => {
    fetchMeals()

  })


</script>


