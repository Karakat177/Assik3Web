const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const exampleProducts = require('./SAMPLE_PRODUCTS'); // Просто подключаем список
const Order = require('./models/Order');

dotenv.config();

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({}); // Чистим базу
    await Order.deleteMany({}); 
    console.log('🗑 Старые заказы удалены.');
    await Product.insertMany(exampleProducts); // Заливаем 11 пар
    console.log('🚀 База наполнена! Можно запускать npm start');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();