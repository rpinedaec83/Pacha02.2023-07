//¿Cuál es el producto con el precio mínimo más bajo? (usando subconsultas)
SELECT ProductName
FROM Products
WHERE UnitPrice = (SELECT MIN(UnitPrice) FROM Products);


//¿Cuál es el producto cuyo precio sea al menos 10 veces el pedido mínimo (quantity) de los pedidos (OrderDetails)?
SELECT ProductName
FROM Products
WHERE ProductID IN (
    SELECT ProductID
    FROM OrderDetails
    GROUP BY ProductID
    HAVING MIN(Quantity) * 10 <= ALL (SELECT Quantity FROM OrderDetails WHERE ProductID = Products.ProductID)
);


//¿Cuáles son los registros de productos (Products) cuyo precio (price) sea mayor que el máximo de los precios de los productos cuyo id sea 3, 6, 9 y 10?
SELECT *
FROM Products
WHERE UnitPrice > (SELECT MAX(UnitPrice) FROM Products WHERE ProductID IN (3, 6, 9, 10));


//