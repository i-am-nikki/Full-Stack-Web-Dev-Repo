USE instagram; -- select database

-- WHERE CLAUSE_________________________________________________________________________________________________________________________
SELECT name, age, followers FROM user 
WHERE age>18 or followers>200;

-- UPDATE ROWS_________________________________________________________________________________________________________________________
UPDATE user
SET name = "nikki", age = 21, followers= 323, email="nikki@gmail.com"
WHERE id = 3;

-- BETWEEN keyword_________________________________________________________________________________________________________________________
SELECT name, age from user
WHERE age BETWEEN 14 AND 23;

-- IN operator_________________________________________________________________________________________________________________________
SELECT id, name, email 
FROM user
WHERE email IN ("nikki@gmail.com", "bob@yahoo.in", "abc@gmail.com");

-- NOT IN operator
SELECT id, name, age
FROM user
WHERE age NOT IN (15, 21);

-- LIMIT Clause_________________________________________________________________________________________________________________________
SELECT id, name, age from user
WHERE age>15 
LIMIT 2;

-- ORDER BY CLAUSE _________________________________________________________________________________________________________________________
SELECT id, name, followers FROM user
WHERE followers BETWEEN 200 AND 500
ORDER BY followers ASC;

-- AGGREGATE Functions_________________________________________________________________________________________________________________________
SELECT count(followers) FROM user WHERE age>=15;
SELECT avg(age) FROM user;

-- GROUP By Function & HAVING CLAUSE__________________________________________________________________________________________________________
/* This is the general order to write queries also. */
SELECT age, max(followers) 
FROM user 
WHERE age> 15
GROUP BY age -- Here, Group by clause will group the rows based on age.
HAVING max(followers)>200 -- Here, Having clause will select the followers which have >200 followers only.
ORDER BY age DESC;

-- UPDATE TABLE__________________________________________________________________________________________
UPDATE user
SET followers = 700
WHERE id=1; -- it will be updated coz id is a key column

UPDATE user
SET followers = 500
WHERE age>17; -- to run this command we need to disable safe mode via writing below command.

SET SQL_SAFE_UPDATES = 0; -- First execute this and re execute above update command than it will work fine.

SELECT * FROM user;

-- DELETE TABLE__________________________________________________________________________________________
INSERT INTO user
(id, age, name, email, followers)
VALUES
(5, 20, "xyz", "xyz@gmail.com", 333);

DELETE FROM user
WHERE id=5; -- NOTE- IF WE WON'T SPECIFY THE WHERE CONDITION IN DELETE STATEMENT, IT WILL DELETE ALL ROWS FROM TABLE.

SELECT * FROM user;

-- ALTER TABLE__________________________________________________________________________________________
ALTER TABLE user
ADD COLUMN city VARCHAR(50) DEFAULT "DELHI" ; -- it will add the city column in the table

ALTER TABLE user
DROP COLUMN city; -- it will delete the city column

ALTER TABLE user
RENAME TO Insta_Users; -- It renamed the Table name from user to Insta_User

select * from Insta_Users; -- Now, this command will work and wherever the user table is written won't work

ALTER TABLE insta_users
CHANGE COLUMN followers subscribers INT DEFAULT 0;

INSERT INTO insta_users 
(id, age, name, email, subscribers)
VALUES 
(5, 23, "gemini", "gem@gmail.com", 32);

ALTER TABLE insta_users
MODIFY following INT DEFAULT 0; -- this will jst change the datatype and constraints of a column (won't rename the column)

-- TRUNCATE TABLE__________________________________________________________________________________________
TRUNCATE TABLE insta_users; -- it will give Error Code: 1701. Cannot truncate a table referenced in a foreign key constraint 
-- To solve this issue we can first drop post table or can remove foreign key connection from post table.

-- Removing connection
SELECT CONSTRAINT_NAME
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE 
WHERE TABLE_NAME = "posts" AND REFERENCED_TABLE_NAME= "insta_users"; -- posts_ibfk_1 
-- The above command will give default constraint name from which we can remove the constraint of column which has foregin key. 
-- We need to find it here coz we didn't explicitly define it.

ALTER TABLE posts
DROP FOREIGN KEY posts_ibfk_1; -- it will remove the foreign key constraint from the table, Now' it will be possible to truncate insta_user table.

-- To completely drop the column now we can write following command:
ALTER TABLE posts
DROP COLUMN user_id;
select * from posts;
select * from insta_users;
