create table Usuario(
	id int primary key auto_increment not null,
    username varchar(100) not null unique,
    password varchar(1000) not null,
    email varchar(500) not null unique,
    activo bit not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null default now(),
    usuarioModificacion int null,
    fechaModificacion date null
);
alter table Usuario add FOREIGN KEY (usuarioCreacion)
references Usuario(id);
alter table Usuario add FOREIGN KEY (usuarioModificacion)
references Usuario(id);