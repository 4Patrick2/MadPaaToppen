package com.simontrick.MadPaaToppen.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "unit")
public class Unit extends Base_entity {
    private String name;

    private String abbr;
}
