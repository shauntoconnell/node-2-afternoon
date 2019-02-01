DROP TABLE IF EXISTS product;

CREATE TABLE product (
	product_id SERIAL PRIMARY KEY
	, name  VARCHAR(64) NOT NULL
	, description VARCHAR(128) NOT NULL
	, price INTEGER NOT NULL
	, image_url TEXT NOT NULL
);