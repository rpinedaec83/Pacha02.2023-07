create table sexo(
	id bit primary key not null unique,
    descripcion varchar(10) not null unique
);

insert into sexo (id, descripcion) values (0, "masculino");
insert into sexo (id, descripcion) values (1, "femenino");
  