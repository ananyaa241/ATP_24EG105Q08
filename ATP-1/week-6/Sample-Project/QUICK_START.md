# Quick Start: Deploy MERN App to Render + Vercel

## ✅ Changes Already Made

1. **Backend** (`backend/server.js`):
   - CORS now dynamically accepts frontend URL
   - Uses environment variables for configuration

2. **Backend** (`backend/package.json`):
   - Added `start` script for Render deployment

3. **Backend** (`backend/.env`):
   - MongoDB Atlas connection string configured
   - Ready for production with Render

4. **Frontend** (`frontend/src/config/apiConfig.js`):
   - Created centralized API configuration
   - Reads backend URL from environment variable

5. **Frontend Components** (ListOfEmps.jsx, CreateEmp.jsx, EditEmployee.jsx):
   - Updated to use API configuration from environment
   - No more hardcoded localhost URLs

6. **Frontend** (`frontend/.env.local`):
   - Development environment variable for local testing

## 🚀 Quick Deployment Steps

### Step 1: Test Locally First
```bash
# Terminal 1 - Backend
cd backend
npm install
npm start
# Should print: "server listening on 5000"

# Terminal 2 - Frontend
cd frontend
npm install
npm run dev
# Open http://localhost:5173
```

### Step 2: Deploy Backend on Render
1. Go to https://render.com and sign up with GitHub
2. Click "New Web Service"
3. Select your GitHub repo: `ATP_24EG105Q08`
4. Fill in:
   - **Name**: sample-project-backend
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Click "Advanced" and add these **Environment Variables**:
   ```
   PORT = 5000
   DB_URL = mongodb+srv://brightside7806_db_user:L1SwbHO51ylWns4l@cluster0.kqjmihs.mongodb.net/employeeDB?appName=Cluster0
   NODE_ENV = production
   FRONTEND_URL = (leave empty for now)
   ```
6. Click "Deploy"
7. ⏳ Wait ~5 minutes for deployment
8. Copy the URL from the dashboard (e.g., `https://sample-project-backend.onrender.com`)

### Step 3: Update Frontend Environment Variable
Edit `frontend/.env.production`:
```
VITE_API_BASE_URL=https://YOUR_RENDER_BACKEND_URL
```
Replace `YOUR_RENDER_BACKEND_URL` with the URL you copied from Step 2.

### Step 4: Deploy Frontend on Vercel
1. Go to https://vercel.com and sign up with GitHub
2. Click "Add New" → "Project"
3. Select your GitHub repo: `ATP_24EG105Q08`
4. Fill in:
   - **Framework**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click "Advanced" → "Environment Variables"
6. Add:
   ```
   VITE_API_BASE_URL = https://YOUR_RENDER_BACKEND_URL
   ```
7. Click "Deploy"
8. ⏳ Wait ~2 minutes for deployment
9. Copy the frontend URL (e.g., `https://your-app.vercel.app`)

### Step 5: Update Backend CORS (Final Step!)
Go back to your Render backend dashboard:
1. Click on your backend service
2. Go to "Environment"
3. Update `FRONTEND_URL`:
   ```
   FRONTEND_URL = https://YOUR_VERCEL_FRONTEND_URL
   ```
   Replace with the URL from Step 4
4. Click "Save Changes"
5. The backend will automatically redeploy with CORS updated ✅

## 📋 Environment Variables Summary

**What goes where:**

| Variable | Backend? | Frontend? | Development Value | Production Value |
|----------|----------|-----------|-------------------|-----------------|
| VITE_API_BASE_URL | ❌ | ✅ | http://localhost:5000 | https://render-backend.com |
| DB_URL | ✅ | ❌ | MongoDB Atlas string | MongoDB Atlas string |
| FRONTEND_URL | ✅ | ❌ | http://localhost:5173 | https://vercel-app.com |
| NODE_ENV | ✅ | ❌ | development | production |
| PORT | ✅ | ❌ | 5000 | 5000 |

## 🧪 Testing After Deployment

1. Open your Vercel frontend URL in browser
2. Try to create an employee (fill the form and submit)
3. Check if:
   - ✅ New employee appears in the list
   - ✅ Can edit employee details
   - ✅ Can delete employee
   - ✅ Data persists after refresh

## 🔧 If Something Breaks

**Error: CORS blocked request**
- Go to Render backend dashboard
- Check that FRONTEND_URL matches your Vercel URL exactly
- Render should auto-redeploy, wait ~2 minutes

**Error: API 404 or blank page**
- Check browser DevTools → Network tab
- Look at the API URL being called
- Should be: `https://your-render-backend.com/emp-api/employees`
- If not, VITE_API_BASE_URL in Vercel is wrong

**Error: Cannot connect to MongoDB**
- MongoDB Atlas is working (tested locally)
- Make sure you added Render's IP to MongoDB Atlas Network Access
- Go to: MongoDB Atlas → Network Access → Allow 0.0.0.0/0

## 📚 Additional Resources

- See `DEPLOYMENT_GUIDE.md` for detailed step-by-step guide
- Backend code changes are in `backend/server.js` and `backend/package.json`
- Frontend config is in `frontend/src/config/apiConfig.js`
- Check individual `.env.example` files for reference

**You're all set! 🎉**
