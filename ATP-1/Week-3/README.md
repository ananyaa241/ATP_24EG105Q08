# 🚀 ATP Week-3: Backend Development with Node.js

## 📋 Overview
Welcome to Week 3 of the ATP course! This week focuses on backend development using Node.js, Express, MongoDB, and Mongoose. The main project in this folder is `backend-2`, which implements a user REST API with authentication and secure error handling.

## 🏗️ Project Structure
```
backend-2/
├── server.js              # Main Express application entry point
├── server2.js             # Alternate server file or example setup
├── APIs/                  # API route definitions and controllers
├── auth/                  # Authentication logic and middleware
├── middlewares/           # Custom middleware for request handling
├── models1/               # Mongoose schemas and models
├── req.http & req2.http   # HTTP request examples for testing
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

## 🎯 Key Concepts Covered
- ⚡ Express server setup and routing
- 🔄 Creating RESTful endpoints for CRUD operations
- 📊 Defining Mongoose schemas and models
- 🗄️ Connecting Node.js to MongoDB
- 🔐 User authentication with JWT
- 🛡️ Password hashing using `bcrypt`
- ⚙️ Environment configuration with `dotenv`
- 🚨 Error handling middleware
- 🔒 Protecting routes and authorization

## 🎓 Learning Outcomes
By working through Week 3, you will learn how to:
- Build a backend API from scratch using Express
- Manage data persistence with MongoDB and Mongoose
- Secure user data with password hashing
- Authenticate users and protect routes with tokens
- Structure backend code into organized folders

## 🚀 How to Run
1. Open the `backend-2` folder in a terminal.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with required environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
4. Start the server:
   ```bash
   node server.js
   ```

## 📝 API Testing
Use the provided `req.http` files with REST Client extension in VS Code to test the endpoints.

## 💡 Tips
- Always use environment variables for sensitive data
- Implement proper error handling in all routes
- Use middleware for repetitive tasks like authentication
- Test your APIs thoroughly before deployment

Happy backend coding! 🎉
- The project uses `type: "module"` in `package.json`, so ES module imports are enabled.
- The `req.http` and `req2.http` files provide example requests you can run from VS Code REST client extensions.
- This week emphasizes backend fundamentals and prepares you for secure full-stack development.

---

## Recommended Next Steps
- Explore the `backend-2` API endpoints and test them with provided HTTP requests.
- Review the `models1` folder to understand schema design.
- Check the `auth` and `middlewares` folder for authentication and error flow.
- Extend the API with new resources or add refresh token support.
