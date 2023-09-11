create table compras(
	id tinyint unsigned primary key not null unique, 
    iditem tinyint unsigned not null,
    cantidad mediumint not null,
    usuarioPedido int not null, 
    fecha datetime default now()
);

alter table compras add FOREIGN KEY (iditem)
references provemateri(id);

alter table compras add FOREIGN KEY (usuarioPedido)
references usuario(id);