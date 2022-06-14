CREATE DATABASE IF NOT EXISTS GoStudy;
USE GoStudy;
CREATE TABLE IF NOT EXISTS Institute (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    city VARCHAR(60) NOT NULL,
    telephone VARCHAR(11) NOT NULL,
    opening_time VARCHAR(20) NOT NULL,
    closing_time VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS User (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fk_id_institute INT,
    name VARCHAR(60) NOT NULL,
    ra VARCHAR(10) NOT NULL,
    telephone VARCHAR(13) NOT NULL,
    email VARCHAR(70) NOT NULL,
    password VARCHAR(80) NOT NULL,
    isAdmin Boolean NOT NULL,
    FOREIGN KEY(fk_id_institute) REFERENCES Institute(id)
);

CREATE TABLE IF NOT EXISTS Room (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fk_id_institute INT,
    number INT,
    FOREIGN KEY(fk_id_institute) REFERENCES Institute(id)
);

CREATE TABLE IF NOT EXISTS Schedule (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    label VARCHAR(3),
    initial_time VARCHAR(20) NOT NULL,
    final_time VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS Room_has_schedule(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fk_id_room INT,
    fk_id_schedule int,
    FOREIGN KEY(fk_id_room) REFERENCES Room(id),
    FOREIGN KEY(fk_id_schedule) REFERENCES Schedule(id)
);

CREATE TABLE IF NOT EXISTS Reservation(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fk_id_room INT,
    fk_id_user INT,
    fk_id_schedule INT,
    date DATE NOT NULL,
    FOREIGN KEY(fk_id_room) REFERENCES Room(id),
	FOREIGN KEY(fk_id_user) REFERENCES User(id),
	FOREIGN KEY(fk_id_schedule) REFERENCES Schedule(id)
);