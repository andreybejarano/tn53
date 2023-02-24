const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', { products });
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const { id } = req.params;
		const product = products.find((element) => element.id === +id);
		res.render('detail', { product });
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},

	// Create -  Method to store
	store: (req, res) => {
		const newProduct = {
			id: products[products.length - 1].id + 1,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image: 'default-image.png'
		};
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		// Do the magic
	}
};

module.exports = controller;