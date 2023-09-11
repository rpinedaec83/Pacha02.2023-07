create table trabajador(
	id int primary key auto_increment not null,
    dni varchar(8) not null unique,
    tipo int not null unique
);

alter table trabajador add FOREIGN KEY (dni)
references persona(dni);

alter table trabajador add FOREIGN KEY (tipo)
references tipoTrabajador(id);