package com.simontrick.MadPaaToppen.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Entity
@Table(name="recipe")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Recipe extends BaseEntity {

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

    @ManyToOne
    @JoinColumn(name = "parent_recipe_id")
    private Recipe parentRecipe;
}
