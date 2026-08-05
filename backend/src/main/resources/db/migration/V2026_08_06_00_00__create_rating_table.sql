CREATE TABLE rating (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    recipe_id UUID,
    user_id UUID,
    score INTEGER,
    created_by UUID NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (recipe_id)
            REFERENCES recipe(id)
            DEFERRABLE INITIALLY IMMEDIATE,

    FOREIGN KEY (user_id)
                REFERENCES users(id)
                DEFERRABLE INITIALLY IMMEDIATE
);