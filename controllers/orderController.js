const Order = require('../models/Order');
const Product = require('../models/Product');

exports.createOrder = async (req, res) => {
    try {
        const { productId, size, quantity, deliveryAddress, phone } = req.body;

        if (!productId || !size || !quantity || !deliveryAddress || !phone) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        if (!product.inStock) {
            return res.status(400).json({ message: 'Product out of stock' });
        }

        if (!product.sizes.includes(parseInt(size))) {
            return res.status(400).json({ message: 'Size not available for this product' });
        }

        if (quantity <= 0 || quantity > 5) {
            return res.status(400).json({ message: 'Invalid quantity' });
        }

        const totalPrice = product.price * quantity;

        const order = await Order.create({
            userId: req.user.id,
            product: productId,
            size,
            quantity,
            totalPrice,
            deliveryAddress,
            phone
        });

        await order.populate('product', 'title brand price image');
        
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('product').populate('userId', 'name email');
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
        
        if (!['pending', 'confirmed', 'shipped', 'delivered'].includes(status)) {
            return res.status(400).json({ message: 'Invalid status' });
        }

        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        ).populate('product');

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json({ message: 'Order deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
