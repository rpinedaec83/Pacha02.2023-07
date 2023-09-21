DELIMITER //
CREATE PROCEDURE sp_GetProductos()
BEGIN
    select * from products;
END //
    
DELIMITER ;
