import { useState, useEffect } from "react";

const API_BASE_URL = "http://localhost:5000/api";

export default function AdminDashboard({ setCurrentPage }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/all`);
      const data = await response.json();

      if (data.success) {
        setStudents(data.students);
      } else {
        setError("Failed to fetch students");
      }
    } catch (error) {
      setError("Error connecting to backend: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loadingBox}>
          <p style={styles.loadingText}>⏳ Loading students...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>📊 Admin Dashboard</h1>
        <button onClick={() => setCurrentPage("home")} style={styles.backButton}>
          ← Back to Home
        </button>
      </nav>

      {/* Stats */}
      <section style={styles.statsSection}>
        <div style={styles.statCard}>
          <div style={styles.statNumber}>{students.length}</div>
          <p style={styles.statLabel}>Total Students</p>
        </div>
      </section>

      {/* Error Message */}
      {error && (
        <div style={styles.errorBox}>
          <p style={styles.errorText}>⚠️ {error}</p>
        </div>
      )}

      {/* Students Table */}
      <section style={styles.tableSection}>
        {students.length === 0 ? (
          <div style={styles.emptyBox}>
            <p style={styles.emptyText}>No students registered yet</p>
          </div>
        ) : (
          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.tableHeader}>
                  <th style={styles.tableCell}>Name</th>
                  <th style={styles.tableCell}>Email</th>
                  <th style={styles.tableCell}>College</th>
                  <th style={styles.tableCell}>Expectations</th>
                  <th style={styles.tableCell}>Joined</th>
                  <th style={styles.tableCell}>Last Login</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, idx) => (
                  <tr key={student._id} style={idx % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd}>
                    <td style={styles.tableCell}>{student.name}</td>
                    <td style={styles.tableCell}>{student.email}</td>
                    <td style={styles.tableCell}>{student.college}</td>
                    <td style={{ ...styles.tableCell, maxWidth: "200px", wordBreak: "break-word" }}>
                      {student.expectations.substring(0, 50)}...
                    </td>
                    <td style={styles.tableCell}>
                      {new Date(student.joinDate).toLocaleDateString()}
                    </td>
                    <td style={styles.tableCell}>
                      {student.lastLogin
                        ? new Date(student.lastLogin).toLocaleDateString()
                        : "Never"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Refresh Button */}
      <section style={styles.actionSection}>
        <button onClick={fetchStudents} style={styles.refreshBtn}>
          🔄 Refresh Data
        </button>
      </section>
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
    color: "#f1f5f9",
  },
  navbar: {
    position: "sticky",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "rgba(15, 15, 35, 0.95)",
    borderBottom: "2px solid rgba(251, 191, 36, 0.3)",
    zIndex: 100,
    backdropFilter: "blur(10px)",
  },
  logo: {
    fontSize: "28px",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #fbbf24, #06b6d4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: 0,
  },
  backButton: {
    padding: "10px 20px",
    backgroundColor: "rgba(6, 182, 212, 0.2)",
    color: "#06b6d4",
    border: "2px solid #06b6d4",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  statsSection: {
    padding: "40px 20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  statCard: {
    padding: "30px",
    background: "linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(6, 182, 212, 0.1))",
    border: "2px solid rgba(251, 191, 36, 0.3)",
    borderRadius: "15px",
    textAlign: "center",
  },
  statNumber: {
    fontSize: "40px",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #fbbf24, #06b6d4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "10px",
  },
  statLabel: {
    fontSize: "16px",
    color: "#cbd5e1",
    margin: 0,
  },
  tableSection: {
    padding: "40px 20px",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  tableWrapper: {
    overflowX: "auto",
    borderRadius: "15px",
    border: "2px solid rgba(251, 191, 36, 0.2)",
    background: "rgba(26, 26, 62, 0.5)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "transparent",
  },
  tableHeader: {
    background: "linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(6, 182, 212, 0.2))",
  },
  tableCell: {
    padding: "15px",
    textAlign: "left",
    color: "#e0e0e0",
    fontSize: "14px",
    borderBottom: "1px solid rgba(251, 191, 36, 0.1)",
  },
  tableRowEven: {
    background: "rgba(6, 182, 212, 0.05)",
  },
  tableRowOdd: {
    background: "transparent",
  },
  errorBox: {
    margin: "20px 40px",
    padding: "15px",
    background: "rgba(239, 68, 68, 0.1)",
    border: "2px solid rgba(239, 68, 68, 0.3)",
    borderRadius: "10px",
  },
  errorText: {
    fontSize: "14px",
    color: "#ef4444",
    margin: 0,
  },
  emptyBox: {
    padding: "60px 20px",
    textAlign: "center",
  },
  emptyText: {
    fontSize: "18px",
    color: "#cbd5e1",
  },
  loadingBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  loadingText: {
    fontSize: "18px",
    color: "#cbd5e1",
  },
  actionSection: {
    padding: "40px 20px",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  refreshBtn: {
    padding: "12px 30px",
    background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 6px 20px rgba(6, 182, 212, 0.3)",
  },
};
