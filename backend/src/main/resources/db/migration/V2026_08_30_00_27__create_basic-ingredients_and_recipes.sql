alter table ingredient_category add COLUMN english_name varchar(255) not null default '';

insert into ingredient_category (name, english_name) values
  ('Grønsager', 'Vegetables'),
  ('Frugter', 'Fruits'),
  ('Protien', 'Protein'),
  ('Krydderier', 'Herbs and Spices'),
  ('Fedt', 'Oils and Fats'),
  ('Korn', 'Grains'),
  ('Væske', 'Liquids');

alter table ingredient add COLUMN english_name varchar(255) not null default '';

insert into ingredient (name, english_name, category) values
  ('Kartofler', 'Potatoes', (select id from ingredient_category where name = 'Grønsager')),
  ('Gulerødder', 'Carrots', (select id from ingredient_category where name = 'Grønsager')),
  ('Løg', 'Onions', (select id from ingredient_category where name = 'Grønsager')),
  ('Hvidløg', 'Garlic', (select id from ingredient_category where name = 'Grønsager')),
  ('Basilikum', 'Basil', (select id from ingredient_category where name = 'Krydderier')),
  ('Oregano', 'Oregano', (select id from ingredient_category where name = 'Krydderier')),
  ('Timian', 'Thyme', (select id from ingredient_category where name = 'Krydderier')),
  ('Persille', 'Parsley', (select id from ingredient_category where name = 'Krydderier')),
  ('Rosmarin', 'Rosemary', (select id from ingredient_category where name = 'Krydderier')),
  ('Chili', 'Chili Pepper', (select id from ingredient_category where name = 'Krydderier')),
  ('Salt', 'Salt', (select id from ingredient_category where name = 'Krydderier')),
  ('Ris', 'Rice', (select id from ingredient_category where name = 'Korn')),
  ('Pasta', 'Pasta', (select id from ingredient_category where name = 'Korn')),
  ('Mel', 'Flour', (select id from ingredient_category where name = 'Korn')),
  ('Mælk', 'Milk', (select id from ingredient_category where name = 'Væske')),
  ('Vand', 'Water', (select id from ingredient_category where name = 'Væske')),
  ('Olivenolie', 'Olive Oil', (select id from ingredient_category where name = 'Fedt')),
  ('Smør', 'Butter', (select id from ingredient_category where name = 'Fedt')),
  ('Æg', 'Eggs', (select id from ingredient_category where name = 'Protien')),
  ('Kyllingebryst', 'Chicken Breast', (select id from ingredient_category where name = 'Protien')),
  ('Oksekød', 'Beef', (select id from ingredient_category where name = 'Protien')),
  ('Peber', 'Pepper', (select id from ingredient_category where name = 'Krydderier'));