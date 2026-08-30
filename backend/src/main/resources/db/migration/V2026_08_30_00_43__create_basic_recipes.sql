insert into recipe (title, description, instructions, prep_time, cook_time, servings) VALUES
  ('Kartoffelmos', 'En lækker kartoffelmos', '1. Skyl og kog kartoflerne. 2. Pisk kartoflerne sammen med mælk og smør.', 10, 20, 4),
  ('Gulerodssuppe', 'En lækker gulerodssuppe', '1. Skyl og hak gulerødder. 2. Kog gulerødder i vand. 3. Pisk sammen med mælk.', 15, 25, 4),
  ('Onion soup', 'A delicious onion soup', '1. Caramelize onions in butter. 2. Add broth and simmer for 20 minutes.', 10, 25, 4),
  ('Bagt hvidløg', 'Aromatisk bagt hvidløg', '1. Forvarm ovnen til 200°C. 2. Skær toppen af hvidløgsfeddene og dryp med olivenolie. 3. Bag i ovnen i 30 minutter.', 5, 30, 4);

insert into recipe_ingredient (recipe_id, ingredient_id, quantity, unit_id, note) VALUES
  ((select id from recipe where title = 'Kartoffelmos'), (select id from ingredient where name = 'Kartofler'), 500, (select id from unit where name = 'gram'), 'Skal skrælles og koges'),
  ((select id from recipe where title = 'Kartoffelmos'), (select id from ingredient where name = 'Mælk'), 200, (select id from unit where name = 'milliliter'), ''),
  ((select id from recipe where title = 'Kartoffelmos'), (select id from ingredient where name = 'Smør'), 50, (select id from unit where name = 'gram'), ''),
  ((select id from recipe where title = 'Gulerodssuppe'), (select id from ingredient where name = 'Gulerødder'), 400, (select id from unit where name = 'gram'), 'Skal skrælles og hakkes'),
  ((select id from recipe where title = 'Gulerodssuppe'), (select id from ingredient where name = 'Mælk'), 300, (select id from unit where name = 'milliliter'), ''),
  ((select id from recipe where title = 'Onion soup'), (select id from ingredient where name = 'Løg'), 300, (select id from unit where name = 'gram'), 'Skal skæres i skiver'),
  ((select id from recipe where title = 'Onion soup'), (select id from ingredient where name = 'Smør'), 30, (select id from unit where name = 'gram'), ''),
  ((select id from recipe where title = 'Bagt hvidløg'), (select id from ingredient where name = 'Hvidløg'), 3, (select id from unit where name = 'stk'), '');      

  