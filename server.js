require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

// Serve static files
app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);
