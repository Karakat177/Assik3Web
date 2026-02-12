# 👟 Sneaker Premium Store - Fullstack Web Application

## 🎓 Project Overview
This project is a comprehensive E-commerce platform dedicated to sneaker enthusiasts. It was developed as a university assignment to demonstrate proficiency in **Fullstack Web Development**, focusing on the **MERN-like stack** (using Handlebars/HTML instead of React for simplicity) and the **MVC Architecture**.

---

## 🏗 System Architecture (MVC Pattern)
The application is built using the **Model-View-Controller (MVC)** architectural pattern, ensuring a clean separation of concerns:

* **Models (`/models`):** Define the data structure for Users, Products, and Orders using Mongoose schemas.
* **Views (`index.html`):** A dynamic Single Page Application (SPA) interface that interacts with the API.
* **Controllers (`/controllers`):** Contain the business logic, such as authentication, price calculation, and order processing.
* **Routes (`/routes`):** Define the API endpoints and map them to specific controller functions.
* **Middleware (`/middleware`):** Handles security tasks like JWT Authentication and Role-Based Access Control (RBAC).

---

## 🛠 Tech Stack
 # Sneaker Premium Store — University Project Report

## 1. Project Summary

Sneaker Premium Store is a full-stack e-commerce web application built as a university project to demonstrate practical skills in backend and frontend development, RESTful API design, authentication, and database modeling. The application enables two types of users: customers who browse and order sneakers, and administrators who manage products and orders.

Objectives:
- Implement a maintainable MVC-style architecture.
- Provide secure user authentication and role-based access control.
- Build a responsive SPA-like frontend that consumes a JSON API.
- Demonstrate end-to-end functionality: product management, ordering, and order tracking.

## 2. System Architecture

The application follows a clear separation of concerns:

- Models (`/models`): Mongoose schemas for `User`, `Product`, and `Order` capture application data and constraints.
- Controllers (`/controllers`): Handle business logic such as user registration/login, product operations, and order lifecycle.
- Routes (`/routes`): Define RESTful endpoints and attach middleware for authentication and authorization.
- Middleware (`/middleware`): JWT-based `protect` middleware for authenticated routes and `admin` middleware for role checks.
- Frontend (`index.html`): A single HTML file with JavaScript that acts as a client, handling UI state and API calls via the Fetch API.

Core technologies: Node.js, Express.js, MongoDB (Mongoose), JSON Web Tokens (JWT), bcrypt for password hashing, and vanilla JavaScript for the frontend.

## 3. Key Features

- Authentication & Authorization:
   - User registration and login with securely hashed passwords.
   - JWT tokens issued on login to protect API endpoints.
   - Role-based access control: `admin` users can manage products and orders.

- Product Management:
   - Admins can add, edit, and delete products.
   - Products include title, brand, category, price, image URL, available sizes, and stock state.
   - Frontend supports category filtering and live search.

- Ordering & Order Management:
   - Customers can place orders selecting size, quantity, address, and phone.
   - Total price is calculated client-side and validated server-side.
   - Order statuses (pending, confirmed, shipped, delivered) are manageable by admins.

- Usability & UX:
   - Responsive layout for desktop and mobile.
   - Product detail modal before ordering to improve conversion confidence.

## 4. Installation and Usage (Developer Steps)

1. Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd Assik3Web
npm install
```

2. Create a `.env` file in the project root with the following variables:

```env
PORT=3000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<a_secure_random_string>
```

3. Seed the database (optional) to load sample products:

```bash
node seed.js
```

4. Start the server:

```bash
npm start
```

5. Open the frontend in the browser (server serves static files):

```
http://localhost:3000
```

Notes:
- If your MongoDB Atlas DNS lookup fails (DNS or network issue), the server contains retry logic and will continue running in a degraded mode until the database is reachable.

## 5. Testing and Demonstration

- Endpoints to test authentication:
   - `POST /api/auth/register` — create a new user (name, email, password, role)
   - `POST /api/auth/login` — login and receive a JWT token
   - `GET /api/auth/me` — retrieve current user (requires `Authorization: Bearer <token>`)

- Product endpoints:
   - `GET /api/products` — list products
   - `GET /api/products/:id` — product detail
   - `POST /api/products` — create product (admin only)

- Order endpoints:
   - `POST /api/orders` — create order (authenticated users)
   - `GET /api/orders/user/my-orders` — get orders for the logged-in user
   - `GET /api/orders` — admin: list all orders

Manual tests performed during development:
- Created an admin account and verified admin dashboard access.
- Registered customer accounts, placed orders, and verified that order status updates are reflected to customers.

## 6. Design Decisions and Rationale

- Vanilla JavaScript Frontend: Chosen to keep the project lightweight and focus on backend fundamentals and API design.
- JWT Authentication: Stateless tokens simplify session management for the SPA and make API testing straightforward.
- MVC Organization: Keeps code modular and testable; controllers are focused on business rules while models encapsulate data constraints.

## 7. Limitations and Future Work

- Payment Integration: No payment provider is integrated; future work should add a secure payment gateway (Stripe/PayPal).
- Image Uploads: Currently products use image URLs; support for file uploads and cloud storage would improve reliability.
- Tests: Add automated unit and integration tests (Mocha/Jest + Supertest) to ensure regression safety.
- Pagination & Performance: Add pagination and caching for product listings in larger datasets.

## 8. Conclusion

This project demonstrates practical full-stack development skills, including API design, authentication, role-based authorization, database modeling, and responsive frontend development. It provides a solid foundation for further enhancements (payments, CI/CD, automated tests) and can be extended into a production-grade platform with incremental improvements.

---


