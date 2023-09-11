USE db_produccion;

CREATE TABLE IF NOT EXISTS puesto(
	id int primary key auto_increment not null,
    descripcion varchar(50) not null unique,
    activo bit not null default 1,
    usuarioCreacion int null,
    fechaCreacion datetime not null default now(),
    usuarioModificacion int null,
    fechaModificacion date null
);

insert into puesto(descripcion,usuarioCreacion)
values('JEFE DE TI',1),
('ASISTENTE DE TI',1),
('JEFE DE PROCESOS',1),
('ADMINISTRADOR',1),
('OPERARIO',1),
('OBRERO',1),
('SECRETARIA',1);