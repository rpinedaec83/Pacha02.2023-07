USE db_produccion;

CREATE TABLE IF NOT EXISTS sexo (
	id char(1) primary key not null,
    descripcion varchar(50) not null unique,
    activo bit not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null default now(),
    usuarioModificacion int null,
    fechaModificacion date null
);

alter table sexo add FOREIGN KEY (usuarioCreacion)
references Usuario(id);
alter table sexo add FOREIGN KEY (usuarioModificacion)
references Usuario(id);

insert into sexo(id,descripcion,usuarioCreacion)
values('M','MASCULINO',1),
('F','FEMENINO',1);