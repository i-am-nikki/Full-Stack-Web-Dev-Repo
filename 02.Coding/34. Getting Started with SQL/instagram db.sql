create database instagram; -- create database
use instagram; -- select database

-- TABLE with CONSTRAINTS _________________________________________________________________________________________________________________________
create table user(
 id int,
 primary key(id), -- It'll make id col of user table `unique` and `not null` automatically.
 age int,
 constraint age_check check (age>=13), -- Constraint name `(age_check)` is optional here.
 name varchar(30) not null,
 email varchar(50) unique,
 followers int default 0,
 following int default 0
);

-- TABLE DATA_________________________________________________________________________________________________________________________
insert into user
(id, age, name, email, followers, following)
values
(1, 14, "adam", "adam@gmail.com", 153, 453),
(2, 15, "bob", "bob@yahoo.in", 234, 32),
(3, 23, "casey", "casey@gmail.com", 23, 34),
(4, 17, "donald", "donald@gmail.com", 233, 32);

-- UPDATE ROWS_________________________________________________________________________________________________________________________
update user
set name = "nikki", age = 21, followers= 323, email="nikki@gmail.com"
where id = 3;

select name, age, followers from user 
where age>18 or followers>200;

-- BETWEEN keyword_________________________________________________________________________________________________________________________
select name, age from user
where age between 15 and 23;

-- IN operator_________________________________________________________________________________________________________________________
select id, name, email 
from user
where email IN ("nikki@gmail.com", "bob@yahoo.in", "abc@gmail.com");

-- NOT IN operator
select id, name, age
from user
where age NOT IN (15, 21);

-- LIMIT Clause_________________________________________________________________________________________________________________________
select id, name, age from user
where age>15 
LIMIT 2;

-- ORDER BY CLAUSE _________________________________________________________________________________________________________________________
SELECT id, name, followers from USER
WHERE followers BETWEEN 200 AND 500
ORDER BY followers ASC;

-- AGGREGATE Functions_________________________________________________________________________________________________________________________
select count(followers) from user where age>=15;
select avg(age) from user;

-- GROUP By Functions_________________________________________________________________________________________________________________________
SELECT age, max(followers) FROM user 
GROUP BY age;

-- _________________________________________________________________________________________________________________________
select id, name, email from user;
select * from user;

-- DISTINCT keyword_________________________________________________________________________________________________________________________
select distinct age from user; -- distinct keyword give common/unique results, It won't repeat the data.

-- PRIMARY key and FOREIGN KEY with CONSTRAINTS_________________________________________________________________________________________________________________________
create table posts(
id int primary key,
content varchar(255),
user_id int,
foreign key (user_id) references user(id)
);

-- insert command with values in table_________________________________________________________________________________________________________________________
insert into posts
(id, content, user_id)
values
(101, "Hello World", 3),
(102, "Bye Bye", 1),
(103, "Hello Developers", 2); 

select * from posts;