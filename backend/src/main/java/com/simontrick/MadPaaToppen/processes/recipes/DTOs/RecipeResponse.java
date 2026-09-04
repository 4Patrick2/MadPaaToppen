package com.simontrick.MadPaaToppen.processes.recipes.DTOs;

import com.simontrick.MadPaaToppen.entities.Recipe;
import com.simontrick.MadPaaToppen.entities.DTOs.Instruction;

import java.util.List;
import java.util.UUID;

public record RecipeResponse(
        UUID id,
        String title,
        String description,
        List<Instruction> instructions,
        Integer prepTime,
        Integer cookTime,
        Integer servings,
        Integer version,
        List<RecipeVersionResponse> versions,
        List<RecipeIngredientResponse> ingredients
) {
    public RecipeResponse(Recipe recipe, 
        List<RecipeIngredientResponse> ingredients,
        List<RecipeVersionResponse> versions) {
        this(
                recipe.getId(),
                recipe.getTitle(),
                recipe.getDescription(),
                recipe.getInstructions(),
                recipe.getPrepTime(),
                recipe.getCookTime(),
                recipe.getServings(),
                recipe.getVersion(),
                versions,
                ingredients
        );
    }
}
