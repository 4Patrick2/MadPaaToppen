package com.simontrick.MadPaaToppen.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.util.UUID;

@Entity
@Table(name = "ingredient")
public class Ingredient extends Base_entity {
    private String name;

    private UUID category;
}
