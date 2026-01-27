import { useState } from "react";
import Hero from "./Hero";

export default function Home({ setCurrentPage, setSelectedInternship, userData }) {
  const [activeNav, setActiveNav] = useState("home");
  const [showWelcome, setShowWelcome] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("crazyResourcesUser");
    setCurrentPage("login");
  };

  return (
    <div style={styles.container}>
      {/* Welcome Toast Banner */}
      {showWelcome && (
        <div style={styles.welcomeToast}>
          <span style={{ marginRight: "10px" }}>👋 Hey! Welcome to Crazy Resources! 🎉</span>
          <button 
            onClick={() => setShowWelcome(false)}
            style={styles.toastCloseBtn}
          >
            ✕
          </button>
        </div>
      )}

      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>🚀 Crazy Resources</h1>
        <div style={styles.navLinks}>
          <a
            style={{
              ...styles.navLink,
              ...(activeNav === "home" ? styles.navLinkActive : {}),
            }}
            onClick={() => setActiveNav("home")}
          >
            Home
          </a>
          <a
            style={{
              ...styles.navLink,
              ...(activeNav === "internships" ? styles.navLinkActive : {}),
            }}
            onClick={() => {
              setSelectedInternship(null);
              setCurrentPage("internships");
            }}
          >
            Internships
          </a>
          <a
            style={{
              ...styles.navLink,
              ...(activeNav === "hackathons" ? styles.navLinkActive : {}),
            }}
            onClick={() => setCurrentPage("hackathons")}
          >
            Hackathons
          </a>
          <a
            style={{
              ...styles.navLink,
            }}
            onClick={() => setCurrentPage("admin-dashboard")}
            title="View all registered students"
          >
            📊 Admin
          </a>
        </div>
        <div style={styles.userSection}>
          {userData && (
            <>
              <div style={styles.userInfo}>
                <span style={styles.userGreeting}>👤 {userData.name || userData.email}</span>
              </div>
              <button 
                onClick={handleLogout}
                style={styles.logoutBtn}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Hero />
        </div>
      </section>

      {/* Opportunities Section */}
      <section style={styles.opportunitiesSection}>
        <div style={styles.opportunitiesContainer}>
          <h2 style={styles.opportunitiesTitle}>🎯 Opportunities</h2>
          <div style={styles.opportunitiesGrid}>
            {/* Internships Card */}
            <div 
              style={styles.opportunityCard}
              onClick={() => setCurrentPage("internships")}
            >
              <div style={styles.cardIcon}>💼</div>
              <h3 style={styles.cardTitle}>Internships</h3>
              <p style={styles.cardDescription}>
                Discover amazing internship opportunities from top companies. Build your experience and kickstart your career.
              </p>
              <button 
                style={styles.cardButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentPage("internships");
                }}
              >
                Explore →
              </button>
            </div>

            {/* Hackathons Card */}
            <div 
              style={styles.opportunityCard}
              onClick={() => setCurrentPage("hackathons")}
            >
              <div style={styles.cardIcon}>🏆</div>
              <h3 style={styles.cardTitle}>Hackathons</h3>
              <p style={styles.cardDescription}>
                Participate in exciting hackathons and win amazing prizes. Showcase your coding skills and creativity.
              </p>
              <button 
                style={styles.cardButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentPage("hackathons");
                }}
              >
                Participate →
              </button>
            </div>

            {/* Cyber Security Card */}
            <div 
              style={styles.opportunityCard}
              onClick={() => setCurrentPage("cyber-security")}
            >
              <div style={styles.cardIcon}>🔐</div>
              <h3 style={styles.cardTitle}>Cyber Security</h3>
              <p style={styles.cardDescription}>
                Learn cybersecurity fundamentals, ethical hacking, and secure coding practices. Protect the digital world.
              </p>
              <button 
                style={styles.cardButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentPage("cyber-security");
                }}
              >
                Learn Now →
              </button>
            </div>

            {/* English Communication Card */}
            <div 
              style={styles.opportunityCard}
              onClick={() => setCurrentPage("english-communication")}
            >
              <div style={styles.cardIcon}>📚</div>
              <h3 style={styles.cardTitle}>English Communication</h3>
              <p style={styles.cardDescription}>
                Practice your English communication skills with daily one-hour sessions. Improve your speaking, listening, and confidence.
              </p>
              <button 
                style={styles.cardButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentPage("english-communication");
                }}
              >
                Start Now →
              </button>
            </div>

            {/* Support Team Card */}
            <div 
              style={styles.opportunityCard}
              onClick={() => setCurrentPage("support-team")}
            >
              <div style={styles.cardIcon}>🤝</div>
              <h3 style={styles.cardTitle}>Support Team</h3>
              <p style={styles.cardDescription}>
                Join our support team and help fellow students. Get mentorship and leadership experience while building community.
              </p>
              <button 
                style={styles.cardButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentPage("support-team");
                }}
              >
                Join Now →
              </button>
            </div>

            {/* Roadmaps Card */}
            <div 
              style={styles.opportunityCard}
              onClick={() => setCurrentPage("roadmaps")}
            >
              <div style={styles.cardIcon}>🗺️</div>
              <h3 style={styles.cardTitle}>Roadmaps</h3>
              <p style={styles.cardDescription}>
                Follow structured learning roadmaps for various technologies and skills. Achieve your learning goals step by step.
              </p>
              <button 
                style={styles.cardButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentPage("roadmaps");
                }}
              >
                View Roadmaps →
              </button>
            </div>

            {/* Money-Making Skills Card */}
            <div 
              style={styles.opportunityCard}
              onClick={() => setCurrentPage("money-making-skills")}
            >
              <div style={styles.cardIcon}>💰</div>
              <h3 style={styles.cardTitle}>Money-Making Skills</h3>
              <p style={styles.cardDescription}>
                Learn freelance skills like video editing, content writing, digital marketing & more. Earn money while studying!
              </p>
              <div style={styles.skillsPreview}>
                <span style={styles.skillBadge}>📹 Video Editing</span>
                <span style={styles.skillBadge}>✏️ Content Writing</span>
                <span style={styles.skillBadge}>📱 Digital Marketing</span>
                <span style={styles.skillBadge}>🎨 Graphic Design</span>
                <span style={styles.skillBadge}>💼 Business</span>
                <span style={styles.skillBadge}>🚀 Startups</span>
              </div>
              <button 
                style={styles.cardButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentPage("money-making-skills");
                }}
              >
                Explore Skills →
              </button>
            </div>

            {/* AI Tools Card */}
            <div 
              style={styles.opportunityCard}
              onClick={() => setCurrentPage("ai-tools")}
            >
              <div style={styles.cardIcon}>🤖</div>
              <h3 style={styles.cardTitle}>AI Tools</h3>
              <p style={styles.cardDescription}>
                Discover powerful AI tools across different domains. From coding to design, gaming to presentations - explore cutting-edge AI solutions.
              </p>
              <button 
                style={styles.cardButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentPage("ai-tools");
                }}
              >
                Explore Tools →
              </button>
            </div>

            {/* Learn Coding Basics Card */}
            <div 
              style={styles.opportunityCard}
              onClick={() => setCurrentPage("coding-basics")}
            >
              <div style={styles.cardIcon}>📖</div>
              <h3 style={styles.cardTitle}>Learn Coding</h3>
              <p style={styles.cardDescription}>
                Beginner-friendly guide to coding. Learn what is coding, choose your first language, and start building projects today!
              </p>
              <button 
                style={styles.cardButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentPage("coding-basics");
                }}
              >
                Start Learning →
              </button>
            </div>

            {/* Coding Opportunities Card */}
            <div 
              style={styles.opportunityCard}
              onClick={() => setCurrentPage("coding-opportunities")}
            >
              <div style={styles.cardIcon}>💻</div>
              <h3 style={styles.cardTitle}>Coding Opportunities</h3>
              <p style={styles.cardDescription}>
                Find competitive programming contests, coding challenges, and internship opportunities. Build your coding portfolio and win prizes.
              </p>
              <button 
                style={styles.cardButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentPage("coding-opportunities");
                }}
              >
                Explore Now →
              </button>
            </div>

            {/* Free Courses Card */}
            <div 
              style={styles.opportunityCard}
              onClick={() => setCurrentPage("free-courses")}
            >
              <div style={styles.cardIcon}>🎓</div>
              <h3 style={styles.cardTitle}>Free Courses & Certifications</h3>
              <p style={styles.cardDescription}>
                Access free online courses from top platforms. Earn industry-recognized certifications to boost your resume and career prospects.
              </p>
              <button 
                style={styles.cardButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentPage("free-courses");
                }}
              >
                Learn & Earn →
              </button>
            </div>

            {/* Fresh Jobs Card */}
            <div 
              style={styles.opportunityCard}
              onClick={() => setCurrentPage("jobs")}
            >
              <div style={styles.cardIcon}>💼</div>
              <h3 style={styles.cardTitle}>Fresh Job Opportunities</h3>
              <p style={styles.cardDescription}>
                Discover entry-level jobs perfect for engineering freshers with no experience. Apply to top companies with competitive salaries.
              </p>
              <button 
                style={styles.cardButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentPage("jobs");
                }}
              >
                Explore Jobs →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.aboutSection}>
        <div style={styles.aboutContainer}>
          <h2 style={styles.aboutTitle}>📖 About Crazy Resources</h2>
          <div style={styles.aboutContent}>
            <div style={styles.aboutBox}>
              <h3 style={styles.aboutSubtitle}>🎯 Our Mission</h3>
              <p style={styles.aboutText}>
                We are dedicated to empowering students by providing access to free resources, mentorship, and opportunities. Our goal is to bridge the gap between education and industry-ready skills.
              </p>
            </div>
            <div style={styles.aboutBox}>
              <h3 style={styles.aboutSubtitle}>💡 What We Offer</h3>
              <p style={styles.aboutText}>
                From internship opportunities and hackathons to skill development programs, we provide a comprehensive platform for students to grow, learn, and excel in their careers.
              </p>
            </div>
            <div style={styles.aboutBox}>
              <h3 style={styles.aboutSubtitle}>❤️ Our Values</h3>
              <p style={styles.aboutText}>
                We believe in collaboration, innovation, and inclusivity. Every student deserves access to quality resources and guidance to succeed in their journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section style={styles.foundersSection}>
        <div style={styles.foundersContainer}>
          <h2 style={styles.foundersTitle}>👥 Meet Our Founders</h2>
          <p style={styles.foundersSubtitle}>Built by Students, for Students ❤️</p>
          <div style={styles.foundersGrid}>
            {/* Founder 1 */}
            <div style={styles.founderCard}>
              <div style={styles.founderPhotoContainer}>
                <img 
                  src="/sreeja.jpeg"
                  alt="Sreeja" 
                  style={styles.founderPhoto}
                />
              </div>
              <h3 style={styles.founderName}>✨ Sreeja</h3>
              <p style={styles.founderRole}>Content Creator & Product Lead</p>
              
              <div style={styles.founderAboutBox}>
                <p style={styles.founderAboutText}>
                  Creative entrepreneur transforming startup visions into reality. B.Tech student with a passion for building communities and creating meaningful impact through innovative content and strategic product development.
                </p>
              </div>
              
              <div style={styles.founderPassionBox}>
                <p style={styles.founderPassionTitle}>🔥 Passionate About:</p>
                <ul style={styles.founderPassionList}>
                  <li>Content creation & storytelling</li>
                  <li>Building startups from scratch</li>
                  <li>Community building</li>
                </ul>
              </div>

              <a 
                href="https://www.instagram.com/coding_with_sree?igsh=MWVmanIycGVneXQ2NA==" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.founderInstagramLink}
              >
                📸 Instagram
              </a>
            </div>

            {/* Founder 2 */}
            <div style={styles.founderCard}>
              <div style={styles.founderPhotoContainer}>
                <img 
                  src="/saikiran.jpeg"
                  alt="Sai Kiran" 
                  style={styles.founderPhoto}
                />
              </div>
              <h3 style={styles.founderName}>🔐 Sai Kiran</h3>
              <p style={styles.founderRole}>Builder & Tech Lead</p>
              
              <div style={styles.founderAboutBox}>
                <p style={styles.founderAboutText}>
                  Cybersecurity expert and innovative problem solver. B.Tech student building his own startup with a vision to secure the digital world and empower developers with secure, scalable products.
                </p>
              </div>
              
              <div style={styles.founderPassionBox}>
                <p style={styles.founderPassionTitle}>🔥 Passionate About:</p>
                <ul style={styles.founderPassionList}>
                  <li>Cybersecurity & ethical hacking</li>
                  <li>Building innovative products</li>
                  <li>Tech mentorship & leadership</li>
                </ul>
              </div>

              <a 
                href="https://www.instagram.com/saikiran_instagram" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.founderInstagramLink}
              >
                📸 Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section style={styles.contactSection}>
        <div style={styles.contactContainer}>
          <h2 style={styles.contactTitle}>📧 Get In Touch</h2>
          <p style={styles.contactSubtitle}>Have questions? We'd love to hear from you!</p>
          <div style={styles.contactContent}>
            <div style={styles.contactBox}>
              <div style={styles.contactIcon}>📧</div>
              <h3 style={styles.contactLabel}>Email</h3>
              <p style={styles.contactInfo}>contact@crazyresources.com</p>
            </div>
            <div style={styles.contactBox}>
              <div style={styles.contactIcon}>🌐</div>
              <h3 style={styles.contactLabel}>Social Media</h3>
              <p style={styles.contactInfo}>@crazyresources</p>
            </div>
            <div style={styles.contactBox}>
              <div style={styles.contactIcon}>💬</div>
              <h3 style={styles.contactLabel}>Discord</h3>
              <p style={styles.contactInfo}>Join our community</p>
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
    position: "sticky",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    background: "linear-gradient(135deg, rgba(15, 15, 35, 0.95), rgba(26, 26, 62, 0.95))",
    backdropFilter: "blur(10px)",
    borderBottom: "2px solid rgba(6, 182, 212, 0.2)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
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
  navLinks: {
    display: "flex",
    gap: "30px",
  },
  navLink: {
    color: "#cbd5e1",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    transition: "all 0.3s ease",
    paddingBottom: "5px",
    borderBottom: "2px solid transparent",
  },
  navLinkActive: {
    color: "#06b6d4",
    borderBottomColor: "#06b6d4",
  },
  heroSection: {
    background: "linear-gradient(135deg, rgba(15, 15, 35, 0.7), rgba(26, 26, 62, 0.7))",
    height: "90vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    transition: "all 0.5s ease",
  },
  opportunitiesSection: {
    padding: "60px 20px",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
  },
  opportunityCard: {
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(236, 72, 153, 0.1))",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "16px",
    padding: "30px",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
  cardIcon: {
    fontSize: "60px",
    marginBottom: "20px",
  },
  cardTitle: {
    fontSize: "24px",
    color: "#06b6d4",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: "16px",
    color: "#cbd5e1",
    marginBottom: "20px",
    flex: "1",
  },
  cardButton: {
    padding: "12px 30px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 24px rgba(6, 182, 212, 0.4)",
  },
  skillsPreview: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "15px",
  },
  skillBadge: {
    display: "inline-block",
    padding: "6px 12px",
    backgroundColor: "rgba(251, 191, 36, 0.2)",
    color: "#fbbf24",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "600",
    border: "1px solid rgba(251, 191, 36, 0.3)",
  },
  aboutSection: {
    padding: "60px 20px",
    background: "linear-gradient(135deg, rgba(26, 26, 62, 0.8), rgba(15, 15, 35, 0.8))",
    borderTop: "2px solid rgba(6, 182, 212, 0.2)",
  },
  aboutContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  aboutTitle: {
    fontSize: "48px",
    background: "linear-gradient(135deg, #ec4899, #06b6d4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
    marginBottom: "50px",
    fontWeight: "bold",
  },
  aboutContent: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  aboutBox: {
    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(6, 182, 212, 0.1))",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "16px",
    padding: "30px",
    textAlign: "center",
  },
  aboutSubtitle: {
    fontSize: "24px",
    color: "#06b6d4",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  aboutText: {
    fontSize: "16px",
    color: "#cbd5e1",
    lineHeight: "1.8",
    margin: "0",
  },
  foundersSection: {
    padding: "60px 20px",
    background: "linear-gradient(135deg, rgba(15, 15, 35, 0.8), rgba(26, 26, 62, 0.8))",
    borderTop: "2px solid rgba(6, 182, 212, 0.2)",
  },
  foundersContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  foundersTitle: {
    fontSize: "48px",
    background: "linear-gradient(135deg, #06b6d4, #84cc16)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  foundersSubtitle: {
    fontSize: "18px",
    color: "#cbd5e1",
    textAlign: "center",
    marginBottom: "50px",
    fontWeight: "500",
  },
  foundersGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    justifyContent: "center",
  },
  founderCard: {
    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(6, 182, 212, 0.15))",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "16px",
    padding: "30px",
    textAlign: "center",
    boxShadow: "0 8px 32px rgba(6, 182, 212, 0.15)",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  founderPhotoContainer: {
    position: "relative",
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    overflow: "hidden",
    margin: "0 auto 20px",
    border: "4px solid rgba(6, 182, 212, 0.4)",
    boxShadow: "0 12px 40px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(236, 72, 153, 0.1))",
  },
  founderPhoto: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
  },
  founderName: {
    fontSize: "24px",
    color: "#06b6d4",
    marginBottom: "8px",
    marginTop: "10px",
    fontWeight: "bold",
  },
  founderRole: {
    fontSize: "14px",
    color: "#fbbf24",
    fontWeight: "700",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  founderAboutBox: {
    background: "rgba(6, 182, 212, 0.1)",
    border: "1px solid rgba(6, 182, 212, 0.2)",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "16px",
  },
  founderAboutText: {
    fontSize: "15px",
    color: "#cbd5e1",
    lineHeight: "1.7",
    margin: "0",
  },
  founderPassionBox: {
    background: "linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(6, 182, 212, 0.15))",
    border: "2px solid rgba(236, 72, 153, 0.3)",
    borderRadius: "12px",
    padding: "16px",
    marginTop: "auto",
    boxShadow: "0 6px 20px rgba(236, 72, 153, 0.15)",
  },
  founderPassionTitle: {
    fontSize: "14px",
    fontWeight: "800",
    color: "#ec4899",
    margin: "0 0 10px 0",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  founderPassionList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    textAlign: "left",
    fontSize: "13px",
    color: "#cbd5e1",
    lineHeight: "2",
  },
  founderInstagramLink: {
    display: "inline-block",
    marginTop: "20px",
    padding: "12px 28px",
    backgroundColor: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    color: "white",
    textDecoration: "none",
    borderRadius: "10px",
    fontWeight: "800",
    fontSize: "16px",
    transition: "all 0.3s ease",
    boxShadow: "0 6px 20px rgba(240, 148, 51, 0.5), 0 0 30px rgba(236, 72, 153, 0.4)",
    cursor: "pointer",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    animation: "pulse 2s ease-in-out infinite",
  },
  contactSection: {
    padding: "60px 20px",
    background: "linear-gradient(135deg, rgba(26, 26, 62, 0.8), rgba(15, 15, 35, 0.8))",
    borderTop: "2px solid rgba(6, 182, 212, 0.2)",
  },
  contactContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  contactTitle: {
    fontSize: "48px",
    background: "linear-gradient(135deg, #ec4899, #06b6d4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  contactSubtitle: {
    fontSize: "18px",
    color: "#cbd5e1",
    textAlign: "center",
    marginBottom: "50px",
    fontWeight: "500",
  },
  contactContent: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },
  contactBox: {
    background: "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(6, 182, 212, 0.1))",
    border: "2px solid rgba(236, 72, 153, 0.3)",
    borderRadius: "16px",
    padding: "30px",
    textAlign: "center",
  },
  contactIcon: {
    fontSize: "48px",
    marginBottom: "15px",
  },
  contactLabel: {
    fontSize: "20px",
    color: "#ec4899",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  contactInfo: {
    fontSize: "16px",
    color: "#cbd5e1",
    margin: "0",
    lineHeight: "1.6",
  },
  footer: {
    background: "linear-gradient(135deg, #0a0a16, #0f0f23)",
    color: "#cbd5e1",
    textAlign: "center",
    padding: "30px",
    fontSize: "14px",
    borderTop: "2px solid rgba(6, 182, 212, 0.2)",
  },

  // Welcome Popup Styles
  welcomePopup: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000,
    backdropFilter: "blur(4px)",
    animation: "fadeIn 0.4s ease-out",
  },
  welcomeContent: {
    backgroundColor: "linear-gradient(135deg, #1a1a3e 0%, #2d1b4e 100%)",
    border: "3px solid #06b6d4",
    borderRadius: "20px",
    padding: "40px 50px",
    maxWidth: "500px",
    width: "90%",
    textAlign: "center",
    position: "relative",
    boxShadow: "0 20px 60px rgba(6, 182, 212, 0.4), 0 0 30px rgba(236, 72, 153, 0.2)",
    animation: "slideInDown 0.5s ease-out",
  },
  welcomeEmoji: {
    fontSize: "60px",
    display: "block",
    marginBottom: "15px",
    animation: "bounce 1s ease-in-out infinite",
  },
  welcomeTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #06b6d4, #ec4899, #6366f1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "15px",
    marginTop: "0",
  },
  welcomeText: {
    fontSize: "16px",
    color: "#cbd5e1",
    lineHeight: "1.6",
    marginBottom: "0",
  },
  welcomeCloseBtn: {
    position: "absolute",
    top: "15px",
    right: "15px",
    backgroundColor: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    fontSize: "24px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  },

  // Meme Popup Styles
  memePopup: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1999,
    backdropFilter: "blur(5px)",
    animation: "fadeIn 0.4s ease-out 0.3s both",
  },
  memeContent: {
    backgroundColor: "linear-gradient(135deg, #2d1b4e 0%, #1a1a3e 100%)",
    border: "4px solid #ec4899",
    borderRadius: "25px",
    padding: "45px 50px",
    maxWidth: "550px",
    width: "90%",
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(236, 72, 153, 0.5), 0 0 40px rgba(6, 182, 212, 0.2)",
    animation: "slideInUp 0.6s ease-out 0.3s both",
  },
  memeEmoji: {
    fontSize: "70px",
    display: "block",
    marginBottom: "20px",
    animation: "jiggle 0.5s ease-in-out infinite",
  },
  memeTitle: {
    fontSize: "26px",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #ec4899, #06b6d4, #fbbf24)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "15px",
    marginTop: "0",
    lineHeight: "1.4",
  },
  memeText: {
    fontSize: "16px",
    color: "#cbd5e1",
    lineHeight: "1.7",
    marginBottom: "10px",
    fontStyle: "italic",
    backgroundColor: "rgba(236, 72, 153, 0.1)",
    padding: "15px",
    borderRadius: "12px",
    border: "2px solid rgba(236, 72, 153, 0.3)",
  },
  memeSubtext: {
    fontSize: "14px",
    color: "#06b6d4",
    marginTop: "12px",
    marginBottom: "20px",
    fontWeight: "600",
  },
  memeCloseBtn: {
    padding: "12px 30px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "linear-gradient(135deg, #ec4899, #f87171)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(236, 72, 153, 0.4)",
  },

  // Welcome Toast Banner Styles
  welcomeToast: {
    position: "fixed",
    top: "70px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "linear-gradient(135deg, #06b6d4, #0891b2)",
    color: "white",
    padding: "12px 25px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "15px",
    zIndex: 1500,
    fontSize: "14px",
    fontWeight: "600",
    boxShadow: "0 4px 15px rgba(6, 182, 212, 0.4)",
    animation: "slideDown 0.5s ease-out",
    maxWidth: "90%",
  },

  // Meme Toast Banner Styles
  memeToast: {
    position: "fixed",
    top: "130px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "linear-gradient(135deg, #ec4899, #f472b6)",
    color: "white",
    padding: "12px 25px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "15px",
    zIndex: 1499,
    fontSize: "14px",
    fontWeight: "600",
    boxShadow: "0 4px 15px rgba(236, 72, 153, 0.4)",
    animation: "slideDown 0.5s ease-out 0.2s both",
    maxWidth: "90%",
  },

  // Toast Close Button
  toastCloseBtn: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    fontSize: "14px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease",
    flexShrink: 0,
  },

  // User Section Styles
  userSection: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  userInfo: {
    padding: "8px 16px",
    background: "rgba(6, 182, 212, 0.1)",
    border: "1px solid rgba(6, 182, 212, 0.2)",
    borderRadius: "8px",
  },
  userGreeting: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#06b6d4",
  },
  logoutBtn: {
    padding: "8px 20px",
    background: "linear-gradient(135deg, #ef4444, #f87171)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "13px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)",
  },
};

