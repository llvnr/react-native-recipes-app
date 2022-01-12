import axios from "axios"
import { useDispatch } from "react-redux"
import { addRecipes, selectedRecipe } from "../../redux/actions"
// const { getAllRecipes } = useFetchRecipes()

const BASE_URL_API = "https://api.spoonacular.com/recipes"
// const URL_API = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "ad2711516c3e4833b4897482500b4deb"
const MAX_PER_PAGE = 30

export const useFetchRecipes = () => {

    const dispatch = useDispatch()

    const getAllRecipes = async (page) => {
        try {
            const response = await axios.get(`${BASE_URL_API}/complexSearch`, {
                params: {
                    apiKey: API_KEY,
                    number: MAX_PER_PAGE,
                    offset: page * MAX_PER_PAGE
                }

            })

            dispatch(addRecipes(response.data.results))

        } catch (error) {
            console.error("Error in getAllRecipes", error)
        }
    }

    const getRecipeById = async (id) => {
        try {
            const response = await axios.get(`${BASE_URL_API}/${id}/information`, {
                params: {
                    apiKey: API_KEY,
                }
            })
            console.log("response = ", response.data)
            dispatch(selectedRecipe(response.data))
        } catch (error) {
            console.error("Error in getRecipeById", error)
        }
    }

    return {
        getAllRecipes,
        getRecipeById
    }

}