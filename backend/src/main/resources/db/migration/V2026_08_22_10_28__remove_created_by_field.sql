ALTER TABLE recipe
DROP COLUMN created_by;

ALTER TABLE unit
DROP COLUMN created_by;

ALTER TABLE comment
DROP COLUMN created_by;


ALTER TABLE rating
DROP COLUMN created_by;


ALTER TABLE recipe_ingredient
DROP COLUMN created_by;

ALTER TABLE users
DROP COLUMN created_by;

ALTER TABLE ingredient_category
DROP COLUMN created_by;

ALTER TABLE ingredient
DROP COLUMN created_by;