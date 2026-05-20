# Week 7 - Full-Stack Blog Application

##  Live Demo
- **Frontend App**: [https://capstone-project-jade-six.vercel.app/](https://capstone-project-jade-six.vercel.app/)
- **Backend API**: [https://two4eg105q08-capstone.onrender.com](https://two4eg105q08-capstone.onrender.com)

Welcome to Week 7! This week focuses on building a complete, production-ready **Full-Stack Application** from scratch. 

You will be combining everything learned so far—React, State Management, Express, MongoDB, and Authentication—to build a multi-role Blog Platform.

##  Project Architecture

This week contains two major components of the Blog App architecture:

### 1. [blog-app (Frontend)](./blog-app)
The client-side application built with modern React.
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **State Management**: Zustand
- **Features**: 
  - Dynamic routing for reading articles.
  - Role-based dashboards (User vs. Author).
  - Rich form handling with `react-hook-form`.
  - Secure API requests using `axios`.

*See the [Frontend README](./blog-app/README.md) for detailed documentation and setup instructions.*

### 2. [blog-app-backend (Backend)](./blog-app-backend)
The server-side REST API built with Node.js and Express.
- **Framework**: Node.js + Express
- **Database**: MongoDB + Mongoose ODM
- **Authentication**: JWT & HTTP-Only Cookies + bcryptjs
- **Media**: Cloudinary & Multer for image uploads
- **Features**:
  - Secure User, Author, and Admin APIs.
  - Image upload capabilities for user profiles.
  - Relational database modeling (Users and Articles).

*See the [Backend README](./blog-app-backend/README.md) for detailed documentation and setup instructions.*

---

##  Key Learning Objectives

By exploring and building this week's project, you will understand how to:
1. **Implement Role-Based Access Control (RBAC)**: Restricting access to both frontend UI components and backend API endpoints based on whether a user is an Admin, Author, or regular User.
2. **Handle File Uploads**: Moving beyond text data to securely upload and store images in the cloud (Cloudinary) and saving the generated URLs in MongoDB.
3. **Manage Global State**: Using Zustand in React to maintain the user's authentication status and role across the entire application without prop-drilling.
4. **Secure Communications**: Using `httpOnly` cookies for JWTs to prevent XSS attacks while maintaining a seamless user session.
