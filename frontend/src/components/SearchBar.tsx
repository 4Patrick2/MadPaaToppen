import React from 'react'
import { Search, Funnel } from 'lucide-react'

export const SearchBar = () => {
    return (
        <div className="flex flex-col items-center bg-ctp-base p-4">
            <form className="mb-8">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-ctp-surface0 rounded-md p-1 placeholder:text-ctp-subtext0 text-ctp-subtext0 border border-ctp-surface1 focus:outline-none focus:ring-2 focus:ring-ctp-lavender"
                    />
                    <div className="absolute right-0 top-1/2 h-full transform -translate-y-1/2 flex">
                        <button
                            type="button"
                            className="text-ctp-mauve hover:text-ctp-mauve/70 focus:outline-none focus:ring-2 focus:ring-ctp-teal">
                            <Search className="h-4 w-4" />
                        </button>
                        <button
                            type="button"
                            className="m-2 text-ctp-mauve hover:text-ctp-mauve/70 focus:outline-none focus:ring-2 focus:ring-ctp-teal">
                            <Funnel className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}