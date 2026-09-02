package com.simontrick.MadPaaToppen.processes.recipes;

import com.simontrick.MadPaaToppen.processes.recipes.DTOs.CreateRecipeRequest;
import com.simontrick.MadPaaToppen.entities.Recipe;
import com.simontrick.MadPaaToppen.processes.recipes.DTOs.RecipeResponse;
import com.simontrick.MadPaaToppen.processes.recipes.DTOs.RecipeVersionResponse;

import java.util.List;
import java.util.UUID;

public interface RecipeService {
    List<Recipe> getAllRecipes();

    RecipeResponse getRecipe(UUID id);


    RecipeResponse createNewRecipe(CreateRecipeRequest request);

    RecipeResponse createRecipeVersion(CreateRecipeRequest request, Recipe source);

    List<RecipeVersionResponse> getRecipeVersions(UUID recipeParentId);
}
