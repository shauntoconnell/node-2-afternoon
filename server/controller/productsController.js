module.exports = {
	createProduct: (req, res, next) => {
		const db = req.app.get('db');
		const {name, description, price, image_url} = req.body;

		db.create_product([name, description, price, image_url])
		.then(response => {																		// response... what is returned?
			res.status(200).send(response);
		}).catch(error => {
			res.status(500).send({errorMessage: 'Oops! Cannot create :('});
			console.log('Error creating record', error.detail);
		});
	},
	readProduct: (req, res, next) => {
		const db = req.app.get('db');

		db.read_product(req.params.id)
		.then(response => {
			res.status(200).send(response);
		}).catch(error => {
			res.status(500).send({errorMessage: 'Oops! Cannot getOne :('});
			console.log('Error reading record', error.detail);
		})
	},
	readProducts: (req, res, next) => {
		const db = req.app.get('db');

		db.read_products()
		.then(response => {
			res.status(200).send(response);
		}).catch(error => {
			res.status(500).send({errorMessage: 'Oops! Cannot getAll :('});
			console.log('Error reading record', error.detail);
		})
	},
	updateProduct: (req, res, next) => {
		const db = req.app.get('db');
		const {params, query} = req;

		db.update_product([params.id, query.desc])
		.then(response => {
			res.status(200).send(response);
		}).catch(error => {
			res.status(500).send({errorMessage: 'Oops! Cannot update :('});
			console.log('Error updating record', error.detail);
		})
	},
	deleteProduct: (req, res, next) => {
		const db = req.app.get('db');

		db.delete_product(req.params.id)
		.then(response => {
			res.status(200).send(response);
		}).catch(error => {
			res.status(500).send({errorMessage: 'Oops! Cannot delete :('});
			console.log('Error deleting record', error.detail);
		})
	}
}