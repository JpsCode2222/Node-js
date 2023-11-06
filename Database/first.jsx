// CREATE TABLE
CREATE TABLE product (product_id INT PRIMARY KEY AUTO_INCREMENT,product_name VARCHAR(200),product_price VARCHAR(100), product_details TEXT);

// INSERT INTO TABLE
INSERT INTO product (product_name,product_price,product_details) VALUES ('ABCD','2999','DETAILS');

// Condition BASE QUERY
// select all info realated with condition
SELECT * FROM product WHERE product_name='ABCD';

// Specific column from db
SELECT product_price FROM product WHERE product_name='ABCD';

// less than
SELECT product_price FROM product WHERE product_price < '5000';

// greater than
SELECT product_price FROM product WHERE product_price > '5000';

// not equal to
SELECT product_price FROM product WHERE product_price != '5000';

// select only above 5000 and below 8000 product_price
SELECT * FROM product WHERE product_price >= 5000 AND product_price <= 8000;

// UPDATE 
UPDATE product SET product_name = "Fish" WHERE product_id = '1';

// update multiple columns
UPDATE product SET product_name='PQRS', product_price='2000' WHERE product_id = '1';

// DELETE
// by id
DELETE FROM product WHERE product_id = '2';