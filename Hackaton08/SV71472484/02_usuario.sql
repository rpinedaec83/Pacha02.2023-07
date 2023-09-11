USE db_produccion;

CREATE TABLE IF NOT EXISTS usuario(
	id int primary key auto_increment not null,
    username varchar(50) not null unique,
    passwd varchar(1000) not null,
    email varchar(100) not null unique,
    activo bit not null default 1,
    usuarioCreacion int null,
    fechaCreacion datetime not null default now(),
    usuarioModificacion int null,
    fechaModificacion date null
);

insert into usuario(username, passwd,email)
values('admin','abcd12345', 'admin@admin.com');