select *
from ingredient;

select *
from ingredient_category;

select *
from unit;

INSERT INTO unit (name, abbr)
VALUES ('kilo', 'kg');

INSERT INTO unit (name, abbr)
VALUES ('gram', 'g');

INSERT INTO unit (name, abbr)
VALUES ('stykke', 'stk');

insert into recipe_ingredient (recipe_id, ingredient_id, quantity, unit_id, note) 
VALUES (
    '10f69e1e-f7e8-49f8-98cb-68e5b2876496', 
    '2c4d2e0f-2554-4419-8759-d63a4a442887', 
    1, 
    '6b71efe6-f8d1-4562-8652-46f979233e32',
    null)

insert into ingredient (name, category) 
VALUES (
    'Flæsk',
    '4b1cffc0-c9a0-4e89-aedc-35dc9856214b')

insert into recipe_ingredient (recipe_id, ingredient_id, quantity, unit_id, note) 
VALUES (
    '10f69e1e-f7e8-49f8-98cb-68e5b2876496', 
    '9ac552fa-606c-4b5b-a73d-7288d8dbe7ed', 
    750, 
    '314f150f-935b-441d-8bac-2c4c612cd227',
    null) 


insert into recipe_ingredient (recipe_id, ingredient_id, quantity, unit_id, note) 
VALUES (
    '10f69e1e-f7e8-49f8-98cb-68e5b2876496', 
    '2f2cde8c-d3cd-4739-a77f-fa68adebb651', 
    1, 
    'e6fe66cb-4a3a-4c97-9cc4-9e6495f34542',
    null) 