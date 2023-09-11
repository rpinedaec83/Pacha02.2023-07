/*crear primero la tabla departamento -> provincia*/
create table distrito(
	id mediumint unsigned primary key unique,
    idDistrito tinyint unsigned not null,
    idProvincia mediumint unsigned not null,
    distrito varchar(40) not null default "SIN NOMBRE",
    foreign key (idProvincia) references provincia(id) 
    on update cascade 
    on delete cascade
);

insert into distrito (id, idDistrito, idProvincia, distrito) values (1, 1, 1, "CHACHAPOYAS");
insert into distrito (id, idDistrito, idProvincia, distrito) values (2, 1, 2, "LA PECA");
insert into distrito (id, idDistrito, idProvincia, distrito) values (3, 2, 3, "INDEPENDENCIA");
insert into distrito (id, idDistrito, idProvincia, distrito) values (4, 3, 3, "COCHABAMBA");