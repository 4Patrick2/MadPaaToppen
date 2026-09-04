alter table recipe
drop column parent_recipe_id;

alter table recipe
add COLUMN recipe_family_id UUID;