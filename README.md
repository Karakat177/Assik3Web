# Assik3Web - Sneaker Inventory Management System

## Overview
This project implements a full-stack web application for managing a sneaker store inventory. It consists of a Node.js backend with Express and MongoDB, providing a REST API for CRUD operations on products, and a simple HTML frontend for admin interaction.

## Technologies Used
- **Backend**: Node.js, Express.js, MongoDB (via Mongoose), CORS, dotenv
- **Frontend**: Vanilla HTML, CSS, JavaScript (Fetch API)
- **Database**: MongoDB with a Product schema including title, price, brand, description, and category fields

## Key Features
- **API Endpoints**: Full CRUD operations (Create, Read, Update, Delete) for products
- **Frontend Interface**: Form to add new sneakers, list view of inventory with delete functionality
- **Database Integration**: Persistent storage with validation and error handling
- **Environment Configuration**: Uses .env for MongoDB URI and port settings

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd Assik3Web
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your MongoDB URI: `MONGO_URI=mongodb://localhost:27017/assik3web`
   - Optionally set port: `PORT=3000`

4. Start the server:
   ```
   node server.js
   ```

5. Open `index.html` in your browser to access the frontend.

## Usage
- Navigate to the frontend to add new sneakers and view/delete existing inventory.
- The backend API runs on `http://localhost:3000`.

## API Endpoints
- `GET /` - Server status
- `POST /products` - Create a new product
- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID
- `PUT /products/:id` - Update product by ID
- `DELETE /products/:id` - Delete product by ID

## Project Structure
```
Assik3Web/
├── index.html          # Frontend interface
├── server.js           # Backend server
├── models/
│   └── Product.js      # Product model
├── package.json        # Dependencies and scripts
└── README.md           # This file
```

## Challenges and Solutions
- Ensured proper error handling for invalid IDs and validation failures
- Implemented CORS for cross-origin requests between frontend and backend
- Used async/await for clean asynchronous code in API routes

This assignment demonstrates fundamental full-stack development skills, including API design, database modeling, and client-server communication. The application is functional and ready for deployment with a MongoDB instance.
