create table requisitos(
	id tinyint unsigned primary key not null unique, 
    armario tinyint unsigned unique not null,
    idInsumo tinyint unsigned default null,
    idMateria tinyint unsigned default null,
    cantInsumo mediumint unsigned default null,
    cantMateria mediumint unsigned default null
);

alter table requisitos add FOREIGN KEY (armario)
references armarios(id);
alter table requisitos add FOREIGN KEY (idMateria)
references materia(id);
alter table requisitos add FOREIGN KEY (idInsumo)
references insumo(id);