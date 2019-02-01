// Import Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

// Import Controllers
const controller = require('./controller/productsController');

// Variable Declarations
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

// Top-Level Middleware
app.use(bodyParser.json());
require('dotenv').config();

// Routes, Endpoints, and Controller Functions
app.post('/api/products', controller.createProduct);
app.get('/api/products', controller.readProducts);
app.get('/api/products/:id', controller.readProduct);
app.update('/api/products/:id', controller.updateProduct);
app.delete('/api/products/:id', controller.deleteProduct);

// Database Instance
massive(CONNECTION_STRING)
.then(db => {
	app.set('db', db); db.init();
	console.log('Connected to database 🗄')
}).catch(err => console.log('Unable to connect to database', err));

// Initialize Server
app.listen(SERVER_PORT || 3000, () => {
	console.log(`Server listening on port ${SERVER_PORT} ⚓️`);
});