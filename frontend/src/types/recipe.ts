export interface Recipe {
  id: string;
  title: string;
  description: string | null;
  instructions: string;
  prepTime: number | null;
  cookTime: number | null;
  servings: number;
}