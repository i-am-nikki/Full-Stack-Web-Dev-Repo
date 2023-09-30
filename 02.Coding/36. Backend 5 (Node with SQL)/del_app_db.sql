-- C:\Program Files\MySQL\MySQL Server 8.0\bin\
-- C:/Users/hp/Desktop/Delta/02.Coding/36. Backend 5 (Node with SQL)/del_app_db.sql;
-- mysql -u root -p

CREATE DATABASE del_app;
USE del_app;

CREATE TABLE temp(
	id INT PRIMARY KEY
);

CREATE TABLE temp(
	id VARCHAR(50) PRIMARY KEY,
	username VARCHAR(50) UNIQUE NOT NULL,
	email VARCHAR(50) UNIQUE NOT NULL,
	password VARCHAR(50) NOT NULL	
);