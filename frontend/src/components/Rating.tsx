import React from 'react'
import { Star } from "lucide-react"
import { useEffect, useState } from "react"
import type { RecipeRatingResponse } from "../types/recipe"
import { getRecipeRating } from "../api/recipes"

export const Rating = ({ recipeId }: { recipeId: string }) => {
    const [rating, setRating] = useState<RecipeRatingResponse | null>(null)

    useEffect(() => {
        if (!recipeId) return

        getRecipeRating(recipeId)
            .then(setRating)
            .catch(console.error)
    }, [recipeId])

    return (
        <div className="flex items-center justify-center mb-4 gap-1">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`h-5 w-5 ${i < (rating?.rating || 0) ? "text-ctp-lavender fill-ctp-peach" : "text-ctp-surface1"}`}
                />
            ))}
        </div>
    )
}