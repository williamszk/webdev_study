
su postgres
psql


service postgresql status
-- postgres@0267890844bb:/root/webdev_study$ service postgresql status
-- 12/main (port 5432): down

service postgresql start 
service postgresql status
-- postgres@0267890844bb:/root/webdev_study$ service postgresql status
-- 12/main (port 5432): online

psql

CREATE DATABASE perntodo;
-- postgres=# CREATE DATABASE perntodo;
-- CREATE DATABASE


\l
-- postgres=# \l
--                                   List of databases
--         Name        |  Owner   | Encoding | Collate |  Ctype  |   Access privileges   
-- --------------------+----------+----------+---------+---------+-----------------------
--  mytutorialdatabase | postgres | UTF8     | C.UTF-8 | C.UTF-8 | 
--  perntodo           | postgres | UTF8     | C.UTF-8 | C.UTF-8 | 
--  postgres           | postgres | UTF8     | C.UTF-8 | C.UTF-8 | 
--  template0          | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +
--                     |          |          |         |         | postgres=CTc/postgres
--  template1          | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +
--                     |          |          |         |         | postgres=CTc/postgres
-- (5 rows)


\c perntodo
-- postgres=# \c perntodo
-- You are now connected to database "perntodo" as user "postgres".

CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
-- perntodo=# CREATE TABLE todo (
-- perntodo(#     todo_id SERIAL PRIMARY KEY,
-- perntodo(#     description VARCHAR(255)
-- perntodo(# );
-- CREATE TABLE


-- When we try to use the table/relation that doesn't exist already: 
-- Server started on port 5000.
-- password authentication failed for user "postgres"
-- relation "todo" does not exist


\dt
-- perntodo=# \dt
--         List of relations
--  Schema | Name | Type  |  Owner   
-- --------+------+-------+----------
--  public | todo | table | postgres
-- (1 row)


-- stoped at:
-- https://youtu.be/ldYcgPKEZC8?t=797 

-- Change password of user postgres
-- ALTER USER postgres PASSWORD 'ImyPassword';
ALTER USER postgres PASSWORD 'myPassword';
-- postgres=# ALTER USER postgres PASSWORD 'myPassword';
-- ALTER ROLE

-- In case we don't set the password correctly:
-- Server started on port 5000.
-- password authentication failed for user "postgres"


-- =============================================================================== -- 
-- GET all data from todo table
su postgres
psql
\c perntodo
SELECT * FROM todo;
-- postgres=# \c perntodo
-- You are now connected to database "perntodo" as user "postgres".
-- perntodo=# SELECT * FROM todo;
--  todo_id |       description        
-- ---------+--------------------------
--        1 | I need to clean my room.
-- (1 row)
-- =============================================================================== -- 
-- Remove and create the table todo
-- Refresh the table todo
su postgres
psql
\c perntodo
DROP TABLE todo;
CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
-- postgres@0267890844bb:/root/webdev_study/220611_02_postgres/server$ psql
-- could not change directory to "/root/webdev_study/220611_02_postgres/server": Permission denied
-- psql (12.11 (Ubuntu 12.11-0ubuntu0.20.04.1))
-- Type "help" for help.

-- postgres=# \c perntodo
-- You are now connected to database "perntodo" as user "postgres".

-- perntodo=# DROP TABLE todo;
-- DROP TABLE

-- perntodo=# CREATE TABLE todo (
-- perntodo(#     todo_id SERIAL PRIMARY KEY,
-- perntodo(#     description VARCHAR(255)
-- perntodo(# );
-- CREATE TABLE

-- =============================================================================== -- 

