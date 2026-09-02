package com.simontrick.MadPaaToppen.processes.recipes.DTOs;

import java.math.BigDecimal;
import java.util.UUID;

import com.simontrick.MadPaaToppen.entities.Ingredient;
import com.simontrick.MadPaaToppen.entities.RecipeIngredient;
import com.simontrick.MadPaaToppen.entities.Unit;

public record RecipeIngredientResponse(
        UUID id,
        UUID recipeId,
        Ingredient ingredient,
        BigDecimal quantity,
        Unit unit,
        String note
) {
    public RecipeIngredientResponse(RecipeIngredient ingredient) {
        this(
                ingredient.getId(),
                ingredient.getRecipe().getId(),
                ingredient.getIngredient(),
                ingredient.getQuantity(),
                ingredient.getUnit(),
                ingredient.getNote()
        );
    }
}