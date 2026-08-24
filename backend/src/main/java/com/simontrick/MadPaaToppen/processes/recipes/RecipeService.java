package com.simontrick.MadPaaToppen.processes.recipes;

import com.simontrick.MadPaaToppen.processes.recipes.DTOs.CreateRecipeRequest;
import com.simontrick.MadPaaToppen.entities.Recipe;

import java.util.List;

public interface RecipeService {
    List<Recipe> getAllRecipes();

    Recipe createNewRecipe(CreateRecipeRequest request);

    Recipe createRecipeVersion(CreateRecipeRequest request, Recipe source);
}
