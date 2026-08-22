package com.simontrick.MadPaaToppen.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name = "unit")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Unit extends BaseEntity {
    private String name;

    private String abbr;
}
