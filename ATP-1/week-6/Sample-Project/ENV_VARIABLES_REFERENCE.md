# Environment Variables Reference

## Overview

Your application uses environment variables to configure API endpoints and database connections across different environments (local development, staging, production).

---

## Backend Environment Variables

### File: `backend/.env`

Used by Express server to configure:
- Database connection
- Server port
- CORS allowed origins
- Environment mode

### Variables

| Variable | Value | Where Used | Purpose |
|----------|-------|-----------|---------|
| `PORT` | `5000` | `server.js` | Server port for Express app |
| `DB_URL` | `mongodb+srv://...` | `server.js` (mongoose.connect) | MongoDB Atlas connection |
| `NODE_ENV` | `development` or `production` | `server.js` | Node environment flag |
| `FRONTEND_URL` | `http://localhost:5173` or `https://your-app.vercel.app` | `server.js` (CORS config) | Frontend origin for CORS |

### Example Files

**Development (.env):**
```
PORT=5000
DB_URL=mongodb+srv://brightside7806_db_user:L1SwbHO51ylWns4l@cluster0.kqjmihs.mongodb.net/employeeDB?appName=Cluster0
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

**Production (Render Environment Variables):**
```
PORT=5000
DB_URL=mongodb+srv://brightside7806_db_user:L1SwbHO51ylWns4l@cluster0.kqjmihs.mongodb.net/employeeDB?appName=Cluster0
NODE_ENV=production
FRONTEND_URL=https://your-app.vercel.app
```

### Reference Template: `backend/.env.example`
```
PORT=5000
DB_URL=mongodb+srv://username:password@cluster.mongodb.net/databasename?appName=Cluster0
NODE_ENV=production
FRONTEND_URL=http://localhost:5173
```

---

## Frontend Environment Variables

### Files: 
- `.env.local` (Development)
- `.env.production` (Production)

Used by Vite/React to configure:
- Backend API endpoint
- Environment-specific settings

### Variables

| Variable | Development Value | Production Value | Purpose |
|----------|------------------|------------------|---------|
| `VITE_API_BASE_URL` | `http://localhost:5000` | `https://your-backend.onrender.com` | Base URL for all API calls |

### Explanation

**Why `VITE_` prefix?**
- Vite only exposes variables prefixed with `VITE_` to the frontend
- This is a security feature (prevents accidental exposure of secrets)
- Accessed in code via `import.meta.env.VITE_API_BASE_URL`

### Example Files

**Development (.env.local):**
```
VITE_API_BASE_URL=http://localhost:5000
```

**Production (.env.production):**
```
VITE_API_BASE_URL=https://sample-project-backend.onrender.com
```

### Reference Template: `frontend/.env.example`
```
# Development: http://localhost:5000
# Production: https://your-backend-url.onrender.com
VITE_API_BASE_URL=http://localhost:5000
```

---

## How Variables Flow Through the App

### Backend Flow
```
.env (file)
    ↓
config() from dotenv package (server.js)
    ↓
process.env.PORT
process.env.DB_URL
process.env.NODE_ENV
process.env.FRONTEND_URL
    ↓
Used in:
- mongoose.connect(process.env.DB_URL)
- app.listen(process.env.PORT)
- CORS configuration
```

### Frontend Flow
```
.env.local or .env.production (file)
    ↓
Vite build process (during npm run dev or npm run build)
    ↓
import.meta.env.VITE_API_BASE_URL
    ↓
apiConfig.js:
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'
    ↓
Components use:
  import { apiEndpoints } from '../config/apiConfig'
  fetch(apiEndpoints.employees)
```

---

## Deployment Environment Variables

### Render Backend Dashboard

Go to: Render Dashboard → Your Backend Service → Environment

Add these variables:
```
PORT                  | 5000
DB_URL               | mongodb+srv://brightside7806_db_user:L1SwbHO51ylWns4l@cluster0.kqjmihs.mongodb.net/employeeDB?appName=Cluster0
NODE_ENV             | production
FRONTEND_URL         | https://your-vercel-url.vercel.app
```

### Vercel Frontend Dashboard

Go to: Vercel Dashboard → Your Project → Settings → Environment Variables

Add this variable:
```
VITE_API_BASE_URL    | https://your-render-backend.onrender.com
```

---

## Key Points

### 🔒 Security
- **Never commit `.env` files** to GitHub
- `.env` is in `.gitignore` (should be)
- Use platform-specific environment variables (Render, Vercel)
- Keep sensitive data (passwords, API keys) in `.env` files only

### 🔄 CORS
- Backend `FRONTEND_URL` must exactly match frontend deployment URL
- Without this, browser blocks API requests (CORS error)
- Only these origins can make requests:
  - `http://localhost:5173` (local dev)
  - `http://localhost:3000` (alt local port)
  - Value of `FRONTEND_URL` (production)

### 🌐 API Endpoints
All API endpoints use `VITE_API_BASE_URL`:
```javascript
GET    /emp-api/employees              (fetch all)
POST   /emp-api/employees              (create)
PUT    /emp-api/employees/:id          (update)
DELETE /emp-api/employees/:id          (delete)
```

### ✅ Testing Environment Variables

**Backend:**
```bash
# Test that environment variables are loaded
node -e "require('dotenv').config(); console.log(process.env.PORT)"
# Should print: 5000
```

**Frontend:**
```javascript
// In browser console:
console.log(import.meta.env.VITE_API_BASE_URL)
// Should print: your API URL
```

---

## Troubleshooting Environment Variables

### Backend issue: "Cannot connect to MongoDB"
```
Check: Is process.env.DB_URL correct in server.js?
Run: node -e "require('dotenv').config(); console.log(process.env.DB_URL)"
Expected: mongodb+srv://... string
```

### Frontend issue: "API calls failing"
```
Check: Is VITE_API_BASE_URL set in browser?
Open: Browser DevTools → Console → type: import.meta.env.VITE_API_BASE_URL
Expected: https://your-backend.onrender.com
```

### CORS error: "Access blocked"
```
Check: Does FRONTEND_URL in backend match your Vercel URL exactly?
Go to: Render dashboard → Your service → Environment
Update: FRONTEND_URL = https://your-app.vercel.app
Wait: ~2 minutes for Render to redeploy
```

---

## Summary Table

| Aspect | Backend | Frontend |
|--------|---------|----------|
| **Config File** | `.env` | `.env.local` / `.env.production` |
| **Variable Name** | `DB_URL`, `PORT`, `FRONTEND_URL` | `VITE_API_BASE_URL` |
| **Read How** | `process.env.VARIABLE` | `import.meta.env.VITE_API_BASE_URL` |
| **Platform Config** | Render Environment | Vercel Environment |
| **Local Dev Value** | mongodb+srv://... | http://localhost:5000 |
| **Production Value** | mongodb+srv://... | https://render-backend.url |

---

**All set! Your MERN app is configured and ready for deployment.** 🚀
