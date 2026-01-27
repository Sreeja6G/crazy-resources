import express from "express";
import Student from "../models/Student.js";
import bcrypt from "bcryptjs";

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, college, expectations } = req.body;

    // Validation
    if (!name || !email || !password || !college || !expectations) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if email already exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new student
    const newStudent = new Student({
      name,
      email,
      password: hashedPassword,
      college,
      expectations,
    });

    await newStudent.save();

    res.status(201).json({
      success: true,
      message: "Student registered successfully",
      student: {
        id: newStudent._id,
        name: newStudent.name,
        email: newStudent.email,
        college: newStudent.college,
        joinDate: newStudent.joinDate,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Error registering student", error: error.message });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Find student
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, student.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Update last login
    student.lastLogin = new Date();
    await student.save();

    res.status(200).json({
      success: true,
      message: "Login successful",
      student: {
        id: student._id,
        name: student.name,
        email: student.email,
        college: student.college,
        joinDate: student.joinDate,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
});

// Get all students (admin only)
router.get("/all", async (req, res) => {
  try {
    const students = await Student.find({}).select("-password");
    res.status(200).json({
      success: true,
      count: students.length,
      students,
    });
  } catch (error) {
    console.error("Get students error:", error);
    res.status(500).json({ message: "Error fetching students", error: error.message });
  }
});

export default router;
