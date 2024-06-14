import {  writable } from 'svelte/store'

export const searchQuery = writable('')
export const meals = writable([])
export const loading = writable(false)
export const error = writable(null)
export const heading = writable('Initial Meal List')


//mealId
export const params = writable({})


