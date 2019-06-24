CREATE DATABASE IF NOT EXISTS `mern-ts-app`;
CREATE USER IF NOT EXISTS 'mern-ts-app'@'localhost' IDENTIFIED BY '1234';
GRANT CREATE, INSERT, SELECT ON `mern-ts-app` . * TO 'mern-ts-app'@'localhost'; 

FLUSH PRIVILEGES;
