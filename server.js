require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    console.warn('Warning: MONGO_URI not set in .env');
}

// Connect to MongoDB with retry logic
let dbConnected = false;
const connectDB = () => {
    mongoose.connect(MONGO_URI, { 
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 5000
    })
        .then(() => {
            console.log('✓ MongoDB connected');
            dbConnected = true;
        })
        .catch(err => {
            console.error('MongoDB connection error:', err.message);
            console.log('⚠️  Continuing without database (read-only mode)');
            // Retry after 5 seconds
            setTimeout(connectDB, 5000);
        });
};

connectDB();

app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

// Serve static files
app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);
