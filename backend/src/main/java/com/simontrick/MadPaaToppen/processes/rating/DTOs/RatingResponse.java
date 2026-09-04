package com.simontrick.MadPaaToppen.processes.rating.DTOs;

import java.util.UUID;

public record RatingResponse(
    UUID recipeId,
    Double rating
) {}
