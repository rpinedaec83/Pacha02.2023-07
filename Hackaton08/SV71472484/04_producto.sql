USE db_produccion;

CREATE TABLE IF NOT EXISTS producto (
	id int primary key not null AUTO_INCREMENT,
    idTipoProducto int not null,
    descripcion varchar(50) not null,
    activo bit not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null default now(),
    usuarioModificacion int null,
    fechaModificacion date null
);
alter table producto add FOREIGN KEY (idTipoProducto)
references tipo_producto(id);
alter table producto add FOREIGN KEY (usuarioCreacion)
references Usuario(id);
alter table producto add FOREIGN KEY (usuarioModificacion)
references Usuario(id);

insert into producto(idTipoProducto,descripcion,usuarioCreacion)
values(1,'MADERA',1),
(1,'PETROLEO',1),
(1,'VERDURAS',1),
(1,'CARNE',1),
(2,'BARNIZ',1),
(2,'PINTURA',1),
(2,'FERTILIZANTE',1),
(2,'ABONOS',1),
(2,'BOLSA PLASTICA',1),
(2,'CLAVOS',1);
