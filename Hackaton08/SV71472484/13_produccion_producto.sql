USE db_produccion;

CREATE TABLE IF NOT EXISTS produccion_producto(
id int primary key auto_increment not null,
produccion_id int not null,
producto_id int not null,
usuarioCreacion int not null,
fechaCreacion datetime not null default now(),
usuarioModificacion int null,
fechaModificacion date null
);

alter table produccion_producto add FOREIGN KEY (usuarioCreacion)
references usuario(id);
alter table produccion_producto add FOREIGN KEY (produccion_id)
references produccion(id);
alter table produccion_producto add FOREIGN KEY (producto_id)
references producto(id);

insert into produccion_producto(produccion_id,producto_id,usuarioCreacion)
values
(1,1,1),
(1,5,1),
(1,6,1),
(2,4,1),
(2,9,1);