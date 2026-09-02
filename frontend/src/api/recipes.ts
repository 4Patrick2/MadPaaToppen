import type { Recipe, RecipeResponse } from "../types/recipe"

const API_URL = "http://localhost:8081"

export async function getRecipes(): Promise<Recipe[]> {
    const response = await fetch(`${API_URL}/recipes`)

    if (!response.ok) {
        throw new Error("Failed to fetch recipes")
    }

    return response.json()
}

export async function getRecipe(id: string): Promise<RecipeResponse> {
    const response = await fetch(`${API_URL}/recipes/${id}`)

    if (!response.ok) {
        throw new Error("Failed to fetch recipe")
    }

    return response.json()
}