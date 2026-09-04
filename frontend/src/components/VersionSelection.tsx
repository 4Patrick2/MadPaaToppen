import React from 'react'
import { Dot, Star, ChevronRight, ChevronLeft } from "lucide-react"
import type { RecipeVersion } from "../types/recipe"

interface VersionSelectionProps {
    version: number
    versions: RecipeVersion[]
    onVersionChange: (version: number) => void
}

export const VersionSelection = ({ version, versions, onVersionChange }: VersionSelectionProps) => {


    const previousVersion = versions.find(
        (v) => v.version === version - 1
    )

    const nextVersion = versions.find(
        (v) => v.version === version + 1
    )


    return (
        <div className="mb-4">
            <h2 className="mb-1 font-serif text-2xl text-ctp-mauve">
                Version
            </h2>

            <div className="flex w-full items-center justify-center gap-2">
                <button
                    type="button"
                    onClick={
                        () => {
                            if (previousVersion) {
                                onVersionChange(previousVersion.version)
                            }
                        }
                    }
                    disabled={!previousVersion}
                    className="text-ctp-mauve transition-opacity hover:opacity-70 disabled:opacity-30"
                >
                    <ChevronLeft className="h-8 w-8" />
                </button>

                <span className="min-w-8 text-center text-xl font-serif text-ctp-mauve">
                    {String(version).padStart(2, "0")}
                </span>

                <button
                    type="button"
                    onClick={
                        () => {
                            if (nextVersion) {
                                onVersionChange(nextVersion.version)
                            }
                        }
                    }
                    disabled={!nextVersion}
                    className="text-ctp-mauve transition-opacity hover:opacity-70 disabled:opacity-30"
                >
                    <ChevronRight className="h-8 w-8" />
                </button>
            </div>
        </div>
    )
}