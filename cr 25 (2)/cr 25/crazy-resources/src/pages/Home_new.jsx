import { useState, useEffect, useRef } from "react";
import Hero from "./Hero";
import Founders from "./Founders";

export default function Home({ setCurrentPage, setSelectedInternship }) {
  const [activeNav, setActiveNav] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Refs for scrolling
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const opportunitiesRef = useRef(null);

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // 'login' or 'register'
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (ref, navName) => {
    setActiveNav(navName);
    setIsMenuOpen(false);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We have received your message.`);
    setFormData({ name: "", email: "", message: "" });
  };

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [mobileId, setMobileId] = useState("");

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (authMode === "forgot") {
      alert(`OTP successfully sent to your Mobile ID: ${mobileId}! (Simulation Mode)`);
      setAuthMode("reset");
    } else if (authMode === "reset") {
      alert("Password reset successfully! Please login with your new credentials.");
      setAuthMode("login");
    } else {
      alert(`${authMode === "login" ? "Login" : "Registration"} successful for ${mobileId}!`);
      setIsAuthOpen(false);
    }
  };

  // Login/Register/Forgot Modal Component
  const AuthModal = () => (
    <div style={styles.modalOverlay} onClick={() => setIsAuthOpen(false)}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button style={styles.modalClose} onClick={() => setIsAuthOpen(false)}>✕</button>

        <h2 style={styles.modalTitle}>
          {authMode === "login" && "Welcome Back"}
          {authMode === "register" && "Create Account"}
          {authMode === "forgot" && "Reset Request"}
          {authMode === "reset" && "Verify OTP"}
        </h2>

        <p style={styles.modalSubtitle}>
          {authMode === "forgot" ? "Enter your Mobile ID to receive a verification code." : "Manage your Crazy Resources account."}
        </p>

        <form style={styles.authForm} onSubmit={handleAuthSubmit}>
          {/* Mobile ID Field - Used in all except Reset */}
          {authMode !== "reset" && (
            <div style={styles.formGroup}>
              <label style={styles.label}>Mobile ID (Phone)</label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                style={styles.input}
                value={mobileId}
                onChange={(e) => setMobileId(e.target.value)}
                required
              />
            </div>
          )}

          {/* Registration Fields */}
          {authMode === "register" && (
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <input type="text" placeholder="John Doe" style={styles.input} required />
            </div>
          )}

          {/* Password Fields - Used in Login, Register, Reset */}
          {(authMode === "login" || authMode === "register" || authMode === "reset") && (
            <div style={styles.formGroup}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label style={styles.label}>{authMode === "reset" ? "New Password" : "Password"}</label>
                {authMode === "login" && (
                  <span
                    style={{ ...styles.toggleLink, fontSize: '12px', textDecoration: 'none' }}
                    onClick={() => setAuthMode("forgot")}
                  >
                    Forgot Password?
                  </span>
                )}
              </div>
              <input
                type="password"
                placeholder="••••••••"
                style={styles.input}
                value={authMode === "reset" ? newPassword : undefined}
                onChange={(e) => authMode === "reset" && setNewPassword(e.target.value)}
                required
              />
            </div>
          )}

          {/* OTP Field - Used only in Reset */}
          {authMode === "reset" && (
            <div style={styles.formGroup}>
              <label style={styles.label}>Enter OTP from Mobile</label>
              <input
                type="text"
                placeholder="6-digit code"
                style={styles.input}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
          )}

          <button type="submit" style={styles.submitBtn}>
            {authMode === "login" && "Login Now"}
            {authMode === "register" && "Register Now"}
            {authMode === "forgot" && "Send OTP to Mobile"}
            {authMode === "reset" && "Verify & Reset"}
          </button>
        </form>

        <div style={styles.authToggle}>
          {authMode === "login" ? (
            <p style={{ color: '#cbd5e1' }}>Don't have an account? <span style={styles.toggleLink} onClick={() => setAuthMode("register")}>Sign Up</span></p>
          ) : (
            <p style={{ color: '#cbd5e1' }}>
              {(authMode === "register" || authMode === "forgot" || authMode === "reset") && (
                <>
                  {authMode === "register" ? "Already have an account? " : "Go back to "}
                  <span style={styles.toggleLink} onClick={() => setAuthMode("login")}>Login</span>
                </>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      {isAuthOpen && <AuthModal />}

      {/* Navigation Bar */}
      <nav style={styles.navbar} className="header-nav">
        {/* Left: Logo */}
        <div className="nav-left">
          <h1 style={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Crazy Resources
          </h1>
        </div>

        {/* Right: Search, Actions & Menu */}
        <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div className="search-wrapper" style={{ display: 'none' }}> {/* Hidden on small screens or kept for layout */}
            <input type="text" placeholder="Search..." style={styles.headerSearch} />
          </div>

          <div className="nav-actions" style={styles.desktopOnly}>
            <a style={styles.navLink} onClick={() => { setAuthMode("login"); setIsAuthOpen(true); }}>Login</a>
            <button
              style={{ ...styles.cardButton, padding: '8px 20px', fontSize: '12px' }}
              onClick={() => { setAuthMode("register"); setIsAuthOpen(true); }}
            >
              Sign Up
            </button>
          </div>

          <button
            style={styles.mobileMenuBtn}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`mobile-nav-overlay ${isMenuOpen ? "is-open" : ""}`}
          style={{
            ...styles.navLinks,
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            width: '300px',
            background: 'rgba(10, 10, 22, 0.98)',
            display: 'flex',
            flexDirection: 'column',
            padding: '80px 40px',
            gap: '25px',
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 1500,
            boxShadow: '-10px 0 30px rgba(0,0,0,0.5)'
          }}
        >
          <a style={{ ...styles.navLink, fontSize: '20px' }} onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Home</a>
          <a style={{ ...styles.navLink, fontSize: '20px' }} onClick={() => { setIsMenuOpen(false); setCurrentPage("hackathons"); }}>Hackathons</a>
          <a style={{ ...styles.navLink, fontSize: '20px' }} onClick={() => { setIsMenuOpen(false); setCurrentPage("internships"); }}>Internships</a>
          <a style={{ ...styles.navLink, fontSize: '20px', opacity: 0.6 }} onClick={() => { setIsMenuOpen(false); alert("Cyber Security section is coming soon!"); }}>Cyber Security</a>
          <a style={{ ...styles.navLink, fontSize: '20px' }} onClick={() => { setIsMenuOpen(false); scrollToSection(aboutRef, "about"); }}>About Us</a>
          <a style={{ ...styles.navLink, fontSize: '20px' }} onClick={() => { setIsMenuOpen(false); scrollToSection(contactRef, "contact"); }}>Contact</a>
          <hr style={{ width: '100%', borderColor: 'rgba(255,255,255,0.1)' }} />
          <a style={{ ...styles.navLink, color: '#ec4899' }} onClick={() => { setIsMenuOpen(false); setAuthMode("login"); setIsAuthOpen(true); }}>Login</a>
          <a style={{ ...styles.navLink, color: '#06b6d4' }} onClick={() => { setIsMenuOpen(false); setAuthMode("register"); setIsAuthOpen(true); }}>Register</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={styles.heroSection}
        className="section-padding"
      >
        <div
          style={{
            width: "100%",
          }}
        >
          <Hero />
        </div>
      </section>

      <style>
        {`
          @keyframes pulse-live {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(6, 182, 212, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(6, 182, 212, 0); }
          }
          .live-indicator {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 10px;
            font-weight: 800;
            color: #06b6d4;
            letter-spacing: 1px;
            margin-bottom: 10px;
          }
          .pulse-dot {
            width: 6px;
            height: 6px;
            background: #06b6d4;
            border-radius: 50%;
            animation: pulse-live 2s infinite;
          }
        `}
      </style>

      {/* Opportunities Section */}
      <section style={styles.opportunitiesSection} ref={opportunitiesRef} className="section-padding">
        <div style={styles.opportunitiesContainer}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="section-title">CHOOSE YOUR PATH</h2>
            <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '700px', margin: '0 auto', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.8 }}>
              Unlock your potential with our curated premium resources.
            </p>
          </div>

          <div style={styles.opportunitiesGrid} className="responsive-grid">
            {/* 1. Hackathons */}
            <div
              style={styles.opportunityCard}
              onClick={() => {
                setActiveNav("hackathons");
                setCurrentPage("hackathons");
                window.scrollTo(0, 0);
              }}
            >
              <div className="live-indicator">
                <div className="pulse-dot"></div>
                REAL-TIME UPDATES
              </div>
              <div style={styles.cardIcon}>🏆</div>
              <h3 style={styles.cardTitle}>HACKATHONS</h3>
              <p style={styles.cardDescription}>
                Compete against the best minds globally. Build innovative projects, solve real-world problems, and win exciting prizes.
              </p>
              <button style={styles.cardButton}>EXPLORE NOW →</button>
            </div>

            {/* 2. Internships */}
            <div
              style={styles.opportunityCard}
              onClick={() => {
                setActiveNav("internships");
                setCurrentPage("internships");
                window.scrollTo(0, 0);
              }}
            >
              <div className="live-indicator">
                <div className="pulse-dot"></div>
                LIVE PLACEMENTS
              </div>
              <div style={styles.cardIcon}>💼</div>
              <h3 style={styles.cardTitle}>INTERNSHIPS</h3>
              <p style={styles.cardDescription}>
                Launch your career with top-tier internships. Gain hands-on experience and build your professional network.
              </p>
              <button style={styles.cardButton}>VIEW OPENINGS →</button>
            </div>

            {/* 3. Cyber Security */}
            <div style={{ ...styles.opportunityCard, opacity: 0.8 }}>
              <div style={{ position: 'absolute', top: '15px', right: '15px', background: '#ec4899', color: 'white', fontSize: '10px', padding: '4px 10px', borderRadius: '4px', fontWeight: 'bold' }}>COMING SOON</div>
              <div className="live-indicator" style={{ color: '#ec4899' }}>
                <div className="pulse-dot" style={{ backgroundColor: '#ec4899' }}></div>
                DEFENSE TRACKING
              </div>
              <div style={styles.cardIcon}>🛡️</div>
              <h3 style={styles.cardTitle}>CYBER SECURITY</h3>
              <p style={styles.cardDescription}>
                Master the art of digital defense. Learn ethical hacking, network security, and protect the digital frontier.
              </p>
              <button style={{ ...styles.cardButton, background: 'rgba(255,255,255,0.1)', cursor: 'default' }}>LOCKED</button>
            </div>

            {/* 4. English Communication */}
            <div
              style={styles.opportunityCard}
              onClick={() => {
                setCurrentPage("english-communication");
                window.scrollTo(0, 0);
              }}
            >
              <div className="live-indicator">
                <div className="pulse-dot"></div>
                ACTIVE SESSIONS
              </div>
              <div style={styles.cardIcon}>🗣️</div>
              <h3 style={styles.cardTitle}>COMMUNICATION</h3>
              <p style={styles.cardDescription}>
                Master the global language. Improve your speaking confidence with daily one-hour interactive practice sessions.
              </p>
              <button style={styles.cardButton}>START LEARNING →</button>
            </div>

          </div>
        </div>
      </section>

      {/* Founders Section (About) */}
      <div id="about" ref={aboutRef}>
        <Founders />
      </div>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} style={styles.contactSection} className="section-padding">
        <div style={styles.contactContainer}>
          <h2 style={styles.contactTitle} className="section-title">📬 Get in Touch</h2>
          <p style={styles.contactSubtitle}>Have questions or suggestions? We'd love to hear from you!</p>

          <div style={styles.contactContent} className="contact-container">
            <form style={styles.contactForm} onSubmit={handleContactSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Name</label>
                <input
                  type="text"
                  style={styles.input}
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email</label>
                <input
                  type="email"
                  style={styles.input}
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Message</label>
                <textarea
                  style={styles.textarea}
                  rows="5"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>
              <button type="submit" style={styles.submitBtn}>Send Message 🚀</button>
            </form>

            <div style={styles.contactInfo} className="contact-info">
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📧</span>
                <div>
                  <h3>Email Us</h3>
                  <p>hello@crazyresources.com</p>
                </div>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📍</span>
                <div>
                  <h3>Visit Us</h3>
                  <p>Student Innovation Hub, Tech University, India</p>
                </div>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>🤝</span>
                <div>
                  <h3>Connect</h3>
                  <div style={styles.socialLinks}>
                    <span style={styles.socialIcon}>LinkedIn</span>
                    <span style={styles.socialIcon}>Twitter</span>
                    <span style={styles.socialIcon}>Instagram</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer} className="section-padding">
        <div style={styles.footerContent} className="responsive-grid grid-cols-mobile-1">
          <div style={styles.footerSection}>
            <h3>Crazy Resources</h3>
            <p>Empowering students with the best resources, opportunities, and community.</p>
          </div>
          <div style={styles.footerSection}>
            <h3>Quick Links</h3>
            <p onClick={() => window.scrollTo(0, 0)} style={{ cursor: 'pointer' }}>Home</p>
            <p onClick={() => setCurrentPage("hackathons")} style={{ cursor: 'pointer' }}>Hackathons</p>
            <p onClick={() => { setSelectedInternship(null); setCurrentPage("internships"); }} style={{ cursor: 'pointer' }}>Internships</p>
          </div>
          <div style={styles.footerSection}>
            <h3>Legal</h3>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
        <p style={{ marginTop: '30px', opacity: 0.7 }}>© 2024 Crazy Resources. Built with ❤️ by Students, for Students</p>
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
    position: "sticky",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 5%",
    height: "80px",
    background: "rgba(15, 15, 35, 0.95)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    zIndex: 2000,
  },
  logo: {
    margin: 0,
    fontSize: "26px",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "800",
    cursor: "pointer",
    letterSpacing: '1px'
  },
  mobileMenuBtn: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "28px",
    cursor: "pointer",
    padding: "10px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navLink: {
    color: "#cbd5e1",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'color 0.3s'
  },
  navLinkActive: {
    color: "#06b6d4",
    borderBottomColor: "#06b6d4",
  },
  heroSection: {
    background: "linear-gradient(135deg, rgba(15, 15, 35, 0.7), rgba(26, 26, 62, 0.7))",
    minHeight: "calc(100vh - 80px)",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    margin: 0,
    padding: "60px 20px 20px",
    transition: "all 0.5s ease",
  },
  opportunitiesSection: {
    padding: "80px 20px",
    background: "linear-gradient(135deg, rgba(15, 15, 35, 0.8), rgba(26, 26, 62, 0.8))",
    borderTop: "2px solid rgba(6, 182, 212, 0.2)",
  },
  opportunitiesContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  opportunitiesTitle: {
    fontSize: "48px",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
    marginBottom: "50px",
    fontWeight: "bold",
  },
  opportunitiesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    width: "100%",
  },
  opportunityCard: {
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(236, 72, 153, 0.05))",
    border: "1px solid rgba(6, 182, 212, 0.2)",
    borderRadius: "16px",
    padding: "30px",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    position: "relative",
    overflow: "hidden",
  },
  cardIcon: {
    fontSize: "50px",
    marginBottom: "20px",
  },
  cardTitle: {
    fontSize: "22px",
    color: "#06b6d4",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: "15px",
    color: "#cbd5e1",
    marginBottom: "20px",
    flex: "1",
    lineHeight: "1.6",
  },
  cardButton: {
    padding: "10px 25px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#fff",
    background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "auto",
  },
  contactSection: {
    padding: "80px 20px",
    background: "linear-gradient(135deg, #0f0f23, #1a1a3e)",
    borderTop: "1px solid rgba(236, 72, 153, 0.2)",
  },
  contactContainer: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  contactTitle: {
    fontSize: "48px",
    fontWeight: "bold",
    textAlign: "center",
    background: "linear-gradient(135deg, #ec4899, #f472b6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "10px",
  },
  contactSubtitle: {
    textAlign: "center",
    color: "#cbd5e1",
    marginBottom: "50px",
    fontSize: "18px",
  },
  contactContent: {
    display: "flex",
    flexWrap: "wrap",
    gap: "50px",
    justifyContent: "center",
  },
  contactForm: {
    flex: "1 1 400px",
    background: "rgba(255, 255, 255, 0.03)",
    padding: "40px",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    color: "#06b6d4",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    background: "rgba(0, 0, 0, 0.3)",
    color: "white",
    fontSize: "15px",
    outline: "none",
    transition: "all 0.3s ease",
  },
  textarea: {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    background: "rgba(0, 0, 0, 0.3)",
    color: "white",
    fontSize: "15px",
    outline: "none",
    resize: "vertical",
    minHeight: "150px",
    transition: "all 0.3s ease",
  },
  submitBtn: {
    width: "100%",
    padding: "16px",
    background: "linear-gradient(135deg, #ec4899, #db2777)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "800",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  contactInfo: {
    flex: "1 1 300px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    justifyContent: "center",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    background: "rgba(255, 255, 255, 0.03)",
    padding: "20px",
    borderRadius: "15px",
  },
  contactIcon: {
    fontSize: "30px",
  },
  socialLinks: {
    display: "flex",
    gap: "15px",
    color: "#06b6d4",
    fontSize: "14px",
    marginTop: "5px",
  },
  socialIcon: {
    cursor: "pointer",
    textDecoration: "underline",
  },
  footer: {
    background: "#0a0a16",
    color: "#cbd5e1",
    textAlign: "center",
    padding: "60px 20px 30px",
    fontSize: "14px",
    borderTop: "1px solid rgba(255, 255, 255, 0.05)",
  },
  footerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
    textAlign: "left",
  },
  footerSection: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(5, 5, 15, 0.9)',
    backdropFilter: 'blur(10px)',
    zIndex: 3000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  },
  modalContent: {
    background: 'linear-gradient(135deg, #1a1a3e, #0f0f23)',
    width: '100%',
    maxWidth: '450px',
    borderRadius: '24px',
    padding: '40px',
    position: 'relative',
    border: '1px solid rgba(6, 182, 212, 0.3)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
  },
  modalClose: {
    position: 'absolute',
    top: '20px',
    right: '25px',
    background: 'none',
    border: 'none',
    color: '#cbd5e1',
    fontSize: '20px',
    cursor: 'pointer'
  },
  modalTitle: {
    fontSize: '32px',
    background: 'linear-gradient(135deg, #06b6d4, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '10px',
    fontWeight: '800'
  },
  modalSubtitle: {
    color: '#cbd5e1',
    marginBottom: '30px',
    fontSize: '14px'
  },
  authForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  authToggle: {
    marginTop: '25px',
    textAlign: 'center',
    fontSize: '14px'
  },
  toggleLink: {
    color: '#06b6d4',
    cursor: 'pointer',
    fontWeight: '600',
    textDecoration: 'underline'
  },
  desktopOnly: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  }
};

