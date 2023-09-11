create table departamento(
	id tinyint unsigned primary key not null unique, 
    departamento varchar(15) not null default "SIN NOMBRE"
);

insert into departamento (id, departamento) values (1, "AMAZONAS");
insert into departamento (id, departamento) values (2, "ANCASH");
insert into departamento (id, departamento) values (3, "APURIMAC");
insert into departamento (id, departamento) values (4, "AREQUIPA");
insert into departamento (id, departamento) values (5, "AYACUCHO");
insert into departamento (id, departamento) values (6, "CAJAMARCA");
insert into departamento (id, departamento) values (7, "CUSCO");
insert into departamento (id, departamento) values (8, "HUANCAVELICA");
insert into departamento (id, departamento) values (9, "HUANUCO");
insert into departamento (id, departamento) values (10, "ICA");

