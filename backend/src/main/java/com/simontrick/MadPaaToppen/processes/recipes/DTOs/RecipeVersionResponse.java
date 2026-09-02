package com.simontrick.MadPaaToppen.processes.recipes.DTOs;

import java.util.UUID;

import com.simontrick.MadPaaToppen.entities.Recipe;

public record RecipeVersionResponse (
    UUID id,
    int version
) {
        public RecipeVersionResponse(Recipe recipe) {
        this(
                recipe.getId(),
                recipe.getVersion()
        );
    }
}
