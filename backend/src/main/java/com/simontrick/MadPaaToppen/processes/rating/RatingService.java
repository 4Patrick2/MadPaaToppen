package com.simontrick.MadPaaToppen.processes.rating;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.simontrick.MadPaaToppen.entities.Rating;
import com.simontrick.MadPaaToppen.processes.rating.DTOs.RatingResponse;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class RatingService {
    private final RatingRepository ratingRepository;
    
    public RatingResponse getRatingForRecipe(UUID recipeId) {
        List<Rating> ratings = ratingRepository.findAllByRecipeId(recipeId);
        
        double averageRating = ratings.stream()
                .mapToInt(Rating::getScore)
                .average()
                .orElse(0.0);
        
        return new RatingResponse(recipeId, averageRating);
    }
}
