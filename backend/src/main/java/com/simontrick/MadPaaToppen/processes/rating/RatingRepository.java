package com.simontrick.MadPaaToppen.processes.rating;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simontrick.MadPaaToppen.entities.Rating;

import java.util.List;
import java.util.UUID;

@Repository
public interface RatingRepository extends JpaRepository<Rating, UUID> {
    
    List<Rating> findAllByRecipeId(UUID recipeId);
}
