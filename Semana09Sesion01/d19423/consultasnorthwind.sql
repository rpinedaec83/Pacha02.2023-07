select
count(city),
city
from Customers
where city = 'México D.F.' or city = 'Berlin'
group by City;

select * from products
order by price
limit 10;

select * from products
order by price desc
limit 10;

select * from products P
inner join Categories C on P.CategoryId = C.CategoryId
order by price desc
limit 10;

select * from products P
inner join Categories C on P.CategoryId = C.CategoryId
where C.CategoryId = 6
order by price desc
limit 10;

select * from products P
inner join Categories C on P.CategoryId = C.CategoryId
where C.CategoryId = 6 or C.CategoryID = 5
order by price desc
limit 10;

select * from products P
inner join Categories C on P.CategoryId = C.CategoryId
where C.CategoryId in (6,5)
order by price desc
limit 10;

select * from products P
inner join Categories C on P.CategoryId = C.CategoryId
where C.CategoryId not in (6,5)
order by price desc
limit 10;

select * from products P
inner join Categories C on P.CategoryId = C.CategoryId
where C.CategoryId not in (6,5)
and P.price > 50 and P.price < 100
order by price desc
limit 10;

select * from products P
inner join Categories C on P.CategoryId = C.CategoryId
where C.CategoryId not in (6,5)
and P.price between 50 and 100 
order by price desc
limit 10;

select * from orders
where Orderdate between '1996-07-04' and '1996-08-31';

select O.OrderID,
C.CustomerName,
concat(E.FirstName ,' ',  E.LastName) as Vendedor,
O.OrderDate,
S.ShipperName

,sum( OD.Quantity * P.Price )as Total
from orders O 
inner join Customers C on O.CustomerId = C.CustomerId
inner join Employees E on O.employeeId = E.EmployeeId
inner join Shippers  S on O.ShipperId  = S.ShipperID
inner join OrderDetails OD on o.OrderID = OD.OrderID
inner join Products P on OD.ProductID = P.ProductID
where E.EmployeeID = 3
and O.orderId = 10251