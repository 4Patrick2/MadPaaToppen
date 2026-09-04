export interface Recipe {
  id: string;
  title: string;
  description: string | null;
  instructions: Instruction[] | null;
  prepTime: number | null;
  cookTime: number | null;
  servings: number;
  version: RecipeVersion[];
}

export interface RecipeResponse {
  id: string;
  title: string;
  description: string | null;
  instructions: Instruction[] | null;
  prepTime: number | null;
  cookTime: number | null;
  servings: number;
  ingredients: RecipeIngredient[] | null
  version: number;
  versions: RecipeVersion[];
}

export interface Instruction {
  step: number;
  text: string;
}

export interface Ingredient {
  name: Recipe;
  category: string;
}

export interface Unit {
  name: string;
  abbr: string;
}

export interface RecipeIngredient {
  id: string
  recipe: string;
  ingredient: Ingredient;
  quantity: number | null;
  unit: Unit;
  note: string;
  element: string | null;
}

export interface RecipeVersion {
    id: string;
    version: number;
}

export interface RecipeRatingResponse {
    recipe_id: string;
    rating: number;
}