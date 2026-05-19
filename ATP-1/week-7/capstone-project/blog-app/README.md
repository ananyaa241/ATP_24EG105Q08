# Blog App Frontend

This is the frontend for a full-stack Blog Application built using React, Vite, and Tailwind CSS. It provides a modern, responsive user interface for both regular users and authors to interact with the platform.

## Features & Functionalities

### 1. Authentication & Role-Based Authorization
- **User Registration & Login**: Users can sign up and log in securely.
- **Role-Based Access Control**: The app supports two primary roles: `USER` and `AUTHOR`.
- **Protected Routes**: Certain pages (like user profiles and author dashboards) are restricted based on user roles to ensure data privacy and security.

### 2. User Experience (Role: `USER`)
- **Home Page**: A public feed displaying a list of all published articles.
- **Article Reading**: Users can click on any article to read its full content (`/article/:id`).
- **User Profile**: A dedicated dashboard for regular users to view their account details.

### 3. Author Experience (Role: `AUTHOR`)
- **Author Dashboard**: A specialized workspace for content creators.
- **Article Management**: Authors can view a list of their own published or drafted articles.
- **Write Articles**: A rich text editor or form interface to compose and publish new articles.
- **Edit Articles**: The ability to update and modify existing articles.

### 4. Technical Stack
- **Framework**: React 19 + Vite for fast development and optimized builds.
- **Styling**: Tailwind CSS for a highly customizable and responsive design.
- **State Management**: Zustand for lightweight and scalable global state management (e.g., `authStore.js`).
- **Routing**: React Router v7 for seamless client-side navigation.
- **Form Handling**: React Hook Form for efficient form validation and submission.
- **API Communication**: Axios for making HTTP requests to the backend server.
- **Notifications**: React Hot Toast for user-friendly toast notifications and alerts.

## Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation
1. Clone the repository and navigate to the frontend directory:
   ```bash
   cd blog-app
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

The application will typically be available at `http://localhost:5173`.
