import { useState } from "react";

export default function CodingBasics({ setCurrentPage }) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [expandedSection, setExpandedSection] = useState("what-is-coding");

  const languages = [
    {
      id: 1,
      name: "Python",
      emoji: "🐍",
      description: "Easiest to learn, great for beginners, powerful for data science & AI",
      basics: [
        "Variables & Data Types (int, string, list, dictionary)",
        "If-Else conditions and decision making",
        "Loops (for, while) for repetitive tasks",
        "Functions to organize code",
        "Lists and Dictionaries for storing data",
        "File handling for reading/writing files",
      ],
      learn: [
        { name: "Codecademy Python", link: "https://www.codecademy.com/learn/learn-python-3" },
        { name: "freeCodeCamp Python", link: "https://www.youtube.com/watch?v=rfscVS0vtik" },
        { name: "TutorialsPoint Python", link: "https://www.tutorialspoint.com/python" },
        { name: "GeeksforGeeks Python", link: "https://www.geeksforgeeks.org/python-tutorial" },
      ],
      practice: [
        { name: "HackerRank Python", link: "https://www.hackerrank.com/domains/python" },
        { name: "LeetCode", link: "https://leetcode.com" },
        { name: "Codewars", link: "https://www.codewars.com" },
        { name: "Edabit", link: "https://edabit.com" },
      ],
      projects: [
        "Calculator App",
        "To-Do List",
        "Number Guessing Game",
        "Weather App using API",
        "Quiz Game",
      ],
    },
    {
      id: 2,
      name: "JavaScript",
      emoji: "⚡",
      description: "Essential for web development, runs in browsers, build interactive websites",
      basics: [
        "Variables (var, let, const) and Data Types",
        "Operators and Expressions",
        "Control Flow (if-else, switch)",
        "Loops and Iterations",
        "Functions and Scope",
        "Arrays and Objects",
        "DOM Manipulation for web pages",
      ],
      learn: [
        { name: "MDN Web Docs", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "freeCodeCamp JavaScript", link: "https://www.youtube.com/watch?v=jS4aFq5-91o" },
        { name: "JavaScript.info", link: "https://javascript.info" },
        { name: "Codecademy JavaScript", link: "https://www.codecademy.com/learn/introduction-to-javascript" },
      ],
      practice: [
        { name: "Codepen", link: "https://codepen.io" },
        { name: "LeetCode JavaScript", link: "https://leetcode.com" },
        { name: "Frontend Mentor", link: "https://www.frontendmentor.io" },
        { name: "Exercism", link: "https://exercism.org" },
      ],
      projects: [
        "Interactive Portfolio Website",
        "Todo App with Local Storage",
        "Weather Application",
        "Expense Tracker",
        "Chat Application",
      ],
    },
    {
      id: 3,
      name: "Java",
      emoji: "☕",
      description: "Widely used in industry, strong OOP concepts, Android & enterprise development",
      basics: [
        "Data Types and Variables",
        "Operators and Control Statements",
        "Arrays and Collections",
        "Object-Oriented Programming (OOP)",
        "Classes and Objects",
        "Inheritance, Polymorphism, Encapsulation",
        "Exception Handling",
      ],
      learn: [
        { name: "Oracle Java Tutorials", link: "https://docs.oracle.com/javase/tutorial" },
        { name: "freeCodeCamp Java", link: "https://www.youtube.com/watch?v=eIrMbAQSU34" },
        { name: "GeeksforGeeks Java", link: "https://www.geeksforgeeks.org/java" },
        { name: "Codecademy Java", link: "https://www.codecademy.com/learn/learn-java" },
      ],
      practice: [
        { name: "HackerRank Java", link: "https://www.hackerrank.com/domains/java" },
        { name: "LeetCode Java", link: "https://leetcode.com" },
        { name: "Edabit Java", link: "https://edabit.com" },
        { name: "InterviewBit", link: "https://www.interviewbit.com" },
      ],
      projects: [
        "Bank Account System",
        "Student Management System",
        "Library Management",
        "Tic Tac Toe Game",
        "Chat Application",
      ],
    },
    {
      id: 4,
      name: "C++",
      emoji: "⚙️",
      description: "Fast and powerful, competitive programming, system software development",
      basics: [
        "Variables and Data Types",
        "Operators and Expressions",
        "Control Structures (if-else, loops)",
        "Functions and Scope",
        "Arrays and Strings",
        "Pointers and References",
        "Object-Oriented Concepts",
      ],
      learn: [
        { name: "GeeksforGeeks C++", link: "https://www.geeksforgeeks.org/c-plus-plus" },
        { name: "freeCodeCamp C++", link: "https://www.youtube.com/watch?v=vLnPJ8Di_ao" },
        { name: "cplusplus.com", link: "http://www.cplusplus.com/doc/tutorial" },
        { name: "TutorialsPoint C++", link: "https://www.tutorialspoint.com/cplusplus" },
      ],
      practice: [
        { name: "Codeforces", link: "https://codeforces.com" },
        { name: "HackerRank C++", link: "https://www.hackerrank.com/domains/cpp" },
        { name: "LeetCode", link: "https://leetcode.com" },
        { name: "SPOJ", link: "https://www.spoj.com" },
      ],
      projects: [
        "Calculator Application",
        "Snake Game",
        "Library Management System",
        "Inventory Management",
        "Data Structure Visualizer",
      ],
    },
  ];

  const sections = [
    {
      id: "what-is-coding",
      title: "💻 What is Coding?",
      icon: "💡",
      content: (
        <div style={styles.sectionContent}>
          <p style={styles.paragraph}>
            <strong>Coding (Programming)</strong> is the art of giving instructions to a computer in a language it understands. 
            It's like writing recipes for the computer to follow!
          </p>
          <div style={styles.pointsGrid}>
            <div style={styles.point}>
              <div style={styles.pointIcon}>🤖</div>
              <div style={styles.pointTitle}>What You Do</div>
              <div style={styles.pointText}>Write instructions (code) that computers execute</div>
            </div>
            <div style={styles.point}>
              <div style={styles.pointIcon}>🎯</div>
              <div style={styles.pointTitle}>Why Learn?</div>
              <div style={styles.pointText}>Build apps, websites, games, solve problems automatically</div>
            </div>
            <div style={styles.point}>
              <div style={styles.pointIcon}>🚀</div>
              <div style={styles.pointTitle}>Career Path</div>
              <div style={styles.pointText}>High-paying, in-demand, work from anywhere jobs</div>
            </div>
            <div style={styles.point}>
              <div style={styles.pointIcon}>🧠</div>
              <div style={styles.pointTitle}>Develop Skills</div>
              <div style={styles.pointText}>Logic, problem-solving, creativity, patience</div>
            </div>
          </div>
          <div style={styles.exampleBox}>
            <h4>Real-World Examples of Coding:</h4>
            <ul style={styles.listStyle}>
              <li>🏦 Banking apps that manage your money</li>
              <li>📱 Instagram, YouTube, WhatsApp apps</li>
              <li>🎮 Video games you play</li>
              <li>🌐 Google, Facebook, Twitter websites</li>
              <li>🤖 AI systems like ChatGPT</li>
              <li>🛒 E-commerce platforms like Amazon, Flipkart</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "how-to-start",
      title: "🚀 How to Start Coding?",
      icon: "📖",
      content: (
        <div style={styles.sectionContent}>
          <div style={styles.stepsContainer}>
            <div style={styles.step}>
              <div style={styles.stepNumber}>1</div>
              <div style={styles.stepContent}>
                <h4>Choose a Language</h4>
                <p>Pick one programming language to start (Python is easiest for beginners!)</p>
              </div>
            </div>
            <div style={styles.step}>
              <div style={styles.stepNumber}>2</div>
              <div style={styles.stepContent}>
                <h4>Learn the Basics</h4>
                <p>Understand fundamental concepts: variables, loops, conditions, functions</p>
              </div>
            </div>
            <div style={styles.step}>
              <div style={styles.stepNumber}>3</div>
              <div style={styles.stepContent}>
                <h4>Practice Regularly</h4>
                <p>Solve coding problems on practice platforms (1-2 hours daily)</p>
              </div>
            </div>
            <div style={styles.step}>
              <div style={styles.stepNumber}>4</div>
              <div style={styles.stepContent}>
                <h4>Build Projects</h4>
                <p>Create real projects (apps, games) to apply what you learned</p>
              </div>
            </div>
            <div style={styles.step}>
              <div style={styles.stepNumber}>5</div>
              <div style={styles.stepContent}>
                <h4>Join Communities</h4>
                <p>Share your code on GitHub, participate in coding communities</p>
              </div>
            </div>
            <div style={styles.step}>
              <div style={styles.stepNumber}>6</div>
              <div style={styles.stepContent}>
                <h4>Challenge Yourself</h4>
                <p>Participate in hackathons, coding competitions, solve complex problems</p>
              </div>
            </div>
          </div>
          <div style={styles.timelineBox}>
            <h4>📅 Expected Timeline:</h4>
            <div style={styles.timelineItem}>
              <span>Basics (1 month)</span>
              <span>→</span>
              <span>Intermediate (2-3 months)</span>
              <span>→</span>
              <span>Advanced (3+ months)</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "programming-languages",
      title: "🎯 Choose Your First Language",
      icon: "🔤",
      content: (
        <div style={styles.sectionContent}>
          <div style={styles.languageGrid}>
            {languages.map((lang) => (
              <div
                key={lang.id}
                style={{
                  ...styles.languageCard,
                  ...(selectedLanguage === lang.id && styles.languageCardActive),
                }}
                onClick={() => setSelectedLanguage(selectedLanguage === lang.id ? null : lang.id)}
              >
                <div style={styles.languageEmoji}>{lang.emoji}</div>
                <h3 style={styles.languageName}>{lang.name}</h3>
                <p style={styles.languageDesc}>{lang.description}</p>
                <div style={styles.selectButton}>Click to Learn More →</div>
              </div>
            ))}
          </div>

          {/* Detailed Language View */}
          {selectedLanguage && (
            <div style={styles.languageDetails}>
              {languages
                .filter((l) => l.id === selectedLanguage)
                .map((lang) => (
                  <div key={lang.id}>
                    <h2 style={styles.detailsTitle}>
                      {lang.emoji} {lang.name} - Complete Guide
                    </h2>

                    {/* Basics Section */}
                    <div style={styles.detailSection}>
                      <h3 style={styles.detailSectionTitle}>📚 Fundamentals to Learn</h3>
                      <div style={styles.basicsList}>
                        {lang.basics.map((basic, idx) => (
                          <div key={idx} style={styles.basicItem}>
                            <span style={styles.checkmark}>✓</span> {basic}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Where to Learn */}
                    <div style={styles.detailSection}>
                      <h3 style={styles.detailSectionTitle}>📖 Where to Learn {lang.name}</h3>
                      <div style={styles.resourcesGrid}>
                        {lang.learn.map((resource, idx) => (
                          <a
                            key={idx}
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.resourceLink}
                          >
                            📚 {resource.name}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Where to Practice */}
                    <div style={styles.detailSection}>
                      <h3 style={styles.detailSectionTitle}>💪 Where to Practice {lang.name}</h3>
                      <div style={styles.resourcesGrid}>
                        {lang.practice.map((resource, idx) => (
                          <a
                            key={idx}
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.practiceLink}
                          >
                            🎯 {resource.name}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div style={styles.detailSection}>
                      <h3 style={styles.detailSectionTitle}>🏗️ Beginner Projects to Build</h3>
                      <div style={styles.projectsList}>
                        {lang.projects.map((project, idx) => (
                          <div key={idx} style={styles.projectItem}>
                            🚀 {project}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      ),
    },
    {
      id: "coding-challenges",
      title: "🏆 Coding Challenges & Competitions",
      icon: "🎮",
      content: (
        <div style={styles.sectionContent}>
          <div style={styles.challengesGrid}>
            <div style={styles.challengeCard}>
              <div style={styles.challengeIcon}>🌐</div>
              <h4>LeetCode</h4>
              <p>Interview preparation with 2000+ problems</p>
              <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" style={styles.challengeLink}>
                Visit LeetCode →
              </a>
            </div>
            <div style={styles.challengeCard}>
              <div style={styles.challengeIcon}>⚙️</div>
              <h4>Codeforces</h4>
              <p>Competitive programming contests every week</p>
              <a href="https://codeforces.com" target="_blank" rel="noopener noreferrer" style={styles.challengeLink}>
                Visit Codeforces →
              </a>
            </div>
            <div style={styles.challengeCard}>
              <div style={styles.challengeIcon}>🎯</div>
              <h4>HackerRank</h4>
              <p>Learn by solving 500+ problems with tutorials</p>
              <a href="https://www.hackerrank.com" target="_blank" rel="noopener noreferrer" style={styles.challengeLink}>
                Visit HackerRank →
              </a>
            </div>
            <div style={styles.challengeCard}>
              <div style={styles.challengeIcon}>⚡</div>
              <h4>Codewars</h4>
              <p>Gamified coding challenges with leaderboards</p>
              <a href="https://www.codewars.com" target="_blank" rel="noopener noreferrer" style={styles.challengeLink}>
                Visit Codewars →
              </a>
            </div>
            <div style={styles.challengeCard}>
              <div style={styles.challengeIcon}>💡</div>
              <h4>Project Euler</h4>
              <p>Mathematical and computational problem series</p>
              <a href="https://projecteuler.net" target="_blank" rel="noopener noreferrer" style={styles.challengeLink}>
                Visit Project Euler →
              </a>
            </div>
            <div style={styles.challengeCard}>
              <div style={styles.challengeIcon}>🎪</div>
              <h4>Coding Games</h4>
              <p>Solve problems through fun game scenarios</p>
              <a href="https://www.codingame.com" target="_blank" rel="noopener noreferrer" style={styles.challengeLink}>
                Visit CodinGame →
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "motivation",
      title: "💪 Motivation & Mindset",
      icon: "🌟",
      content: (
        <div style={styles.sectionContent}>
          <div style={styles.motivationCards}>
            <div style={styles.motivationCard}>
              <div style={styles.motivationEmoji}>🎯</div>
              <h4>Start Small, Dream Big</h4>
              <p>Every expert programmer started with "Hello World". Don't compare your beginning with someone's middle!</p>
            </div>
            <div style={styles.motivationCard}>
              <div style={styles.motivationEmoji}>⏰</div>
              <h4>Consistency Over Perfection</h4>
              <p>Code 1 hour daily = 365 hours/year. 30 min daily = Better than 10 hours once a month!</p>
            </div>
            <div style={styles.motivationCard}>
              <div style={styles.motivationEmoji}>🐛</div>
              <h4>Bugs are Your Friends</h4>
              <p>Every error teaches you something. Debugging helps you understand code deeply!</p>
            </div>
            <div style={styles.motivationCard}>
              <div style={styles.motivationEmoji}>🤝</div>
              <h4>Community Matters</h4>
              <p>Join coding communities, ask questions, help others. You're not alone in this journey!</p>
            </div>
            <div style={styles.motivationCard}>
              <div style={styles.motivationEmoji}>🚀</div>
              <h4>Build Real Projects</h4>
              <p>Building things is the best way to learn. Start with simple ideas and iterate!</p>
            </div>
            <div style={styles.motivationCard}>
              <div style={styles.motivationEmoji}>💰</div>
              <h4>Coding Changes Lives</h4>
              <p>From struggling student to ₹ 50L+ salary. Coding skills = Financial freedom!</p>
            </div>
          </div>

          <div style={styles.inspirationBox}>
            <h3>🌟 Famous Programmers Started Like You</h3>
            <div style={styles.legendsList}>
              <div style={styles.legendItem}>
                <span style={styles.legendName}>Mark Zuckerberg</span>
                <span>Built Facebook from college dorm room 🏠</span>
              </div>
              <div style={styles.legendItem}>
                <span style={styles.legendName}>Bill Gates</span>
                <span>Learned programming as teenager, created Microsoft 💻</span>
              </div>
              <div style={styles.legendItem}>
                <span style={styles.legendName}>Steve Jobs</span>
                <span>No formal CS degree, changed the world with Apple 🍎</span>
              </div>
              <div style={styles.legendItem}>
                <span style={styles.legendName}>Linus Torvalds</span>
                <span>Created Linux kernel as hobby, now powers the internet 🐧</span>
              </div>
            </div>
          </div>

          <div style={styles.quoteBox}>
            <p style={styles.quote}>
              "The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie
            </p>
            <p style={styles.quote}>
              "Don't compare yourself with anyone in this world. If you do so, you are insulting yourself." - Bill Gates
            </p>
            <p style={styles.quote}>
              "Code is poetry written for computers." - Unknown
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>💻 Learn Coding</h1>
        <button onClick={() => setCurrentPage("home")} style={styles.backButton}>
          ← Back to Home
        </button>
      </nav>

      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h2 style={styles.heroTitle}>Start Your Coding Journey Today 🚀</h2>
        <p style={styles.heroSubtitle}>
          From zero to hero: Learn programming, build projects, land your dream tech job
        </p>
      </div>

      {/* Main Content */}
      <section style={styles.mainSection}>
        <div style={styles.content}>
          {/* Section Navigation */}
          <div style={styles.sectionNav}>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                style={{
                  ...styles.sectionButton,
                  ...(expandedSection === section.id && styles.sectionButtonActive),
                }}
              >
                <span style={styles.sectionIcon}>{section.icon}</span>
                <span style={styles.sectionButtonText}>{section.title}</span>
              </button>
            ))}
          </div>

          {/* Section Content */}
          {sections.map((section) => (
            <div key={section.id}>
              {expandedSection === section.id && (
                <div style={styles.sectionContentBox}>{section.content}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer with CTA */}
      <div style={styles.ctaSection}>
        <h3 style={styles.ctaTitle}>Ready to Start Your Coding Adventure?</h3>
        <p style={styles.ctaSubtitle}>Pick a language above and begin learning today!</p>
        <div style={styles.ctaButtons}>
          <button
            onClick={() => setCurrentPage("free-courses")}
            style={styles.ctaButton1}
          >
            📚 View Free Courses
          </button>
          <button
            onClick={() => setCurrentPage("roadmaps")}
            style={styles.ctaButton2}
          >
            🛣️ View Roadmaps
          </button>
        </div>
      </div>
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
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "rgba(15, 17, 42, 0.95)",
    borderBottom: "2px solid rgba(6, 182, 212, 0.2)",
    backdropFilter: "blur(10px)",
    position: "sticky",
    top: 0,
    zIndex: 50,
  },
  logo: {
    fontSize: "28px",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #06b6d4, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  backButton: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#06b6d4",
    background: "rgba(6, 182, 212, 0.1)",
    border: "2px solid #06b6d4",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  heroSection: {
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(168, 85, 247, 0.15))",
    padding: "60px 20px",
    textAlign: "center",
    borderBottom: "2px solid rgba(6, 182, 212, 0.3)",
  },
  heroTitle: {
    fontSize: "48px",
    fontWeight: "900",
    background: "linear-gradient(135deg, #06b6d4, #ec4899, #f59e0b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "15px",
  },
  heroSubtitle: {
    fontSize: "18px",
    color: "#cbd5e1",
  },
  mainSection: {
    padding: "60px 20px",
  },
  content: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionNav: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
    marginBottom: "40px",
  },
  sectionButton: {
    padding: "16px",
    background: "rgba(30, 27, 75, 0.6)",
    border: "2px solid rgba(6, 182, 212, 0.2)",
    borderRadius: "12px",
    color: "#f1f5f9",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "15px",
    fontWeight: "600",
  },
  sectionButtonActive: {
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(168, 85, 247, 0.2))",
    borderColor: "#06b6d4",
    boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)",
  },
  sectionIcon: {
    fontSize: "20px",
  },
  sectionButtonText: {
    flex: 1,
    textAlign: "left",
  },
  sectionContentBox: {
    background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 27, 75, 0.9))",
    border: "2px solid rgba(6, 182, 212, 0.2)",
    borderRadius: "16px",
    padding: "40px",
    marginBottom: "40px",
    animation: "slideInUp 0.5s ease-out",
  },
  sectionContent: {
    color: "#f1f5f9",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.8",
    marginBottom: "25px",
    color: "#cbd5e1",
  },
  pointsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },
  point: {
    background: "rgba(30, 27, 75, 0.6)",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid rgba(6, 182, 212, 0.2)",
    textAlign: "center",
  },
  pointIcon: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  pointTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#06b6d4",
    marginBottom: "8px",
  },
  pointText: {
    fontSize: "14px",
    color: "#cbd5e1",
  },
  exampleBox: {
    background: "rgba(6, 182, 212, 0.1)",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "12px",
    padding: "20px",
  },
  listStyle: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  stepsContainer: {
    display: "grid",
    gap: "20px",
    marginBottom: "30px",
  },
  step: {
    display: "flex",
    gap: "20px",
    background: "rgba(30, 27, 75, 0.5)",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid rgba(6, 182, 212, 0.2)",
  },
  stepNumber: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#06b6d4",
    minWidth: "40px",
    textAlign: "center",
  },
  stepContent: {
    flex: 1,
  },
  timelineBox: {
    background: "rgba(6, 182, 212, 0.1)",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
  },
  timelineItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
    marginTop: "15px",
    fontSize: "15px",
  },
  languageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },
  languageCard: {
    background: "rgba(30, 27, 75, 0.6)",
    border: "2px solid rgba(100, 116, 139, 0.3)",
    borderRadius: "14px",
    padding: "25px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textAlign: "center",
  },
  languageCardActive: {
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(168, 85, 247, 0.15))",
    borderColor: "#06b6d4",
    boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)",
    transform: "translateY(-5px)",
  },
  languageEmoji: {
    fontSize: "48px",
    marginBottom: "12px",
  },
  languageName: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#06b6d4",
    marginBottom: "8px",
  },
  languageDesc: {
    fontSize: "14px",
    color: "#cbd5e1",
    marginBottom: "15px",
  },
  selectButton: {
    padding: "8px 12px",
    background: "rgba(6, 182, 212, 0.2)",
    color: "#06b6d4",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "600",
  },
  languageDetails: {
    background: "rgba(6, 182, 212, 0.05)",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "16px",
    padding: "40px",
    marginBottom: "40px",
    animation: "slideInUp 0.5s ease-out",
  },
  detailsTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#06b6d4",
    marginBottom: "30px",
  },
  detailSection: {
    marginBottom: "35px",
  },
  detailSectionTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#fbbf24",
    marginBottom: "15px",
    paddingBottom: "10px",
    borderBottom: "2px solid rgba(251, 191, 36, 0.2)",
  },
  basicsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "12px",
  },
  basicItem: {
    background: "rgba(30, 27, 75, 0.6)",
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid rgba(6, 182, 212, 0.2)",
    display: "flex",
    gap: "10px",
    fontSize: "14px",
  },
  checkmark: {
    color: "#22c55e",
    fontWeight: "bold",
    minWidth: "20px",
  },
  resourcesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "12px",
  },
  resourceLink: {
    display: "block",
    padding: "12px",
    background: "rgba(34, 197, 94, 0.15)",
    color: "#86efac",
    textDecoration: "none",
    borderRadius: "8px",
    border: "1px solid rgba(34, 197, 94, 0.3)",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.3s ease",
  },
  practiceLink: {
    display: "block",
    padding: "12px",
    background: "rgba(139, 92, 246, 0.15)",
    color: "#d8b4fe",
    textDecoration: "none",
    borderRadius: "8px",
    border: "1px solid rgba(139, 92, 246, 0.3)",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.3s ease",
  },
  projectsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "12px",
  },
  projectItem: {
    background: "rgba(6, 182, 212, 0.1)",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid rgba(6, 182, 212, 0.3)",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "14px",
  },
  challengesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  challengeCard: {
    background: "rgba(30, 27, 75, 0.6)",
    border: "2px solid rgba(6, 182, 212, 0.2)",
    borderRadius: "14px",
    padding: "25px",
    textAlign: "center",
  },
  challengeIcon: {
    fontSize: "40px",
    marginBottom: "12px",
  },
  challengeLink: {
    display: "inline-block",
    marginTop: "12px",
    padding: "10px 16px",
    background: "rgba(6, 182, 212, 0.2)",
    color: "#06b6d4",
    textDecoration: "none",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    border: "1px solid rgba(6, 182, 212, 0.3)",
  },
  motivationCards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },
  motivationCard: {
    background: "rgba(30, 27, 75, 0.6)",
    border: "2px solid rgba(251, 191, 36, 0.2)",
    borderRadius: "14px",
    padding: "25px",
    textAlign: "center",
  },
  motivationEmoji: {
    fontSize: "40px",
    marginBottom: "12px",
  },
  inspirationBox: {
    background: "rgba(168, 85, 247, 0.1)",
    border: "2px solid rgba(168, 85, 247, 0.3)",
    borderRadius: "14px",
    padding: "30px",
    marginBottom: "30px",
  },
  legendsList: {
    display: "grid",
    gap: "15px",
    marginTop: "15px",
  },
  legendItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 15px",
    background: "rgba(30, 27, 75, 0.6)",
    borderRadius: "8px",
    border: "1px solid rgba(168, 85, 247, 0.2)",
    fontSize: "14px",
  },
  legendName: {
    fontWeight: "bold",
    color: "#ec4899",
  },
  quoteBox: {
    background: "rgba(6, 182, 212, 0.05)",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "14px",
    padding: "30px",
  },
  quote: {
    fontSize: "15px",
    fontStyle: "italic",
    color: "#cbd5e1",
    marginBottom: "15px",
    paddingLeft: "15px",
    borderLeft: "4px solid #06b6d4",
  },
  ctaSection: {
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1))",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "16px",
    padding: "50px 20px",
    textAlign: "center",
    margin: "40px 20px",
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  ctaTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#06b6d4",
    marginBottom: "10px",
  },
  ctaSubtitle: {
    fontSize: "16px",
    color: "#cbd5e1",
    marginBottom: "25px",
  },
  ctaButtons: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  ctaButton1: {
    padding: "14px 28px",
    background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  ctaButton2: {
    padding: "14px 28px",
    background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};
