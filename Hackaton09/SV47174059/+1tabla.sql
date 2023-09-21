//Dime el nombre del cliente del pedido 10360.
SELECT C.CustomerName
FROM Customers C
JOIN Orders O ON C.CustomerID = O.CustomerID
WHERE O.OrderID = 10360;


//Dime el nombre completo de los clientes con los pedidos 10360, 10253 y 10440.
//sql
SELECT DISTINCT C.CustomerName
FROM Customers C
JOIN Orders O ON C.CustomerID = O.CustomerID
WHERE O.OrderID IN (10360, 10253, 10440);


//Dime las ciudades y el número de pedidos de clientes en esa ciudad.
SELECT C.City, COUNT(O.OrderID) AS NumeroPedidos
FROM Customers C
LEFT JOIN Orders O ON C.CustomerID = O.CustomerID
GROUP BY C.City;


//¿Cuáles son los tres países desde los que tengo más pedidos?
SELECT C.Country, COUNT(O.OrderID) AS NumeroPedidos
FROM Customers C
LEFT JOIN Orders O ON C.CustomerID = O.CustomerID
GROUP BY C.Country
ORDER BY NumeroPedidos DESC
LIMIT 3;


//Necesito un informe con el nombre completo de los empleados y el número de pedidos que registraron.
SELECT CONCAT(E.FirstName, ' ', E.LastName) AS NombreEmpleado, COUNT(O.OrderID) AS NumeroPedidos
FROM Employees E
LEFT JOIN Orders O ON E.EmployeeID = O.EmployeeID
GROUP BY E.EmployeeID;


//En el informe anterior, solo necesito los empleados cuyo nombre comience por M.
SELECT CONCAT(E.FirstName, ' ', E.LastName) AS NombreEmpleado, COUNT(O.OrderID) AS NumeroPedidos
FROM Employees E
LEFT JOIN Orders O ON E.EmployeeID = O.EmployeeID
WHERE E.FirstName LIKE 'M%'
GROUP BY E.EmployeeID;


//Quiero saber el número de pedido, qué empleado (solo el nombre) lo registró y el cliente.
SELECT O.OrderID, CONCAT(E.FirstName, ' ', E.LastName) AS NombreEmpleado, C.CustomerName
FROM Orders O
JOIN Employees E ON O.EmployeeID = E.EmployeeID
JOIN Customers C ON O.CustomerID = C.CustomerID;


//¿Hay algún cliente que haya hecho más de un pedido registrado por el mismo empleado?
SELECT C.CustomerName, E.EmployeeID, COUNT(O.OrderID) AS NumeroPedidos
FROM Customers C
JOIN Orders O ON C.CustomerID = O.CustomerID
JOIN Employees E ON O.EmployeeID = E.EmployeeID
GROUP BY C.CustomerID, E.EmployeeID
HAVING COUNT(O.OrderID) > 1;


//Quiero saber los clientes que hayan hecho más de un pedido y que hayan sido registrados por un empleado cuyo nombre sea Margaret.
SELECT C.CustomerName, E.FirstName AS NombreEmpleado, COUNT(O.OrderID) AS NumeroPedidos
FROM Customers C
JOIN Orders O ON C.CustomerID = O.CustomerID
JOIN Employees E ON O.EmployeeID = E.EmployeeID
WHERE E.FirstName = 'Margaret'
GROUP BY C.CustomerID, E.EmployeeID
HAVING COUNT(O.OrderID) > 1;


//
