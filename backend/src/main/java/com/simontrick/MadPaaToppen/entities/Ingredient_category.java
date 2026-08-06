package com.simontrick.MadPaaToppen.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "ingredient_category")
public class Ingredient_category extends Base_entity {
    private String name;
}
