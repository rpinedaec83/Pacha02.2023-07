USE db_produccion;

CREATE TABLE IF NOT EXISTS tipo_producto (
	id int primary key not null AUTO_INCREMENT,
    descripcion varchar(50) not null,
    activo bit not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null default now(),
    usuarioModificacion int null,
    fechaModificacion date null
);

alter table tipo_producto add FOREIGN KEY (usuarioCreacion)
references Usuario(id);
alter table tipo_producto add FOREIGN KEY (usuarioModificacion)
references Usuario(id);

insert into tipo_producto(descripcion,usuarioCreacion)
values('MATERIA PRIMA',1),
('INSUMOS',1);
