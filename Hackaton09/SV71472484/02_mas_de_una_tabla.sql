-- Dime el nombre del cliente del pedido 10360
SELECT c.CustomerName
FROM customers c
INNER JOIN orders o ON o.CustomerID = c.CustomerID
WHERE o.OrderID = 10360

-- Dime el nombre completo de los clientes con los pedidos 10360, 10253 y 10440
SELECT c.CustomerName
FROM customers c
INNER JOIN orders o ON o.CustomerID = c.CustomerID
WHERE o.OrderID IN (10360,10253,10440)

-- Dime las ciudades y número de pedidos de clientes en esa ciudad
SELECT c.City, COUNT(o.OrderID) AS cantidad
FROM customers c
INNER JOIN orders o ON o.CustomerID = c.CustomerID
GROUP BY c.City
ORDER BY c.City

-- ¿Cuales son las ciudades desde las que hay más de 7 pedidos?
SELECT c.City, COUNT(o.OrderID) AS cantidad
FROM customers c
INNER JOIN orders o ON o.CustomerID = c.CustomerID
GROUP BY c.City
HAVING COUNT(o.OrderID) > 7
ORDER BY c.City

-- ¿Cuales son los tres países desde los que tengo más pedidos?
SELECT c.Country, COUNT(o.OrderID) AS cantidad
FROM customers c
INNER JOIN orders o ON o.CustomerID = c.CustomerID
GROUP BY c.Country
ORDER BY COUNT(o.OrderID) desc
LIMIT 3

-- Necesito un informe con el Nombre completo de los Empleados y el número de pedidos que registraron
SELECT CONCAT_WS(' ',e.FirstName,e.LastName) AS empleado,COUNT(o.OrderID) AS ordenes
FROM employees e
INNER JOIN orders o ON o.EmployeeID = e.EmployeeID
GROUP BY e.FirstName,e.LastName

-- En el informe anterior, sólo necesito los empleados cuyo nombre comience por M
SELECT CONCAT_WS(' ',e.FirstName,e.LastName) AS empleado,COUNT(o.OrderID) AS ordenes
FROM employees e
INNER JOIN orders o ON o.EmployeeID = e.EmployeeID
WHERE e.FirstName LIKE 'M%'
GROUP BY e.FirstName,e.LastName

-- Quiero saber el número de pedido, qué empleado (sólo el nombre) lo registró y el cliente.
SELECT o.OrderID, CONCAT_WS(' ',e.FirstName,e.LastName) AS empleado, c.CustomerName
FROM orders o
INNER JOIN employees e ON e.EmployeeID = o.EmployeeID
INNER JOIN customers c ON c.CustomerID = o.CustomerID

-- ¿Hay algún cliente que haya hecho más de un pedido registrado por el mismo empleado?
SELECT c.CustomerName, CONCAT_WS(' ',e.FirstName,e.LastName) AS empleado, COUNT(o.EmployeeID) AS ordenes
FROM orders o
INNER JOIN employees e ON e.EmployeeID = o.EmployeeID
INNER JOIN customers c ON c.CustomerID = o.CustomerID
GROUP BY c.CustomerName,e.FirstName,e.LastName
HAVING COUNT(o.EmployeeID) > 1

-- Quiero saber los clientes que hayan hecho más de un pedido y que hayan sido registrado por un Empleado cuyo nombre sea Margaret.
SELECT c.CustomerName, CONCAT_WS(' ',e.FirstName,e.LastName) AS empleado, COUNT(o.EmployeeID) AS ordenes
FROM orders o
INNER JOIN employees e ON e.EmployeeID = o.EmployeeID
INNER JOIN customers c ON c.CustomerID = o.CustomerID
GROUP BY c.CustomerName,e.FirstName,e.LastName
HAVING COUNT(o.EmployeeID) > 1 
AND e.FirstName = 'Margaret'