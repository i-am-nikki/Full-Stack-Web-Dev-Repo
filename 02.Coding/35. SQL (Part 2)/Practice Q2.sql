/*
	Qs: Create a table to store student info(roll_no, name, city, marks)
	Insert following table in table:
		110, "adam", "Delhi", 76
        108, "bob", "Mumbai", 65
        124, "casey", "Pune", 94
        112, "duke", "Pune", 80
*/

CREATE TABLE Student(
roll_no INT UNSIGNED PRIMARY KEY,
name VARCHAR(50) NOT NULL,
city VARCHAR(80) NOT NULL,
marks INT UNSIGNED NOT NULL
);

INSERT INTO Student
VALUES
(110, "adam", "Delhi", 76),
(108, "bob", "Mumbai", 65),
(124, "casey", "Pune", 94),
(112, "duke", "Pune", 80);

SELECT * FROM Student;

-- Operations Questions --
/*
- Select all students who scored 75+
- Find names of all cities where students are from 
- Find the maximum marks of student from each city
- Find the average of the class
- Add a new column grade, assign grade such that:
	marks > 80, grade = O
    marks 70- 80, grade = A
    marks 60-70, grade = B
*/

SELECT * FROM student WHERE marks > 75;

SELECT DISTINCT city FROM Student;
-- OR
SELECT city, max(marks) FROM Student
GROUP BY city;

SELECT avg(marks) 
FROM Student;

ALTER TABLE student
ADD COLUMN grade CHAR(1) NOT NULL;

UPDATE student
SET grade= "O"
WHERE marks>80;

UPDATE student
SET grade= "A"
WHERE marks BETWEEN 70 AND 80;

UPDATE student
SET grade= "B"
WHERE marks BETWEEN 60 AND 70;

SELECT * FROM student;





