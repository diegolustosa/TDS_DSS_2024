--COMANDOS DLL - ESTRUTURA DO BANCO DE DADOS MERCADO --
--use mercado--

CREATE DATABASE escola;
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
    id_reservas int not null,
    foreign key(id_reservas) references reservas(id),
    qtd int
);
CREATE TABLE escola.reservas (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,          
    id_livros INT NOT NULL,                              
    id_aluno INT NOT NULL,                             
    data_reserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP,    
    status ENUM('reservado', 'retirado', 'livre') DEFAULT 'livre', 
    data_devolucao DATE,                                 
    FOREIGN KEY(id_livros) REFERENCES livros(id),     
    FOREIGN KEY(id_aluno) REFERENCES aluno(id)          
);


INSERT INTO biblioteca.aluno(nome, telefone)
VALUES("user1", "4623223222");

