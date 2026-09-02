ALTER TABLE recipe
DROP COLUMN instructions;

ALTER TABLE recipe
ADD COLUMN instructions JSONB;