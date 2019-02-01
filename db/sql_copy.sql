DROP TABLE IF EXISTS product;

CREATE TABLE product (
	product_id SERIAL PRIMARY KEY
	, name VARCHAR(64) NOT NULL
	, description VARCHAR(128) NOT NULL
	, price INTEGER NOT NULL
	, image_url TEXT NOT NULL
);

INSERT INTO product (name, description, price, image_url)
VALUES ($1, $2, $3, $4) RETURNING *;	-- returns the created record

SELECT * FROM product WHERE product_id = $1;	-- returns the specified record

SELECT * FROM product;	-- returns all records in table

UPDATE product SET description = $2
WHERE product_id = $1 RETURNING *;	-- returns the updated record

DELETE FROM product WHERE product_id = $1;
SELECT * FROM product;	-- returns the updated table