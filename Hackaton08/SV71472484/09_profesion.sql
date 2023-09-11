USE db_produccion;

CREATE TABLE IF NOT EXISTS profesion(
	id int primary key auto_increment not null,
    descripcion varchar(50) not null unique,
    activo bit not null default 1,
    usuarioCreacion int null,
    fechaCreacion datetime not null default now(),
    usuarioModificacion int null,
    fechaModificacion date null
);

insert into profesion(descripcion,usuarioCreacion)
values('ING. SISTEMAS',1),
('ING. FORESTAL',1),
('ING. INDUSTRIAL',1),
('ADMINISTRADOR DE EMPRESAS',1),
('TEC. MAQUINARIAS PESADAS',1),
('TEC. SOLDADOR',1),
('SECRETARIA',1);