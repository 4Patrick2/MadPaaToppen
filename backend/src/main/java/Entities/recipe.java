package Entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name="recipe")
public class recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;

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
    private recipe parent_recipe;

    private UUID created_by;

    private LocalDateTime created_at;

    private LocalDateTime updated_at;
}
