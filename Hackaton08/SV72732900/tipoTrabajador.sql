create table tipoTrabajador(
	id int primary key auto_increment not null unique,
    tipo varchar(20) not null unique
);

insert into tipoTrabajador (tipo) values ("administrador");
insert into tipoTrabajador (tipo) values ("supervisor");
insert into tipoTrabajador (tipo) values ("operador");
