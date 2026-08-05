CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE recipe (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    instructions TEXT,
    prep_time INTEGER,
    cook_time INTEGER,
    servings INTEGER,
    version INTEGER NOT NULL DEFAULT 1,
    parent_recipe_id UUID,
    created_by UUID NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (parent_recipe_id)
        REFERENCES recipe(id)
        DEFERRABLE INITIALLY IMMEDIATE
);