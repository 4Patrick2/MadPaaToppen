package com.simontrick.MadPaaToppen.processes.recipes.DTOs;

import java.util.List;

import com.simontrick.MadPaaToppen.entities.DTOs.Instruction;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;

public record CreateRecipeRequest (
        @NotBlank
        String title,

        String description,

        List<Instruction> instructions,

        @PositiveOrZero
        Integer prepTime,

        @PositiveOrZero
        Integer cookTime,

        @Positive
        Integer servings
) {}
