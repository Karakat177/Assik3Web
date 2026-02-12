# 👟 Sneaker Store v2.1 - Complete User Guide

## 🎉 What Was Added

### Main Improvement: **Detailed Product View Before Order**

Now when a user clicks on a product:
1. **First** a beautiful window opens with full information:
   - 📸 Large product photo
   - 📝 Title, brand, category
   - 💰 Price
   - 📏 All available sizes (blue badges)
   - 📋 Detailed product description

2. **Then** (after clicking "Order Now") the order form opens

---

## 🚀 Quick Start

### Installation and Launch
```bash
cd /Users/karakatibraim/Assik3Web
npm install
npm start
```

Open: **http://localhost:5000**

### First Login - Admin
1. Click "Sign Up"
2. Fill in:
   ```
   Name:     Admin
   Email:    admin@test.com
   Password: 123456
   Role:     Admin ✅
   ```
3. Click "Sign Up"

### Add Your First Product
1. Select **"Add Product"** from menu
2. Fill in the form (example below)
3. Click **"Add Product"**

#### Product Example:
```
Title:       Nike Air Max 90
Brand:       Nike
Price:       129.99
Image URL:   https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop
Description: Classic Nike Air Max 90 sneakers with legendary air cushioning. 
             Perfect for everyday wear and sports.
Category:    Casual Sneakers
Sizes:       Select all (38-45)
Stock:       ✅ In Stock
```

---

## 👤 Testing as User

### 1. Create an Account
```
Name:     User
Email:    user@test.com  
Password: 123456
Role:     Customer (default)
```

### 2. View a Product
1. Click on any product in the catalog
2. **"Product Details"** window will open with product information
3. View:
   - ✅ Product photo
   - ✅ Title and brand
   - ✅ Sizes (blue badges)
   - ✅ Description
4. Click **"Order Now"**

### 3. Place an Order
1. Fill in the form:
   ```
   Size:    42 (select)
   Qty:     2
   Address: 123 Main St, NYC
   Phone:   +1 (555) 123-4567
   ```
2. See: **Total: $259.98** (updates automatically)
3. Click **"Place Order"**

### 4. View Your Orders
1. Select **"My Orders"** from menu
2. See your order card with:
   - Product photo
   - Size and quantity
   - Total cost
   - Status (yellow - pending)

---

## 👨‍💼 Order Management (Admin)

1. Select **"Orders"** from menu
2. See table of all orders
3. Click dropdown to change status:
   - `pending` (yellow) → 
   - `confirmed` (blue) → 
   - `shipped` (purple) → 
   - `delivered` (green)

---

## 📁 Project Structure

```
/Assik3Web
├── server.js                 # Main Express server
├── index.html               # Frontend (HTML + CSS + JS)
├── package.json             # Dependencies
├── .env                     # Environment variables
│
├── models/
│   ├── User.js              # User model
│   ├── Product.js           # Product model
│   └── Order.js             # Order model
│
├── controllers/
│   ├── authController.js    # Authentication logic
│   ├── productController.js # Product logic
│   └── orderController.js   # Order logic
│
├── routes/
│   ├── authRoutes.js        # Authentication routes
│   ├── productRoutes.js     # Product routes
│   └── orderRoutes.js       # Order routes
│
├── middleware/
│   ├── authMiddleware.js    # Token verification
│   └── roleMiddleware.js    # Role verification
│
└── docs/
    ├── README.md            # This file
    ├── SETUP.md             # Detailed setup
    ├── FEATURES.md          # All features description
    ├── TESTING.md           # Testing instructions
    ├── CHANGELOG.md         # Change history
    ├── SAMPLE_PRODUCTS.js   # Product examples
    └── REPORT.md            # Full change report
```

---

## 🎨 New Windows (v2.1)

### Product Details Window
**When:** Click on a product in the catalog
**Contains:**
- 📸 Large photo (350x350px)
- 📝 Product information
- 💰 Price (large font)
- 📏 Sizes (blue badges)
- 📋 Product description
- 🛒 "Order Now" button

### Order Form Window
**When:** Click "Order Now"
**Contains:**
- Form to fill
- Size selection
- Quantity selection
- Delivery address
- Phone number
- **Cost calculation** (updates automatically)

---

## 📊 Features by Role

### 👤 User (Customer)
- ✅ Registration and login
- ✅ View product catalog
- ✅ Filter by categories
- ✅ View full product information
- ✅ Place an order
- ✅ View order history
- ✅ Track order status

### 👨‍💼 Administrator (Admin)
- ✅ Registration and login
- ✅ Add new products
- ✅ Edit products (planned)
- ✅ Delete products
- ✅ View all orders
- ✅ Manage order statuses
- ✅ View catalog

---

## 🔧 API Endpoints

### Authentication
```
POST   /api/auth/register    - Register
POST   /api/auth/login       - Login
GET    /api/auth/me          - Get current user
```

### Products
```
GET    /api/products         - All products
GET    /api/products/:id     - Specific product
GET    /api/products/categories - List of categories
POST   /api/products         - Add product (admin)
PUT    /api/products/:id     - Update product (admin)
DELETE /api/products/:id     - Delete product (admin)
```

### Orders
```
POST   /api/orders           - Create order
GET    /api/orders/user/my-orders - My orders
GET    /api/orders           - All orders (admin)
PUT    /api/orders/:id       - Change status (admin)
DELETE /api/orders/:id       - Delete order (admin)
```

---

## 🐛 Troubleshooting

### Server won't start
```bash
# Check port 5000
# Check .env file
# Make sure MongoDB is available
npm start
```

### MongoDB error
```bash
# Check MONGO_URI in .env
# For local DB use:
MONGO_URI=mongodb://localhost:27017/sneaker-store

# For cloud DB use MongoDB Atlas:
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/dbname
```

### CORS error
```bash
# This is normal during local testing
# Make sure the frontend is connecting to the correct port (5000)
```

### Images not loading
- Use full URLs: `https://...`
- Or upload images to a cloud service (e.g., unsplash.com)

---

## 📚 Documentation

### For Beginners
- Start with [FEATURES.md](./FEATURES.md) - detailed description of new features
- Then [TESTING.md](./TESTING.md) - step-by-step guide

### For Developers
- [REPORT.md](./REPORT.md) - complete report of all changes
- [SETUP.md](./SETUP.md) - detailed technical documentation
- [SAMPLE_PRODUCTS.js](./SAMPLE_PRODUCTS.js) - sample data

---

## ✨ Key Improvements v2.1

| Feature | Description |
|---------|---------|
| 👁️ Details Window | Full product information before ordering |
| 📏 Visual Sizes | Blue badges with all available sizes |
| 📋 Descriptions | Detailed description for each product |
| 💡 Better UX | Two-stage purchase process |
| 📱 Responsive Design | Works on all devices |
| ⚡ Cost Calculation | Updates when quantity changes |

---

## 🎓 Usage Examples

### Adding a Product with Description
```javascript
{
  "title": "Nike Air Max 90",
  "brand": "Nike",
  "price": 129.99,
  "image": "https://...",
  "description": "Classic Nike Air Max 90 sneakers...",
  "category": "Casual Sneakers",
  "sizes": [38, 39, 40, 41, 42, 43, 44, 45]
}
```

### Viewing a Product
1. Click on a product card
2. A window with full information opens
3. Click "Order Now" to place an order

### Managing Orders (Admin)
1. Go to "Orders"
2. Find the order
3. Change status: pending → confirmed → shipped → delivered

---

## 🔐 Security

- ✅ JWT authentication
- ✅ Server-side role verification
- ✅ Data validation
- ✅ Password protection (bcrypt)
- ⚠️ **Important:** Change `JWT_SECRET` in `.env`

---

## 📞 Support

### Frequently Asked Questions

**Q: How do I add my own product image?**
A: Use a cloud service (unsplash.com, cloudinary.com) and insert the full URL

**Q: Can I add multiple photos for one product?**
A: Planned for v3.0. Currently only one photo is supported

**Q: How do I export orders?**
A: Not currently supported. Planned for v2.2

**Q: How do I change the currency?**
A: Edit the "$" symbol in the code (index.html, controllers)

---

## 🚀 Future Improvements (v3.0)

- [ ] Product photo gallery
- [ ] Ratings and reviews
- [ ] Email notifications
- [ ] Payment system
- [ ] Order export
- [ ] Sales analytics
- [ ] Discount system

---

## 📊 Versioning

| Version | Date | Status |
|--------|------|--------|
| v2.0 | 12.02.2026 | ✅ Complete |
| v2.1 | 12.02.2026 | ✅ Complete |
| v2.2 | planned | 📅 In development |
| v3.0 | planned | 📅 In development |

---

## 📄 License

This project was created for educational purposes.

---

## 👨‍💻 Author

**Development Team**
- Last updated: February 12, 2026
- Version: 2.1
- Status: ✅ Ready for use

---

## 📞 Contacts

If you have questions or suggestions for improvement, please contact the development team.

---

**Thank you for using Sneaker Store! 👟**
