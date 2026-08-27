package com.simontrick.MadPaaToppen.processes.recipes.DTOs;

import com.simontrick.MadPaaToppen.entities.Recipe;

import java.util.UUID;

public record RecipeResponse(
        UUID id,
        String title,
        String description,
        String instructions,
        Integer prepTime,
        Integer cookTime,
        Integer servings
) {
    public RecipeResponse(Recipe recipe) {
        this(
                recipe.getId(),
                recipe.getTitle(),
                recipe.getDescription(),
                recipe.getInstructions(),
                recipe.getPrepTime(),
                recipe.getCookTime(),
                recipe.getServings()
        );
    }
}
