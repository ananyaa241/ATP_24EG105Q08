# MERN Stack Deployment Guide

## Project Structure
```
backend/
  - server.js (Express server with CORS configuration)
  - package.json (with start script)
  - .env (environment variables)
  - APIs/empApp.js (API routes)
  - models/EmpModel.js (MongoDB schema)

frontend/
  - src/config/apiConfig.js (API configuration with environment variable)
  - .env.local (environment variables for development)
  - .env.production (environment variables for production)
  - src/components/ (React components using apiEndpoints)
```

## Backend Deployment on Render

### Step 1: Prepare Backend for Render
1. **Environment Variables** in `backend/.env`:
   - ✅ PORT=5000 (Render will override if needed)
   - ✅ DB_URL=mongodb+srv://brightside7806_db_user:L1SwbHO51ylWns4l@cluster0.kqjmihs.mongodb.net/employeeDB?appName=Cluster0
   - ✅ NODE_ENV=production
   - ✅ FRONTEND_URL=https://your-vercel-app.vercel.app (Update after frontend deployment)

2. **Package.json** has start script:
   ```json
   "scripts": {
     "start": "node server.js"
   }
   ```

### Step 2: Deploy on Render
1. Go to [render.com](https://render.com)
2. Sign up/Login with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository (ATP_24EG105Q08)
5. Configure:
   - **Name**: sample-project-backend (or your choice)
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Root Directory**: `backend`
6. Add Environment Variables:
   - PORT: 5000
   - DB_URL: mongodb+srv://brightside7806_db_user:L1SwbHO51ylWns4l@cluster0.kqjmihs.mongodb.net/employeeDB?appName=Cluster0
   - NODE_ENV: production
   - FRONTEND_URL: (leave empty for now, update after frontend deployment)
7. Click "Deploy"
8. Wait for deployment to complete
9. **Copy the Backend URL** (e.g., https://sample-project-backend.onrender.com)

## Frontend Deployment on Vercel

### Step 1: Prepare Frontend for Vercel
1. **Create `.env.production`** file in frontend folder:
   ```
   VITE_API_BASE_URL=https://your-backend-url.onrender.com
   ```
   Replace `https://your-backend-url.onrender.com` with the actual Render URL from Step above

2. **Update `vite.config.js`** (already has tailwind, good to go):
   - File is properly configured for React + Tailwind

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New" → "Project"
4. Import your GitHub repository (ATP_24EG105Q08)
5. Configure:
   - **Framework**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Add Environment Variables:
   - Key: `VITE_API_BASE_URL`
   - Value: `https://your-backend-url.onrender.com` (use the Render URL from backend deployment)
7. Click "Deploy"
8. **Copy the Frontend URL** (e.g., https://your-app.vercel.app)

### Step 3: Update Backend CORS

After frontend is deployed, go back to Render:
1. Go to your backend service on Render
2. Go to "Environment"
3. Update `FRONTEND_URL`:
   ```
   https://your-app.vercel.app
   ```
4. Save changes (this will redeploy the backend)

## Environment Variables Summary

### Backend (.env / Render Environment)
```
PORT=5000
DB_URL=mongodb+srv://brightside7806_db_user:L1SwbHO51ylWns4l@cluster0.kqjmihs.mongodb.net/employeeDB?appName=Cluster0
NODE_ENV=production
FRONTEND_URL=https://your-app.vercel.app
```

### Frontend (.env.production / Vercel Environment)
```
VITE_API_BASE_URL=https://your-backend-url.onrender.com
```

### Frontend (Development - .env.local)
```
VITE_API_BASE_URL=http://localhost:5000
```

## Testing Locally

### Test Backend
```bash
cd backend
npm install
npm start
```
Backend runs on: http://localhost:5000

### Test Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on: http://localhost:5173

## Database

✅ MongoDB Atlas is already configured:
- Connection String: `mongodb+srv://brightside7806_db_user:L1SwbHO51ylWns4l@cluster0.kqjmihs.mongodb.net/employeeDB?appName=Cluster0`
- Database: `employeeDB`
- Collection: `emps` (auto-created when you add first employee)

## API Endpoints

All endpoints are through the configuration in `frontend/src/config/apiConfig.js`:

- **GET** `/emp-api/employees` - Get all employees
- **POST** `/emp-api/employees` - Create new employee
- **PUT** `/emp-api/employees/:id` - Update employee
- **DELETE** `/emp-api/employees/:id` - Delete employee

## Deployment Checklist

- [ ] Backend .env configured with MongoDB Atlas URL
- [ ] Backend deployed on Render (copy the URL)
- [ ] Frontend .env.production created with backend URL
- [ ] Frontend deployed on Vercel
- [ ] Backend CORS updated with frontend Vercel URL
- [ ] Test all CRUD operations on deployed app
- [ ] Check browser console for any errors
- [ ] Verify data is being stored in MongoDB Atlas

## Troubleshooting

### CORS Errors
- Make sure FRONTEND_URL in backend .env matches your Vercel URL exactly
- After updating FRONTEND_URL, the Render backend will automatically redeploy

### API Not Found Errors
- Check that VITE_API_BASE_URL in frontend environment variable matches Render backend URL
- Check browser Network tab to see the actual API calls being made

### Database Connection Errors
- Verify MongoDB Atlas connection string is correct
- Check MongoDB Atlas network access allows Render's IP addresses
- Go to MongoDB Atlas → Network Access → Allow access from 0.0.0.0

### Build Errors on Vercel
- Run `npm run build` locally in frontend folder to test
- Check for any import errors or missing dependencies
