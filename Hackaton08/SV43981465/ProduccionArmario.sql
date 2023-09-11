create database if not exists TiendaArmarios;
use TiendaArmarios;
-- drop database TiendaArmarios;

create table Departamento(
	id int primary key auto_increment not null,
	nombreDepartamento varchar(50) not null
);
create table Provincia(
	id int primary key auto_increment not null,
	nombreProvincia varchar(50) not null
);

create table Distrito(
	id int primary key auto_increment not null,
	nombreDistrito varchar(50) not null
);

create table Ubigeo(
	id int primary key auto_increment not null,
    departamento int not null,
    provincia int not null,
    distrito int not null
);

alter table Ubigeo add FOREIGN KEY (departamento)
references Departamento(id);
alter table Ubigeo add FOREIGN KEY (provincia)
references Provincia(id);
alter table Ubigeo add FOREIGN KEY (distrito)
references Distrito(id);

create table Proveedores(
	id int primary key auto_increment not null,
	nombreProveedor varchar(50) not null,
	direccion varchar(100) not null,
	telefono varchar(45) null,
	correoElectronico varchar(50) null,
	fechaInicioRelacionComercial date not null,
    ubicacionUbigeo int not null,
    materialSuministrado int not null
);

create table Materiales(
	id int primary key auto_increment not null,
	nombreMaterial varchar(50) not null,
	descripcion varchar(100) null,
	unidadMedida varchar(4) null,
	stockDisponible float not null,
	tipoMaterial varchar(15) not null,
    proveedor int not null
);

alter table Materiales add FOREIGN KEY (proveedor)
references Proveedores(id);
alter table Proveedores add FOREIGN KEY (ubicacionUbigeo)
references Ubigeo(id);
alter table Proveedores add FOREIGN KEY (materialSuministrado)
references Materiales(id);

create table CompraInsumos(
	id int primary key auto_increment not null,
	fechaCompra date not null,
	cantidadIComprado float not null,
	precioUnitario float not null,
	totalCompra float not null,
    proveedor int not null,
    material int not null
);

alter table CompraInsumos add FOREIGN KEY (proveedor)
references Proveedores(id);
alter table CompraInsumos add FOREIGN KEY (material)
references Materiales(id);

create table CompraMateriaPrima(
	id int primary key auto_increment not null,
	fechaCompra datetime not null,
	cantidadMPComprado float not null,
	precioUnitario float not null,
	totalCompra float not null,
    proveedor int not null,
    material int not null
);

alter table CompraMateriaPrima add FOREIGN KEY (proveedor)
references Proveedores(id);
alter table CompraMateriaPrima add FOREIGN KEY (material)
references Materiales(id);

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

create table Empleado(
	id int primary key auto_increment not null,
	nombreCompleto varchar(100) not null,
	fechaContratacion date not null,
	salario float not null,
	telefono varchar(50) not null,
	correoElectronico varchar(50) not null,
	direccion varchar(100) not null,
    ubicacionUbigeo int not null,
    tipoPersonal int not null,
    sexo int not null,
    nacionalidad int not null,
    usuario int not null
);

create table Produccion(
	id int primary key auto_increment not null,
	fechaProduccion date not null,
	cantidadArmario int not null,
    empleadoResponsable int not null,
    materiaPrimaUtilizado int not null,
    insumosUtilizado int not null
);

alter table Produccion add FOREIGN KEY (empleadoResponsable)
references Empleado(id);
alter table Produccion add FOREIGN KEY (materiaPrimaUtilizado)
references Materiales(id);
alter table Produccion add FOREIGN KEY (insumosUtilizado)
references Materiales(id);

create table TipoPersonal(
	id int primary key auto_increment not null,
	nombreTipoPersonal varchar(45) not null
);

create table Sexo(
	id int primary key auto_increment not null,
	tipoSexo varchar(45) not null
);

create table Nacionalidad(
	id int primary key auto_increment not null,
	tipoNacionalidad varchar(45) not null
);

alter table Empleado add FOREIGN KEY (ubicacionUbigeo)
references Ubigeo(id);
alter table Empleado add FOREIGN KEY (tipoPersonal)
references TipoPersonal(id);
alter table Empleado add FOREIGN KEY (sexo)
references Sexo(id);
alter table Empleado add FOREIGN KEY (nacionalidad)
references Nacionalidad(id);
alter table Empleado add FOREIGN KEY (usuario)
references Usuario(id);