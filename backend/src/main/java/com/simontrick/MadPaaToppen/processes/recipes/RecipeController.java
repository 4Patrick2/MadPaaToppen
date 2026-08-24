package com.simontrick.MadPaaToppen.processes.recipes;

import com.simontrick.MadPaaToppen.processes.recipes.DTOs.CreateRecipeRequest;
import com.simontrick.MadPaaToppen.entities.Recipe;
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
    public Recipe createRecipe(@RequestBody CreateRecipeRequest recipeRequest) {
        return recipeService.createNewRecipe(recipeRequest);
    }
}
