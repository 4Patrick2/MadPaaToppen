import { Plus, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const Actions = () => {
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
                       {/* Navigation */}
            <div className="
                flex
                h-12
                items-center
                gap-1
                px-2
            ">
                <Link
                    to="/edit"
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
                    <span>Edit</span>
                </Link>

                <Link
                    to="/recipes/createVersion"
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
                    <span>New version</span>
                </Link>
            </div>
        </nav>
    )
}