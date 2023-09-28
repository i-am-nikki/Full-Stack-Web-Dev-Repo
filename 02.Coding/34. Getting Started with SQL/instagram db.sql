CREATE DATABASE instagram; -- create database
USE instagram; -- select database

-- TABLE with CONSTRAINTS _________________________________________________________________________________________________________________________
CREATE TABLE user(
 id INT,
 PRIMARY KEY(id), -- It'll make id col of user table `unique` and `not null` automatically.
 age INT,
 CONSTRAINT age_check CHECK (age>=13), -- Constraint name `(age_check)` is optional here.
 name VARCHAR(30) NOT NULL,
 email VARCHAR(50) UNIQUE,
 followers INT DEFAULT 0,
 following INT DEFAULT 0
);

-- TABLE DATA_________________________________________________________________________________________________________________________
INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(1, 14, "adam", "adam@gmail.com", 153, 453),
(2, 15, "bob", "bob@yahoo.in", 234, 32),
(3, 23, "casey", "casey@gmail.com", 23, 34),
(4, 17, "donald", "donald@gmail.com", 233, 32);

-- _________________________________________________________________________________________________________________________
SELECT id, name, email FROM user;
SELECT * FROM user;

-- DISTINCT keyword_________________________________________________________________________________________________________________________
select DISTINCT age FROM user; -- distinct keyword give common/unique results, It won't repeat the data.

-- PRIMARY key and FOREIGN KEY with CONSTRAINTS_________________________________________________________________________________________________________________________
CREATE TABLE posts(
id INT PRIMARY KEY,
content VARCHAR(255),
user_id INT,
FOREIGN KEY (user_id) REFERENCES user(id)
);

-- insert command with values in table_________________________________________________________________________________________________________________________
INSERT INTO posts
(id, content, user_id)
VALUES
(101, "Hello World", 3),
(102, "Bye Bye", 1),
(103, "Hello Developers", 2); 

SELECT * FROM posts;