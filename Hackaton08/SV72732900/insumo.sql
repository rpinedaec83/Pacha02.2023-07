create table insumo(
	id tinyint unsigned primary key not null unique, 
    descripcion varchar(40) default null,
    tipo varchar(40) default null
);