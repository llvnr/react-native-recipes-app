// Recipes
export const getRecipesList = store => store.recipes.list
export const getSelectedRecipe = store => store.recipes.selectedRecipe

// Tasks
export const getTasks = store => store.tasksList
export const getCompletedTasks = store => store.tasksList.filter(task => task.completed)