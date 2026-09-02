import React from 'react'
import { Dot, Star, ChevronRight, ChevronLeft } from "lucide-react"
import { useState } from "react"

interface VersionSelectionProps {
    version: number
    maxVersion: number
}

export const VersionSelection = ({ version, maxVersion }: VersionSelectionProps) => {

    const [selectedVersion, setSelectedVersion] = useState(version)

    const previousVersion = () => {
        setSelectedVersion((current) => Math.max(current - 1, 1))
    }

    const nextVersion = () => {
        setSelectedVersion((current) => Math.min(current + 1, maxVersion))
    }


    return (
        <div>
            <h2 className="mb-1 font-serif text-2xl text-ctp-mauve">
                Version
            </h2>

            <div className="flex w-full items-center justify-center gap-2">
                <button
                    type="button"
                    onClick={previousVersion}
                    disabled={selectedVersion === 1}
                    className="text-ctp-mauve transition-opacity hover:opacity-70 disabled:opacity-30"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>

                <span className="min-w-8 text-center text-lg font-serif text-ctp-mauve">
                    {String(selectedVersion).padStart(2, "0")}
                </span>

                <button
                    type="button"
                    onClick={nextVersion}
                    disabled={selectedVersion === maxVersion}
                    className="text-ctp-mauve transition-opacity hover:opacity-70 disabled:opacity-30"
                >
                    <ChevronRight className="h-7 w-7" />
                </button>
            </div>
        </div>
    )
}