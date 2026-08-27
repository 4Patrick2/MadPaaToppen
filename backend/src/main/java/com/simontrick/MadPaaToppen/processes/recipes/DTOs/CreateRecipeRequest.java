package com.simontrick.MadPaaToppen.processes.recipes.DTOs;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;

public record CreateRecipeRequest (
        @NotBlank
        String title,

        String description,

        @NotBlank
        String instructions,

        @PositiveOrZero
        Integer prepTime,

        @PositiveOrZero
        Integer cookTime,

        @Positive
        Integer servings
) {}
