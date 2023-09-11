create table proveedor(
	id int primary key auto_increment not null,
    empresa varchar(40) not null unique,
    ruc varchar(11) not null,
    idUbigeo mediumint unsigned not null,
    direccion varchar(40),
    telefono varchar(20)
);


alter table proveedor add FOREIGN KEY (idUbigeo)
references distrito(id);
