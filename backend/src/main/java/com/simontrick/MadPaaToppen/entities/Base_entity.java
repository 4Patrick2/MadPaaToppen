package com.simontrick.MadPaaToppen.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
public class Base_entity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;

    private UUID created_by;

    private LocalDateTime created_at;

    private LocalDateTime updated_at;
}
