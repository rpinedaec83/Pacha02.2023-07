DELIMITER //
CREATE FUNCTION contar_productos(categoria int)
RETURNS INT DETERMINISTIC
BEGIN
  DECLARE total int;
  SET total = (
    SELECT COUNT(*) 
    FROM products
    WHERE CategoryId = categoria);
  RETURN total;
END
//
DELIMITER ;
