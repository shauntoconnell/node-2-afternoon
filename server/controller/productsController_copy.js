module.exports = {
	createProduct: (req, res, next) => {
		const db = req.app.get('db');
		const {name, description, price, image_url} = req.body;

		db.create_product(name, description, price, image_url)
		.then(result => res.status(200).send(result))
		.catch(error => {
			res.status(500).send({errorMessage: 'Oops! Cannot create product :|'});
			console.log('An error was encountered while creating new database record', error.detail);
		});
	},

	readProduct: (req, res, next) => {
		const db = req.app.get('db');
		const {id} = req.params;

		db.read_product(id)
		.then(result => res.status(200).send(result))
		.catch(error => {
			res.status(500).send({errorMessage: 'Oops! Cannot find product :|'});
			console.log('An error was encountered while retrieving database record', error.detail);
		});
	},

	readProducts: (req, res, next) => {
		const db = req.app.get('db');

		db.read_products()
		.then(result => res.status(200).send(result))
		.catch(error => {
			res.status(500).send({errorMessage: 'Oops! Cannot read products :|'});
			console.log('An error was encountered while retrieving database records', error.detail);
		});
	},

	updateProduct: (req, res, next) => {
		const db = req.app.get('db');
		const {params, query} = req;

		db.update_product(params.id, query.desc)
		.then(result => res.status(200).send(result))
		.catch(error => {
			res.status(500).send({errorMessage: 'Oops! Cannot update product :|'});
			console.log('An error was encountered while updating database record', error.detail);
		});
	},
	deleteProduct: (req, res, next) => {
		const db = req.app.get('db');
		const {id} = req.params;

		db.delete_product(id)
		.then(result => res.status(200).send(result))
		.catch(error => {
			res.status(500).send({errorMessage: 'Oops! Cannot delete product :|'});
			console.log('An error was encountered while deleting database record', error.detail);
		})
	}
};