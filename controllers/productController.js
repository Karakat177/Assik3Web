const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    try {
        const { title, brand, price, image, description, category, sizes, inStock } = req.body;

        if (!title || !brand || !price || !image) {
            return res.status(400).json({ message: 'Name, brand, price and photo are required!' });
        }

        const product = await Product.create({
            title, brand, price, image, description,
            category: category || 'Casual Sneakers',
            sizes: sizes || [38, 39, 40, 41, 42, 43, 44, 45],
            inStock: inStock !== undefined ? inStock : true,
            createdBy: req.user.id
        });

        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const { category } = req.query;
        let filter = { inStock: true };
        if (category) filter.category = category;

        const products = await Product.find(filter);
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getCategories = async (req, res) => {
    res.json([
        'Summer Sneakers', 'Light Sneakers', 'Autumn Sneakers',
        'Winter Sneakers', 'Football Sneakers', 'Casual Sneakers'
    ]);
};

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};