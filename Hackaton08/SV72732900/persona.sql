/*crear primero la tabla sexo->departamento->provincia->distritos*/

create table persona(
	dni varchar(8) primary key not null unique, 
    nombre varchar(100) not null,
    apellido varchar (100) not null,
    sexo bit not null,
    ubigeo mediumint unsigned not null,
    direccion varchar (100),
    nacimiento date not null,
    foreign key (ubigeo) references distrito(id) 
    on update cascade 
    on delete cascade,
	foreign key (sexo) references sexo(id) 
    on update cascade 
    on delete cascade
);



