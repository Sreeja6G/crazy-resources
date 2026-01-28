import React, { useState } from "react";

export default function CodingOpportunities({ setCurrentPage }) {
  const [expandedOpportunity, setExpandedOpportunity] = useState(null);
  const [hoveredOpportunity, setHoveredOpportunity] = useState(null);

  const opportunities = [
    {
      id: 1,
      title: "CodeChef Long Contest",
      category: "Contest",
      difficulty: "Beginner to Advanced",
      prize: "INR 50,000+ Monthly",
      frequency: "Monthly",
      description: "10-day long challenges with prizes and ratings. Build your competitive programming skills.",
      link: "https://www.codechef.com",
      benefits: ["Cash prizes", "Rating boost", "Mentorship", "Networking"],
      skills: ["Problem Solving", "Algorithms", "Data Structures"],
    },
    {
      id: 2,
      title: "LeetCode Contests",
      category: "Contest",
      difficulty: "All Levels",
      prize: "Leaderboard Ranking",
      frequency: "Weekly",
      description: "Weekly contests with global participants. Prepare for tech interviews while competing.",
      link: "https://leetcode.com/contest",
      benefits: ["Interview prep", "Global competition", "Quality problems", "Ratings"],
      skills: ["Algorithms", "Problem Solving", "Interview Skills"],
    },
    {
      id: 3,
      title: "Codeforces Contests",
      category: "Contest",
      difficulty: "Intermediate to Advanced",
      prize: "Rating Points",
      frequency: "Weekly",
      description: "Competitive programming contests with top participants worldwide. Improve your rating and skills.",
      link: "https://codeforces.com",
      benefits: ["Competitive environment", "Strong community", "Quality problems", "Global ranking"],
      skills: ["Competitive Programming", "Algorithms", "Optimization"],
    },
    {
      id: 4,
      title: "HackerRank Challenges",
      category: "Challenge",
      difficulty: "Beginner to Intermediate",
      prize: "Badges & Certificates",
      frequency: "Continuous",
      description: "Problem-solving challenges with detailed tutorials. Build practical coding skills.",
      link: "https://www.hackerrank.com",
      benefits: ["Certificates", "Skill badges", "Interview prep", "Job board access"],
      skills: ["Programming", "Problem Solving", "Multiple Languages"],
    },
    {
      id: 5,
      title: "HackerEarth Hackathons",
      category: "Hackathon",
      difficulty: "All Levels",
      prize: "INR 5,00,000+ per event",
      frequency: "Monthly/Quarterly",
      description: "Online hackathons where you build projects and compete for prizes. Great for portfolios.",
      link: "https://www.hackerearth.com/challenges",
      benefits: ["Project building", "Cash prizes", "Internship offers", "Portfolio boost"],
      skills: ["Full Stack Dev", "Problem Solving", "Teamwork"],
    },
    {
      id: 6,
      title: "Google Kickstart",
      category: "Contest",
      difficulty: "Intermediate to Advanced",
      prize: "Leaderboard & Swag",
      frequency: "Quarterly",
      description: "Google's online programming competition. Direct entry to Google hiring for top performers.",
      link: "https://www.google.com/kickstart",
      benefits: ["Google recognition", "Interview opportunities", "Internship consideration", "Learning"],
      skills: ["Algorithms", "Optimization", "Problem Solving"],
    },
    {
      id: 7,
      title: "Meta Hacker Cup",
      category: "Contest",
      difficulty: "Advanced",
      prize: "Leaderboard Ranking",
      frequency: "Yearly",
      description: "Facebook's prestigious programming tournament with online rounds and finals.",
      link: "https://www.facebook.com/hackercup",
      benefits: ["Meta recognition", "Interview potential", "Challenge", "Global competition"],
      skills: ["Advanced Algorithms", "Optimization", "Problem Solving"],
    },
    {
      id: 8,
      title: "Internship Hiring Drives",
      category: "Opportunity",
      difficulty: "Varies",
      prize: "Paid Internships",
      frequency: "Year-round",
      description: "On campus and off-campus recruiting drives by tech companies. Launch your career.",
      link: "https://www.linkedin.com/jobs",
      benefits: ["Job offers", "Experience", "Salary", "Network"],
      skills: ["Interviews", "Communication", "Technical Skills"],
    },
    {
      id: 9,
      title: "Bug Bounty Programs",
      category: "Opportunity",
      difficulty: "Intermediate to Advanced",
      prize: "USD 500 - $50,000+",
      frequency: "Continuous",
      description: "Find security vulnerabilities in applications and earn money. Help companies stay secure.",
      link: "https://hackerone.com",
      benefits: ["Cash rewards", "Security skills", "Portfolio", "Recognition"],
      skills: ["Security", "Penetration Testing", "Problem Finding"],
    },
    {
      id: 10,
      title: "AtCoder Contests",
      category: "Contest",
      difficulty: "All Levels",
      prize: "Ratings",
      frequency: "Weekly",
      description: "Japanese competitive programming platform with high-quality problems. Educational approach.",
      link: "https://atcoder.jp",
      benefits: ["Quality problems", "Educational", "Community", "Global ranking"],
      skills: ["Algorithms", "Problem Solving", "Competitive Programming"],
    },
    {
      id: 11,
      title: "Open Source Contributions",
      category: "Opportunity",
      difficulty: "Beginner to Advanced",
      prize: "Portfolio & Experience",
      frequency: "Continuous",
      description: "Contribute to open-source projects, build your portfolio, and gain real-world experience.",
      link: "https://github.com",
      benefits: ["Portfolio building", "Experience", "Recognition", "Networking"],
      skills: ["Programming", "Collaboration", "Version Control"],
    },
    {
      id: 12,
      title: "Internship Platforms",
      category: "Opportunity",
      difficulty: "Varies",
      prize: "Internship Roles",
      frequency: "Year-round",
      description: "Find and apply for internships directly. Connect with startups and MNCs.",
      link: "https://internshala.com",
      benefits: ["Job opportunities", "Experience", "Mentorship", "Network"],
      skills: ["Interview Skills", "Technical Knowledge", "Communication"],
    },
  ];

  const categoryColors = {
    "Contest": "#3b82f6",
    "Challenge": "#8b5cf6",
    "Hackathon": "#ec4899",
    "Opportunity": "#06b6d4",
  };

  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>🚀 Crazy Resources</h1>
        <button onClick={() => setCurrentPage("home")} style={styles.backButton}>
          ← Back to Home
        </button>
      </nav>

      {/* Main Content */}
      <section style={styles.mainSection}>
        <div style={styles.content}>
          <h2 style={styles.title}>💻 Coding Opportunities</h2>
          <p style={styles.subtitle}>
            Competitive programming contests, hackathons, and internship opportunities to boost your career
          </p>

          {/* Stats */}
          <div style={styles.statsContainer}>
            <div style={styles.statBox}>
              <div style={styles.statNumber}>12</div>
              <div style={styles.statLabel}>Opportunities</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statNumber}>50L+</div>
              <div style={styles.statLabel}>Total Prize Pool</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statNumber}>100K+</div>
              <div style={styles.statLabel}>Participants Yearly</div>
            </div>
          </div>

          {/* Opportunities Grid */}
          <div style={styles.opportunitiesGrid}>
            {opportunities.map((opportunity) => (
              <div
                key={opportunity.id}
                onMouseEnter={() => setHoveredOpportunity(opportunity.id)}
                onMouseLeave={() => setHoveredOpportunity(null)}
                style={{
                  ...styles.opportunityCard,
                  borderTopColor: categoryColors[opportunity.category],
                  animationDelay: `${opportunity.id * 0.08}s`,
                  ...(hoveredOpportunity === opportunity.id && {
                    transform: "translateY(-8px) scale(1.02)",
                    boxShadow: `0 8px 30px rgba(0, 0, 0, 0.4), 0 0 30px ${categoryColors[opportunity.category]}33`,
                    borderColor: `${categoryColors[opportunity.category]}66`,
                  }),
                }}
              >
                <div style={styles.cardHeader}>
                  <div style={styles.cardHeaderTop}>
                    <h3 style={styles.opportunityTitle}>{opportunity.title}</h3>
                    <span
                      style={{
                        ...styles.categoryBadge,
                        backgroundColor: categoryColors[opportunity.category],
                      }}
                    >
                      {opportunity.category}
                    </span>
                  </div>
                </div>

                <div style={styles.infoGrid}>
                  <div style={styles.infoItem}>
                    <span style={styles.infoLabel}>Difficulty:</span>
                    <span style={styles.infoValue}>{opportunity.difficulty}</span>
                  </div>
                  <div style={styles.infoItem}>
                    <span style={styles.infoLabel}>Prize:</span>
                    <span style={styles.infoValue}>{opportunity.prize}</span>
                  </div>
                  <div style={styles.infoItem}>
                    <span style={styles.infoLabel}>Frequency:</span>
                    <span style={styles.infoValue}>{opportunity.frequency}</span>
                  </div>
                </div>

                <p style={styles.description}>{opportunity.description}</p>

                <button
                  onClick={() => setExpandedOpportunity(
                    expandedOpportunity === opportunity.id ? null : opportunity.id
                  )}
                  style={styles.expandButton}
                >
                  {expandedOpportunity === opportunity.id ? "Show Less ▲" : "Show More ▼"}
                </button>

                {expandedOpportunity === opportunity.id && (
                  <div style={styles.expandedContent}>
                    <div style={styles.benefitsSection}>
                      <h4 style={styles.sectionTitle}>🎁 Benefits:</h4>
                      <div style={styles.benefitsList}>
                        {opportunity.benefits.map((benefit, idx) => (
                          <div key={idx} style={styles.benefitItem}>
                            ✅ {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={styles.skillsSection}>
                      <h4 style={styles.sectionTitle}>📚 Skills Needed:</h4>
                      <div style={styles.skillsList}>
                        {opportunity.skills.map((skill, idx) => (
                          <span key={idx} style={styles.skillTag}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={opportunity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.actionLink}
                    >
                      🔗 Visit Website
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div style={styles.tipsSection}>
            <h3 style={styles.tipsTitle}>💡 Tips to Succeed</h3>
            <div style={styles.tipsGrid}>
              <div style={styles.tipCard}>
                <span style={styles.tipIcon}>🎯</span>
                <h4>Start Small</h4>
                <p>Begin with beginner-level contests. Build confidence gradually.</p>
              </div>
              <div style={styles.tipCard}>
                <span style={styles.tipIcon}>⏰</span>
                <h4>Practice Regularly</h4>
                <p>Solve problems daily. Consistency is key to improvement.</p>
              </div>
              <div style={styles.tipCard}>
                <span style={styles.tipIcon}>👥</span>
                <h4>Join Communities</h4>
                <p>Connect with other participants. Learn from solutions and discussions.</p>
              </div>
              <div style={styles.tipCard}>
                <span style={styles.tipIcon}>📖</span>
                <h4>Learn Concepts</h4>
                <p>Master algorithms and data structures before competing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(135deg, #0f172a, #1e1b4b, #16213e)",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#f1f5f9",
  },
  keyframes: `
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    @keyframes glow {
      0%, 100% {
        box-shadow: 0 0 20px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.1);
      }
      50% {
        box-shadow: 0 0 40px rgba(6, 182, 212, 0.6), inset 0 0 30px rgba(6, 182, 212, 0.2);
      }
    }
    @keyframes shimmer {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }
    @keyframes pulse-scale {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.02); }
    }
  `,
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "2px solid rgba(6, 182, 212, 0.2)",
    backdropFilter: "blur(10px)",
  },
  logo: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#06b6d4",
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
  },
  content: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "48px",
    color: "#06b6d4",
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
  statsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    marginBottom: "50px",
  },
  statBox: {
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(139, 92, 246, 0.15))",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    transition: "all 0.3s ease",
    animation: "pulse-scale 2s ease-in-out infinite",
  },
  statNumber: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#06b6d4",
    marginBottom: "8px",
    textShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
  },
  statLabel: {
    fontSize: "14px",
    color: "#cbd5e1",
  },
  opportunitiesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
    marginBottom: "50px",
  },
  opportunityCard: {
    background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 27, 75, 0.9))",
    border: "2px solid rgba(100, 116, 139, 0.2)",
    borderRadius: "16px",
    borderTop: "4px solid",
    padding: "28px",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    animation: "slideInUp 0.6s ease-out forwards",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3), 0 0 20px rgba(6, 182, 212, 0.1)",
  },
  cardHeader: {
    marginBottom: "16px",
  },
  cardHeaderTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "12px",
  },
  opportunityTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: 0,
    flex: 1,
  },
  categoryBadge: {
    padding: "6px 12px",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: "600",
    color: "#fff",
    whiteSpace: "nowrap",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "12px",
    marginBottom: "16px",
  },
  infoItem: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  infoLabel: {
    fontSize: "12px",
    color: "#94a3b8",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  infoValue: {
    fontSize: "14px",
    color: "#f1f5f9",
    fontWeight: "500",
  },
  description: {
    fontSize: "14px",
    color: "#cbd5e1",
    margin: "16px 0",
    lineHeight: "1.5",
  },
  expandButton: {
    width: "100%",
    padding: "10px",
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.1))",
    color: "#06b6d4",
    border: "1.5px solid rgba(6, 182, 212, 0.4)",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  expandedContent: {
    marginTop: "16px",
    paddingTop: "16px",
    borderTop: "1px solid rgba(100, 116, 139, 0.2)",
  },
  benefitsSection: {
    marginBottom: "16px",
  },
  skillsSection: {
    marginBottom: "16px",
  },
  sectionTitle: {
    fontSize: "13px",
    fontWeight: "700",
    color: "#fbbf24",
    margin: "0 0 10px 0",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  benefitsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "8px",
  },
  benefitItem: {
    background: "rgba(34, 197, 94, 0.1)",
    color: "#86efac",
    padding: "8px 12px",
    borderRadius: "6px",
    fontSize: "12px",
    border: "1px solid rgba(34, 197, 94, 0.2)",
  },
  skillsList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  skillTag: {
    background: "rgba(139, 92, 246, 0.15)",
    color: "#d8b4fe",
    padding: "6px 12px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "500",
    border: "1px solid rgba(139, 92, 246, 0.3)",
  },
  actionLink: {
    display: "inline-block",
    marginTop: "12px",
    padding: "10px 16px",
    background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "600",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 4px 12px rgba(6, 182, 212, 0.3)",
    border: "1px solid rgba(6, 182, 212, 0.5)",
  },
  tipsSection: {
    background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 27, 75, 0.9))",
    border: "2px solid rgba(251, 191, 36, 0.2)",
    borderRadius: "16px",
    padding: "40px",
  },
  tipsTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#fbbf24",
    textAlign: "center",
  },
  tipsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  tipCard: {
    background: "rgba(30, 27, 75, 0.6)",
    padding: "24px",
    borderRadius: "12px",
    border: "1px solid rgba(251, 191, 36, 0.2)",
    textAlign: "center",
    transition: "all 0.3s ease",
    animation: "float 3s ease-in-out infinite",
  },
  tipIcon: {
    fontSize: "32px",
    display: "block",
    marginBottom: "12px",
  },
};
