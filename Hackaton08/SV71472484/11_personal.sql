USE db_produccion;

CREATE TABLE IF NOT EXISTS personal(
	id int primary key auto_increment not null,
    numeroDNI char(8) not null unique,
    nombre varchar(100) not null,
    apellidoPaterno varchar(100) not null,
    apellidoMaterno varchar(100) not null,
    fechaNacimiento date not null,
    sexo char not null,
    email varchar(100) not null unique,
    profesion_id int not null,
    puesto_id int not null,
    telefono varchar(10) not null,
    ubigeo varchar(6) not null,
    direccion varchar(100) not null,
    activo bit not null default 1,
    usuarioCreacion int null,
    fechaCreacion datetime not null default now(),
    usuarioModificacion int null,
    fechaModificacion date null
);

alter table personal add FOREIGN KEY (usuarioCreacion)
references usuario(id);
alter table personal add FOREIGN KEY (profesion_id)
references profesion(id);
alter table personal add FOREIGN KEY (puesto_id)
references puesto(id);
alter table personal add FOREIGN KEY (ubigeo)
references ubigeo_distrito(id);
alter table personal add FOREIGN KEY (sexo)
references sexo(id);

insert into personal(numeroDNI,nombre,apellidoPaterno,apellidoMaterno,fechaNacimiento,sexo,email,profesion_id,puesto_id,telefono,direccion,ubigeo,usuarioCreacion)
values
('74475485','JOSE', 'GARCIA','RUIZ','1990-09-05','M','jgarcia@gmail.com',4,4,'965863256','CALLE UNO 365','160101',1),
('71476474','FRANCISCA', 'PEZO','ALVAN','1987-02-10','F','fpezo@gmail.com',5,5,'985863241','CALLE DOS 11','160101',1),
('72471472','GONZALO LUIS', 'DAVILA','TELLO','1992-02-10','M','gdavila@gmail.com',6,5,'932568745','CALLE PRINCIPAL 136','160108',1);