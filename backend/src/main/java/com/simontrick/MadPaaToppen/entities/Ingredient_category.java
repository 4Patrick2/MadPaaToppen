package com.simontrick.MadPaaToppen.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name = "ingredient_category")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Ingredient_category extends BaseEntity {
    private String name;
}
