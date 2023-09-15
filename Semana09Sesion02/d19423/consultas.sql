select * from Products P
inner join Suppliers S on p.supplierID = S.SupplierID;


select 
 count(ProductID),
-- ProductName,
 s.SupplierName
from Products P
inner join Suppliers S on p.supplierID = S.SupplierID
group by S.SupplierID;

Select * from orders o
where EmployeeID in (select EmployeeId from employees where FirstName like '_a%');


select * from employees where FirstName like '%ve%';
select * from employees where FirstName like 'L%';
select * from employees where FirstName like '%T';
select * from employees where FirstName like '_a%';
select * from employees where FirstName like '_______';



select * from products P
inner join Categories C on P.CategoryId = C.CategoryId
order by price desc
limit 10;

select min(price) from products P;
select max(price) from products P;
select avg(price) from products P;


select * from Customers where PostalCode is  null;

update Customers set PostalCode = null where CustomerId = 37;


SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5
ORDER BY COUNT(CustomerID) DESC;

SELECT SupplierName
FROM Suppliers
WHERE EXISTS (SELECT ProductName FROM Products WHERE Products.SupplierID = Suppliers.supplierID AND Price < 20);


SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN 'The quantity is greater than 30'
    WHEN Quantity = 30 THEN 'The quantity is 30'
    ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails;


SELECT ProductName, Price * (UnitsInStock + IFNULL(UnitsOnOrder, 0))
FROM Products;

select * from products

DELIMITER $$
DROP FUNCTION IF EXISTS contar_productos$$
CREATE FUNCTION contar_productos(categoria int)
  RETURNS INT
BEGIN
  DECLARE total INT;
  SET total = (
    SELECT COUNT(*) 
    FROM products
    WHERE CategoryId = categoria);
  RETURN total;
END
$$

DELIMITER ;
SELECT contar_productos(2);

CALL sp_GetProductos;

CREATE VIEW Brazil_Customers AS
SELECT CustomerName, ContactName
FROM Customers
WHERE Country = 'Brazil';


select * from brazil_customers;

