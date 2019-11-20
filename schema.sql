CREATE DATABASE recipes;
USE recipes;

CREATE TABLE `recipes` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `author` VARCHAR( 255) NOT NULL,
  `sandwich` VARCHAR( 255) NOT NULL,
  `ingredients` VARCHAR( 255 ) NOT NULL,
  `created_at` DATETIME NOT NULL,

   PRIMARY KEY ( `id` ) 
);