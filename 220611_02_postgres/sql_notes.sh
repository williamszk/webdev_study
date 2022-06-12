

# change to postgres user inside the linux container
sudo -i -u postgres
su postgres
# the postgres server uses this name to access it

psql
# could not change directory to "/root/webdev_study/220611_02_postgres": Permission denied
# psql (12.11 (Ubuntu 12.11-0ubuntu0.20.04.1))
# Type "help" for help.
# postgres=# 

# to exit psql
\q

# I think that inside the container I would need to open a new terminal 
# with the root user, instead of trying to switch user to the root


# Use this command to create a new user:
createuser --interactive

createdb my_new_database


# we can just use ctrl+d to logout from the postgres user

# some notes from: https://www.youtube.com/watch?v=zw4s3Ey8ayo&ab_channel=TroyAmelotte
su postgres
psql

# createdb tutorial_db 

CREATE DATABASE mytutorialdatabase;
# postgres=# CREATE DATABASE mytutorialdatabase;
# CREATE DATABASE


# how to list dbs?
\l
# postgres=# \l
#         Name        |  Owner   | Encoding | Collate |  Ctype  |   Access privileges   
# --------------------+----------+----------+---------+---------+-----------------------
#  mytutorialdatabase | postgres | UTF8     | C.UTF-8 | C.UTF-8 | 
#  postgres           | postgres | UTF8     | C.UTF-8 | C.UTF-8 | 
#  template0          | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +
#                     |          |          |         |         | postgres=CTc/postgres
#  template1          | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +
#                     |          |          |         |         | postgres=CTc/postgres
# (4 rows)

# to enter into the database
\c mytutorialdatabase 
# postgres=# \c mytutorialdatabase
# You are now connected to database "mytutorialdatabase" as user "postgres".
# mytutorialdatabase=# 

CREATE TABLE profile (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255), 
    email VARCHAR(255),
    password TEXT,
    age INT
);

# In postgres the convention is to upercase all
# keywords related to the SQL syntax
# all other words related to your specific
# implementation should be snakecase
# SQL is not case sensitive

# mytutorialdatabase=# CREATE TABLE profile (
# mytutorialdatabase(#     id SERIAL PRIMARY KEY,
# mytutorialdatabase(#     name VARCHAR(255),
# mytutorialdatabase(#     email VARCHAR(255),
# mytutorialdatabase(#     password TEXT,
# mytutorialdatabase(#     age INT
# mytutorialdatabase(# );
# CREATE TABLE

# how to list the tables in the database?
\dt
# mytutorialdatabase=# \dt
#           List of relations
#  Schema |  Name   | Type  |  Owner   
# --------+---------+-------+----------
#  public | profile | table | postgres
# (1 row)

# VARCHAR is a variable character column with size constraint
# VARCHAR(255) means that we can only include 255 characters in here
# I think that TEXT type does not have a constraint in side

# the SERIA keyword will tell postgres that we want to add
# 1 to every new entry

# "user" is a keyword in postgres, that is why we can't use it
# but we can create using double quotes
# the convention is to use table names in singular
# a table is considered a bag
# we have a "bag" of candies, not "bags" of candies

# to remove the table
DROP TABLE profile;

\dt

# create a table called "user" use the double quotes
# so postgres will know that this is not to be used as a keyword
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255), 
    email VARCHAR(255),
    password TEXT,
    age INT
);

INSERT INTO "user" (name, email, password, age) 
    VALUES ('Bob', 'bob@mail.com', '1234', 26);
# postgres undestands single quotes as text
# in postgres '' and "" are not the same
# "" double quotes are used for referencing columns and tables

INSERT INTO "user" (name, email, password, age) 
    VALUES ('Alice', 'alice@mail.com', 'qwerty', 90);

# stopped here:
# https://youtu.be/zw4s3Ey8ayo?t=1337

