package com.simontrick.MadPaaToppen.processes.recipes.impl;

import com.simontrick.MadPaaToppen.processes.recipes.DTOs.CreateRecipeRequest;
import com.simontrick.MadPaaToppen.entities.Recipe;
import com.simontrick.MadPaaToppen.processes.recipes.DTOs.RecipeIngredientResponse;
import com.simontrick.MadPaaToppen.processes.recipes.DTOs.RecipeResponse;
import com.simontrick.MadPaaToppen.processes.recipes.repository.RecipeIngredientRepository;
import com.simontrick.MadPaaToppen.processes.recipes.repository.RecipeRepository;
import com.simontrick.MadPaaToppen.processes.recipes.RecipeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@Service
public class RecipeServiceImpl implements RecipeService {
    private final RecipeRepository recipeRepository;
    private final RecipeIngredientRepository recipeIngredientRepository;

    @Override
    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    @Override
    public RecipeResponse getRecipe(UUID id) {
        Recipe recipe = recipeRepository.findById(id)
            .orElseThrow();

        List<RecipeIngredientResponse> ingredients = recipeIngredientRepository
            .findByRecipeId(recipe.getId())
            .stream()
            .map(RecipeIngredientResponse::new)
            .toList();
        
        return new RecipeResponse(recipe, ingredients);
    }

    @Override
    public RecipeResponse createNewRecipe(CreateRecipeRequest request) {
        Recipe newRecipe = Recipe.builder()
                .title(request.title())
                .description(request.description())
                .instructions(request.instructions())//.instructions(request.instructions())
                .prepTime(request.prepTime())
                .cookTime(request.cookTime())
                .servings(request.servings())
                .version(1)
                .build();

        recipeRepository.save(newRecipe);
        return new RecipeResponse(newRecipe, null);
    }

    @Override
    public RecipeResponse createRecipeVersion(CreateRecipeRequest request, Recipe source) {
        return null;
    }
}
