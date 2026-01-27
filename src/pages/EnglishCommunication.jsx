import { useState, useEffect } from "react";

export default function EnglishCommunication({ setCurrentPage }) {
  const [sessionActive, setSessionActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(3600); // 1 hour in seconds
  const [hasCompletedToday, setHasCompletedToday] = useState(() => {
    const lastSession = localStorage.getItem("lastEnglishSession");
    const today = new Date().toDateString();
    return lastSession === today;
  });

  // Timer effect
  useEffect(() => {
    if (!sessionActive || timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setSessionActive(false);
          const today = new Date().toDateString();
          localStorage.setItem("lastEnglishSession", today);
          setHasCompletedToday(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [sessionActive, timeRemaining]);

  const startSession = () => {
    setSessionActive(true);
    setTimeRemaining(3600);
  };

  const endSession = () => {
    setSessionActive(false);
    const today = new Date().toDateString();
    localStorage.setItem("lastEnglishSession", today);
    setHasCompletedToday(true);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>🚀 Crazy Resources</h1>
        <button
          onClick={() => setCurrentPage("home")}
          style={styles.backButton}
        >
          ← Back to Home
        </button>
      </nav>

      {/* Main Content */}
      <section style={styles.mainSection}>
        <div style={styles.content}>
          <h2 style={styles.title}>📚 Daily English Communication</h2>
          <p style={styles.subtitle}>
            Practice your English communication skills with a daily one-hour session
          </p>

          <div style={styles.sessionCard}>
            <div style={styles.timerDisplay}>
              <span style={styles.timerText}>{formatTime(timeRemaining)}</span>
            </div>

            {!sessionActive ? (
              <div style={styles.buttonContainer}>
                <button
                  onClick={startSession}
                  style={{
                    ...styles.button,
                    ...styles.startButton,
                  }}
                >
                  🎯 Start Session
                </button>
              </div>
            ) : (
              <div style={styles.buttonContainer}>
                <button
                  onClick={endSession}
                  style={{
                    ...styles.button,
                    ...styles.endButton,
                  }}
                >
                  ⏹️ End Session
                </button>
              </div>
            )}

            {hasCompletedToday && !sessionActive && (
              <div style={styles.completedMessage}>
                ✅ You've completed today's session!
              </div>
            )}
          </div>

          {/* Tips Section */}
          <div style={styles.tipsSection}>
            <h3 style={styles.tipsTitle}>💡 Tips for Effective Communication</h3>
            <ul style={styles.tipsList}>
              <li style={styles.tipItem}>
                <strong>Speak Clearly:</strong> Focus on pronunciation and articulation
              </li>
              <li style={styles.tipItem}>
                <strong>Practice Actively:</strong> Don't just listen, speak as much as possible
              </li>
              <li style={styles.tipItem}>
                <strong>Build Vocabulary:</strong> Learn new words and phrases daily
              </li>
              <li style={styles.tipItem}>
                <strong>Consistent Practice:</strong> Dedicate one hour daily to improve
              </li>
              <li style={styles.tipItem}>
                <strong>Record Yourself:</strong> Listen to your progress and identify areas to improve
              </li>
            </ul>
          </div>

          {/* Topics to Practice */}
          <div style={styles.topicsSection}>
            <h3 style={styles.topicsTitle}>🎯 Common Topics to Practice</h3>
            <div style={styles.topicsGrid}>
              {[
                "Self Introduction",
                "Daily Routines",
                "Hobbies & Interests",
                "Travel & Culture",
                "Food & Cooking",
                "Technology & AI",
                "Career Goals",
                "Movies & Entertainment",
              ].map((topic, idx) => (
                <div key={idx} style={styles.topicCard}>
                  {topic}
                </div>
              ))}
            </div>
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
    justifyContent: "space-between",
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
  backButton: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#06b6d4",
    background: "transparent",
    border: "2px solid #06b6d4",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  mainSection: {
    padding: "60px 20px",
    minHeight: "calc(100vh - 160px)",
  },
  content: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  title: {
    fontSize: "48px",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "18px",
    color: "#cbd5e1",
    textAlign: "center",
    marginBottom: "40px",
  },
  sessionCard: {
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(236, 72, 153, 0.1))",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "16px",
    padding: "40px",
    marginBottom: "40px",
    textAlign: "center",
    boxShadow: "0 8px 32px rgba(6, 182, 212, 0.15)",
    transition: "all 0.3s ease",
  },
  timerDisplay: {
    marginBottom: "30px",
    padding: "30px",
    background: "rgba(15, 15, 35, 0.5)",
    borderRadius: "12px",
    border: "2px solid rgba(6, 182, 212, 0.3)",
  },
  timerText: {
    fontSize: "64px",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "monospace",
  },
  buttonContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginBottom: "20px",
  },
  button: {
    padding: "15px 40px",
    fontSize: "18px",
    fontWeight: "600",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  startButton: {
    background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
    color: "#fff",
    boxShadow: "0 8px 24px rgba(6, 182, 212, 0.4)",
  },
  endButton: {
    background: "linear-gradient(135deg, #ef4444, #dc2626)",
    color: "#fff",
    boxShadow: "0 8px 24px rgba(239, 68, 68, 0.4)",
  },
  completedMessage: {
    fontSize: "18px",
    color: "#10b981",
    fontWeight: "600",
    padding: "15px",
    background: "rgba(16, 185, 129, 0.1)",
    border: "2px solid rgba(16, 185, 129, 0.3)",
    borderRadius: "8px",
  },
  tipsSection: {
    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(6, 182, 212, 0.1))",
    border: "2px solid rgba(99, 102, 241, 0.3)",
    borderRadius: "16px",
    padding: "30px",
    marginBottom: "40px",
  },
  tipsTitle: {
    fontSize: "24px",
    color: "#06b6d4",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  tipsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  tipItem: {
    color: "#cbd5e1",
    fontSize: "16px",
    marginBottom: "15px",
    paddingLeft: "20px",
    position: "relative",
  },
  topicsSection: {
    background: "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(6, 182, 212, 0.1))",
    border: "2px solid rgba(236, 72, 153, 0.3)",
    borderRadius: "16px",
    padding: "30px",
  },
  topicsTitle: {
    fontSize: "24px",
    color: "#ec4899",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  topicsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
  },
  topicCard: {
    background: "rgba(15, 15, 35, 0.7)",
    border: "2px solid rgba(236, 72, 153, 0.3)",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    color: "#cbd5e1",
    fontWeight: "600",
    transition: "all 0.3s ease",
    cursor: "pointer",
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
