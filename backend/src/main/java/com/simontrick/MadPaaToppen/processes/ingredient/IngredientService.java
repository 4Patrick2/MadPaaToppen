package com.simontrick.MadPaaToppen.processes.ingredient;

import com.simontrick.MadPaaToppen.entities.Ingredient;
import com.simontrick.MadPaaToppen.entities.IngredientCategory;
import com.simontrick.MadPaaToppen.processes.ingredientCategory.IngredientCategoryService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class IngredientService {
    private final IngredientRepository repository;
    private final IngredientCategoryService ingredientCategoryService;

    public Ingredient createIngredient(CreateIngredientRequest request) {
        IngredientCategory ingredientCategory = ingredientCategoryService.createIngredientCategory(request.category());
        Ingredient ingredient = Ingredient.builder()
                .name(request.name())
                .category(ingredientCategory.getId())
                .build();
        return repository.save(ingredient);
    }
}
