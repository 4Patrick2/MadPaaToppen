package com.simontrick.MadPaaToppen.processes.ingredientCategory;

import com.simontrick.MadPaaToppen.entities.IngredientCategory;
import com.simontrick.MadPaaToppen.processes.ingredient.IngredientController;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class IngredientCategoryService {
    private IngredientCategoryRepository repository;

    public IngredientCategory createIngredientCategory(String name) {
        IngredientCategory ingredientCategory = IngredientCategory.builder()
                .name(name)
                .build();
        return repository.save(ingredientCategory);
    }
}
