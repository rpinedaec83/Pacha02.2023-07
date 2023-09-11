create table provemateri(
	id tinyint unsigned primary key not null unique, 
    idMaterial tinyint unsigned default null,
    idInsumo tinyint unsigned default null,
    idProveedor int not null,
    precioMaterial float unsigned default null,
    precioInsumo float unsigned default null
);

alter table provemateri add FOREIGN KEY (idMaterial)
references materia(id);
alter table provemateri add FOREIGN KEY (idInsumo)
references insumo(id);
alter table provemateri add FOREIGN KEY (idProveedor)
references proveedor(id);