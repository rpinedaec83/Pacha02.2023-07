-- create database Semana09Sesion01;
-- use Semana09Sesion01;
-- 
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

insert into Usuario(username, password,email,usuarioCreacion)
values('rpineda','1234567890','rpineda@x-codec.net',1),
('klam','qwerty123456', 'klam@x-codec.net', 1);

alter table Usuario add FOREIGN KEY (usuarioCreacion)
references Usuario(id);
alter table Usuario add FOREIGN KEY (usuarioModificacion)
references Usuario(id);

create table TipoDocumento(
	id int primary key auto_increment not null,
    descripcion varchar(200) not null,
    activo bit not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null default now(),
    usuarioModificacion int null,
    fechaModificacion date null
);
alter table TipoDocumento add FOREIGN KEY (usuarioCreacion)
references Usuario(id);
alter table TipoDocumento add FOREIGN KEY (usuarioModificacion)
references Usuario(id);

insert into TipoDocumento(descripcion,usuarioCreacion)
values('RUC',1),
('DNI',1),
('CE',1),
('Cedula Militar',1);


create table Ciudad(
	id int primary key auto_increment not null,
    descripcion varchar(200) not null,
    activo bit not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null default now(),
    usuarioModificacion int null,
    fechaModificacion date null
);
alter table Ciudad add FOREIGN KEY (usuarioCreacion)
references Usuario(id);
alter table Ciudad add FOREIGN KEY (usuarioModificacion)
references Usuario(id);
insert into Ciudad(descripcion,usuarioCreacion)
values('Lima',1),
('Piura',1),
('Quito',1),
('Bogota',1),
('Miami',1);


create table Pais(
	id int primary key auto_increment not null,
    descripcion varchar(200) not null,
    activo bit not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null default now(),
    usuarioModificacion int null,
    fechaModificacion date null
);
alter table Pais add FOREIGN KEY (usuarioCreacion)
references Usuario(id);
alter table Pais add FOREIGN KEY (usuarioModificacion)
references Usuario(id);
insert into Pais(descripcion,usuarioCreacion)
values('Peru',1),
('Ecuador',1),
('Colombia',1),
('EEUU',1);

create table Ubigeo(
	ubigeo varchar(6) primary key not null,
    departamento varchar(50) not null,
    provincia varchar(50) not null,
    distrito varchar(50) not null,
    activo bit not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null default now(),
    usuarioModificacion int null,
    fechaModificacion date null
);
alter table Ubigeo add FOREIGN KEY (usuarioCreacion)
references Usuario(id);
alter table Ubigeo add FOREIGN KEY (usuarioModificacion)
references Usuario(id);
insert into Ubigeo(ubigeo,departamento,provincia,distrito,usuarioCreacion)
values('140101','Lima','Lima','Lince',1),
('190601','Piura','Sullana','Sullana',1),
('230302','Tumbes','Zarumilla','Matapalo',1),
('130115','Lambayeque','Chiclayo','La Victoria',1);


create table Proveedores(
	id int primary key auto_increment not null,
    idTipoDocumento int not null,
    numeroDocumento varchar(20) not null unique,
    razonSocial varchar(100) not null,
    contacto varchar(200) null,
    ubigeo varchar(6) not null,
    direccion varchar(300),
    idCiudad int not null,
    idPais int not null,
    email varchar(500) not null unique,
    activo bit not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null default now(),
    usuarioModificacion int null,
    fechaModificacion date null
);
alter table Proveedores add FOREIGN KEY (usuarioCreacion)
references Usuario(id);
alter table Proveedores add FOREIGN KEY (usuarioModificacion)
references Usuario(id);
alter table Proveedores add FOREIGN KEY (idTipoDocumento)
references TipoDocumento(id);
alter table Proveedores add FOREIGN KEY (ubigeo)
references Ubigeo(ubigeo);
alter table Proveedores add FOREIGN KEY (idCiudad)
references Ciudad(id);
alter table Proveedores add FOREIGN KEY (idPais)
references Pais(id);
insert into Proveedores(idTipoDocumento,numeroDocumento,razonSocial,contacto,ubigeo,direccion,idCiudad, idPais, email, usuarioCreacion)
values(1,'1019181719123','Ferreteria Juanito','Juan Perez','190601', 'Calle Central 1234', 2,1,'juan.perez@gmail.com',1),
(1,'1019181719113','Ferreteria Pedrito','Pedro Perez','140101', 'Arequipa 1234', 1,1,'pedro.perez@gmail.com',1);



select * from Proveedores;
select * from Ciudad;

select * from Proveedores P inner join Ciudad C on P.IdCiudad = C.id;
select P.razonSocial as 'Razon Social',
P.contacto as 'Nombre del cliente',
P.direccion as 'Direccion',
C.descripcion as 'Ciudad'

 from Proveedores P inner join Ciudad C on P.IdCiudad = C.id;
 
Select C.* from Proveedores P right join Ciudad C
on P.idCiudad = C.id
where P.idCiudad is null;

Select 
P.id,
TP.descripcion as 'Tipo Documento',
P.numeroDocumento,
U.ubigeo,
U.departamento,
U.provincia,
U.distrito,
P.direccion,
P.email,
C.descripcion as 'Ciudad',
Ps.descripcion as 'Pais',
Us.username as 'Usuario'
from Proveedores P
inner join TipoDocumento TP on P.idTipodocumento = TP.id
inner join Ubigeo U on P.ubigeo = U.Ubigeo
inner join Ciudad C on P.IdCiudad = C.id
inner join Pais Ps on P.IdPais = Ps.id
inner join Usuario Us on P.usuarioCreacion = Us.id