import { Clock, Star } from "lucide-react"
import type { Recipe } from "../types/recipe"
import { Link } from 'react-router-dom'

interface RecipeCardProps {
    recipe: Recipe
}

export const RecipeCard = ({ recipe }: RecipeCardProps)  => {
    return (
        <Link to={`/recipes/${recipe.id}`}>
            <article className="
                group
                w-full
                overflow-hidden
                rounded-md
                bg-ctp-surface0/50
                shadow-lg
                shadow-ctp-crust
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-lg
                hover:shadow-ctp-blue/40
            ">
                <div className="aspect-[3/2] overflow-hidden">
                    <img
                        src="/stegtFlaesk.jpg"
                        alt={recipe.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                <div className="p-3">
                    <h2 className="text-lg font-semibold text-ctp-text">
                        {recipe.title}
                    </h2>

                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-ctp-subtext0">
                        {recipe.description}
                    </p>

                    <div className="mt-3 flex items-center justify-evenly gap-4 border-t pt-3 text-sm text-ctp-overlay1">
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{`${(recipe.prepTime ?? 0) + (recipe.cookTime ?? 0)} min`}</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-ctp-peach" />
                            <span>{4.5.toFixed(1)}</span>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    )
}