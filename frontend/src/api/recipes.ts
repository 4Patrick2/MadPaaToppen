import type { Recipe } from "../types/recipe"

const API_URL = "http://localhost:8081"

export async function getRecipes(): Promise<Recipe[]> {
    const response = await fetch(`${API_URL}/recipes`)

    if (!response.ok) {
        throw new Error("Failed to fetch recipes")
    }

    return response.json()
}