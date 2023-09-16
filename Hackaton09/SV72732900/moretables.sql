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



