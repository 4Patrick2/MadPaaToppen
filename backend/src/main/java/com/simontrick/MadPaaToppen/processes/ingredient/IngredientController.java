package com.simontrick.MadPaaToppen.processes.ingredient;

import com.simontrick.MadPaaToppen.entities.Ingredient;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ingredient")
@AllArgsConstructor
public class IngredientController {
    private final IngredientService ingredientService;

    @PostMapping
    public Ingredient createIngredient(@RequestBody CreateIngredientRequest request) {
        return ingredientService.createIngredient(request);
    }
}
