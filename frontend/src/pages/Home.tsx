import { useEffect, useState } from "react"
import { RecipeCard } from '../components/RecipeCard'
import { getRecipes } from "../api/recipes"
import type { Recipe } from "../types/recipe"

export default function Home() {
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
    return <p>Loading recipes...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 bg-ctp-base">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="mb-8 text-4xl font-bold text-ctp-blue">
          Welcome to MadPaaToppen
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {recipes.map(recipe => (
              <RecipeCard
                  key={recipe.id}
                  title={recipe.title}
                  description={recipe.description ?? ""}
                  image="/stegtFlaesk.jpg"
                  time={`${(recipe.prepTime ?? 0) + (recipe.cookTime ?? 0)} min`}
                  rating={4.5}
              />
            ))}
        </div>
      </div>
    </main>
  );
}