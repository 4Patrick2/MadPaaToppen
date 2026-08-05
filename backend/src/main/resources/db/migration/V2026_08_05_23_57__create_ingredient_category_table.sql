CREATE TABLE ingredient_category (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    created_by UUID NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE ingredient
ADD CONSTRAINT fk_ingredient_category
FOREIGN KEY (category)
REFERENCES ingredient_category(id);