-- ¿Cual es el producto con el precio mínimo más bajo? (usando subconsultas)
SELECT t.ProductName, t.Price
FROM 
(SELECT p.ProductName, p.Price
FROM products p
ORDER BY p.Price
LIMIT 1
) AS t

-- ¿Cual es el producto cuyo precio sea al menos 10 veces el pedido mínimo (quantity) de los pedidos (OrderDetails)?
SELECT p.ProductName, p.Price
FROM products p
WHERE p.Price >=
(SELECT MIN(o.Quantity)*10
FROM orderdetails o);

-- ¿Cuales son los registros de productos (Products) cuyo precio (price) sea mayor que el máximo de los precios de los productos cuyo id sea 3, 6, 9 y 10?
SELECT *
FROM products p
WHERE p.Price >
(SELECT MAX(o.Price)
FROM products o
WHERE o.ProductID IN (3,6,9,10));

-- ¿Cuales son los registros de productos (Products) cuyo ProductID sea un valor que esté en Shippers.ShipperID?
SELECT *
FROM products p
WHERE p.ProductID IN 
(SELECT s.ShipperID
FROM shippers s);

-- ¿Qué clientes (Customers) tenemos registrados, que estén en ciudades de nuestros proveedores (Suppliers)?
SELECT *
FROM customers c
WHERE c.City IN 
(SELECT s.City
FROM suppliers s);