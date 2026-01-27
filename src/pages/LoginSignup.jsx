import { useState } from "react";

const API_BASE_URL = "http://localhost:5000/api";

export default function LoginSignup({ setCurrentPage, setUserData }) {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    college: "",
    expectations: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        // Login validation
        if (!formData.email || !formData.password) {
          setError("Please fill in all fields");
          setLoading(false);
          return;
        }

        // Call login API
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          setError(data.message || "Login failed");
          setLoading(false);
          return;
        }

        // Store user data
        const userData = {
          id: data.student.id,
          name: data.student.name,
          email: data.student.email,
          college: data.student.college,
          isLoggedIn: true,
        };

        localStorage.setItem("crazyResourcesUser", JSON.stringify(userData));
        setUserData(userData);
        setCurrentPage("home");
      } else {
        // Signup validation
        if (
          !formData.name ||
          !formData.email ||
          !formData.password ||
          !formData.confirmPassword ||
          !formData.college ||
          !formData.expectations
        ) {
          setError("Please fill in all fields");
          setLoading(false);
          return;
        }

        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match");
          setLoading(false);
          return;
        }

        if (formData.password.length < 6) {
          setError("Password must be at least 6 characters");
          setLoading(false);
          return;
        }

        // Call signup API
        const response = await fetch(`${API_BASE_URL}/auth/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            college: formData.college,
            expectations: formData.expectations,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          setError(data.message || "Signup failed");
          setLoading(false);
          return;
        }

        // Store user data
        const userData = {
          id: data.student.id,
          name: data.student.name,
          email: data.student.email,
          college: data.student.college,
          isLoggedIn: true,
          joinDate: data.student.joinDate,
        };

        localStorage.setItem("crazyResourcesUser", JSON.stringify(userData));
        setUserData(userData);
        setSubmitted(true);

        // Redirect after 2 seconds
        setTimeout(() => {
          setCurrentPage("home");
        }, 2000);
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "An error occurred. Make sure backend is running!");
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {submitted ? (
        <div style={styles.successContainer}>
          <div style={styles.successBox}>
            <div style={styles.successIcon}>✓</div>
            <h2 style={styles.successTitle}>Welcome! 🎉</h2>
            <p style={styles.successMsg}>
              Account created successfully! Redirecting to home...
            </p>
            <div style={styles.successDetails}>
              <p>Name: <strong>{formData.name}</strong></p>
              <p>Email: <strong>{formData.email}</strong></p>
              <p>College: <strong>{formData.college}</strong></p>
            </div>
          </div>
        </div>
      ) : (
        <div style={styles.formContainer}>
          {/* Header */}
          <div style={styles.header}>
            <h1 style={styles.logo}>🚀 Crazy Resources</h1>
            <p style={styles.subtitle}>
              {isLogin
                ? "Welcome Back! Sign In to Continue"
                : "Join Our Community & Learn Money-Making Skills"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={styles.form}>
            {/* Error Message */}
            {error && (
              <div style={styles.errorBox}>
                <p style={styles.errorText}>⚠️ {error}</p>
              </div>
            )}
            {/* Toggle between Login and Signup */}
            <div style={styles.toggleContainer}>
              <button
                type="button"
                style={{
                  ...styles.toggleBtn,
                  ...(isLogin && styles.toggleBtnActive),
                }}
                onClick={() => {
                  setIsLogin(true);
                  setFormData({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    college: "",
                    expectations: "",
                  });
                }}
              >
                Login
              </button>
              <button
                type="button"
                style={{
                  ...styles.toggleBtn,
                  ...(!isLogin && styles.toggleBtnActive),
                }}
                onClick={() => {
                  setIsLogin(false);
                  setFormData({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    college: "",
                    expectations: "",
                  });
                }}
              >
                Sign Up
              </button>
            </div>

            {/* Name Field (Signup only) */}
            {!isLogin && (
              <div style={styles.formGroup}>
                <label style={styles.label}>👤 Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  style={styles.input}
                  required
                />
              </div>
            )}

            {/* Email Field */}
            <div style={styles.formGroup}>
              <label style={styles.label}>📧 Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                style={styles.input}
                required
              />
            </div>

            {/* College Field (Signup only) */}
            {!isLogin && (
              <div style={styles.formGroup}>
                <label style={styles.label}>🎓 College / University</label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleInputChange}
                  placeholder="Enter your college name"
                  style={styles.input}
                  required
                />
              </div>
            )}

            {/* Password Field */}
            <div style={styles.formGroup}>
              <label style={styles.label}>🔐 Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter password (min 6 characters)"
                style={styles.input}
                required
              />
            </div>

            {/* Confirm Password Field (Signup only) */}
            {!isLogin && (
              <div style={styles.formGroup}>
                <label style={styles.label}>🔐 Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  style={styles.input}
                  required
                />
              </div>
            )}

            {/* Expectations Field (Signup only) */}
            {!isLogin && (
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  🎯 What Do You Expect From Us?
                </label>
                <textarea
                  name="expectations"
                  value={formData.expectations}
                  onChange={handleInputChange}
                  placeholder="Tell us what you're looking for... (E.g., learn video editing, earn money, career guidance, etc.)"
                  style={{
                    ...styles.input,
                    minHeight: "100px",
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  }}
                  required
                />
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" style={styles.submitBtn} disabled={loading}>
              {loading ? "⏳ Processing..." : isLogin ? "🔓 Sign In" : "✨ Create Account"}
            </button>

            {/* Info Box */}
            {!isLogin && (
              <div style={styles.infoBox}>
                <p style={styles.infoTitle}>💡 Why Join Us?</p>
                <ul style={styles.infoList}>
                  <li>✓ Learn in-demand money-making skills for FREE</li>
                  <li>✓ Structured roadmaps for each skill</li>
                  <li>✓ YouTube links & free resources</li>
                  <li>✓ Real projects to build your portfolio</li>
                  <li>✓ Track your learning progress</li>
                  <li>✓ Start earning as a student</li>
                </ul>
              </div>
            )}
          </form>

          {/* Footer */}
          <div style={styles.footer}>
            <p style={styles.footerText}>
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setFormData({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    college: "",
                    expectations: "",
                  });
                }}
                style={styles.switchLink}
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: 0,
    padding: 0,
    background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%)",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#f1f5f9",
  },
  formContainer: {
    width: "100%",
    maxWidth: "450px",
    margin: "20px",
    padding: "40px",
    background: "linear-gradient(135deg, rgba(26, 26, 62, 0.8), rgba(15, 15, 35, 0.8))",
    border: "2px solid rgba(251, 191, 36, 0.2)",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(251, 191, 36, 0.2)",
    backdropFilter: "blur(10px)",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  logo: {
    fontSize: "36px",
    fontWeight: "900",
    background: "linear-gradient(135deg, #fbbf24, #06b6d4, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: "0 0 10px 0",
  },
  subtitle: {
    fontSize: "14px",
    color: "#cbd5e1",
    margin: 0,
    lineHeight: "1.5",
  },
  form: {
    marginBottom: "20px",
  },
  errorBox: {
    padding: "12px 15px",
    background: "rgba(239, 68, 68, 0.1)",
    border: "2px solid rgba(239, 68, 68, 0.4)",
    borderRadius: "10px",
    marginBottom: "15px",
  },
  errorText: {
    fontSize: "14px",
    color: "#ef4444",
    margin: 0,
    fontWeight: "500",
  },
  toggleContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginBottom: "25px",
  },
  toggleBtn: {
    padding: "12px",
    background: "rgba(6, 182, 212, 0.1)",
    border: "2px solid rgba(6, 182, 212, 0.2)",
    color: "#06b6d4",
    borderRadius: "10px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "14px",
  },
  toggleBtnActive: {
    background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
    borderColor: "#06b6d4",
    color: "white",
    boxShadow: "0 6px 20px rgba(6, 182, 212, 0.4)",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: "600",
    color: "#fbbf24",
    marginBottom: "8px",
  },
  input: {
    width: "100%",
    padding: "12px 15px",
    background: "rgba(6, 182, 212, 0.05)",
    border: "2px solid rgba(6, 182, 212, 0.2)",
    borderRadius: "10px",
    color: "#f1f5f9",
    fontSize: "14px",
    transition: "all 0.3s ease",
    boxSizing: "border-box",
  },
  submitBtn: {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
    color: "#000",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "15px",
    boxShadow: "0 6px 20px rgba(251, 191, 36, 0.3)",
  },
  infoBox: {
    marginTop: "25px",
    padding: "20px",
    background: "rgba(251, 191, 36, 0.05)",
    border: "2px solid rgba(251, 191, 36, 0.2)",
    borderRadius: "12px",
  },
  infoTitle: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#fbbf24",
    marginBottom: "12px",
    margin: "0 0 12px 0",
  },
  infoList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  infoListItem: {
    fontSize: "13px",
    color: "#cbd5e1",
    marginBottom: "8px",
    lineHeight: "1.4",
  },
  footer: {
    textAlign: "center",
    marginTop: "20px",
    paddingTop: "20px",
    borderTop: "1px solid rgba(251, 191, 36, 0.1)",
  },
  footerText: {
    fontSize: "14px",
    color: "#cbd5e1",
    margin: 0,
  },
  switchLink: {
    background: "none",
    border: "none",
    color: "#fbbf24",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
    textDecoration: "underline",
    transition: "color 0.3s ease",
  },
  successContainer: {
    width: "100%",
    maxWidth: "500px",
    margin: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  successBox: {
    padding: "60px 40px",
    background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1))",
    border: "2px solid rgba(16, 185, 129, 0.4)",
    borderRadius: "20px",
    textAlign: "center",
    backdropFilter: "blur(10px)",
  },
  successIcon: {
    fontSize: "60px",
    marginBottom: "20px",
    color: "#10b981",
  },
  successTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#10b981",
    marginBottom: "15px",
    margin: "0 0 15px 0",
  },
  successMsg: {
    fontSize: "16px",
    color: "#cbd5e1",
    marginBottom: "25px",
  },
  successDetails: {
    textAlign: "left",
    background: "rgba(6, 182, 212, 0.05)",
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid rgba(6, 182, 212, 0.2)",
  },
};
