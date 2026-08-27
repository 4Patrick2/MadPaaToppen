package com.simontrick.MadPaaToppen.processes.recipes.impl;

import com.simontrick.MadPaaToppen.processes.recipes.DTOs.CreateRecipeRequest;
import com.simontrick.MadPaaToppen.entities.Recipe;
import com.simontrick.MadPaaToppen.processes.recipes.DTOs.RecipeResponse;
import com.simontrick.MadPaaToppen.processes.recipes.repository.RecipeRepository;
import com.simontrick.MadPaaToppen.processes.recipes.RecipeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class RecipeServiceImpl implements RecipeService {
    private final RecipeRepository recipeRepository;

    @Override
    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    @Override
    public RecipeResponse createNewRecipe(CreateRecipeRequest request) {
        Recipe newRecipe = Recipe.builder()
                .title(request.title())
                .description(request.description())
                .instructions(request.instructions())
                .prepTime(request.prepTime())
                .cookTime(request.cookTime())
                .servings(request.servings())
                .version(1)
                .build();

        recipeRepository.save(newRecipe);
        return new RecipeResponse(newRecipe);
    }

    @Override
    public RecipeResponse createRecipeVersion(CreateRecipeRequest request, Recipe source) {
        return null;
    }
}
