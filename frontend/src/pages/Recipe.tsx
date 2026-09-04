import { useParams } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import type { RecipeResponse } from "../types/recipe"
import { useEffect, useState } from "react"
import { getRecipe } from "../api/recipes"
import { Dot, Star } from "lucide-react"
import { VersionSelection } from "../components/VersionSelection"
import { Rating } from "../components/Rating"
import { Actions } from "../components/Actions"

export default function Recipe() {
    const { id } = useParams()
    const [recipe, setRecipe] = useState<RecipeResponse | null>(null)
    const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())

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

    const groupedIngredients = Object.groupBy(
        recipe.ingredients,
        ingredient => ingredient.element
    )

    const toggleStep = (step: number) => {
        setCompletedSteps((previous) => {
            const next = new Set(previous)

            if (next.has(step)) {
                next.delete(step)
            } else {
                next.add(step)
            }

            return next
        })
    }

    const handleVersionChange = (newVersion: number) => {
        const selectedVersion = recipe.versions.find(
            v => v.version === newVersion
        ) 
        if (!selectedVersion) return

        getRecipe(selectedVersion.id)
            .then(setRecipe)
            .catch(console.error)
    }

    return (
        <main className="mx-auto w-full max-w-7xl px-6">
            <Navbar />

            {/* Recipe heading */}
            <header className="mt-12 mb-8">

                <img 
                    src="/stegtFlaesk.jpg"
                    alt={recipe.title}
                    className="mb-8 h-64 w-full rounded-md object-cover"
                />

                <h1 className="font-serif text-5xl text-ctp-mauve">
                    {recipe.title}
                </h1>

                <div className="mt-4 h-px w-full bg-ctp-mauve/40" />

                <p className="mt-4 max-w-3xl text-ctp-subtext0">
                    {recipe.description}
                </p>
            </header>
          

            {/* Recipe content */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr]">

                {/* Ingredients */}
                <section className="pr-8">
                    
                    <h2 className="mb-4 font-serif text-2xl text-ctp-mauve">
                        Ingredients
                    </h2>

                    {Object.entries(groupedIngredients).map(
                        ([element, ingredients]) => (
                            <div
                                key={element}
                                className="mb-6"
                            >
                                {element !== "undefined" && (
                                    <h3 className="mb-2 font-serif text-lg text-ctp-lavender">
                                        {element}
                                    </h3>
                                )}

                                <div className="grid grid-cols-[1rem_3rem_3rem_1fr] gap-x-2">
                                    {ingredients?.map((ingredient) => (
                                        <div
                                            key={ingredient.id}
                                            className="contents"
                                        >
                                            <Dot className="h-4 w-4 text-ctp-mauve" />

                                            <span className="text-right">
                                                {ingredient.quantity}
                                            </span>

                                            <strong className="text-right font-serif">
                                                {ingredient.unit.abbr}
                                            </strong>

                                            <span>
                                                {ingredient.ingredient.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    )}

                    <h2 className=" font-serif text-2xl text-ctp-mauve mb-2">
                        Rating
                    </h2>
                    <Rating recipeId={recipe.id} />

                    <VersionSelection 
                        version={recipe.version}
                        versions={recipe.versions}
                        onVersionChange={handleVersionChange}
                    />

                    <h2 className="font-serif text-2xl text-ctp-mauve mb-2">
                        Actions
                    </h2>
                    <Actions />

                </section>

                {/* Instructions */}
                <section className="
                    border-t border-ctp-mauve/40
                    pt-8
                    lg:border-l
                    lg:border-t-0
                    lg:pl-8
                    lg:pt-0
                ">
                    <h2 className="mb-6 font-serif text-2xl text-ctp-mauve">
                        Instructions
                    </h2>
                    <div className="space-y-8">
                        {(recipe.instructions ?? []).map((instruction) => {
                            const completed = completedSteps.has(instruction.step)

                            return (
                                <button
                                    key={instruction.step}
                                    type="button"
                                    onClick={() => toggleStep(instruction.step)}
                                    className="grid w-full grid-cols-[3rem_1fr] gap-4 text-left"
                                >
                                    <div
                                        className={`
                                            font-serif text-2xl
                                            transition-colors
                                            ${completed
                                                ? "text-ctp-overlay1"
                                                : "text-ctp-mauve"
                                            }
                                        `}
                                    >
                                        {String(instruction.step).padStart(2, "0")}
                                    </div>

                                    <div>
                                        <div className="mb-2 h-px w-full bg-ctp-mauve/30" />

                                        <p
                                            className={`
                                                leading-relaxed
                                                transition-all
                                                duration-200
                                                ${completed
                                                    ? "text-ctp-overlay1 line-through"
                                                    : "text-ctp-text"
                                                }
                                            `}
                                        >
                                            {instruction.text}
                                        </p>
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                </section>

            </div>

            {/* Footer stuff */}
            <div className=" w-full">
                <div className="mt-12 mb-8 h-px w-full bg-ctp-mauve/40" />
                <h1 className="font-serif text-2xl text-ctp-mauve justify-start items-start">
                    Comments
                </h1>
            </div>
        </main>
    )
}