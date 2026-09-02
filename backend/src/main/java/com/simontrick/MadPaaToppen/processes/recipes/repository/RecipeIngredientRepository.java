package com.simontrick.MadPaaToppen.processes.recipes.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simontrick.MadPaaToppen.entities.RecipeIngredient;

@Repository
public interface RecipeIngredientRepository extends JpaRepository<RecipeIngredient, UUID> {

    List<RecipeIngredient> findByRecipeId(UUID recipeId);

}