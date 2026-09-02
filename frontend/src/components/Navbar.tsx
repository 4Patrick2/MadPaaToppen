import { ChefHat, User, Plus, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="
            m-4
            flex
            w-fit
            items-center
            rounded-3xl
            bg-ctp-surface0           
            gap-2
        ">
            {/* Logo */}
            <Link
                to="/"
                className="
                    flex
                    h-12
                    items-center
                    gap-2
                    rounded-3xl
                    bg-ctp-peach
                    px-4
                    text-lg
                    font-serif
                    font-medium
                    text-ctp-base
                    shadow-sm
                    transition-colors
                    hover:text-ctp-overlay0
                "
            >
                <ChefHat className="h-6 w-6" />
                <span>MadPåToppen</span>
            </Link>

            {/* Navigation */}
            <div className="
                flex
                h-12
                items-center
                gap-1
                px-2
            ">
                <Link
                    to="/recipes"
                    className="
                        flex
                        h-9
                        items-center
                        gap-2
                        rounded-2xl
                        px-4
                        text-sm
                        text-ctp-subtext1
                        transition-colors
                        hover:bg-ctp-surface2
                        hover:text-ctp-text
                    "
                >
                    <BookOpen className="h-4 w-4" />
                    <span>Recipes</span>
                </Link>

                <Link
                    to="/recipes/create"
                    className="
                        flex
                        h-9
                        items-center
                        gap-2
                        whitespace-nowrap
                        rounded-2xl
                        bg-ctp-mauve
                        px-4
                        text-sm
                        font-medium
                        text-ctp-base
                        transition
                        hover:bg-ctp-mauve/80
                    "
                >
                    <Plus className="h-4 w-4" />
                    <span>Create Recipe</span>
                </Link>

                <Link
                    to="/profile"
                    className="
                        flex
                        h-9
                        items-center
                        gap-2
                        rounded-2xl
                        px-4
                        text-sm
                        text-ctp-subtext1
                        transition-colors
                        hover:bg-ctp-surface2
                        hover:text-ctp-text
                    "
                >
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                </Link>
            </div>
        </nav>
    )
}