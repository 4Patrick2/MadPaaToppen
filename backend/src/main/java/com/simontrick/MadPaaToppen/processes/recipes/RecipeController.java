package com.simontrick.MadPaaToppen.processes.recipes;

import com.simontrick.MadPaaToppen.processes.recipes.DTOs.CreateRecipeRequest;
import com.simontrick.MadPaaToppen.entities.Recipe;
import com.simontrick.MadPaaToppen.processes.recipes.DTOs.RecipeResponse;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recipes")
@AllArgsConstructor
public class RecipeController {
    private final RecipeService recipeService;

    @GetMapping
    public List<Recipe> getRecipes() {
        return recipeService.getAllRecipes();
    }

    @PostMapping
    public RecipeResponse createRecipe(@Valid @RequestBody CreateRecipeRequest recipeRequest) {
        return recipeService.createNewRecipe(recipeRequest);
    }
}
