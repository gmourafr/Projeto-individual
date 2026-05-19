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


CREATE TABLE quiz_perguntas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pergunta VARCHAR(255) NOT NULL,
    opcao_a VARCHAR(255) NOT NULL,
    opcao_b VARCHAR(255) NOT NULL,
    opcao_c VARCHAR(255) NOT NULL,
    opcao_d VARCHAR(255) NOT NULL,
    resposta_correta CHAR(1) NOT NULL
);

CREATE TABLE quiz_tentativas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_usuario INT NOT NULL,
    data_tentativa DATETIME DEFAULT NOW(),
    total_acertos INT NOT NULL,
    total_perguntas INT NOT NULL,
    FOREIGN KEY (fk_usuario) REFERENCES usuarios(id)
);

CREATE TABLE quiz_respostas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_tentativa INT NOT NULL,
    fk_pergunta INT NOT NULL,
    resposta_dada CHAR(1) NOT NULL,
    acertou BOOLEAN NOT NULL,
    FOREIGN KEY (fk_tentativa) REFERENCES quiz_tentativas(id),
    FOREIGN KEY (fk_pergunta) REFERENCES quiz_perguntas(id)
);

INSERT INTO quiz_perguntas (id, pergunta, opcao_a, opcao_b, opcao_c, opcao_d, resposta_correta) VALUES
(1, 'Qual foi a principal função do FalleN em toda sua carreira?', 'AWPER', 'ENTRY FRAGGER', 'SUPORTE', 'RIFFLER', 'a'),
(2, 'Quantos Majors o FalleN ganhou?', '1 Major', '5 Majors', '3 Majors', '2 Majors', 'd'),
(3, 'Em qual time FalleN mais ganhou campeonatos?', 'MIBR', 'Luminosity Gaming', 'FURIA', 'SK Gaming', 'b'),
(4, 'Qual o nome real do FalleN?', 'Gabriel Silva', 'Fernando Tenório', 'Marcelo Toledo', 'Gabriel Toledo', 'd'),
(5, 'Em qual país o FalleN nasceu?', 'Argentina', 'Portugal', 'Brasil', 'EUA', 'c'),
(6, 'Qual apelido o FalleN recebeu por ser um grande líder e mentor?', 'The King', 'O Professor', 'The Legend', 'O Mestre AWP', 'b'),
(7, 'Em qual ano o FalleN foi campeão do Major de Colônia (ESL One Cologne)?', '2014', '2015', '2016', '2017', 'c'),
(8, 'Qual time FalleN assinou em 2023 para voltar ao cenário competitivo?', 'NAVI', 'Team Liquid', 'FURIA', 'Imperial', 'c');

