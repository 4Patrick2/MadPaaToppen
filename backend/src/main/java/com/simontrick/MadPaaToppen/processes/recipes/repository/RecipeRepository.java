package com.simontrick.MadPaaToppen.processes.recipes.repository;

import com.simontrick.MadPaaToppen.entities.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, UUID> {
}
