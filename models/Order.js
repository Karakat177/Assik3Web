const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    customerName: {
         type: String, 
         required: true
         },
    email: { 
        type: String, 
        required: true
     },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    size: { 
        type: Number, 
        required: true 
    },  
    quantity: { 
        type: Number, 
        default: 1
     }
},  { timestamps: true });


module.exports = mongoose.model('Order', OrderSchema);
