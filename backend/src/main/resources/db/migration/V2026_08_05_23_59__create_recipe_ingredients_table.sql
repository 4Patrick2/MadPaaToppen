CREATE TABLE recipe_ingredient (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    recipe_id UUID,
    ingredient_id UUID,
    quantity NUMERIC,
    unit_id UUID,
    note TEXT,
    created_by UUID NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (recipe_id)
            REFERENCES recipe(id)
            DEFERRABLE INITIALLY IMMEDIATE,

    FOREIGN KEY (ingredient_id)
                REFERENCES ingredient(id)
                DEFERRABLE INITIALLY IMMEDIATE
);

