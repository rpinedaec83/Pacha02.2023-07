/*crear primero la tabla departamento*/

create table provincia(
	id mediumint unsigned primary key unique,
    idProvincia tinyint unsigned not null,
    idDepartamento tinyint unsigned not null,
    provincia varchar(40) not null default "SIN NOMBRE",
    foreign key (idDepartamento) references departamento(id) 
    on update cascade 
    on delete cascade
);

insert into provincia (id, idProvincia, idDepartamento, provincia) values (1, 1, 1, "CHACHAPOYAS");
insert into provincia (id, idProvincia, idDepartamento, provincia) values (2, 2, 1, "BAGUA");
insert into provincia (id, idProvincia, idDepartamento, provincia) values (3, 1, 2, "HUARAZ");
insert into provincia (id, idProvincia, idDepartamento, provincia) values (4, 2, 2, "AIJA");
insert into provincia (id, idProvincia, idDepartamento, provincia) values (5, 1, 3, "AREQUIPA");
insert into provincia (id, idProvincia, idDepartamento, provincia) values (6, 3, 3, "CAMANA");

