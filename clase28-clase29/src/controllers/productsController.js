const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
function getProducts() {
	return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		const products = getProducts();
		res.render('products', { products });
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const { id } = req.params;
		const products = getProducts();
		const product = products.find((element) => element.id === +id);
		res.render('detail', { product });
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},

	// Create -  Method to store
	store: (req, res) => {
		const image = req.file ? req.file.filename : 'default-image.png';
		const products = getProducts();
		const newProduct = {
			id: products[products.length - 1].id + 1,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image
		};
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	},

	// Update - Form to edit
	edit: (req, res) => {
		const products = getProducts();
		const product = products.find(element => element.id == req.params.id);
		res.render('product-edit-form', { productToEdit: product });
	},
	// Update - Method to update
	update: (req, res) => {
		const products = getProducts();
		const productIndex = products.findIndex(element => element.id == req.params.id);
		const image = req.file ? req.file.filename : products[productIndex].image;
		products[productIndex] = {
			...products[productIndex],
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image
		};
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		const products = getProducts();
		// Esta es la forma con filter, mas facil pero menos optima
		// const productsFiltered = products.filter(element => element.id != req.params.id);
		// fs.writeFileSync(productsFilePath, JSON.stringify(productsFiltered, null, 2));
		// End
		// Esta es la forma con splice, mas optima y recomendada
		const productIndex = products.findIndex(element => element.id == req.params.id);
		products.splice(productIndex, 1);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		// End
		res.redirect('/products');
	}
};

module.exports = controller;