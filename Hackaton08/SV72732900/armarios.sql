create table armarios(
	id tinyint unsigned primary key not null unique, 
    descripcion varchar(40) not null unique,
    tamaño varchar(5) default null
);

insert into armarios (id, descripcion, tamaño) values (1, "Armario Deluxe for single", "S");
insert into armarios (id, descripcion, tamaño) values (2, "Armario European Desing", "M");
insert into armarios (id, descripcion, tamaño) values (3, "Armario Retro Desing", "M");
insert into armarios (id, descripcion, tamaño) values (4, "Armario king size", "L");