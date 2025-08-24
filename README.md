# 👤 User Management REST API

A complete **User Management System** built with **Node.js, Express.js, and MongoDB**.  
This project demonstrates how to build a scalable backend with proper RESTful API design, middleware, and CRUD operations.

---

## 🚀 Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose ODM  
- **Development Tools:** Nodemon (hot reloading), Warp Terminal  
- **Testing:** Postman  

---

## 📋 Features
✅ Full CRUD Operations – Create, Read, Update, Delete users  
✅ RESTful API with proper HTTP methods & status codes  
✅ MongoDB integration with schema modeling using Mongoose  
✅ MVC Architecture – Separation of Models, Controllers, and Routes  
✅ Custom Middleware for request logging & monitoring  
✅ Error Handling with proper responses  
✅ Input validation for required fields  

---

## 🎯 API Endpoints

### User Routes
- `GET /users` → Fetch all users  
- `POST /users` → Create a new user  
- `GET /users/:id` → Get user by ID  
- `PATCH /users/:id` → Update user details (last name)  
- `DELETE /users/:id` → Delete user  
- `GET /users/name/:first_name` → Find user by first name  

---

## 📊 User Schema
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "job_title": "Software Engineer",
  "gender": "Male",
  "createdAt": "2025-08-25T10:00:00.000Z",
  "updatedAt": "2025-08-25T10:00:00.000Z"
}
