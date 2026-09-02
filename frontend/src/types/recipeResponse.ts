export interface Recipe {
  id: string;
  title: string;
  description: string | null;
  instructions: Instruction[] | null;
  prepTime: number | null;
  cookTime: number | null;
  servings: number;
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
  recipe: Recipe;
  ingredient: Ingredient;
  quantity: number | null;
  unit: Unit;
  note: string;
}