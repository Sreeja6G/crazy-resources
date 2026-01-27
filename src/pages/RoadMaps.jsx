import React, { useState } from "react";

export default function RoadMaps({ setCurrentPage }) {
  const [selectedYear, setSelectedYear] = useState(1);
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [completedSkills, setCompletedSkills] = useState([]);

  const roadmapsData = {
    1: {
      title: "1st Year: Foundation Building",
      emoji: "🏗️",
      description: "Master the fundamentals and build a strong programming base",
      color: "#3b82f6",
      skills: [
        {
          id: "1-1",
          name: "Programming Basics (C/C++/Java)",
          description: "Learn syntax, loops, functions, OOP concepts",
          youtubeChannels: [
            { name: "Apna College", link: "https://www.youtube.com/@ApnaCollege" },
            { name: "CodeWithHarry", link: "https://www.youtube.com/@CodeWithHarry" },
            { name: "Jenny's Lectures", link: "https://www.youtube.com/@JennysLectures" },
          ],
          practiceWebsites: [
            { name: "HackerRank", link: "https://www.hackerrank.com" },
            { name: "CodeChef", link: "https://www.codechef.com" },
            { name: "HackerEarth", link: "https://www.hackerearth.com" },
          ],
          projects: [
            "Calculator App",
            "Student Management System",
            "Bank Account System",
          ],
          duration: "2-3 months",
          reward: "🏅 Beginner Coder Badge",
        },
        {
          id: "1-2",
          name: "Data Structures",
          description: "Arrays, Linked Lists, Stacks, Queues, Trees",
          youtubeChannels: [
            { name: "Abdul Bari", link: "https://www.youtube.com/@abdul_bari" },
            { name: "Striver", link: "https://www.youtube.com/@takeUforward" },
            { name: "GeeksforGeeks", link: "https://www.youtube.com/@GeeksforGeeksVideos" },
          ],
          practiceWebsites: [
            { name: "LeetCode", link: "https://leetcode.com" },
            { name: "Codeforces", link: "https://codeforces.com" },
            { name: "InterviewBit", link: "https://www.interviewbit.com" },
          ],
          projects: [
            "Build Linked List from Scratch",
            "Tree Traversal Visualizer",
            "Graph Algorithm Solver",
          ],
          duration: "2-3 months",
          reward: "💪 Data Structure Master",
        },
        {
          id: "1-3",
          name: "Web Basics (HTML/CSS/JS)",
          description: "Learn front-end fundamentals and DOM manipulation",
          youtubeChannels: [
            { name: "Traversy Media", link: "https://www.youtube.com/@traversymedia" },
            { name: "freeCodeCamp", link: "https://www.youtube.com/@freecodecamp" },
            { name: "Clever Programmer", link: "https://www.youtube.com/@CleverProgrammer" },
          ],
          practiceWebsites: [
            { name: "Codepen", link: "https://codepen.io" },
            { name: "Frontend Mentor", link: "https://www.frontendmentor.io" },
            { name: "Scrimba", link: "https://scrimba.com" },
          ],
          projects: [
            "Personal Portfolio Website",
            "Todo App with vanilla JS",
            "Weather App using API",
          ],
          duration: "1-2 months",
          reward: "🎨 Web Designer Badge",
        },
        {
          id: "1-4",
          name: "Database Basics (SQL)",
          description: "CRUD operations, joins, queries, normalization",
          youtubeChannels: [
            { name: "Studytonight", link: "https://www.youtube.com/@StudyTonight" },
            { name: "Gate Smashers", link: "https://www.youtube.com/@GateSmashers" },
            { name: "Edureka SQL", link: "https://www.youtube.com/@edurekaIN" },
          ],
          practiceWebsites: [
            { name: "SQLZoo", link: "https://sqlzoo.net" },
            { name: "Mode SQL", link: "https://mode.com/sql-tutorial" },
            { name: "DataCamp SQL", link: "https://www.datacamp.com" },
          ],
          projects: [
            "Build E-commerce Database",
            "Student Management DB",
            "Library Management System",
          ],
          duration: "1 month",
          reward: "🗄️ SQL Expert",
        },
      ],
    },
    2: {
      title: "2nd Year: Core Skill Development",
      emoji: "⚡",
      description: "Build intermediate skills and start building real projects",
      color: "#8b5cf6",
      skills: [
        {
          id: "2-1",
          name: "Advanced DSA & Algorithms",
          description: "Sorting, searching, dynamic programming, graphs",
          youtubeChannels: [
            { name: "Striver", link: "https://www.youtube.com/@takeUforward" },
            { name: "Code Help", link: "https://www.youtube.com/@codewithbabbar" },
            { name: "Neetcode", link: "https://www.youtube.com/@NeetCodeIO" },
          ],
          practiceWebsites: [
            { name: "LeetCode", link: "https://leetcode.com" },
            { name: "Codeforces", link: "https://codeforces.com" },
            { name: "Codechef", link: "https://www.codechef.com" },
          ],
          projects: [
            "Pathfinding Algorithm Visualizer",
            "Sorting Algorithm Visualizer",
            "Graph Problem Solver",
          ],
          duration: "3-4 months",
          reward: "🧠 Algorithm Ninja",
        },
        {
          id: "2-2",
          name: "Frontend Framework (React)",
          description: "Components, state management, hooks, lifecycle",
          youtubeChannels: [
            { name: "Traversy Media", link: "https://www.youtube.com/@traversymedia" },
            { name: "Code with Aarohi", link: "https://www.youtube.com/@CodeWithAarohi" },
            { name: "Scrimba React", link: "https://www.youtube.com/@scrimba" },
          ],
          practiceWebsites: [
            { name: "React Official", link: "https://react.dev" },
            { name: "Frontend Mentor", link: "https://www.frontendmentor.io" },
            { name: "DevProjects", link: "https://www.codementor.io/projects" },
          ],
          projects: [
            "E-commerce Site",
            "Movie Search App",
            "Social Media Feed Clone",
          ],
          duration: "2-3 months",
          reward: "⚛️ React Developer",
        },
        {
          id: "2-3",
          name: "Backend Development (Node.js/Express)",
          description: "REST APIs, routing, middleware, authentication",
          youtubeChannels: [
            { name: "Traversy Media", link: "https://www.youtube.com/@traversymedia" },
            { name: "Sanjeev Thiyago", link: "https://www.youtube.com/@SanjeevThiyagarajan" },
            { name: "Code with Mosh", link: "https://www.youtube.com/@programmingwithmosh" },
          ],
          practiceWebsites: [
            { name: "Node.js Docs", link: "https://nodejs.org" },
            { name: "Express Guide", link: "https://expressjs.com" },
            { name: "API Design Tips", link: "https://restfulapi.net" },
          ],
          projects: [
            "Blog API with Authentication",
            "Todo REST API",
            "User Management System",
          ],
          duration: "2-3 months",
          reward: "🔧 Backend Master",
        },
        {
          id: "2-4",
          name: "Version Control (Git/GitHub)",
          description: "Commits, branches, pull requests, collaboration",
          youtubeChannels: [
            { name: "Kunal Kushwaha", link: "https://www.youtube.com/@kunalkushwaha" },
            { name: "GitHub Learning Lab", link: "https://github.com/skills" },
            { name: "Edureka Git", link: "https://www.youtube.com/@edurekaIN" },
          ],
          practiceWebsites: [
            { name: "GitHub", link: "https://github.com" },
            { name: "Git Documentation", link: "https://git-scm.com/doc" },
            { name: "Learn Git", link: "https://learngitbranching.js.org" },
          ],
          projects: [
            "Collaborate on GitHub",
            "Contribute to Open Source",
            "Manage Team Project",
          ],
          duration: "1 month",
          reward: "🚀 Git Champion",
        },
      ],
    },
    3: {
      title: "3rd Year: Advanced Specialization",
      emoji: "🚀",
      description: "Choose specialization and build portfolio projects",
      color: "#ec4899",
      skills: [
        {
          id: "3-1",
          name: "Full Stack Development",
          description: "Build complete applications, deployment, DevOps basics",
          youtubeChannels: [
            { name: "Traversy Media", link: "https://www.youtube.com/@traversymedia" },
            { name: "The Odin Project", link: "https://www.theodinproject.com" },
            { name: "Fireship", link: "https://www.youtube.com/@Fireship" },
          ],
          practiceWebsites: [
            { name: "MERN Stack", link: "https://www.udemy.com" },
            { name: "Fullstack Open", link: "https://fullstackopen.com" },
            { name: "Project Based Learning", link: "https://github.com/practical-tutorials/project-based-learning" },
          ],
          projects: [
            "Complete E-commerce Platform",
            "Social Media App",
            "Task Management Tool",
          ],
          duration: "3 months",
          reward: "🌐 Full Stack Developer",
        },
        {
          id: "3-2",
          name: "Mobile Development (React Native)",
          description: "Mobile app development, state management, APIs",
          youtubeChannels: [
            { name: "Traversy Media", link: "https://www.youtube.com/@traversymedia" },
            { name: "React Native Docs", link: "https://reactnative.dev" },
            { name: "Expo", link: "https://www.youtube.com/@expo" },
          ],
          practiceWebsites: [
            { name: "React Native", link: "https://reactnative.dev" },
            { name: "Expo Snack", link: "https://snack.expo.dev" },
            { name: "App Ideas", link: "https://github.com/florinpop17/app-ideas" },
          ],
          projects: [
            "Todo Mobile App",
            "Weather App",
            "Note Taking App",
          ],
          duration: "2-3 months",
          reward: "📱 Mobile Developer",
        },
        {
          id: "3-3",
          name: "Advanced System Design",
          description: "Microservices, distributed systems, real case studies",
          youtubeChannels: [
            { name: "ByteByteGo", link: "https://www.youtube.com/@ByteByteGo" },
            { name: "CodeKarle", link: "https://www.youtube.com/@codekarle" },
            { name: "System Design School", link: "https://www.systemdesignschool.io" },
          ],
          practiceWebsites: [
            { name: "Grokking", link: "https://www.educative.io" },
            { name: "Designing Data-Intensive", link: "https://www.oreilly.com" },
            { name: "Real-world Case Studies", link: "https://www.infoq.com" },
          ],
          projects: [
            "Design YouTube Clone",
            "Design Twitter",
            "Design Netflix",
          ],
          duration: "3 months",
          reward: "🎯 Design Expert",
        },
        {
          id: "3-4",
          name: "DevOps & Cloud (AWS/GCP)",
          description: "Docker, Kubernetes, CI/CD, cloud deployment",
          youtubeChannels: [
            { name: "TechWorld with Nana", link: "https://www.youtube.com/@TechWorldwithNana" },
            { name: "freeCodeCamp DevOps", link: "https://www.youtube.com/@freecodecamp" },
            { name: "Cloud Guild", link: "https://www.youtube.com/@cloudguild" },
          ],
          practiceWebsites: [
            { name: "AWS Free Tier", link: "https://aws.amazon.com/free" },
            { name: "Kubernetes", link: "https://kubernetes.io" },
            { name: "Docker Hub", link: "https://hub.docker.com" },
          ],
          projects: [
            "Deploy App on AWS",
            "Setup CI/CD Pipeline",
            "Containerize Application",
          ],
          duration: "2-3 months",
          reward: "☁️ Cloud Architect",
        },
      ],
    },
    4: {
      title: "4th Year: Job Readiness & Excellence",
      emoji: "💼",
      description: "Prepare for interviews, build portfolio, land your first job",
      color: "#f59e0b",
      skills: [
        {
          id: "4-1",
          name: "Interview Preparation",
          description: "LeetCode hard problems, mock interviews, behavioral prep",
          youtubeChannels: [
            { name: "Neetcode", link: "https://www.youtube.com/@NeetCodeIO" },
            { name: "Striver SDE Sheet", link: "https://www.youtube.com/@takeUforward" },
            { name: "Kevin Naughton Jr", link: "https://www.youtube.com/@KevinNaughtonJr" },
          ],
          practiceWebsites: [
            { name: "LeetCode Premium", link: "https://leetcode.com" },
            { name: "Pramp Mock Interviews", link: "https://www.pramp.com" },
            { name: "InterviewBit", link: "https://www.interviewbit.com" },
          ],
          projects: [
            "Solve LeetCode 200+ Problems",
            "Complete Mock Interview",
            "Behavioral Question Practice",
          ],
          duration: "2-3 months",
          reward: "🎤 Interview Master",
        },
        {
          id: "4-2",
          name: "Portfolio Projects",
          description: "Build 3-5 impressive projects, contribute to open source",
          youtubeChannels: [
            { name: "Fireship", link: "https://www.youtube.com/@Fireship" },
            { name: "Traversy Media", link: "https://www.youtube.com/@traversymedia" },
            { name: "Dev Ed", link: "https://www.youtube.com/@developedbyed" },
          ],
          practiceWebsites: [
            { name: "GitHub", link: "https://github.com" },
            { name: "Dev.to", link: "https://dev.to" },
            { name: "Open Source", link: "https://opensource.guide" },
          ],
          projects: [
            "Real-world SaaS App",
            "Open Source Contribution",
            "Personal Brand Website",
          ],
          duration: "3-4 months",
          reward: "⭐ Portfolio Star",
        },
        {
          id: "4-3",
          name: "Competitive Programming",
          description: "Advanced problem solving, optimization, edge cases",
          youtubeChannels: [
            { name: "Errichto", link: "https://www.youtube.com/@Errichto" },
            { name: "Priyansh Agarwal", link: "https://www.youtube.com/@PriyanshAgarwal" },
            { name: "Geeksforgeeks", link: "https://www.youtube.com/@GeeksforGeeksVideos" },
          ],
          practiceWebsites: [
            { name: "Codeforces", link: "https://codeforces.com" },
            { name: "CodeChef", link: "https://www.codechef.com" },
            { name: "AtCoder", link: "https://atcoder.jp" },
          ],
          projects: [
            "Solve Codeforces Contests",
            "CodeChef Monthly Contests",
            "Algorithm Optimization",
          ],
          duration: "2-3 months",
          reward: "🏆 Problem Solver",
        },
        {
          id: "4-4",
          name: "Networking & Personal Brand",
          description: "LinkedIn, blogging, tech talks, community engagement",
          youtubeChannels: [
            { name: "Traversy Media", link: "https://www.youtube.com/@traversymedia" },
            { name: "Commit Your Code", link: "https://www.youtube.com/@CommitYourCode" },
            { name: "TechLead", link: "https://www.youtube.com/@TechLead" },
          ],
          practiceWebsites: [
            { name: "LinkedIn", link: "https://www.linkedin.com" },
            { name: "Medium", link: "https://medium.com" },
            { name: "Dev.to", link: "https://dev.to" },
          ],
          projects: [
            "Write 10 Tech Articles",
            "Build Personal Brand",
            "Speak at Tech Meetup",
          ],
          duration: "Ongoing",
          reward: "🤝 Network Leader",
        },
        {
          id: "4-5",
          name: "Resume & Job Applications",
          description: "Craft compelling resume, apply strategically, negotiate offers",
          youtubeChannels: [
            { name: "TechLead", link: "https://www.youtube.com/@TechLead" },
            { name: "Clément Mihăilescu", link: "https://www.youtube.com/@ClementMihailescu" },
            { name: "Joma Tech", link: "https://www.youtube.com/@JomaOppa" },
          ],
          practiceWebsites: [
            { name: "Resume.io", link: "https://resume.io" },
            { name: "Levels.fyi Salary", link: "https://www.levels.fyi" },
            { name: "LinkedIn Jobs", link: "https://www.linkedin.com/jobs" },
          ],
          projects: [
            "Create ATS-friendly Resume",
            "Apply to 50+ Companies",
            "Negotiate Offer",
          ],
          duration: "1-2 months",
          reward: "📄 Resume Champion",
        },
      ],
    },
  };

  const currentRoadmap = roadmapsData[selectedYear];

  const toggleSkillCompletion = (skillId) => {
    setCompletedSkills(prev =>
      prev.includes(skillId) ? prev.filter(id => id !== skillId) : [...prev, skillId]
    );
  };

  const completionPercentage = Math.round(
    (completedSkills.length / currentRoadmap.skills.length) * 100
  );

  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <h1 style={styles.logo}>🛣️ Engineering Roadmaps</h1>
          <button onClick={() => setCurrentPage("home")} style={styles.backButton}>
            ← Back to Home
          </button>
        </div>
      </nav>

      {/* Hero Banner */}
      <div style={styles.heroBanner}>
        <div style={styles.heroContent}>
          <h2 style={styles.heroTitle}>Your 4-Year Journey to Tech Excellence 🚀</h2>
          <p style={styles.heroSubtitle}>
            Step-by-step guidance from beginner to job-ready engineer with projects, resources & mentorship
          </p>
          <div style={styles.heroStats}>
            <div style={styles.statBox}>
              <div style={styles.statNumber}>100+</div>
              <div style={styles.statLabel}>Resources</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statNumber}>50+</div>
              <div style={styles.statLabel}>Projects</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statNumber}>4</div>
              <div style={styles.statLabel}>Years</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statNumber}>∞</div>
              <div style={styles.statLabel}>Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section style={styles.mainSection}>
        <div style={styles.content}>
          {/* Year Selection Timeline */}
          <div style={styles.timelineContainer}>
            <div style={styles.timelineHeader}>
              <h3 style={styles.timelineTitle}>📍 Choose Your Year</h3>
              <p style={styles.timelineSubtitle}>Currently on <span style={{color: '#fbbf24', fontWeight: 'bold'}}>Year {selectedYear}</span></p>
            </div>
            <div style={styles.yearSelector}>
            {[1, 2, 3, 4].map(year => (
              <div
                key={year}
                style={{
                  ...styles.yearCard,
                  ...(selectedYear === year ? styles.yearCardActive : {}),
                }}
              >
                <button
                  onClick={() => {
                    setSelectedYear(year);
                    setExpandedSkill(null);
                  }}
                  style={styles.yearButtonContent}
                >
                  <div style={styles.yearEmoji}>
                    {["🏗️", "⚡", "🚀", "💼"][year - 1]}
                  </div>
                  <div style={styles.yearButtonText}>
                    <div style={styles.yearButtonYear}>Year {year}</div>
                    <div style={styles.yearButtonDesc}>
                      {["Foundation", "Core Skills", "Specialization", "Job Ready"][year - 1]}
                    </div>
                  </div>
                  {selectedYear === year && <div style={styles.yearCheckmark}>✓</div>}
                </button>
              </div>
            ))}
            </div>
          </div>

          {/* Year Overview */}
          <div style={styles.yearOverviewBox}>
            <div style={styles.overviewHeader}>
              <h2 style={styles.overviewTitle}>{currentRoadmap.emoji} {currentRoadmap.title}</h2>
              <p style={styles.overviewDesc}>{currentRoadmap.description}</p>
            </div>

            <div style={styles.overviewGrid}>
              <div style={styles.overviewCard}>
                <div style={styles.overviewIcon}>📚</div>
                <div style={styles.overviewLabel}>Skills to Learn</div>
                <div style={styles.overviewValue}>{currentRoadmap.skills.length}</div>
              </div>
              <div style={styles.overviewCard}>
                <div style={styles.overviewIcon}>🏗️</div>
                <div style={styles.overviewLabel}>Build Projects</div>
                <div style={styles.overviewValue}>{currentRoadmap.skills.length * 3}+</div>
              </div>
              <div style={styles.overviewCard}>
                <div style={styles.overviewIcon}>⏱️</div>
                <div style={styles.overviewLabel}>Commitment</div>
                <div style={styles.overviewValue}>6-12 hrs/week</div>
              </div>
              <div style={styles.overviewCard}>
                <div style={styles.overviewIcon}>🎯</div>
                <div style={styles.overviewLabel}>Your Progress</div>
                <div style={styles.overviewValue}>{completionPercentage}%</div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div style={styles.progressContainer}>
            <div style={styles.progressLabel}>
              <span>📈 Year Progress: {completedSkills.length} of {currentRoadmap.skills.length} completed</span>
              <span style={{...styles.progressPercent, color: currentRoadmap.color}}>
                {completionPercentage}%
              </span>
            </div>
            <div style={styles.progressBar}>
              <div
                style={{
                  ...styles.progressFill,
                  width: `${completionPercentage}%`,
                  backgroundColor: currentRoadmap.color,
                  transition: "width 0.5s ease",
                }}
              />
            </div>
          </div>

          {/* Current Year Roadmap - Skills Section */}
          <div style={styles.roadmapCard}>
            <h3 style={styles.roadmapTitle}>📚 Skills to Master</h3>
            
            {/* Skills Grid - More Visual */}
            <div style={styles.skillsGrid}>
              {currentRoadmap.skills.map((skill, index) => (
                <div
                  key={skill.id}
                  style={{
                    ...styles.skillCard,
                    borderTopColor: currentRoadmap.color,
                    opacity: completedSkills.includes(skill.id) ? 0.6 : 1,
                    transform: completedSkills.includes(skill.id) ? "scale(0.98)" : "scale(1)",
                  }}
                >
                  <div
                    style={styles.skillCardHeader}
                    onClick={() => setExpandedSkill(expandedSkill === skill.id ? null : skill.id)}
                  >
                    <div style={styles.skillNumber}>{index + 1}</div>
                    <div style={styles.skillTitleDiv}>
                      <input
                        type="checkbox"
                        checked={completedSkills.includes(skill.id)}
                        onChange={() => toggleSkillCompletion(skill.id)}
                        style={styles.checkbox}
                        onClick={e => e.stopPropagation()}
                      />
                      <h4 style={{
                        ...styles.skillName,
                        textDecoration: completedSkills.includes(skill.id) ? "line-through" : "none",
                      }}>
                        {skill.name}
                      </h4>
                    </div>
                    <span style={styles.expandIcon}>
                      {expandedSkill === skill.id ? "▼" : "▶"}
                    </span>
                  </div>

                  {expandedSkill === skill.id && (
                    <div style={styles.skillExpandedContent}>
                      <p style={styles.skillDescription}>{skill.description}</p>

                      <div style={styles.durationBadge}>
                        ⏱️ Duration: {skill.duration}
                      </div>

                      {/* YouTube Channels */}
                      <div style={styles.resourceSection}>
                        <h5 style={styles.resourceTitle}>📺 Best YouTube Channels:</h5>
                        <div style={styles.linksGrid}>
                          {skill.youtubeChannels.map((channel, idx) => (
                            <a
                              key={idx}
                              href={channel.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={styles.youtubeLink}
                            >
                              ▶️ {channel.name}
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Practice Websites */}
                      <div style={styles.resourceSection}>
                        <h5 style={styles.resourceTitle}>💻 Practice Websites:</h5>
                        <div style={styles.linksGrid}>
                          {skill.practiceWebsites.map((website, idx) => (
                            <a
                              key={idx}
                              href={website.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={styles.practiceLink}
                            >
                              🎯 {website.name}
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Project Ideas */}
                      <div style={styles.resourceSection}>
                        <h5 style={styles.resourceTitle}>🏗️ Build These Projects:</h5>
                        <div style={styles.projectsList}>
                          {skill.projects.map((project, idx) => (
                            <div key={idx} style={styles.projectItem}>
                              ✅ {project}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div style={{...styles.rewardBadge, backgroundColor: currentRoadmap.color + "20", borderColor: currentRoadmap.color}}>
                        {skill.reward}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tips - Fun & Engaging */}
          <div style={styles.tipsSection}>
            <h3 style={styles.tipsTitle}>💡 Pro Tips for Success</h3>
            <div style={styles.tipsGrid}>
              <div style={styles.tipCard}>
                <span style={styles.tipEmoji}>⏰</span>
                <h4>Consistent Effort</h4>
                <p>2-3 hours daily beats cramming. Build a routine!</p>
              </div>
              <div style={styles.tipCard}>
                <span style={styles.tipEmoji}>🎯</span>
                <h4>Project-Based Learning</h4>
                <p>Build while you learn - theory alone won't get you hired</p>
              </div>
              <div style={styles.tipCard}>
                <span style={styles.tipEmoji}>👥</span>
                <h4>Join Communities</h4>
                <p>Network, share progress, learn from others' experiences</p>
              </div>
              <div style={styles.tipCard}>
                <span style={styles.tipEmoji}>📈</span>
                <h4>Track & Celebrate</h4>
                <p>Mark milestones, celebrate wins, stay motivated!</p>
              </div>
              <div style={styles.tipCard}>
                <span style={styles.tipEmoji}>🔄</span>
                <h4>Revise Regularly</h4>
                <p>Interview prep? Revise DSA and System Design constantly</p>
              </div>
              <div style={styles.tipCard}>
                <span style={styles.tipEmoji}>💪</span>
                <h4>Don't Rush</h4>
                <p>Quality beats speed. Understanding matters more than memorizing</p>
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
  navbar: {
    background: "rgba(15, 17, 42, 0.95)",
    backdropFilter: "blur(10px)",
    borderBottom: "2px solid rgba(6, 182, 212, 0.2)",
    position: "sticky",
    top: 0,
    zIndex: 50,
  },
  navContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    maxWidth: "1400px",
    margin: "0 auto",
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
  heroBanner: {
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(168, 85, 247, 0.15))",
    borderBottom: "2px solid rgba(6, 182, 212, 0.3)",
    padding: "60px 20px",
  },
  heroContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
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
    marginBottom: "35px",
  },
  heroStats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  statBox: {
    background: "rgba(30, 27, 75, 0.6)",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid rgba(6, 182, 212, 0.2)",
  },
  statNumber: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#06b6d4",
  },
  statLabel: {
    fontSize: "12px",
    color: "#94a3b8",
    marginTop: "8px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  mainSection: {
    padding: "60px 20px",
    minHeight: "calc(100vh - 160px)",
  },
  content: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  timelineContainer: {
    marginBottom: "50px",
  },
  timelineHeader: {
    marginBottom: "25px",
  },
  timelineTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#f1f5f9",
    margin: 0,
    marginBottom: "8px",
  },
  timelineSubtitle: {
    fontSize: "15px",
    color: "#cbd5e1",
    margin: 0,
  },
  yearSelector: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "50px",
  },
  yearCard: {
    background: "rgba(30, 27, 75, 0.5)",
    border: "2px solid rgba(100, 116, 139, 0.3)",
    borderRadius: "14px",
    padding: "0",
    transition: "all 0.3s ease",
    cursor: "pointer",
    position: "relative",
  },
  yearCardActive: {
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(168, 85, 247, 0.15))",
    borderColor: "#06b6d4",
    boxShadow: "0 0 30px rgba(6, 182, 212, 0.4), inset 0 0 20px rgba(6, 182, 212, 0.1)",
    transform: "translateY(-5px)",
  },
  yearButtonContent: {
    width: "100%",
    padding: "20px",
    background: "none",
    border: "none",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    cursor: "pointer",
    color: "inherit",
    position: "relative",
  },
  yearEmoji: {
    fontSize: "32px",
  },
  yearButtonText: {
    textAlign: "left",
    flex: 1,
  },
  yearButtonYear: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#06b6d4",
  },
  yearButtonDesc: {
    fontSize: "13px",
    color: "#94a3b8",
    marginTop: "4px",
  },
  yearCheckmark: {
    fontSize: "20px",
    color: "#22c55e",
    fontWeight: "bold",
  },
  yearOverviewBox: {
    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1))",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "16px",
    padding: "30px",
    marginBottom: "40px",
  },
  overviewHeader: {
    marginBottom: "25px",
  },
  overviewTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#f1f5f9",
    margin: "0 0 10px 0",
  },
  overviewDesc: {
    fontSize: "16px",
    color: "#cbd5e1",
    margin: 0,
  },
  overviewGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
  },
  overviewCard: {
    background: "rgba(30, 27, 75, 0.6)",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid rgba(6, 182, 212, 0.2)",
    textAlign: "center",
  },
  overviewIcon: {
    fontSize: "28px",
    marginBottom: "8px",
  },
  overviewLabel: {
    fontSize: "12px",
    color: "#94a3b8",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  overviewValue: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#06b6d4",
    marginTop: "6px",
  },
  progressContainer: {
    marginBottom: "40px",
    background: "rgba(30, 27, 75, 0.5)",
    padding: "20px",
    borderRadius: "12px",
  },
  progressLabel: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
    fontSize: "15px",
    fontWeight: "600",
  },
  progressPercent: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  progressBar: {
    width: "100%",
    height: "10px",
    background: "rgba(100, 116, 139, 0.2)",
    borderRadius: "8px",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    transition: "width 0.5s ease",
    borderRadius: "8px",
  },
  roadmapCard: {
    background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 27, 75, 0.9))",
    border: "2px solid rgba(6, 182, 212, 0.2)",
    borderRadius: "16px",
    padding: "40px",
    marginBottom: "40px",
  },
  roadmapHeader: {
    marginBottom: "30px",
  },
  roadmapTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#f1f5f9",
  },
  roadmapDescription: {
    fontSize: "16px",
    color: "#cbd5e1",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  skillCard: {
    background: "rgba(30, 27, 75, 0.6)",
    border: "1px solid rgba(100, 116, 139, 0.3)",
    borderRadius: "14px",
    padding: "20px",
    borderTop: "3px solid",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  skillCardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    justifyContent: "space-between",
  },
  skillNumber: {
    background: "rgba(6, 182, 212, 0.2)",
    color: "#06b6d4",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "14px",
    flexShrink: 0,
  },
  skillTitleDiv: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flex: 1,
  },
  checkbox: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
    accentColor: "#06b6d4",
    flexShrink: 0,
  },
  skillName: {
    fontSize: "16px",
    fontWeight: "600",
    margin: 0,
  },
  expandIcon: {
    fontSize: "12px",
    color: "#64748b",
    transition: "transform 0.3s ease",
    flexShrink: 0,
  },
  skillExpandedContent: {
    marginTop: "15px",
    paddingTop: "15px",
    borderTop: "1px solid rgba(100, 116, 139, 0.2)",
  },
  skillDescription: {
    fontSize: "14px",
    color: "#cbd5e1",
    marginBottom: "15px",
    margin: "0 0 15px 0",
  },
  durationBadge: {
    display: "inline-block",
    background: "rgba(6, 182, 212, 0.15)",
    color: "#06b6d4",
    padding: "8px 14px",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "15px",
    border: "1px solid rgba(6, 182, 212, 0.3)",
  },
  resourceSection: {
    marginBottom: "18px",
  },
  resourceTitle: {
    fontSize: "13px",
    fontWeight: "700",
    color: "#cbd5e1",
    margin: "0 0 10px 0",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  linksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "8px",
  },
  youtubeLink: {
    background: "rgba(239, 68, 68, 0.15)",
    color: "#fca5a5",
    padding: "8px 12px",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "500",
    transition: "all 0.3s ease",
    border: "1px solid rgba(239, 68, 68, 0.3)",
    textAlign: "center",
    display: "block",
  },
  practiceLink: {
    background: "rgba(139, 92, 246, 0.15)",
    color: "#d8b4fe",
    padding: "8px 12px",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "500",
    transition: "all 0.3s ease",
    border: "1px solid rgba(139, 92, 246, 0.3)",
    textAlign: "center",
    display: "block",
  },
  projectsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "8px",
  },
  projectItem: {
    background: "rgba(34, 197, 94, 0.15)",
    color: "#86efac",
    padding: "10px 12px",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: "500",
    border: "1px solid rgba(34, 197, 94, 0.3)",
    textAlign: "center",
  },
  rewardBadge: {
    padding: "14px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "600",
    marginTop: "15px",
    textAlign: "center",
    border: "2px solid",
  },
  tipsSection: {
    background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 27, 75, 0.9))",
    border: "2px solid rgba(251, 191, 36, 0.2)",
    borderRadius: "16px",
    padding: "40px",
    marginTop: "40px",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  tipCard: {
    background: "rgba(30, 27, 75, 0.6)",
    padding: "24px",
    borderRadius: "12px",
    border: "1px solid rgba(251, 191, 36, 0.2)",
    textAlign: "center",
    transition: "all 0.3s ease",
  },
  tipEmoji: {
    fontSize: "32px",
    display: "block",
    marginBottom: "12px",
  },
};

