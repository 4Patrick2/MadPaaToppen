package com.simontrick.MadPaaToppen.processes.ingredientCategory;

import com.simontrick.MadPaaToppen.entities.IngredientCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface IngredientCategoryRepository extends JpaRepository<IngredientCategory, UUID> {
}
