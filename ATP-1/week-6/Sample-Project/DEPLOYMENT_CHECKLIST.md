# Pre-Deployment Checklist

## ✅ Code Changes Completed

### Backend
- [x] Added MongoDB Atlas connection string to `.env`
- [x] Updated CORS to accept dynamic frontend URLs
- [x] Added `start` script to `package.json`
- [x] Set correct port (5000) in `.env`
- [x] Created `.env.example` with all required variables

### Frontend
- [x] Created `src/config/apiConfig.js` for centralized API configuration
- [x] Updated `ListOfEmps.jsx` to use API config
- [x] Updated `CreateEmp.jsx` to use API config
- [x] Updated `EditEmployee.jsx` to use API config
- [x] Created `.env.local` for development
- [x] Created `.env.production` template
- [x] Created `.env.example` with all required variables

## 🔄 Before You Deploy

### Local Testing
- [ ] Run `npm install` in both `backend` and `frontend` folders
- [ ] Start backend: `cd backend && npm start` (should listen on port 5000)
- [ ] Start frontend: `cd frontend && npm run dev` (should open on port 5173)
- [ ] Test all CRUD operations in the app:
  - [ ] Create a new employee
  - [ ] View all employees
  - [ ] Edit an employee
  - [ ] Delete an employee
- [ ] Check browser console for any errors
- [ ] Check backend terminal for any errors

### MongoDB Atlas
- [ ] Verify you can access MongoDB Atlas at https://cloud.mongodb.com
- [ ] Your cluster: `Cluster0`
- [ ] Your database: `employeeDB`
- [ ] Go to Network Access and ensure:
  - [ ] 0.0.0.0/0 is allowed (or add Render's IP later)
  - [ ] Your connection string is correct

## 🚀 Backend Deployment (Render)

### Prerequisites
- [ ] GitHub account (already connected)
- [ ] Render.com account (free tier is fine)

### Deployment Steps
1. [ ] Go to https://render.com
2. [ ] Log in with GitHub
3. [ ] Click "New Web Service"
4. [ ] Connect to your repo: `ATP_24EG105Q08`
5. [ ] Configure deployment:
   - [ ] Name: `sample-project-backend`
   - [ ] Root Directory: `backend`
   - [ ] Build Command: `npm install`
   - [ ] Start Command: `npm start`
6. [ ] Add Environment Variables:
   - [ ] `PORT` = `5000`
   - [ ] `DB_URL` = Your MongoDB Atlas connection string
   - [ ] `NODE_ENV` = `production`
   - [ ] `FRONTEND_URL` = (leave empty, update after frontend deployment)
7. [ ] Click "Deploy Web Service"
8. [ ] Wait for deployment (~5 minutes)
9. [ ] **COPY your backend URL** when deployment succeeds
   - Format: `https://sample-project-backend.onrender.com`
   - Save this URL for the next step!

### Verify Backend
- [ ] Go to your deployed backend URL
- [ ] You should see: `Cannot GET /` (this is normal, just checking if it's running)
- [ ] Try API endpoint: `https://your-backend-url/emp-api/employees`
- [ ] Should return: `{"message":"list of emps","payload":[]}`

## 🎨 Frontend Deployment (Vercel)

### Prerequisites
- [ ] You should have the backend URL from previous step
- [ ] GitHub account (already connected)
- [ ] Vercel.com account (free tier is fine)

### Before Deployment
1. [ ] Edit `frontend/.env.production`:
   ```
   VITE_API_BASE_URL=https://YOUR_RENDER_BACKEND_URL
   ```
   Replace `YOUR_RENDER_BACKEND_URL` with your Render backend URL

2. [ ] Test the build locally:
   ```bash
   cd frontend
   npm run build
   ```
   Should complete without errors

### Deployment Steps
1. [ ] Go to https://vercel.com
2. [ ] Log in with GitHub
3. [ ] Click "Add New" → "Project"
4. [ ] Import your repo: `ATP_24EG105Q08`
5. [ ] Configure deployment:
   - [ ] Framework: `Vite`
   - [ ] Root Directory: `frontend`
   - [ ] Build Command: `npm run build`
   - [ ] Output Directory: `dist`
6. [ ] Click "Advanced" → "Environment Variables"
7. [ ] Add Environment Variable:
   - [ ] Key: `VITE_API_BASE_URL`
   - [ ] Value: `https://YOUR_RENDER_BACKEND_URL` (from backend deployment)
8. [ ] Click "Deploy"
9. [ ] Wait for deployment (~2 minutes)
10. [ ] **COPY your frontend URL** when deployment succeeds
    - Format: `https://your-app.vercel.app`
    - Save this URL for the next step!

### Verify Frontend
- [ ] Open your Vercel frontend URL in browser
- [ ] Should see your app loaded (Employee Management System)
- [ ] Check browser DevTools → Network tab
- [ ] API calls should go to your Render backend URL

## 🔐 Final Step: Update Backend CORS

1. [ ] Go back to Render dashboard
2. [ ] Click on your backend service
3. [ ] Go to "Environment" tab
4. [ ] Update `FRONTEND_URL`:
   ```
   FRONTEND_URL=https://YOUR_VERCEL_FRONTEND_URL
   ```
   Replace with your Vercel URL from frontend deployment
5. [ ] Click "Save Changes"
6. [ ] Wait for auto-redeploy (~2 minutes)
7. [ ] Backend will now accept requests only from your Vercel frontend

## ✨ Final Testing

After everything is deployed, test your live app:

1. [ ] Open your frontend Vercel URL
2. [ ] Create a new employee (fill all fields)
3. [ ] Click "Add Emp"
4. [ ] Verify employee appears in the list
5. [ ] Click "Edit" on the employee
6. [ ] Modify some details and save
7. [ ] Verify changes are reflected
8. [ ] Click "Delete" on an employee
9. [ ] Verify employee is removed from list
10. [ ] Refresh the page (F5)
11. [ ] Verify data persists (check MongoDB is storing it)

## 🐛 Troubleshooting

If something doesn't work:

1. **CORS Error in browser console**
   - Check that `FRONTEND_URL` in Render matches your Vercel URL exactly
   - Wait a few minutes for Render to redeploy

2. **API calls returning 404**
   - Check `VITE_API_BASE_URL` in Vercel matches your Render URL
   - Check browser Network tab to see the actual URL being called

3. **Cannot create/edit/delete employees**
   - Check browser DevTools → Network tab for errors
   - Check MongoDB Atlas network access allows 0.0.0.0/0

4. **MongoDB Connection Error**
   - Go to MongoDB Atlas
   - Network Access → Add 0.0.0.0/0
   - Wait a few minutes

## 📚 Documentation Files

- **QUICK_START.md** - Quick reference guide
- **DEPLOYMENT_GUIDE.md** - Detailed deployment instructions
- **backend/.env.example** - Backend environment variables template
- **frontend/.env.example** - Frontend environment variables template

---

## Summary of Environment Variables

**You will need these 2 things ready before deploying:**

1. **MongoDB Atlas Connection String** (Already provided):
   ```
   mongodb+srv://brightside7806_db_user:L1SwbHO51ylWns4l@cluster0.kqjmihs.mongodb.net/employeeDB?appName=Cluster0
   ```

2. **After Backend Deployment - Render URL**:
   ```
   https://sample-project-backend.onrender.com (example)
   ```
   Use this for VITE_API_BASE_URL in frontend

3. **After Frontend Deployment - Vercel URL**:
   ```
   https://your-app.vercel.app (example)
   ```
   Use this for FRONTEND_URL in backend

---

**Good luck with your deployment! 🚀**
