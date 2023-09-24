create database instagram; 
use instagram;

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

insert into user
(id, age, name, email, followers, following)
values
(1, 14, "adam", "adam@gmail.com", 153, 453),
(2, 15, "bob", "bob@yahoo.in", 234, 32),
(3, 23, "casey", "casey@gmail.com", 23, 34),
(4, 17, "donald", "donald@gmail.com", 233, 32);

select id, name, email from user;
select * from user;
select distinct age from user; -- distinct keyword give common/unique results, It won't repeat the data.

create table posts(
id int primary key,
content varchar(255),
user_id int,
foreign key (user_id) references user(id)
);

insert into posts
(id, content, user_id)
values
(101, "Hello World", 3),
(102, "Bye Bye", 1),
(103, "Hello Developers", 2); 

select * from posts;