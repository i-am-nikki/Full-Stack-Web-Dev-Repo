/* Qs: Create database for your college.
	Create a table named Teacher to store (id, name, subject, salary)
    Insert following data in the table:
		23, "ajay", "math", 50000
        47, "bharat", "english", 60000
        18, "chetan", "chemistry", 45000
        9, 	"divya", "physics", 75000
*/

-- Answer --
CREATE DATABASE IF NOT EXISTS college;
USE college;

CREATE TABLE teacher (
id INT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
subject VARCHAR(100) NOT NULL,
salary FLOAT UNSIGNED NOT NULL
);

INSERT INTO teacher
VALUES
(23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physics", 75000);

SELECT * FROM teacher;

-- OPERATIONS QUESTIONS- 
/*
- Select Teachers whose salary is more than 55k
- Rename the salary column of teacher table to ctc
- Update salary of all teachers by giving them an increment of 25%
- Add a new column for teachers called city. The default city name 	should be "Gurgaon"
- Delete the salary column from teacher table
 */
 
 -- Answers --
SELECT salary FROM teacher WHERE salary>55000; 
 
ALTER TABLE teacher
CHANGE COLUMN salary ctc INT UNSIGNED NOT NULL;
 
SET SQL_SAFE_UPDATES=0;
 
UPDATE teacher
SET ctc = (ctc * 0.25) + ctc;
 
ALTER TABLE teacher 
ADD COLUMN city VARCHAR(80) DEFAULT "Gurgaon";

ALTER TABLE teacher
DROP COLUMN ctc;

SELECT * FROM teacher;