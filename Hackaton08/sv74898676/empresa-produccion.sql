/*CREANDO BASE DE DATOS*/
create database empresa_produccion;
/*INDICANDO LA BASE DE DATOS A USAR*/
use empresa_produccion; 

/*CREANDO TABLAS SEGÚN PROPUESTA*/
create table materiaPrima (
    id int primary key auto_increment,
    nombre varchar(255) not null,
    cantidad int not null,
    precioUnitario decimal(10, 2) not null
);

create table insumos (
    id int primary key auto_increment,
    nombre varchar(255) not null,
    cantidad int not null,
    precioUnitario decimal(10, 2) not null
);

create table personal (
    id int primary key auto_increment,
    nombre varchar(255) not null,
    cargo varchar(100) not null,
    salario decimal(10, 2) not null
);

create table produccion (
    id int primary key auto_increment,
    producto varchar(255) not null,
    cantidad int not null,
    fechaProduccion date not null,
    responsableId int,
    
    foreign key (responsableId) references personal(id)
);

/*INSERTANTO PAR DE ELEMENTOS A CADA TABLA*/
insert into materiaPrima (id, nombre, cantidad, precioUnitario)
values  (1, 'Madera', 1000, 5.00), (2, 'Herrajes', 500, 3.50);

insert into insumos (id, nombre, cantidad, precioUnitario)
values (1, 'Pegamento', 200, 2.00), (2, 'Pintura', 100, 4.00);

insert into personal (id, nombre, cargo, salario)
values (1, 'Juan Pérez', 'Carpintero', 2000.00), (2, 'Ana Rodríguez', 'Pintor', 1800.00);

insert into produccion (id, producto, cantidad, fechaProduccion, responsableId)
values (1, 'Armario de Roble', 10, '2023-09-10', 1), (2, 'Armario Blanco', 8, '2023-09-11', 2);