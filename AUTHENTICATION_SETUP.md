# Crazy Resources - Authentication Setup Guide

## 🎯 Overview

The authentication system uses:
- **Frontend**: React with Login/Signup pages
- **Backend**: Node.js/Express API
- **Database**: MongoDB for storing user credentials

## 🗄️ Database Schema

### Student Collection (MongoDB)

```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique),
  password: String (hashed with bcryptjs),
  college: String (required),
  expectations: String (required),
  joinDate: Date (default: current date),
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## 🚀 Setup Instructions

### Backend Setup

1. **Install MongoDB**
   - Download from: https://www.mongodb.com/try/download/community
   - Or use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas

2. **Start MongoDB**
   ```bash
   # Windows
   mongod.exe

   # macOS
   brew services start mongodb-community

   # Linux
   sudo systemctl start mongod
   ```

3. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Start Backend Server**
   ```bash
   npm run dev
   # Server runs on http://localhost:5000
   ```

### Frontend Setup

1. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

2. **Start Frontend Development Server**
   ```bash
   npm run dev
   # Frontend runs on http://localhost:5173 (or shown in terminal)
   ```

## 📋 API Endpoints

### 1. Signup
- **URL**: `POST /api/auth/signup`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "college": "MIT",
    "expectations": "Learn AI and ML"
  }
  ```
- **Response** (Success):
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

### 2. Login
- **URL**: `POST /api/auth/login`
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response** (Success):
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

## 🔐 Security Features

✅ **Password Hashing**: Passwords are hashed using bcryptjs (salt rounds: 10)
✅ **Email Uniqueness**: Duplicate emails are prevented
✅ **Input Validation**: All required fields are validated
✅ **Error Handling**: Secure error messages without exposing sensitive info
✅ **Last Login Tracking**: User's last login is recorded

## 📱 Frontend Pages

### Login Page (`/pages/Login.jsx`)
- Email and password input
- Validation and error handling
- Link to signup page
- Stores user data in localStorage on successful login

### Signup Page (`/pages/Signup.jsx`)
- Name, email, password, college, and expectations input
- Password confirmation
- Form validation
- Link to login page

## 🔄 User Flow

1. **New User**: `Home` → Click "Get Started" or navigate → `Signup` → Enter details → `Login`
2. **Returning User**: `Login` → Enter credentials → Redirect to `Home` → Access all features
3. **User Data**: Stored in localStorage for session persistence

## 🛠️ Troubleshooting

### Issue: "Error connecting to server"
- **Solution**: Make sure MongoDB and backend are running
- Start backend: `npm run dev` in `/backend` folder
- Check if server is on `http://localhost:5000`

### Issue: "Email already registered"
- **Solution**: Use a different email or login with existing email

### Issue: "Invalid credentials"
- **Solution**: Check email and password spelling
- Ensure you're registered first

### Issue: Backend Won't Start
- **Solution**: 
  ```bash
  # Clear node_modules and reinstall
  cd backend
  rm -r node_modules
  npm install
  npm run dev
  ```

## 📊 Database Management

### View Data in MongoDB

Using MongoDB Compass (GUI):
1. Open MongoDB Compass
2. Connect to `mongodb://localhost:27017`
3. Find `crazy-resources` database
4. View `students` collection

Using MongoDB CLI:
```bash
# Open MongoDB shell
mongosh

# Switch to database
use crazy-resources

# View all students
db.students.find()

# View specific student
db.students.findOne({ email: "john@example.com" })
```

## 🚀 Future Enhancements

- [ ] JWT token-based authentication
- [ ] Email verification
- [ ] Password reset functionality
- [ ] User profile management
- [ ] Two-factor authentication
- [ ] Social login (Google, GitHub)

## 📝 Notes

- User data is stored in localStorage after login
- Clear localStorage to logout: `localStorage.removeItem('user')`
- Backend must be running for authentication to work
- MongoDB connection string can be customized in `.env`

---

**Built with ❤️ by Crazy Resources Team**
