-- Cuantos clientes registrados
SELECT count(CustomerID) as totalClientes FROM Customers;

-- Cuantos pedidos
SELECT count(OrderID) as totalPedidos FROM Orders;

-- Clientes que viven en Londres y su nombre empieza con A
SELECT * FROM Customers where city = "London" and CustomerName like "a%";

-- Cuantos clientes son de Londres
SELECT count(CustomerID) as clientesLondres FROM Customers where city = "London";

-- Cuantos clientes hay en cada ciudad
SELECT count(CustomerID) as Total, City as Ciudad from Customers group by City;

-- Cuantos clientes nacieron despues del 1 junio del 1965
SELECT count(EmployeeID) as Total from Employees where BirthDate > "1965-06-01";

-- Informe de empleado N, nacio N
SELECT CONCAT_WS(" ","El empleado", FirstName, LastName, "nacio el", BirthDate) 
from Employees;

-- Informe de empleado N, nacio N con id 8, 7, 3, 10
SELECT CONCAT_WS(" ","El empleado", FirstName, LastName, "nacio el", BirthDate) 
from Employees where id in (8, 7, 3, 10);

-- Paises que tengan 5 clientes ordenados por el nombre del pais
SELECT Country Pais, count(Country) total from Customers group by Pais having total > 5 order by Pais;


