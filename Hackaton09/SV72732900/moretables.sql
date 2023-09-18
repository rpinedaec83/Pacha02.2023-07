-- Nombre del cliente del pedido 10360
SELECT customerName, OrderID 
from Customers C 
inner join Orders O 
on C.CustomerID = O.CustomerID 
where OrderID = 10360;

-- Nombre completo de los clientes con los pedidos 10360, 10253, 10440
SELECT customerName, OrderID 
from Customers C 
inner join Orders O 
on C.CustomerID = O.CustomerID 
where OrderID in (10360, 10253, 10440);

-- Ciudades y numero de pedidos de clientes de esa ciudad
SELECT City, count(OrderID) as pedidos
from Customers C 
inner join Orders O 
on C.CustomerID = O.CustomerID 
group by city;

-- Ciudades desde las que hay mas de 7 pedidos
SELECT City, count(OrderID) as pedidos
from Customers C 
inner join Orders O 
on C.CustomerID = O.CustomerID 
group by city
having pedidos > 7;

-- Los tres paises desde los que tengo mas pedidos
SELECT Country, count(OrderID) as pedidos
from Customers C 
inner join Orders O 
on C.CustomerID = O.CustomerID 
group by Country
order by pedidos desc limit 3;

-- Informe de empleados con el numero de pedidos que registraron
SELECT CONCAT_WS(" ", FirstName, LastName) as NombreCompleto, count(OrderID) as pedidos 
from Employees E
inner join Orders O
on E.EmployeeID = O.EmployeeID
group by FirstName;

-- Informe de empleados con el numero de pedidos con nommbre que comience con M
SELECT CONCAT_WS(" ", FirstName, LastName) as NombreCompleto, count(OrderID) as pedidos 
from Employees E
inner join Orders O
on E.EmployeeID = O.EmployeeID
group by FirstName
having FirstName like 'm%';

-- Numero de pedido, empleado y cliente
SELECT OrderID as NumeroPedido, e.FirstName as Empleado, c.CustomerName 
from Orders o
inner join Employees e
on o.EmployeeID = e.EmployeeID
inner join Customers c
on o.CustomerID = c.CustomerID;

-- Algun cliente que haya hecho mas de un pedido por el mismo empleado
SELECT count(OrderID) as NumeroPedido, e.FirstName as Empleado, c.CustomerName as Cliente 
from Orders o
inner join Employees e
on o.EmployeeID = e.EmployeeID
inner join Customers c
on o.CustomerID = c.CustomerID
group by Empleado, Cliente
having NumeroPedido > 1;

-- Cliente que con mas de un pedido y atendido por Margaret
SELECT count(OrderID) as NumeroPedido, c.CustomerName as 'Cliente Atendido por Margaret'
from Orders o
inner join Employees e
on o.EmployeeID = e.EmployeeID
inner join Customers c
on o.CustomerID = c.CustomerID
group by e.FirstName, c.CustomerName
having e.FirstName like '%margaret%' and NumeroPedido>1;


