-- create database MiSegundaBase;
-- drop database MiSegundaBase;
drop database miprimerabase;
create database if not exists miprimerabase;
use miprimerabase;

create table Modelo(
	id int not null,
    descripcion varchar(50) not null,
    url varchar(500) null
);

drop table Modelo;

alter table Modelo add column custom bit;

alter table Modelo add primary key(id);

create table Modelo(
	id int primary key not null AUTO_INCREMENT,
    descripcion varchar(50) not null unique,
    url varchar(500) null,
    custom bit not null,
    activo bit not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null default now(),
    usuarioModificacion int null,
    fechaModificacion date null
);

-- insert into Modelo(descripcion, url, custom)
-- values('ACGUY', 'https://gundam.fandom.com/es/wiki/MSM-04_Acguy', 1);

insert into Modelo(descripcion, url, custom, activo, usuarioCreacion, fechaCreacion)
values ('ACGUY', 'https://gundam.fandom.com/es/wiki/MSM-04_Acguy', 1, 1, 1, NOW());

insert into Modelo(descripcion, url, custom, usuarioCreacion)
values ('ACGUY', 'https://gundam.fandom.com/es/wiki/MSM-04_Acguy', 1, 1);

insert into Modelo(descripcion, url, custom, usuarioCreacion)
values ('Daribalde', 'https://gundam.fandom.com/wiki/MD-0064_Daribalde', 1, 1),
       ('Vidar', 'https://gundam.fandom.com/wiki/ASW-G-XX_Gundam_Vidar', 1, 1),
       ('Phenex', 'https://gundam.fandom.com/wiki/RX-0_Unicorn_Gundam_03_Phenex', 1, 1);

select * from Modelo where activo = 1;

delete from Modelo where id = 1;

update Modelo set descripcion = 'Acguy'
where id = 1;

update Modelo set activo = 1
where id = 1;

update Modelo set escala = 'MG' where id = 4;

alter table Modelo add column escala varchar(10) not null;

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

insert into Usuario(username, password, email, usuarioCreacion)
values('klam', '123456', 'klam@gmail.com', 1);

alter table Modelo add FOREIGN KEY (usuarioCreacion)
references Usuario(id);
alter table Modelo add FOREIGN KEY (usuarioModificacion)
references Usuario(id);

alter table Usuario add FOREIGN KEY (usuarioCreacion)
references Usuario(id);
alter table Usuario add FOREIGN KEY (usuarioModificacion)
references Usuario(id);

insert into Modelo(descripcion, url, custom, escala, usuarioCreacion)
values ('Zeong', 'https://gundam.fandom.com/wiki/MSM-02_Zeong', 1, 'RG', 2);

select * from Modelo where activo = 1;

select
M.descripcion,
M.url,
U.username
from Modelo M inner join Usuario U on M.usuarioCreacion = U.id;

