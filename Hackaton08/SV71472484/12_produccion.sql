USE db_produccion;

CREATE TABLE IF NOT EXISTS produccion(
id int primary key auto_increment not null,
descripcion varchar(50) not null unique,
personal_id int not null,
fechaInicio date not null,
fechaFin date null,
activo bit not null default 1,
usuarioCreacion int not null,
fechaCreacion datetime not null default now(),
usuarioModificacion int null,
fechaModificacion date null
);

alter table produccion add FOREIGN KEY (usuarioCreacion)
references usuario(id);
alter table produccion add FOREIGN KEY (personal_id)
references personal(id);

insert into produccion(descripcion,personal_id,fechaInicio,usuarioCreacion)
values
('REALIZAR SILLAS',1,'2023-09-10',1),
('EMPACAR CARNES',2,'2023-09-20',1);