--COMANDOS DLL - ESTRUTURA DO BANCO DE DADOS MERCADO --
--use mercado--

CREATE DATABASE madeireira;
CREATE TABLE escola.livros (
    id int not null auto_increment primary key,
    nome varchar(255) not null,
    status boolean default true
);
CREATE TABLE escola.aluno (
    id int not null auto_increment primary key,
    nome varchar(255) not null,
    telefone varchar(25),
    status boolean default true
);
CREATE TABLE escola.biblioteca(
    id int not null auto_increment primary key,
    id_livros int not null,
    foreign key(id_livros) references livros(id),
    id_aluno int not null,
    foreign key(id_aluno) references aluno(id),
    qtd int
);

INSERT INTO biblioteca.aluno(nome, telefone)
VALUES("user1", "4623223222");

