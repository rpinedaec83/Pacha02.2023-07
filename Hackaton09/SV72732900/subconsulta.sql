-- Producto con el precio minimo mas bajo
SELECT * FROM [Products] where Price = (select min(Price) from products);

-- Producto con precio minimo de al menos 10 veces el pedido minimo de los pedidos
SELECT ProductName, min(Quantity) as Min 
FROM Products p
inner join OrderDetails o
on p.ProductID = o.ProductID
group by ProductName
having p.Price > 10 * Min;

-- Registro de producto cuyo precio sea mayor que el maximo de los precios de los productos con id 3,6,9,10
SELECT ProductName
FROM Products p
where p.Price > (select max(Price) from Products where ProductID in (3,6,9,10));

-- Registro de productos cuyo ID sea un valor ShipperID
SELECT * FROM Products p
where p.ProductID in (select ShipperID from Shippers);

-- Clientes registrados que esten en ciudades de proveedores
SELECT * FROM Customers c
where c.City in (select City from Suppliers);