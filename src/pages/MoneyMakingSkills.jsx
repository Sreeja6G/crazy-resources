import { useState } from "react";

export default function MoneyMakingSkills({ setCurrentPage, setSelectedSkill }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      id: 1,
      name: "Video Editing",
      emoji: "📹",
      description: "Edit videos for YouTube, Instagram, TikTok, and corporate clients",
      earning: "₹500 - ₹5000 per video",
      learnFrom: [
        { name: "DaVinci Resolve Complete Tutorial (FREE)", link: "https://www.youtube.com/@SkillMastery", type: "YouTube" },
        { name: "Dani Diamond - Video Editing (YouTube)", link: "https://www.youtube.com/@DanielDiamonds", type: "YouTube" },
        { name: "Peter McKinnon - Film & Editing (YouTube)", link: "https://www.youtube.com/@PeterMcKinnon", type: "YouTube" },
        { name: "CapCut Tutorial - Full Course (YouTube)", link: "https://www.youtube.com/results?search_query=capcut+full+tutorial+free", type: "YouTube" },
        { name: "Adobe Premiere Pro Tutorials (YouTube)", link: "https://www.youtube.com/results?search_query=adobe+premiere+pro+tutorial+free", type: "YouTube" },
        { name: "Final Cut Pro Tutorials (YouTube)", link: "https://www.youtube.com/results?search_query=final+cut+pro+tutorial+free", type: "YouTube" },
      ],
      practiceOn: [
        { name: "CapCut (FREE - Mobile & Desktop)", link: "https://www.capcut.com/", difficulty: "Beginner" },
        { name: "DaVinci Resolve (FREE - Professional)", link: "https://www.blackmagicdesign.com/products/davinciresolve/", difficulty: "Beginner-Intermediate" },
        { name: "OpenShot Video Editor (FREE - Open Source)", link: "https://www.openshot.org/", difficulty: "Beginner" },
        { name: "Shotcut (FREE - Open Source)", link: "https://shotcut.org/", difficulty: "Beginner-Intermediate" },
        { name: "Your own YouTube Channel (FREE)", link: "https://www.youtube.com/create", difficulty: "Beginner" },
      ],
      timeline: "3-6 months to become proficient",
      tips: [
        "Start with CapCut (free and easy to learn)",
        "Download DaVinci Resolve for professional-grade editing",
        "Create 5-10 sample videos for your portfolio",
        "Watch trending videos and analyze editing techniques",
        "Join YouTube communities and share your work",
      ],
      projects: [
        "Edit a YouTube tutorial video",
        "Create Instagram Reels (15-60 seconds)",
        "Make a TikTok video series",
        "Edit a short film (3-5 minutes)",
        "Create a podcast intro/outro",
      ],
    },
    {
      id: 2,
      name: "Content Writing",
      emoji: "✏️",
      description: "Write blogs, articles, social media content, and copywriting",
      earning: "₹500 - ₹2000 per article",
      learnFrom: [
        { name: "Neil Patel - Content Writing (YouTube)", link: "https://www.youtube.com/@neilpatel", type: "YouTube" },
        { name: "HubSpot Academy - Content Marketing (FREE)", link: "https://academy.hubspot.com/courses/content-marketing", type: "YouTube" },
        { name: "Brian Dean - Content Strategy (YouTube)", link: "https://www.youtube.com/@backlinko", type: "YouTube" },
        { name: "Copyblogger - Copywriting Tips (YouTube)", link: "https://www.youtube.com/results?search_query=copywriting+tutorial+free", type: "YouTube" },
        { name: "Josh Carrott - Viral Content (YouTube)", link: "https://www.youtube.com/@GrowthMarketingPro", type: "YouTube" },
      ],
      practiceOn: [
        { name: "Medium (FREE - Write & Earn)", link: "https://medium.com/", difficulty: "Beginner" },
        { name: "WordPress (FREE - Blogging Platform)", link: "https://wordpress.com/", difficulty: "Beginner" },
        { name: "Dev.to (FREE - Developer Content)", link: "https://dev.to/", difficulty: "Beginner" },
        { name: "LinkedIn (FREE - Professional Writing)", link: "https://www.linkedin.com/", difficulty: "Beginner" },
        { name: "Grammarly (FREE Version)", link: "https://www.grammarly.com/", difficulty: "Beginner" },
      ],
      timeline: "1-2 months to start earning",
      tips: [
        "Read 10+ articles on your topic before writing",
        "Use Grammarly Free to improve writing quality",
        "Learn basic SEO (keywords, headlines, structure)",
        "Write consistently - aim for 3-5 articles per week",
        "Engage with your audience in comments section",
      ],
      projects: [
        "Write 10 blog posts on your niche",
        "Create a Medium publication with 5 articles",
        "Write 5 LinkedIn thought leadership posts",
      ],
    },
    {
      id: 3,
      name: "Digital Marketing",
      emoji: "📱",
      description: "Manage social media, create ads, run marketing campaigns",
      earning: "₹2000 - ₹10000 per project",
      learnFrom: [
        { name: "Google Digital Garage (FREE Certificate)", link: "https://learndigital.withgoogle.com/", type: "Website" },
        { name: "Adam Erhart - Digital Marketing (YouTube)", link: "https://www.youtube.com/@adamerhart", type: "YouTube" },
        { name: "HubSpot Academy - Free Certification (FREE)", link: "https://academy.hubspot.com/", type: "Website" },
        { name: "Ahrefs - SEO & Marketing (YouTube)", link: "https://www.youtube.com/@ahrefs", type: "YouTube" },
        { name: "Moz - SEO Learning (YouTube)", link: "https://www.youtube.com/@moz", type: "YouTube" },
      ],
      practiceOn: [
        { name: "Meta Business Suite (FREE)", link: "https://business.facebook.com/", difficulty: "Beginner" },
        { name: "Google Ads (FREE ₹200 credit)", link: "https://ads.google.com/", difficulty: "Intermediate" },
        { name: "Canva (FREE Version)", link: "https://www.canva.com/", difficulty: "Beginner" },
        { name: "Google Analytics (FREE)", link: "https://analytics.google.com/", difficulty: "Beginner" },
        { name: "Figma (FREE - Design Tool)", link: "https://www.figma.com/", difficulty: "Beginner" },
      ],
      timeline: "2-3 months to master basics",
      tips: [
        "Get Google & Meta certifications (free)",
        "Manage your own social media accounts first",
        "Track metrics using Google Analytics",
        "Test with small budgets (₹100-200) before scaling",
        "Follow latest trends in digital marketing",
      ],
      projects: [
        "Create 30-day content calendar",
        "Launch a Facebook ad campaign (₹500 budget)",
        "Grow a new Instagram account to 1000 followers",
      ],
    },
    {
      id: 4,
      name: "Graphic Design",
      emoji: "🎨",
      description: "Design logos, posters, thumbnails, branding materials",
      earning: "₹1000 - ₹5000 per design",
      learnFrom: [
        { name: "Canva Design School (FREE)", link: "https://www.canva.com/designschool/", type: "Website" },
        { name: "DesignCourse - Graphic Design (YouTube)", link: "https://www.youtube.com/@DesignCourse", type: "YouTube" },
        { name: "Pixeleada - Design Tutorials (YouTube)", link: "https://www.youtube.com/results?search_query=graphic+design+tutorial+free", type: "YouTube" },
        { name: "The Futur - Design Tips (YouTube)", link: "https://www.youtube.com/@thefutur", type: "YouTube" },
        { name: "Ali Abdaal - Design (YouTube)", link: "https://www.youtube.com/@aliabdaal", type: "YouTube" },
      ],
      practiceOn: [
        { name: "Canva (FREE Version)", link: "https://www.canva.com/", difficulty: "Beginner" },
        { name: "Figma (FREE - Professional Design)", link: "https://www.figma.com/", difficulty: "Beginner" },
        { name: "GIMP (FREE - Open Source)", link: "https://www.gimp.org/", difficulty: "Intermediate" },
        { name: "Photopea (FREE - Browser-based Editor)", link: "https://www.photopea.com/", difficulty: "Beginner-Intermediate" },
      ],
      timeline: "2-4 months to start getting clients",
      tips: [
        "Master Canva first (free, powerful, user-friendly)",
        "Learn design principles (color theory, typography)",
        "Study design inspiration on Dribbble (FREE) and Behance",
        "Practice daily - create at least 1 design per day",
        "Join design communities on Reddit, Discord",
      ],
      projects: [
        "Design 10 logo concepts",
        "Create Instagram post templates (5 variations)",
        "Design YouTube thumbnails (10 variations)",
      ],
    },
    {
      id: 5,
      name: "Social Media Management",
      emoji: "📊",
      description: "Manage social media accounts for businesses",
      earning: "₹3000 - ₹15000 per month",
      learnFrom: [
        { name: "HubSpot Social Media (FREE Certificate)", link: "https://academy.hubspot.com/", type: "Website" },
        { name: "Gary Vee - Social Media (YouTube)", link: "https://www.youtube.com/@garyvee", type: "YouTube" },
        { name: "Aidan Booth - Social Strategy (YouTube)", link: "https://www.youtube.com/results?search_query=social+media+strategy+free+tutorial", type: "YouTube" },
        { name: "Marie Forleo - Social Tips (YouTube)", link: "https://www.youtube.com/@marieforleo", type: "YouTube" },
        { name: "Jen Gottlieb - Social Content (YouTube)", link: "https://www.youtube.com/results?search_query=social+media+content+strategy+free", type: "YouTube" },
      ],
      practiceOn: [
        { name: "Buffer (FREE Plan)", link: "https://buffer.com/", difficulty: "Beginner" },
        { name: "Later (FREE - Social Scheduling)", link: "https://www.later.com/", difficulty: "Beginner" },
        { name: "Meta Business Suite (FREE)", link: "https://business.facebook.com/", difficulty: "Beginner" },
        { name: "TubeBuddy (FREE YouTube Tools)", link: "https://www.tubebuddy.com/", difficulty: "Beginner" },
      ],
      timeline: "1-2 months to start getting clients",
      tips: [
        "Create your own Instagram/Facebook first",
        "Study competitor social media strategies",
        "Track metrics using native analytics",
        "Post consistently - 3-5 times per week minimum",
        "Engage with followers in comments daily",
      ],
      projects: [
        "Manage 2-3 small business accounts",
        "Create 1 month content calendar",
        "Grow account by 500% (show metrics)",
      ],
    },
    {
      id: 6,
      name: "Business Consulting",
      emoji: "💼",
      description: "Offer startup advice, strategy, business planning",
      earning: "₹5000 - ₹50000 per consultation",
      learnFrom: [
        { name: "HubSpot Academy - Business (FREE)", link: "https://academy.hubspot.com/", type: "Website" },
        { name: "GaryVee - Business Strategy (YouTube)", link: "https://www.youtube.com/@garyvee", type: "YouTube" },
        { name: "Alex Hormozi - Business (YouTube)", link: "https://www.youtube.com/@alexhormozi", type: "YouTube" },
        { name: "Simon Sinek - Leadership (YouTube)", link: "https://www.youtube.com/@simonsinek", type: "YouTube" },
        { name: "Iman Gadzhi - Entrepreneurship (YouTube)", link: "https://www.youtube.com/@imangadzhi", type: "YouTube" },
      ],
      practiceOn: [
        { name: "LinkedIn (FREE - Share Insights)", link: "https://www.linkedin.com/", difficulty: "Beginner" },
        { name: "Medium (FREE - Write Articles)", link: "https://medium.com/", difficulty: "Beginner" },
        { name: "Twitter/X (FREE - Engage Community)", link: "https://twitter.com/", difficulty: "Beginner" },
        { name: "Substack (FREE - Newsletter)", link: "https://substack.com/", difficulty: "Beginner" },
      ],
      timeline: "3-6 months (need expertise first)",
      tips: [
        "Build expertise in specific niche (startup, finance, etc)",
        "Share valuable free content on LinkedIn & Medium",
        "Get certifications in your field (FREE from Google/HubSpot)",
        "Network actively - join business communities",
        "Create case studies showing your business impact",
      ],
      projects: [
        "Write 10 business strategy articles",
        "Help 2-3 startups for free to build portfolio",
        "Create business consulting offer package",
      ],
    },
    {
      id: 7,
      name: "Freelance Development",
      emoji: "🚀",
      description: "Offer web development, app development, coding services",
      earning: "₹5000 - ₹100000+ per project",
      learnFrom: [
        { name: "freeCodeCamp - Complete (YouTube FREE)", link: "https://www.youtube.com/@freecodecamp", type: "YouTube" },
        { name: "Traversy Media - Web Dev (YouTube)", link: "https://www.youtube.com/@traversymedia", type: "YouTube" },
        { name: "The Net Ninja - Coding (YouTube)", link: "https://www.youtube.com/@netninja", type: "YouTube" },
        { name: "Fireship - Fast Learning (YouTube)", link: "https://www.youtube.com/@fireship", type: "YouTube" },
        { name: "Kevin Powell - Web Dev (YouTube)", link: "https://www.youtube.com/@KevinPowell", type: "YouTube" },
      ],
      practiceOn: [
        { name: "LeetCode (FREE)", link: "https://leetcode.com/", difficulty: "Beginner-Advanced" },
        { name: "GitHub (FREE - Portfolio)", link: "https://github.com/", difficulty: "Beginner" },
        { name: "CodePen (FREE - Share Code)", link: "https://codepen.io/", difficulty: "Beginner" },
        { name: "Replit (FREE - Online IDE)", link: "https://replit.com/", difficulty: "Beginner" },
        { name: "Netlify (FREE - Deploy)", link: "https://www.netlify.com/", difficulty: "Beginner" },
      ],
      timeline: "6-12 months (depends on depth)",
      tips: [
        "Build 5-10 projects for your portfolio",
        "Master Git and GitHub (FREE)",
        "Learn algorithms and data structures",
        "Deploy projects on Netlify (FREE)",
        "Contribute to open source projects (FREE)",
      ],
      projects: [
        "Build a personal portfolio website",
        "Create a Todo app with React",
        "Build an e-commerce site",
        "Create an API with Node.js",
        "Deploy 5 projects on GitHub",
      ],
    },
    {
      id: 8,
      name: "Online Teaching & Courses",
      emoji: "📚",
      description: "Create courses and teach on platforms like Udemy, Skillshare",
      earning: "₹2000 - ₹50000+ per course",
      learnFrom: [
        { name: "YouTube Course Creation (FREE)", link: "https://www.youtube.com/results?search_query=how+to+create+online+course+free", type: "YouTube" },
        { name: "Alex Cattoni - Course Creation (YouTube)", link: "https://www.youtube.com/results?search_query=alex+cattoni+course+creation", type: "YouTube" },
        { name: "Teachable Academy (FREE Articles)", link: "https://www.teachable.com/blog", type: "Website" },
        { name: "Kajabi Blog - Course Tips (FREE)", link: "https://www.kajabi.com/blog", type: "Website" },
        { name: "Skillshare Creator Academy (FREE)", link: "https://www.skillshare.com/teach", type: "Website" },
      ],
      practiceOn: [
        { name: "YouTube (FREE - Start Teaching)", link: "https://www.youtube.com/create", difficulty: "Beginner" },
        { name: "Skillshare (FREE - Teach Courses)", link: "https://www.skillshare.com/teach", difficulty: "Beginner" },
        { name: "OBS Studio (FREE - Screen Recording)", link: "https://obsproject.com/", difficulty: "Beginner" },
        { name: "Captura (FREE - Screen Recording)", link: "https://mathieu.audineau.net/captura/", difficulty: "Beginner" },
      ],
      timeline: "1-3 months to launch first course",
      tips: [
        "Choose a skill you're already good at",
        "Use OBS Studio (FREE) for screen recording",
        "Start with YouTube to build audience (FREE)",
        "Structure course in modules/sections",
        "Offer free/discounted course initially to build reviews",
      ],
      projects: [
        "Create first online course (any topic)",
        "Record 10-15 lesson videos",
        "Build course landing page (FREE with Canva)",
        "Get 50+ course enrollments",
        "Create marketing strategy on social media",
      ],
    },
  ];

  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>💰 Money-Making Skills</h1>
        <button onClick={() => setCurrentPage("home")} style={styles.backButton}>
          ← Back
        </button>
      </nav>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <h2 style={styles.heroTitle}>Earn Money While Studying 💸</h2>
        <p style={styles.heroSubtitle}>Learn in-demand skills and build income as a student or freelancer</p>
      </section>

      {/* Skills Grid */}
      <section style={styles.skillsSection}>
        <div style={styles.skillsContainer}>
          <div style={styles.skillsGrid}>
            {skills.map((skill) => (
              <div
                key={skill.id}
                style={{
                  ...styles.skillCard,
                  ...(hoveredSkill === skill.id && {
                    background: "linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(6, 182, 212, 0.2))",
                    borderColor: "#fbbf24",
                    boxShadow: "0 8px 30px rgba(251, 191, 36, 0.3)",
                  }),
                }}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
                onClick={() => {
                  setSelectedSkill(skill);
                  setCurrentPage("skill-roadmap");
                }}
              >
                <div style={styles.skillEmoji}>{skill.emoji}</div>
                <h3 style={styles.skillName}>{skill.name}</h3>
                <p style={styles.skillEarning}>{skill.earning}</p>
                <p style={styles.skillDesc}>{skill.description}</p>
              </div>
            ))}
          </div>

          {/* Detailed View Removed - Now Uses Dedicated Roadmap Page */}
        </div>
      </section>

      {/* Footer Tips */}
      <section style={styles.tipsSection}>
        <div style={styles.tipsContainer}>
          <h3 style={styles.tipsTitle}>🎯 Quick Tips to Get Started</h3>
          <div style={styles.tipsList}>
            <div style={styles.tip}>
              <span style={styles.tipNumber}>1</span>
              <p>Choose a skill you're passionate about or good at</p>
            </div>
            <div style={styles.tip}>
              <span style={styles.tipNumber}>2</span>
              <p>Build a portfolio with 3-5 quality samples</p>
            </div>
            <div style={styles.tip}>
              <span style={styles.tipNumber}>3</span>
              <p>Start with competitive rates to get first clients</p>
            </div>
            <div style={styles.tip}>
              <span style={styles.tipNumber}>4</span>
              <p>Deliver excellent work and ask for reviews</p>
            </div>
            <div style={styles.tip}>
              <span style={styles.tipNumber}>5</span>
              <p>Gradually increase rates as you gain experience</p>
            </div>
            <div style={styles.tip}>
              <span style={styles.tipNumber}>6</span>
              <p>Build your personal brand on LinkedIn/social media</p>
            </div>
          </div>
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
  logo: {
    fontSize: "28px",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
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
  heroSection: {
    padding: "60px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(6, 182, 212, 0.1))",
    borderBottom: "2px solid rgba(251, 191, 36, 0.2)",
  },
  heroTitle: {
    fontSize: "48px",
    fontWeight: "900",
    background: "linear-gradient(135deg, #fbbf24, #06b6d4, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "10px",
  },
  heroSubtitle: {
    fontSize: "20px",
    color: "#cbd5e1",
    marginTop: 0,
  },
  skillsSection: {
    padding: "60px 20px",
  },
  skillsContainer: {
    maxWidth: "1400px",
    margin: "0 auto",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },
  skillCard: {
    background: "linear-gradient(135deg, rgba(26, 26, 62, 0.8), rgba(15, 15, 35, 0.8))",
    border: "2px solid rgba(251, 191, 36, 0.2)",
    borderRadius: "15px",
    padding: "25px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textAlign: "center",
  },
  skillEmoji: {
    fontSize: "50px",
    marginBottom: "12px",
  },
  skillName: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#fbbf24",
    marginBottom: "8px",
  },
  skillEarning: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#06b6d4",
    marginBottom: "12px",
  },
  skillDesc: {
    fontSize: "14px",
    color: "#cbd5e1",
    lineHeight: "1.6",
    margin: 0,
  },
  detailsSection: {
    marginTop: "40px",
    padding: "30px",
    background: "linear-gradient(135deg, rgba(251, 191, 36, 0.05), rgba(6, 182, 212, 0.05))",
    border: "2px solid rgba(251, 191, 36, 0.2)",
    borderRadius: "15px",
    animation: "slideInUp 0.5s ease-out",
  },
  detailsBox: {
    animation: "slideInUp 0.5s ease-out",
  },
  detailsTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #fbbf24, #06b6d4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "25px",
  },
  detailsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },
  detailCard: {
    background: "rgba(26, 26, 62, 0.6)",
    border: "2px solid rgba(6, 182, 212, 0.2)",
    borderRadius: "12px",
    padding: "20px",
  },
  detailCardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fbbf24",
    marginBottom: "12px",
  },
  detailCardText: {
    fontSize: "15px",
    color: "#e0e0e0",
    margin: 0,
    lineHeight: "1.6",
  },
  detailList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  platformsSection: {
    marginTop: "30px",
    padding: "20px",
    background: "rgba(26, 26, 62, 0.6)",
    borderRadius: "12px",
    border: "2px solid rgba(6, 182, 212, 0.2)",
  },
  platformsTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#06b6d4",
    marginBottom: "15px",
  },
  platformsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "12px",
  },
  platformButton: {
    display: "inline-block",
    padding: "12px 16px",
    background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.3s ease",
    textAlign: "center",
    border: "none",
    boxShadow: "0 4px 12px rgba(6, 182, 212, 0.3)",
  },
  detailsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px",
  },
  closeButton: {
    background: "rgba(239, 68, 68, 0.2)",
    border: "2px solid #ef4444",
    color: "#ef4444",
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    fontSize: "20px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  },
  sectionContainer: {
    marginBottom: "30px",
    padding: "20px",
    background: "rgba(26, 26, 62, 0.5)",
    borderRadius: "12px",
    border: "1px solid rgba(251, 191, 36, 0.1)",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fbbf24",
    marginBottom: "15px",
    marginTop: 0,
  },
  resourcesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "12px",
  },
  resourceButton: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    padding: "15px",
    background: "rgba(6, 182, 212, 0.1)",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "10px",
    color: "#06b6d4",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "14px",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  resourceType: {
    fontSize: "12px",
    color: "#f59e0b",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  practiceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "12px",
  },
  practiceCard: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: "15px",
    background: "rgba(26, 26, 62, 0.8)",
    border: "2px solid rgba(6, 182, 212, 0.2)",
    borderLeft: "4px solid #06b6d4",
    borderRadius: "10px",
    color: "#e0e0e0",
    textDecoration: "none",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  platformName: {
    fontSize: "15px",
    fontWeight: "bold",
    color: "#fbbf24",
    margin: "0 0 5px 0",
  },
  difficultyBadge: {
    fontSize: "12px",
    color: "#06b6d4",
    fontWeight: "600",
    margin: 0,
  },
  tipsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  tipItem: {
    padding: "12px",
    paddingLeft: "20px",
    color: "#cbd5e1",
    fontSize: "15px",
    listStyle: "disc",
    lineHeight: "1.6",
  },
  projectsList: {
    paddingLeft: "20px",
    margin: 0,
  },
  projectItem: {
    padding: "10px 0",
    color: "#cbd5e1",
    fontSize: "15px",
    lineHeight: "1.6",
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
    textAlign: "center",
    color: "#fbbf24",
    marginBottom: "30px",
  },
  tipsList2: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  tip: {
    display: "flex",
    gap: "15px",
    padding: "20px",
    background: "rgba(26, 26, 62, 0.6)",
    borderRadius: "12px",
    border: "2px solid rgba(251, 191, 36, 0.2)",
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
    fontSize: "18px",
  },
};
