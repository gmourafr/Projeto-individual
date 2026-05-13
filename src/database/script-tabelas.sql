-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/



CREATE DATABASE projetofallen;

USE projetofallen;

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50)
);

CREATE TABLE times (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    epoca VARCHAR(20) NOT NULL,
    vitorias INT DEFAULT 0
);


CREATE TABLE logins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_usuario INT NOT NULL,
    data_login DATETIME DEFAULT NOW(),
    FOREIGN KEY (fk_usuario) REFERENCES usuarios(id)
);


INSERT INTO times (nome, epoca, vitorias) VALUES
('Luminosity Gaming','2015-2016', 8),
('SK Gaming', '2016-2018', 10),
('MiBR',      '2018-2019',  2),
('FURIA',     '2023-2026', 7);

