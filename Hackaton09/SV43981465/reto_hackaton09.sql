-- Primera Parte --

-- ¿Cuántos clientes hay registrados?

SELECT COUNT(*) AS total_clientes FROM Customers;

-- ¿Cuántos pedidos?

SELECT COUNT(*) AS total_pedidos FROM Orders;

-- ¿Qué clientes viven en Londres y su nombre (CustomerName) empieza por A?

SELECT CustomerName FROM Customers
WHERE City = 'London' AND CustomerName LIKE 'A%';

-- ¿Cuántos clientes hay que son de Londres?

SELECT COUNT(*) AS clientes_londres FROM Customers
WHERE City = 'London';

-- ¿Cuántos clientes hay en cada ciudad?

SELECT City, COUNT(*) AS total_clientes FROM Customers
GROUP BY City;

-- ¿Cuántos empleados nacieron después de 1 de Junio del 1965?

SELECT COUNT(*) AS empleados_nacidos_despues_Junio_1965 FROM Employees
WHERE BirthDate > '1965-06-01';

-- Hazme un informe que diga «El empleado N nación el N», siendo N, nombre (FirstName y Last Name) y día de nacimiento (BirthDate)

SELECT 
CONCAT(FirstName, ' ', LastName) AS nombre_empleado, 
DATE_FORMAT(BirthDate, '%e de %M') AS fecha_nacimiento
FROM Employees;

-- Hazme el informe anterior, pero sólo para los empleados con id 8, 7, 3 y 10

SELECT 
CONCAT(FirstName, ' ', LastName) AS nombre_empleado,
DATE_FORMAT(BirthDate, '%e de %M') AS fecha_nacimiento
FROM Employees
WHERE EmployeeID IN (8, 7, 3, 10);

-- Dime los paises que tengan más de 5 clientes, ordenados por el nombre de país

SELECT Country, COUNT(*) AS total_clientes
FROM Customers
GROUP BY Country
HAVING COUNT(*) > 5
ORDER BY Country;


-- Segunda Parte --

-- Dime el nombre del cliente del pedido 10360

SELECT Customers.CustomerName
FROM Customers
JOIN Orders ON Customers.CustomerID = Orders.CustomerID
WHERE Orders.OrderID = 10360;

-- Dime el nombre completo de los clientes con los pedidos 10360, 10253 y 10440

SELECT DISTINCT Customers.CustomerName
FROM Customers
JOIN Orders ON Customers.CustomerID = Orders.CustomerID
WHERE Orders.OrderID IN (10360, 10253, 10440);

-- Dime las ciudades y número de pedidos de clientes en esa ciudad

SELECT 
Customers.City,
COUNT(Orders.OrderID) AS nun_pedidos
FROM Customers
JOIN Orders ON Customers.CustomerID = Orders.CustomerID
GROUP BY Customers.City;

-- ¿Cuales son las ciudades desde las que hay más de 7 pedidos?

SELECT Customers.City,
COUNT(Orders.OrderID) AS num_pedidos
FROM Customers
JOIN Orders ON Customers.CustomerID = Orders.CustomerID
GROUP BY Customers.City
HAVING COUNT(Orders.OrderID) > 7;

-- ¿Cuales son los tres países desde los que tengo más pedidos?

SELECT Customers.Country,
COUNT(Orders.OrderID) AS num_pedidos
FROM Customers
JOIN Orders ON Customers.CustomerID = Orders.CustomerID
GROUP BY Customers.Country
ORDER BY num_pedidos DESC
LIMIT 3;

-- Necesito un informe con el Nombre completo de los Empleados y el número de pedidos que registraron

SELECT 
CONCAT(FirstName, ' ', LastName) AS nombre_empleado,
COUNT(Orders.OrderID) AS num_pedidos
FROM Employees
LEFT JOIN Orders ON Employees.EmployeeID = Orders.EmployeeID
GROUP BY Employees.EmployeeID;

-- En el informe anterior, sólo necesito los empleados cuyo nombre comience por M

SELECT 
CONCAT(FirstName, ' ', LastName) AS nombre_empleado,
COUNT(Orders.OrderID) AS num_pedidos
FROM Employees
LEFT JOIN Orders ON Employees.EmployeeID = Orders.EmployeeID
WHERE FirstName LIKE 'M%'
GROUP BY Employees.EmployeeID;

-- Quiero saber el número de pedido, qué empleado (sólo el nombre) lo registró y el cliente.

SELECT
Orders.OrderID AS nro_pedido,
Employees.FirstName AS nombre_empleado,
Customers.CustomerName AS nombre_cliente
FROM Orders
JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
JOIN Customers ON Orders.CustomerID = Customers.CustomerID;

-- ¿Hay algún cliente que haya hecho más de un pedido registrado por el mismo empleado?

SELECT
Customers.CustomerName AS nombre_cliente,
Employees.FirstName AS nombre_empleado,
COUNT(Orders.OrderID) AS num_pedidos
FROM Customers
JOIN Orders ON Customers.CustomerID = Orders.CustomerID
JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
GROUP BY Customers.CustomerID, Employees.EmployeeID
HAVING COUNT(Orders.OrderID) > 1;

-- Quiero saber los clientes que hayan hecho más de un pedido y que hayan sido registrado por un Empleado cuyo nombre sea Margaret.

SELECT 
Customers.CustomerID,
COUNT(Orders.OrderID) AS num_pedidos
FROM Customers
JOIN Orders ON Customers.CustomerID = Orders.CustomerID
JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
WHERE Employees.FirstName = 'Margaret'
GROUP BY Customers.CustomerID
HAVING COUNT(Orders.OrderID) > 1;

-- Tercera Parte --

-- ¿Cual es el producto con el precio mínimo más bajo? (usando subconsultas)

SELECT 
ProductName
FROM Products
WHERE Price = (SELECT MIN(Price) FROM Products);

-- ¿Cual es el producto cuyo precio sea al menos 10 veces el pedido mínimo (quantity) de los pedidos (OrderDetails)?

SELECT ProductName
FROM Products
WHERE Price >= ALL (
	SELECT MIN(Quantity) * 10
    FROM OrderDetails
    WHERE OrderDetails.ProductID = Products.ProductID
);

-- ¿Cuales son los registros de productos (Products) cuyo precio (price) sea mayor que el máximo de los precios de los productos cuyo id sea 3, 6, 9 y 10?

SELECT *
FROM Products
WHERE Price > ALL (SELECT MAX(Price) FROM Products WHERE ProductID IN (3, 6, 9, 10));

-- ¿Cuales son los registros de productos (Products) cuyo ProductID sea un valor que esté en Shippers.ShipperID?

SELECT *
FROM Products
WHERE ProductID IN (SELECT ShipperID FROM Shippers);

-- ¿Qué clientes (Customers) tenemos registrados, que estén en ciudades de nuestros proveedores (Suppliers)?

SELECT DISTINCT Customers.CustomerName
FROM Customers
WHERE City IN (SELECT DISTINCT City FROM Suppliers)