// Import Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

// Import Controllers
const controller = require('./controller/productsController');

// Top-Level Middleware
const app = express();
app.use(bodyParser.json());
require('dotenv').config();

// Variable Declarations
const {SERVER_PORT, CONNECTION_STRING} = process.env;

// Routes, Endpoints, and Controller Functions
app.post('/api/products', controller.createProduct);
app.get('/api/products', controller.readProducts);
app.get('/api/products/:id', controller.readProduct);
app.put('/api/products/:id', controller.updateProduct);
app.delete('/api/products/:id', controller.deleteProduct);

// Database Instance
massive(CONNECTION_STRING).then(db => {
	app.set('db', db); db.init();
	console.log('Connected to database 🗄');
}).catch(err => console.log('Unable to reach database', err));

// Initialize Server
app.listen(SERVER_PORT || 3000, () => {
	console.log(`Server listening on port ${SERVER_PORT} ⚓️`)
});