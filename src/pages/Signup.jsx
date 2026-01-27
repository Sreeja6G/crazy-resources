import { useState } from "react";

export default function Signup({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    college: "",
    expectations: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword || !formData.college || !formData.expectations) {
      setError("All fields are required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
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

      if (response.ok) {
        setSuccess("Signup successful! Redirecting to login...");
        // Clear form on success
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          college: "",
          expectations: "",
        });
        // Navigate after a short delay to show success message
        setTimeout(() => {
          setCurrentPage("login");
        }, 1500);
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      setError("Error connecting to server. Make sure backend is running on http://localhost:5000");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>🚀 Crazy Resources</h1>
      </nav>

      {/* Signup Section */}
      <section style={styles.mainSection}>
        <div style={styles.formContainer}>
          <div style={styles.formCard}>
            <h2 style={styles.title}>🎓 Sign Up</h2>
            <p style={styles.subtitle}>Join our community of students</p>

            {error && <div style={styles.errorMessage}>{error}</div>}
            {success && <div style={styles.successMessage}>{success}</div>}

            <form onSubmit={handleSignup} style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>College/University</label>
                <input
                  type="text"
                  name="college"
                  placeholder="Enter your college name"
                  value={formData.college}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password (min 6 characters)"
                  value={formData.password}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>What are your expectations?</label>
                <textarea
                  name="expectations"
                  placeholder="Tell us what you expect from Crazy Resources..."
                  value={formData.expectations}
                  onChange={handleChange}
                  style={{ ...styles.input, minHeight: "100px", resize: "vertical" }}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  ...styles.button,
                  ...(loading ? styles.buttonDisabled : {}),
                }}
              >
                {loading ? "Creating Account..." : "Sign Up"}
              </button>
            </form>

            <div style={styles.divider}>or</div>

            <p style={styles.loginText}>
              Already have an account?{" "}
              <a
                onClick={() => setCurrentPage("login")}
                style={styles.loginLink}
              >
                Login here
              </a>
            </p>

            <button
              onClick={() => setCurrentPage("home")}
              style={styles.backButton}
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2024 Crazy Resources. Built with ❤️ by Students, for Students</p>
      </footer>
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
    width: "100%",
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 60px",
    background: "linear-gradient(135deg, rgba(15, 15, 35, 0.95), rgba(26, 26, 62, 0.95))",
    backdropFilter: "blur(10px)",
    borderBottom: "2px solid rgba(6, 182, 212, 0.2)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    margin: 0,
    fontSize: "28px",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
  },
  mainSection: {
    padding: "60px 20px",
    minHeight: "calc(100vh - 160px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    width: "100%",
    maxWidth: "450px",
  },
  formCard: {
    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(6, 182, 212, 0.15))",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "20px",
    padding: "40px",
    boxShadow: "0 20px 60px rgba(6, 182, 212, 0.2)",
  },
  title: {
    fontSize: "32px",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "14px",
    color: "#cbd5e1",
    textAlign: "center",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#06b6d4",
  },
  input: {
    padding: "10px 12px",
    fontSize: "14px",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "8px",
    background: "rgba(15, 15, 35, 0.7)",
    color: "#f1f5f9",
    outline: "none",
    transition: "all 0.3s ease",
  },
  button: {
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 24px rgba(6, 182, 212, 0.4)",
    marginTop: "10px",
  },
  buttonDisabled: {
    opacity: 0.6,
    cursor: "not-allowed",
  },
  errorMessage: {
    background: "rgba(239, 68, 68, 0.2)",
    border: "2px solid rgba(239, 68, 68, 0.5)",
    color: "#fca5a5",
    padding: "12px 16px",
    borderRadius: "8px",
    marginBottom: "20px",
    fontSize: "13px",
    fontWeight: "600",
  },
  successMessage: {
    background: "rgba(16, 185, 129, 0.2)",
    border: "2px solid rgba(16, 185, 129, 0.5)",
    color: "#86efac",
    padding: "12px 16px",
    borderRadius: "8px",
    marginBottom: "20px",
    fontSize: "13px",
    fontWeight: "600",
  },
  divider: {
    textAlign: "center",
    fontSize: "13px",
    color: "#cbd5e1",
    margin: "20px 0",
  },
  loginText: {
    textAlign: "center",
    color: "#cbd5e1",
    fontSize: "13px",
    marginBottom: "20px",
  },
  loginLink: {
    color: "#06b6d4",
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "none",
  },
  backButton: {
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#06b6d4",
    background: "transparent",
    border: "2px solid #06b6d4",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    width: "100%",
    marginTop: "20px",
  },
  footer: {
    background: "linear-gradient(135deg, #0a0a16, #0f0f23)",
    color: "#cbd5e1",
    textAlign: "center",
    padding: "30px",
    fontSize: "14px",
    borderTop: "2px solid rgba(6, 182, 212, 0.2)",
  },
};
