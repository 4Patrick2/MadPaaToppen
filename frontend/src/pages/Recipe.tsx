import { useParams } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import type { RecipeResponse } from "../types/recipe"
import { useEffect, useState } from "react"
import { getRecipe } from "../api/recipes"

export default function Recipe() {
    const { id } = useParams()
    const [recipe, setRecipe] = useState<RecipeResponse | null>(null)

    useEffect(() => {
        if (!id) return

        getRecipe(id)
            .then(setRecipe)
            .catch(console.error)
    }, [id])
    
    if (!recipe) {
        return (
            <div>
                <Navbar />
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <main className="mx-auto w-full max-w-7xl">
            <Navbar />
            <h1 className="font-serif text-ctp-mauve mt-8 mb-4">{recipe.title}</h1>
            <div className="flex ">
                {/* Right side - Ingredients */}
                <div className="rounded-md p-3 m-4 border-2 border-ctp-mauve w-1/3">
                    {(recipe.ingredients ?? []).map((ingredient) => (
                        <div 
                            className="flex"
                            key={ingredient.id}>
                            <div className="right-0">
                                <strong>{ingredient.quantity} {ingredient.unit.abbr} </strong>
                            </div>
                            <span> {ingredient.ingredient.name}</span>
                        </div>
                    ))} 
                </div>
                {/* Left side - Image and instructions */}
                <div>
                    
                    <p>{recipe.description}</p>
                    {(recipe.instructions ?? []).map((instruction) => (
                        <div key={instruction.step}>
                            <strong>{instruction.step}.</strong>
                            <span>{instruction.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}