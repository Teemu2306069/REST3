-- Luodaan uusi tietokanta
CREATE DATABASE IF NOT EXISTS urheilijat_db;
-- Käytetään uutta tietokantaa
USE urheilijat_db;
-- Luodaan uusi taulukko 'urheilijat' jos sitä ei ole jo luotu
CREATE TABLE IF NOT EXISTS urheilijat (
	id INT AUTO_INCREMENT PRIMARY KEY,
	etunimi VARCHAR(50),
	sukunimi VARCHAR(50),
	kutsumanimi VARCHAR(50),
	syntymavuosi INT,
	paino DOUBLE(5,2),
	kuva VARCHAR(255),
	laji VARCHAR(50),
	saavutukset VARCHAR(255)
);
-- Onnistuiko taulukon luonti
SHOW TABLES;
SELECT * FROM urheilijat;