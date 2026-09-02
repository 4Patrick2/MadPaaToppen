alter table recipe 
alter column instructions Type JSONB
USING to_jsonb(instructions);