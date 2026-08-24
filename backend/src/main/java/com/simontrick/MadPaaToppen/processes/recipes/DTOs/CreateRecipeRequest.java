package com.simontrick.MadPaaToppen.processes.recipes.DTOs;

public record CreateRecipeRequest (
        String title,
        String description,
        String instructions,
        Integer prepTime,
        Integer cookTime,
        Integer servings
) {}
