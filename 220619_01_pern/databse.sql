-- Here we write some code that is related to database administration


-- =============================================================================== -- 
-- GET all data from todo table
su postgres
psql
\c perntodo
SELECT * FROM todo;

-- =============================================================================== --
-- Check the databases
\l
-- perntodo=# \l
--                               List of databases
--    Name    |  Owner   | Encoding | Collate |  Ctype  |   Access privileges   
-- -----------+----------+----------+---------+---------+-----------------------
--  perntodo  | postgres | UTF8     | C.UTF-8 | C.UTF-8 | 
--  postgres  | postgres | UTF8     | C.UTF-8 | C.UTF-8 | 
--  template0 | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +
--            |          |          |         |         | postgres=CTc/postgres
--  template1 | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +
--            |          |          |         |         | postgres=CTc/postgres
-- (4 rows)

-- =============================================================================== -- 
-- Delete the database perntodo
su postgres
psql
DROP DATABASE perntodo;
-- postgres=# DROP DATABASE perntodo;
-- DROP DATABASE
-- =============================================================================== -- 
-- Recreate perntodo database
su postgres
psql
CREATE DATABASE perntodo;
-- postgres=# CREATE DATABASE perntodo;
-- CREATE DATABASE
-- =============================================================================== -- 
-- Create table todo
su postgres
psql
\c perntodo
CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
-- =============================================================================== -- 







