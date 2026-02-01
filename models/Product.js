const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
        type: String,
        enum: [
            'Summer Sneakers',
            'Light Sneakers',
            'Autumn Sneakers',
            'Winter Sneakers',
            'Football Sneakers',
            'Casual Sneakers'
        ],
        default: 'Summer Sneakers'
    },
    sizes: {
        type: [Number], 
        default: [38,39,40,41,42,43,44,45]
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
