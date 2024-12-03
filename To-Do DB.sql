CREATE DATABASE SenaiTarefas;
CREATE TABLE Usuario(
id_usuario integer primary key not null,
nome_usuario varchar(99) not null,
email_usuario varchar(99) not null
);

create table Tarefa(
id_tarefa integer primary key not null,
fk_usuario integer not null,
descricao_tarefa varchar(255),
nome_setor varchar(255) not null,
prioridade_tarefa varchar(45) not null,
dt_cadastro_tarefa date not null,
status_tarefa varchar(45) not null,
foreign key(fk_usuario)references Usuario(id_usuario)
);

