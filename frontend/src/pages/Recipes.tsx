import { useEffect, useState } from "react"
import { RecipeCard } from '../components/RecipeCard'
import { getRecipes } from "../api/recipes"
import type { Recipe } from "../types/recipe"
import { Navbar } from "../components/Navbar"

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getRecipes()
      .then(setRecipes)
      .catch(() => setError("Failed to fetch recipes"))
      .finally(() => setLoading(false))
  }, [])
  
  if (loading) {
    return (
      <div>
        <Navbar />
        <p>Loading recipes...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <Navbar />
        <p>{error}</p>
      </div>
    )
  }

  return (
    <main className="w-full max-w-7xl bg-ctp-base">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="mb-8 text-4xl font-bold text-ctp-mauve font-serif">
          Welcome to MadPaaToppen
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {recipes.map(recipe => (
              <RecipeCard 
                key={recipe.id}
                recipe={recipe}
              />
            ))}
        </div>
      </div>
    </main>
  );
}