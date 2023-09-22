//¿Cuántos clientes hay registrados?
SELECT COUNT(*) AS TotalClientes
FROM Customers;

//¿Cuántos pedidos?
SELECT COUNT(*) AS TotalPedidos
FROM Orders;


//¿Qué clientes viven en Londres y su nombre (CustomerName) empieza por A?
SELECT CustomerName
FROM Customers
WHERE City = 'London' AND CustomerName LIKE 'A%';


//¿Cuántos clientes hay que son de Londres?
SELECT COUNT(*) AS ClientesDeLondres
FROM Customers
WHERE City = 'London';


//¿Cuántos clientes hay en cada ciudad?
SELECT City, COUNT(*) AS TotalClientesPorCiudad
FROM Customers
GROUP BY City;


//¿Cuántos empleados nacieron después del 1 de Junio de 1965?
SELECT COUNT(*) AS EmpleadosNacidosDespuesDe1965
FROM Employees
WHERE BirthDate > '1965-06-01';


//Hazme un informe que diga «El empleado N nació el N», siendo N, nombre (FirstName y LastName) y día de nacimiento (BirthDate).
SELECT CONCAT(FirstName, ' ', LastName) AS NombreEmpleado, BirthDate
FROM Employees;


//Dime los países que tengan más de 5 clientes, ordenados por el nombre del país.
SELECT Country, COUNT(*) AS TotalClientes
FROM Customers
GROUP BY Country
HAVING COUNT(*) > 5
ORDER BY Country;



