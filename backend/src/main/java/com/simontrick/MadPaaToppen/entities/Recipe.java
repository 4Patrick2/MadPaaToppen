package com.simontrick.MadPaaToppen.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name="recipe")
public class Recipe extends Base_entity {

    @NotNull
    private String title;

    private String description;

    private String instructions;

    @Column(name = "prep_time")
    private Integer prepTime;

    @Column(name = "cook_time")
    private Integer cookTime;

    private Integer servings;

    @NotNull
    private Integer version;

    @Column(name = "parent_recipe_id")
    private Recipe parent_recipe;
}
