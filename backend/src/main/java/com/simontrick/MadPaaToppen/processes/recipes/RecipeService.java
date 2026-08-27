package com.simontrick.MadPaaToppen.processes.recipes;

import com.simontrick.MadPaaToppen.processes.recipes.DTOs.CreateRecipeRequest;
import com.simontrick.MadPaaToppen.entities.Recipe;
import com.simontrick.MadPaaToppen.processes.recipes.DTOs.RecipeResponse;

import java.util.List;

public interface RecipeService {
    List<Recipe> getAllRecipes();

    RecipeResponse createNewRecipe(CreateRecipeRequest request);

    RecipeResponse createRecipeVersion(CreateRecipeRequest request, Recipe source);
}
