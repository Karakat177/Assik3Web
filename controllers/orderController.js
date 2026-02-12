const Order = require('../models/Order');
const Product = require('../models/Product');

exports.createOrder = async (req, res) => {
    try {
        const { productId, size, quantity, deliveryAddress, phone } = req.body;

        if (!productId || !size || !quantity || !deliveryAddress || !phone) {
            return res.status(400).json({ message: 'Fill in all fields!' });
        }

        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: 'Products not found' });

        if (!product.inStock) {
            return res.status(400).json({ message: 'Not in stock' });
        }

        const selectedSize = Number(size);
        if (!product.sizes.includes(selectedSize)) {
            return res.status(400).json({ message: `Size ${selectedSize} is not available` });
        }

        const order = await Order.create({
            userId: req.user.id,
            product: productId, 
            size: selectedSize,
            quantity,
            totalPrice: product.price * quantity,
            deliveryAddress,
            phone
        });

       
        const populatedOrder = await Order.findById(order._id).populate('product');
        res.status(201).json(populatedOrder);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
       
        const orders = await Order.find()
            .populate('product')
            .populate('userId', 'name email');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user.id })
            .populate('product')
            .sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        ).populate('product');
        
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.json({ message: 'order deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};