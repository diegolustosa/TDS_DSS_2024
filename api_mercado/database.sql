--COMANDOS DLL - ESTRUTURA DO BANCO DE DADOS MERCADO --
--use mercado--

CREATE DATABASE mercado;
CREATE TABLE mercado.produto (
    id int not null auto_increment primary key,
    nome varchar(255) not null,
    preco decimal(9,2),
    status boolean default true
);
CREATE TABLE mercado.cliente (
    id int not null auto_increment primary key,
    nome varchar(255) not null,
    telefone varchar(25),
    status boolean default true
);
CREATE TABLE mercado.pedido(
    id int not null auto_increment primary key,
    id_cliente int not null,
    foreign key(id_cliente) references cliente(id),
    id_produto int not null,
    foreign key(id_produto) references produto(id),
    qtd int,
    total decimal(9,2)
);

INSERT INTO mercado.cliente(nome, telefone)
VALUES("Diego Alex", "4623223222");
