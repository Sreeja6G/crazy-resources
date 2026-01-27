import { useState } from "react";

export default function SkillRoadmap({ skillData, setCurrentPage }) {
  const [completedPhases, setCompletedPhases] = useState([]);

  const togglePhaseComplete = (phaseIndex) => {
    setCompletedPhases((prev) =>
      prev.includes(phaseIndex)
        ? prev.filter((i) => i !== phaseIndex)
        : [...prev, phaseIndex]
    );
  };

  const phases = [
    {
      phase: 1,
      title: "Foundation & Basics",
      duration: "Week 1-2",
      icon: "🏗️",
      description: "Learn the fundamentals",
      tasks: [
        "Understand the basics of " + skillData.name.toLowerCase(),
        "Watch 3-5 beginner tutorials",
        "Set up your workspace/tools",
        "Create your first basic project",
      ],
      resources: skillData.learnFrom.slice(0, 2),
      tools: skillData.practiceOn.filter((t) => t.difficulty === "Beginner"),
    },
    {
      phase: 2,
      title: "Skill Development",
      duration: "Week 3-6",
      icon: "🚀",
      description: "Build intermediate skills",
      tasks: [
        "Complete 2-3 intermediate projects",
        "Learn advanced features",
        "Practice daily for 1-2 hours",
        "Create 5-10 portfolio pieces",
      ],
      resources: skillData.learnFrom.slice(2, 4),
      tools: skillData.practiceOn.filter((t) =>
        t.difficulty.includes("Intermediate")
      ),
    },
    {
      phase: 3,
      title: "Mastery & Portfolio",
      duration: "Week 7-12",
      icon: "⭐",
      description: "Master the skill",
      tasks: [
        "Build 10-15 professional projects",
        "Learn advanced techniques",
        "Create your portfolio website",
        "Get feedback from professionals",
        "Refine your best work",
      ],
      resources: skillData.learnFrom.slice(4),
      tools: skillData.practiceOn.filter((t) => t.difficulty === "Advanced") ||
        skillData.practiceOn.slice(-2),
    },
    {
      phase: 4,
      title: "Getting Clients & Earning",
      duration: "Week 13+",
      icon: "💰",
      description: "Start earning money",
      tasks: [
        "Set competitive pricing (" + skillData.earning + ")",
        "Create service packages",
        "Use freelance platforms (Fiverr, Upwork)",
        "Get testimonials and reviews",
        "Scale your business",
      ],
      resources: [
        { name: "Fiverr", link: "https://www.fiverr.com/" },
        { name: "Upwork", link: "https://www.upwork.com/" },
      ],
    },
  ];

  const completionPercentage = Math.round((completedPhases.length / phases.length) * 100);

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.navbar}>
        <button
          onClick={() => setCurrentPage("money-making-skills")}
          style={styles.backButton}
        >
          ← Back to Skills
        </button>
        <h1 style={styles.pageTitle}>{skillData.emoji} {skillData.name} Roadmap</h1>
        <div style={styles.navSpacer}></div>
      </nav>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>{skillData.emoji} Master {skillData.name}</h1>
          <p style={styles.heroDesc}>{skillData.description}</p>
          <div style={styles.heroStats}>
            <div style={styles.stat}>
              <span style={styles.statValue}>⏱️</span>
              <p>{skillData.timeline}</p>
            </div>
            <div style={styles.stat}>
              <span style={styles.statValue}>💰</span>
              <p>{skillData.earning}</p>
            </div>
            <div style={styles.stat}>
              <span style={styles.statValue}>📊</span>
              <p>Effort: Medium-High</p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section style={styles.progressSection}>
        <div style={styles.progressContainer}>
          <div style={styles.progressHeader}>
            <h3 style={styles.progressTitle}>Your Progress</h3>
            <span style={styles.progressPercent}>{completionPercentage}%</span>
          </div>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: `${completionPercentage}%`,
              }}
            ></div>
          </div>
          <p style={styles.progressText}>
            {completedPhases.length} of {phases.length} phases completed
          </p>
        </div>
      </section>

      {/* Roadmap Phases */}
      <section style={styles.roadmapSection}>
        <div style={styles.roadmapContainer}>
          {phases.map((phaseData, idx) => (
            <div key={idx}>
              {/* Phase Card */}
              <div
                style={{
                  ...styles.phaseCard,
                  ...(completedPhases.includes(idx) && styles.phaseCardCompleted),
                }}
                onClick={() => togglePhaseComplete(idx)}
              >
                <div style={styles.phaseHeader}>
                  <div style={styles.phaseIcon}>{phaseData.icon}</div>
                  <div style={styles.phaseInfo}>
                    <h3 style={styles.phaseTitle}>
                      Phase {phaseData.phase}: {phaseData.title}
                    </h3>
                    <p style={styles.phaseDuration}>⏱️ {phaseData.duration}</p>
                  </div>
                  <div
                    style={{
                      ...styles.checkboxContainer,
                      ...(completedPhases.includes(idx) && styles.checkboxChecked),
                    }}
                  >
                    {completedPhases.includes(idx) && "✓"}
                  </div>
                </div>
                <p style={styles.phaseDescription}>{phaseData.description}</p>
              </div>

              {/* Phase Details */}
              <div style={styles.phaseDetails}>
                {/* Tasks */}
                <div style={styles.detailBox}>
                  <h4 style={styles.detailTitle}>📋 Key Tasks</h4>
                  <ul style={styles.taskList}>
                    {phaseData.tasks.map((task, taskIdx) => (
                      <li key={taskIdx} style={styles.taskItem}>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                {phaseData.resources && phaseData.resources.length > 0 && (
                  <div style={styles.detailBox}>
                    <h4 style={styles.detailTitle}>📚 Resources</h4>
                    <div style={styles.resourcesList}>
                      {phaseData.resources.map((resource, ridx) => (
                        <a
                          key={ridx}
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.resourceLink}
                        >
                          {resource.name || resource.name}
                          <span style={styles.externalIcon}>↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tools */}
                {phaseData.tools && phaseData.tools.length > 0 && (
                  <div style={styles.detailBox}>
                    <h4 style={styles.detailTitle}>🛠️ Recommended Tools</h4>
                    <div style={styles.toolsList}>
                      {phaseData.tools.map((tool, tidx) => (
                        <a
                          key={tidx}
                          href={tool.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.toolLink}
                        >
                          {tool.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Connector Line */}
              {idx < phases.length - 1 && <div style={styles.connector}></div>}
            </div>
          ))}
        </div>
      </section>

      {/* Pro Tips */}
      <section style={styles.tipsSection}>
        <div style={styles.tipsContainer}>
          <h2 style={styles.tipsTitle}>💡 Pro Tips for Success</h2>
          <div style={styles.tipsList}>
            {skillData.tips.map((tip, idx) => (
              <div key={idx} style={styles.tipCard}>
                <span style={styles.tipNumber}>{idx + 1}</span>
                <p style={styles.tipText}>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section style={styles.projectsSection}>
        <div style={styles.projectsContainer}>
          <h2 style={styles.projectsTitle}>🎯 Build These Projects</h2>
          <div style={styles.projectsGrid}>
            {skillData.projects.map((project, idx) => (
              <div key={idx} style={styles.projectCard}>
                <div style={styles.projectNumber}>{idx + 1}</div>
                <h3 style={styles.projectName}>{project}</h3>
                <button style={styles.projectBtn}>Start Project →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContainer}>
          <h2 style={styles.ctaTitle}>Ready to Start Learning?</h2>
          <p style={styles.ctaSubtitle}>
            Begin with Phase 1 and complete one phase at a time. Mark phases as complete as you progress!
          </p>
          <button
            style={styles.ctaButton}
            onClick={() => setCurrentPage("money-making-skills")}
          >
            Explore Other Skills
          </button>
        </div>
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
  backButton: {
    padding: "10px 20px",
    backgroundColor: "rgba(6, 182, 212, 0.2)",
    color: "#06b6d4",
    border: "2px solid #06b6d4",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
    fontSize: "14px",
  },
  pageTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #fbbf24, #06b6d4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: 0,
  },
  navSpacer: {
    width: "120px",
  },
  heroSection: {
    padding: "60px 20px",
    background: "linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(6, 182, 212, 0.1))",
    borderBottom: "2px solid rgba(251, 191, 36, 0.2)",
    textAlign: "center",
  },
  heroContent: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  heroTitle: {
    fontSize: "48px",
    fontWeight: "900",
    background: "linear-gradient(135deg, #fbbf24, #06b6d4, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "15px",
  },
  heroDesc: {
    fontSize: "18px",
    color: "#cbd5e1",
    marginBottom: "30px",
  },
  heroStats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
    marginTop: "30px",
  },
  stat: {
    padding: "15px",
    background: "rgba(26, 26, 62, 0.6)",
    borderRadius: "10px",
    border: "2px solid rgba(251, 191, 36, 0.2)",
  },
  statValue: {
    fontSize: "28px",
    display: "block",
    marginBottom: "5px",
  },
  progressSection: {
    padding: "40px 20px",
    background: "rgba(26, 26, 62, 0.3)",
  },
  progressContainer: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  progressHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },
  progressTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fbbf24",
    margin: 0,
  },
  progressPercent: {
    fontSize: "24px",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #fbbf24, #06b6d4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  progressBar: {
    width: "100%",
    height: "12px",
    background: "rgba(6, 182, 212, 0.1)",
    borderRadius: "10px",
    overflow: "hidden",
    border: "2px solid rgba(6, 182, 212, 0.2)",
  },
  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #06b6d4, #fbbf24)",
    transition: "width 0.3s ease",
    borderRadius: "8px",
  },
  progressText: {
    textAlign: "center",
    color: "#cbd5e1",
    marginTop: "10px",
    fontSize: "14px",
  },
  roadmapSection: {
    padding: "60px 20px",
  },
  roadmapContainer: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  phaseCard: {
    padding: "25px",
    background: "linear-gradient(135deg, rgba(26, 26, 62, 0.8), rgba(15, 15, 35, 0.8))",
    border: "3px solid rgba(251, 191, 36, 0.2)",
    borderRadius: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginBottom: "20px",
  },
  phaseCardCompleted: {
    background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1))",
    borderColor: "#10b981",
    boxShadow: "0 8px 25px rgba(16, 185, 129, 0.2)",
  },
  phaseHeader: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "12px",
  },
  phaseIcon: {
    fontSize: "40px",
  },
  phaseInfo: {
    flex: 1,
  },
  phaseTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#fbbf24",
    margin: "0 0 5px 0",
  },
  phaseDuration: {
    fontSize: "14px",
    color: "#06b6d4",
    margin: 0,
  },
  checkboxContainer: {
    width: "50px",
    height: "50px",
    border: "3px solid rgba(251, 191, 36, 0.3)",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    color: "#fbbf24",
    background: "rgba(251, 191, 36, 0.05)",
    transition: "all 0.3s ease",
  },
  checkboxChecked: {
    background: "linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(6, 182, 212, 0.2))",
    borderColor: "#10b981",
    color: "#10b981",
  },
  phaseDescription: {
    fontSize: "15px",
    color: "#cbd5e1",
    margin: "10px 0 0 0",
    marginLeft: "55px",
  },
  phaseDetails: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "15px",
    marginBottom: "30px",
    marginLeft: "20px",
  },
  detailBox: {
    padding: "18px",
    background: "rgba(6, 182, 212, 0.05)",
    border: "2px solid rgba(6, 182, 212, 0.2)",
    borderRadius: "10px",
  },
  detailTitle: {
    fontSize: "15px",
    fontWeight: "bold",
    color: "#fbbf24",
    margin: "0 0 12px 0",
  },
  taskList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  taskItem: {
    padding: "8px 0",
    paddingLeft: "20px",
    position: "relative",
    color: "#cbd5e1",
    fontSize: "14px",
    lineHeight: "1.5",
  },
  taskItem_before: {
    content: "'✓'",
    position: "absolute",
    left: 0,
    color: "#06b6d4",
  },
  resourcesList: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  resourceLink: {
    padding: "10px",
    background: "rgba(6, 182, 212, 0.1)",
    border: "1px solid rgba(6, 182, 212, 0.2)",
    borderRadius: "8px",
    color: "#06b6d4",
    textDecoration: "none",
    fontSize: "14px",
    transition: "all 0.3s ease",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  externalIcon: {
    fontSize: "12px",
  },
  toolsList: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  toolLink: {
    padding: "10px",
    background: "rgba(251, 191, 36, 0.1)",
    border: "1px solid rgba(251, 191, 36, 0.2)",
    borderRadius: "8px",
    color: "#fbbf24",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    transition: "all 0.3s ease",
  },
  connector: {
    width: "3px",
    height: "30px",
    background: "linear-gradient(180deg, rgba(251, 191, 36, 0.5), rgba(6, 182, 212, 0.5))",
    margin: "0 auto 20px auto",
  },
  tipsSection: {
    padding: "60px 20px",
    background: "linear-gradient(135deg, rgba(251, 191, 36, 0.05), rgba(6, 182, 212, 0.05))",
    borderTop: "2px solid rgba(251, 191, 36, 0.2)",
  },
  tipsContainer: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  tipsTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#fbbf24",
    textAlign: "center",
    marginBottom: "30px",
  },
  tipsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "15px",
  },
  tipCard: {
    padding: "20px",
    background: "rgba(26, 26, 62, 0.6)",
    border: "2px solid rgba(251, 191, 36, 0.2)",
    borderRadius: "12px",
    display: "flex",
    gap: "15px",
  },
  tipNumber: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    minWidth: "40px",
    background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
    color: "#000",
    borderRadius: "50%",
    fontWeight: "bold",
    fontSize: "16px",
  },
  tipText: {
    margin: 0,
    color: "#cbd5e1",
    fontSize: "14px",
    lineHeight: "1.6",
  },
  projectsSection: {
    padding: "60px 20px",
  },
  projectsContainer: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  projectsTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#fbbf24",
    textAlign: "center",
    marginBottom: "30px",
  },
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  projectCard: {
    padding: "25px",
    background: "linear-gradient(135deg, rgba(26, 26, 62, 0.8), rgba(15, 15, 35, 0.8))",
    border: "2px solid rgba(6, 182, 212, 0.2)",
    borderRadius: "12px",
    position: "relative",
    overflow: "hidden",
  },
  projectNumber: {
    position: "absolute",
    top: "-15px",
    right: "-15px",
    width: "60px",
    height: "60px",
    background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#000",
  },
  projectName: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#06b6d4",
    marginBottom: "15px",
    marginTop: "10px",
  },
  projectBtn: {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "14px",
  },
  ctaSection: {
    padding: "60px 20px",
    background: "linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(6, 182, 212, 0.1))",
    borderTop: "2px solid rgba(251, 191, 36, 0.2)",
    textAlign: "center",
  },
  ctaContainer: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  ctaTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #fbbf24, #06b6d4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "15px",
  },
  ctaSubtitle: {
    fontSize: "16px",
    color: "#cbd5e1",
    marginBottom: "30px",
    lineHeight: "1.6",
  },
  ctaButton: {
    padding: "15px 40px",
    background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
    color: "#000",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};
