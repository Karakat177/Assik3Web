const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },    
    price: { type: Number, required: true },    
    brand: { type: String, required: true },   
    description: String,                        
    category: { type: String, default: 'Casual' }
}, { 
    timestamps: true 
});

module.exports = mongoose.model('Product', ProductSchema);