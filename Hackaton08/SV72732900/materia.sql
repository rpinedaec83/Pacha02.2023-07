create table materia(
	id tinyint unsigned primary key not null unique, 
    madera varchar(40) unique not null,
    tipo bit default null, /*si es de tipo blando o duro*/
    nature bit default null /*narutal o sintetico*/
);

insert into materia (id, madera, tipo, natural) values (1, "ROBLE", 1, 1);
insert into materia (id, madera, tipo, natural) values (2, "NOGAL", 1, 1);
insert into materia (id, madera, tipo, natural) values (3, "PINO", 0, 1);