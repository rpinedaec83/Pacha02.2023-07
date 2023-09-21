-- ¿Cuántos clientes hay registrados?
SELECT COUNT(*) AS clientes
FROM customers

-- ¿Cuántos pedidos?
SELECT COUNT(*) AS ordenes
FROM orders

-- ¿Qué clientes viven en Londes y su nombre (CustomerName) empieza por A?
SELECT *
FROM customers c
WHERE c.City = 'London'
AND c.CustomerName LIKE 'A%'

-- ¿Cuántos clientes hay que son de Londres?
SELECT c.City, COUNT(*) AS Clientes
FROM customers c
WHERE c.City = 'London'
GROUP BY c.City

-- ¿Cuántos clientes hay en cada ciudad?
SELECT c.City, COUNT(*) AS Clientes
FROM customers c
GROUP BY c.City

-- ¿Cuántos empleados nacieron después de 1 de Junio del 1965?
SELECT * 
FROM employees e
WHERE e.BirthDate > '1965-06-01'

-- Hazme un informe que diga «El empleado N nación el N», siendo N, nombre (FirstName y Last Name) y día de nacimiento (BirthDate)
SELECT CONCAT_WS(' ','El empleado', e.FirstName , e.LastName , 'nació el', date_format(e.BirthDate, "%d-%m-%Y")) AS Informe
FROM employees e

-- Hazme el informe anterior, pero sólo para los empleados con id 8, 7, 3 y 10
SELECT CONCAT_WS(' ','El empleado', e.FirstName , e.LastName , 'nació el', date_format(e.BirthDate, "%d-%m-%Y")) AS Informe
FROM employees e
WHERE e.EmployeeID IN(8,7,3,10)

-- Dime los paises que tengan más de 5 clientes, ordenados por el nombre de país
SELECT c.Country AS pais, COUNT(c.Country) AS cantidad
FROM customers c
GROUP BY c.Country
HAVING COUNT(c.Country) > 5
ORDER BY c.Country