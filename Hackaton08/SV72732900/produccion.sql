create table produccion(
	id int unsigned primary key not null unique auto_increment,
    idRequisito tinyint unsigned not null,
    idTrabajador int not null,
    cantidad mediumint default null,
    fechaCreacion datetime not null default now(),
    usuarioCreacion int not null
);

alter table produccion add FOREIGN KEY (usuarioCreacion)
references usuario(id);
alter table produccion add FOREIGN KEY (idRequisito)
references requisitos(id);
alter table produccion add FOREIGN KEY (idTrabajador)
references trabajador(id);