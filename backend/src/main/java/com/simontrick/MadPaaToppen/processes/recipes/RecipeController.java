package com.simontrick.MadPaaToppen.processes.recipes;

import com.simontrick.MadPaaToppen.processes.rating.RatingService;
import com.simontrick.MadPaaToppen.processes.rating.DTOs.RatingResponse;
import com.simontrick.MadPaaToppen.processes.recipes.DTOs.CreateRecipeRequest;
import com.simontrick.MadPaaToppen.entities.Recipe;
import com.simontrick.MadPaaToppen.processes.recipes.DTOs.RecipeResponse;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


@RestController
@RequestMapping("/recipes")
@AllArgsConstructor
public class RecipeController {
    private final RecipeService recipeService;
    private final RatingService ratingService;

    @GetMapping
    public List<Recipe> getRecipes() {
        return recipeService.getAllRecipes();
    }

    @PostMapping
    public RecipeResponse createRecipe(@Valid @RequestBody CreateRecipeRequest recipeRequest) {
        return recipeService.createNewRecipe(recipeRequest);
    }

    @GetMapping("/{id}")
    public RecipeResponse getRecipe(@PathVariable UUID id) {
        return recipeService.getRecipe(id);
    }
    
    @GetMapping("/{id}/rating")
    public RatingResponse getRecipeRating(@PathVariable UUID id) {
        return ratingService.getRatingForRecipe(id);
    }
}
