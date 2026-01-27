# Crazy Resources Backend

Backend API for storing student data with login/signup functionality.

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)

### Installation

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Configure Database:**
   
   **Option A: Use MongoDB Atlas (Cloud - Recommended)**
   - Go to https://www.mongodb.com/cloud/atlas
   - Create a free account
   - Create a cluster
   - Get your connection string
   - Update `.env` file:
     ```
     MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/crazy-resources
     PORT=5000
     NODE_ENV=development
     ```

   **Option B: Use Local MongoDB**
   - Install MongoDB locally
   - Make sure MongoDB is running
   - `.env` file already has local connection

3. **Start Backend Server:**
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:5000`

## API Endpoints

### POST `/api/auth/signup`
Register a new student

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "college": "MIT",
  "expectations": "Learn video editing and earn money"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Student registered successfully",
  "student": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "college": "MIT",
    "joinDate": "2024-01-27T..."
  }
}
```

### POST `/api/auth/login`
Login existing student

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "student": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "college": "MIT",
    "joinDate": "2024-01-27T..."
  }
}
```

### GET `/api/auth/all`
Get all registered students (admin endpoint)

**Response:**
```json
{
  "success": true,
  "count": 5,
  "students": [...]
}
```

### GET `/api/health`
Check server health

**Response:**
```json
{
  "status": "OK",
  "message": "Crazy Resources API is running",
  "environment": "development"
}
```

## Database Schema

### Student Collection
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique),
  password: String (hashed, required),
  college: String (required),
  expectations: String (required),
  joinDate: Date (auto),
  lastLogin: Date,
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

## Running Both Frontend & Backend

**Terminal 1 - Frontend:**
```bash
cd crazy-resources
npm run dev
```
Frontend runs on: `http://localhost:5173`

**Terminal 2 - Backend:**
```bash
cd backend
npm start
```
Backend runs on: `http://localhost:5000`

## Troubleshooting

### Backend not connecting to MongoDB
- Check if MongoDB is running
- Verify connection string in `.env`
- For MongoDB Atlas, whitelist your IP address

### CORS errors
- Backend already has CORS enabled for localhost:5173
- If needed, modify CORS in `server.js`

### Port already in use
- Change PORT in `.env` file to different port (e.g., 5001)
- Update frontend API_BASE_URL accordingly

## Database Storage

All student data is securely stored in MongoDB:
- ✅ Name, Email, College, Expectations
- ✅ Passwords are hashed with bcryptjs
- ✅ Login timestamps tracked
- ✅ Account creation dates stored

## Security Features

- 🔐 Password hashing with bcryptjs
- 🔒 MongoDB connection with authentication
- ✔️ Email validation
- ⚡ CORS protection
- 📝 Input validation on all endpoints
