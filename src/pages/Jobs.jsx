import { useState, useMemo } from "react";

export default function Jobs({ setCurrentPage }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredJob, setHoveredJob] = useState(null);
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  const jobs = useMemo(() => [
    {
      id: 1,
      company: "TCS",
      role: "Junior Software Developer",
      category: "Software Development",
      salary: "3.5 - 4.5 LPA",
      location: "Bangalore, Hyderabad, Pune",
      description: "Entry-level position for freshers. Work on web applications using Java, Python, and JavaScript.",
      skills: ["Java", "Python", "Problem Solving"],
      eligibility: "B.Tech Computer Science/IT, 60%+ CGPA",
      applyLink: "https://www.tcs.com/careers",
      popular: true,
    },
    {
      id: 2,
      company: "Infosys",
      role: "Systems Engineer",
      category: "Software Development",
      salary: "3.6 - 4.8 LPA",
      location: "Bangalore, Pune, Hyderabad",
      description: "Fresher-friendly role with comprehensive training. Develop software solutions for global clients.",
      skills: ["C++", "Java", "SQL"],
      eligibility: "B.Tech/MCA, Any Branch, 60%+ CGPA",
      applyLink: "https://www.infosys.com/careers",
      popular: true,
    },
    {
      id: 3,
      company: "Cognizant",
      role: "Associate Programmer",
      category: "Software Development",
      salary: "3.5 - 4.2 LPA",
      location: "Pune, Hyderabad, Chennai",
      description: "Perfect for freshers! Get trained on latest technologies and work on real-world projects.",
      skills: ["Java", "Python", "Web Development"],
      eligibility: "B.Tech/B.Sc, 60%+ marks",
      applyLink: "https://careers.cognizant.com",
      popular: true,
    },
    {
      id: 4,
      company: "Wipro",
      role: "Project Engineer",
      category: "Software Development",
      salary: "3.4 - 4.3 LPA",
      location: "Bangalore, Pune, Noida",
      description: "Fresh graduate opportunity with structured training and mentorship program.",
      skills: ["Java", "JavaScript", "Database"],
      eligibility: "B.Tech/B.E, 65%+ CGPA",
      applyLink: "https://www.wipro.com/careers",
      popular: true,
    },
    {
      id: 5,
      company: "HCL Technologies",
      role: "Trainee Engineer",
      category: "Software Development",
      salary: "3.5 - 4.5 LPA",
      location: "Bangalore, Noida, Chennai",
      description: "Hands-on training program for freshers with exposure to multiple technologies.",
      skills: ["Java", "Python", "Cloud Technologies"],
      eligibility: "Any Engineering Branch, 60%+ marks",
      applyLink: "https://www.hcltech.com/careers",
    },
    {
      id: 6,
      company: "Accenture",
      role: "Associate Software Engineer",
      category: "Software Development",
      salary: "3.7 - 4.6 LPA",
      location: "Pune, Bangalore, Hyderabad",
      description: "Career development program for fresh graduates with international exposure.",
      skills: ["Java", "Python", "Cloud Platforms"],
      eligibility: "B.Tech/B.E, 60%+ CGPA",
      applyLink: "https://www.accenture.com/careers",
    },
    {
      id: 7,
      company: "Tech Mahindra",
      role: "Senior System Engineer",
      category: "Software Development",
      salary: "3.5 - 4.4 LPA",
      location: "Pune, Chennai, Bangalore",
      description: "Fresher-focused role with comprehensive technical and soft skills training.",
      skills: ["Java", "Python", "Web Technologies"],
      eligibility: "B.Tech/M.Tech, 60%+ marks",
      applyLink: "https://www.techmahindra.com/careers",
    },
    {
      id: 8,
      company: "Capgemini",
      role: "Junior Developer",
      category: "Software Development",
      salary: "3.6 - 4.5 LPA",
      location: "Bangalore, Pune, Hyderabad",
      description: "Excellent opportunity for freshers to grow in a global IT company.",
      skills: ["Java", "Python", "Modern Web Stack"],
      eligibility: "B.Tech/B.E, 65%+ CGPA",
      applyLink: "https://www.capgemini.com/careers",
    },
    {
      id: 9,
      company: "IBM",
      role: "Associate Developer",
      category: "Software Development",
      salary: "3.8 - 4.8 LPA",
      location: "Bangalore, Pune, Delhi",
      description: "Entry-level position with mentorship from experienced professionals.",
      skills: ["Java", "Cloud Computing", "Python"],
      eligibility: "B.Tech Computer Science, 65%+ CGPA",
      applyLink: "https://www.ibm.com/careers",
      popular: true,
    },
    {
      id: 10,
      company: "Deloitte",
      role: "Analyst",
      category: "Consulting",
      salary: "4.0 - 5.0 LPA",
      location: "Mumbai, Bangalore, Delhi",
      description: "Consulting role for freshers with strong analytical and communication skills.",
      skills: ["Data Analysis", "Problem Solving", "Communication"],
      eligibility: "Any Engineering Branch, 65%+ CGPA",
      applyLink: "https://www2.deloitte.com/careers",
    },
    {
      id: 11,
      company: "Accenture Solutions",
      role: "IT Support Engineer",
      category: "IT Support",
      salary: "2.8 - 3.5 LPA",
      location: "Pan India",
      description: "Support role for freshers with technical aptitude and customer service skills.",
      skills: ["Troubleshooting", "Customer Service", "Technical Support"],
      eligibility: "B.Tech/Diploma, 50%+ marks",
      applyLink: "https://www.accenture.com/careers",
    },
    {
      id: 12,
      company: "Amazon",
      role: "SDE 1 (Fresher)",
      category: "Software Development",
      salary: "5.0 - 7.0 LPA",
      location: "Bangalore, Mumbai",
      description: "Premium opportunity for talented freshers. Competitive pay with great benefits.",
      skills: ["Data Structures", "Algorithms", "System Design"],
      eligibility: "B.Tech/MCA, Strong DSA fundamentals",
      applyLink: "https://www.amazon.jobs",
      popular: true,
    },
    {
      id: 13,
      company: "Google",
      role: "Associate Engineer",
      category: "Software Development",
      salary: "6.0 - 8.0 LPA",
      location: "Bangalore, Hyderabad",
      description: "Prestigious FAANG company with world-class engineering culture.",
      skills: ["Algorithms", "System Design", "Problem Solving"],
      eligibility: "B.Tech/M.Tech, Strong DSA and Problem Solving",
      applyLink: "https://careers.google.com",
      popular: true,
    },
    {
      id: 14,
      company: "Microsoft",
      role: "Software Engineer",
      category: "Software Development",
      salary: "5.5 - 7.5 LPA",
      location: "Bangalore, Hyderabad",
      description: "Cutting-edge technology work with global exposure and learning opportunities.",
      skills: ["C#", "Python", "Cloud Technologies"],
      eligibility: "B.Tech/MCA, 70%+ CGPA",
      applyLink: "https://careers.microsoft.com",
      popular: true,
    },
    {
      id: 15,
      company: "Swiggy",
      role: "Backend Engineer",
      category: "Software Development",
      salary: "4.5 - 6.0 LPA",
      location: "Bangalore, Delhi",
      description: "Startup opportunity with fast-paced learning environment.",
      skills: ["Java", "Microservices", "Databases"],
      eligibility: "B.Tech/MCA, 65%+ marks",
      applyLink: "https://www.swiggycareers.com",
    },
    {
      id: 16,
      company: "Flipkart",
      role: "Associate Software Engineer",
      category: "Software Development",
      salary: "4.0 - 5.5 LPA",
      location: "Bangalore, Hyderabad",
      description: "E-commerce tech giant with innovative projects and growth opportunities.",
      skills: ["Java", "Python", "Distributed Systems"],
      eligibility: "B.Tech/B.E, 70%+ CGPA",
      applyLink: "https://www.flipkartcareers.com",
    },
    {
      id: 17,
      company: "PayPal",
      role: "Software Engineer",
      category: "Software Development",
      salary: "5.0 - 7.0 LPA",
      location: "Bangalore",
      description: "FinTech company with challenging technical problems to solve.",
      skills: ["Java", "Microservices", "Security"],
      eligibility: "B.Tech, 70%+ CGPA",
      applyLink: "https://www.paypal.com/careers",
    },
    {
      id: 18,
      company: "Goldman Sachs",
      role: "Technology Analyst",
      category: "Finance",
      salary: "6.0 - 9.0 LPA",
      location: "Mumbai, Bangalore",
      description: "Financial services company with strong technical culture.",
      skills: ["Java", "C++", "System Design"],
      eligibility: "B.Tech/MBA, 70%+ CGPA",
      applyLink: "https://www.goldmansachs.com/careers",
    },
    {
      id: 19,
      company: "Oracle",
      role: "Software Developer",
      category: "Software Development",
      salary: "4.8 - 6.5 LPA",
      location: "Bangalore, Pune",
      description: "Global software leader with opportunities to work on enterprise solutions.",
      skills: ["Java", "SQL", "Cloud"],
      eligibility: "B.Tech, 65%+ CGPA",
      applyLink: "https://www.oracle.com/careers",
    },
    {
      id: 20,
      company: "Uber",
      role: "Software Engineer",
      category: "Software Development",
      salary: "5.5 - 8.0 LPA",
      location: "Bangalore, Hyderabad",
      description: "Ride-sharing and delivery tech with cutting-edge systems and scale.",
      skills: ["System Design", "Scalability", "Backend"],
      eligibility: "B.Tech/MCA, Strong DSA",
      applyLink: "https://www.uber.com/careers",
    },
    {
      id: 21,
      company: "Zoho",
      role: "Software Developer",
      category: "Software Development",
      salary: "3.2 - 4.0 LPA",
      location: "Chennai, Bangalore",
      description: "Fresher-friendly role at product company with great learning environment.",
      skills: ["Java", "JavaScript", "Problem Solving"],
      eligibility: "B.Tech/B.E, 60%+ CGPA",
      applyLink: "https://www.zoho.com/careers",
    },
    {
      id: 22,
      company: "Airbnb",
      role: "Software Engineer",
      category: "Software Development",
      salary: "5.0 - 7.0 LPA",
      location: "Bangalore",
      description: "Global platform company with exciting technical challenges for freshers.",
      skills: ["Python", "System Design", "API Development"],
      eligibility: "B.Tech/MCA, Strong Problem Solving",
      applyLink: "https://www.airbnb.com/careers",
    },
    {
      id: 23,
      company: "Gojek",
      role: "Backend Engineer",
      category: "Software Development",
      salary: "4.5 - 6.0 LPA",
      location: "Bangalore",
      description: "Southeast Asia's super-app with cutting-edge tech stack for freshers.",
      skills: ["Java", "Microservices", "Databases"],
      eligibility: "B.Tech/MCA, 65%+ marks",
      applyLink: "https://www.gojek.com/careers",
    },
    {
      id: 24,
      company: "Unacademy",
      role: "Backend Developer",
      category: "Software Development",
      salary: "4.0 - 5.5 LPA",
      location: "Bangalore",
      description: "EdTech unicorn with opportunities for fresher engineers.",
      skills: ["Python", "Node.js", "PostgreSQL"],
      eligibility: "B.Tech/M.Tech, 70%+ CGPA",
      applyLink: "https://www.unacademy.com/careers",
    },
    {
      id: 25,
      company: "Freshworks",
      role: "Associate Software Engineer",
      category: "Software Development",
      salary: "4.2 - 5.5 LPA",
      location: "Bangalore, Chennai",
      description: "SaaS company with great culture for fresher developers.",
      skills: ["Ruby", "JavaScript", "PostgreSQL"],
      eligibility: "B.Tech/B.E, 65%+ CGPA",
      applyLink: "https://www.freshworks.com/careers",
      popular: true,
    },
    {
      id: 26,
      company: "Dunzo",
      role: "Software Engineer",
      category: "Software Development",
      salary: "4.0 - 5.5 LPA",
      location: "Bangalore",
      description: "On-demand delivery startup with great learning opportunities.",
      skills: ["Java", "Python", "Mobile Development"],
      eligibility: "B.Tech/MCA, 60%+ marks",
      applyLink: "https://www.dunzo.com/careers",
    },
    {
      id: 27,
      company: "PhonePe",
      role: "Junior Engineer",
      category: "Software Development",
      salary: "4.5 - 6.0 LPA",
      location: "Bangalore",
      description: "FinTech unicorn with excellent technical environment.",
      skills: ["Java", "Python", "Distributed Systems"],
      eligibility: "B.Tech/M.Tech, 70%+ CGPA",
      applyLink: "https://www.phonepe.com/careers",
    },
    {
      id: 28,
      company: "Razorpay",
      role: "Software Developer",
      category: "Software Development",
      salary: "4.5 - 6.5 LPA",
      location: "Bangalore",
      description: "Payment gateway company with startup culture.",
      skills: ["JavaScript", "Python", "API Design"],
      eligibility: "B.Tech/MCA, Strong DSA",
      applyLink: "https://www.razorpay.com/careers",
      popular: true,
    },
    {
      id: 29,
      company: "OYO Rooms",
      role: "Backend Engineer",
      category: "Software Development",
      salary: "3.8 - 5.0 LPA",
      location: "Bangalore, Gurgaon",
      description: "Travel tech company with opportunities for freshers.",
      skills: ["Java", "Python", "Database Design"],
      eligibility: "B.Tech/B.E, 65%+ marks",
      applyLink: "https://www.oyorooms.com/careers",
    },
    {
      id: 30,
      company: "Cred",
      role: "Associate Engineer",
      category: "Software Development",
      salary: "4.0 - 5.5 LPA",
      location: "Bangalore",
      description: "FinTech startup with great work environment.",
      skills: ["Kotlin", "Java", "API Development"],
      eligibility: "B.Tech/MCA, 70%+ CGPA",
      applyLink: "https://www.cred.club/careers",
    },
    {
      id: 31,
      company: "Atlassian",
      role: "Software Engineer",
      category: "Software Development",
      salary: "5.0 - 7.0 LPA",
      location: "Bangalore",
      description: "Developer tools company with global presence.",
      skills: ["Java", "Python", "Problem Solving"],
      eligibility: "B.Tech/MCA, 70%+ CGPA",
      applyLink: "https://www.atlassian.com/careers",
      popular: true,
    },
    {
      id: 32,
      company: "Grab",
      role: "Backend Engineer",
      category: "Software Development",
      salary: "4.5 - 6.5 LPA",
      location: "Bangalore",
      description: "Southeast Asia's ride-sharing and delivery platform.",
      skills: ["Java", "Microservices", "System Design"],
      eligibility: "B.Tech/M.Tech, 70%+ marks",
      applyLink: "https://www.grab.com/careers",
    },
    {
      id: 33,
      company: "Yext",
      role: "Software Engineer",
      category: "Software Development",
      salary: "4.0 - 5.5 LPA",
      location: "Bangalore",
      description: "Digital knowledge platform with fresher opportunities.",
      skills: ["Java", "Python", "JavaScript"],
      eligibility: "B.Tech/B.E, 65%+ CGPA",
      applyLink: "https://www.yext.com/careers",
    },
    {
      id: 34,
      company: "Meesho",
      role: "Junior Backend Engineer",
      category: "Software Development",
      salary: "3.8 - 5.0 LPA",
      location: "Bangalore",
      description: "Social commerce unicorn with great learning curve.",
      skills: ["Python", "Node.js", "MongoDB"],
      eligibility: "B.Tech/MCA, 65%+ marks",
      applyLink: "https://www.meesho.com/careers",
    },
    {
      id: 35,
      company: "Nykaa",
      role: "Software Engineer",
      category: "Software Development",
      salary: "3.5 - 4.8 LPA",
      location: "Mumbai, Bangalore",
      description: "E-commerce company with growth opportunities.",
      skills: ["Java", "Python", "Web Development"],
      eligibility: "B.Tech/B.E, 60%+ CGPA",
      applyLink: "https://www.nykaa.com/careers",
    },
    {
      id: 36,
      company: "Ixigo",
      role: "Software Developer",
      category: "Software Development",
      salary: "3.5 - 4.8 LPA",
      location: "Gurugram, Bangalore",
      description: "Travel tech company with fresher-friendly culture.",
      skills: ["Java", "JavaScript", "API Development"],
      eligibility: "B.Tech/M.Tech, 65%+ marks",
      applyLink: "https://www.ixigo.com/careers",
    },
    {
      id: 37,
      company: "ShareChat",
      role: "Junior Engineer",
      category: "Software Development",
      salary: "4.0 - 5.5 LPA",
      location: "Bangalore, Mohali",
      description: "Social media unicorn with technical excellence.",
      skills: ["Java", "Python", "System Design"],
      eligibility: "B.Tech/MCA, 70%+ CGPA",
      applyLink: "https://www.sharechat.tv/careers",
    },
    {
      id: 38,
      company: "Rivigo",
      role: "Software Engineer",
      category: "Software Development",
      salary: "3.8 - 5.0 LPA",
      location: "Bangalore",
      description: "Logistics platform with tech-driven approach.",
      skills: ["Java", "Python", "Database"],
      eligibility: "B.Tech/B.E, 65%+ marks",
      applyLink: "https://www.rivigo.com/careers",
    },
    {
      id: 39,
      company: "Moglix",
      role: "Backend Engineer",
      category: "Software Development",
      salary: "3.8 - 5.2 LPA",
      location: "Bangalore, Indore",
      description: "B2B e-commerce platform with fresher opportunities.",
      skills: ["Java", "Python", "Microservices"],
      eligibility: "B.Tech/M.Tech, 65%+ CGPA",
      applyLink: "https://www.moglix.com/careers",
    },
    {
      id: 40,
      company: "Vedavati Ventures",
      role: "Software Developer",
      category: "Software Development",
      salary: "3.5 - 4.5 LPA",
      location: "Hyderabad, Bangalore",
      description: "Tech consulting firm with great training programs.",
      skills: ["Java", "Python", "Cloud"],
      eligibility: "B.Tech/B.E, 60%+ marks",
      applyLink: "https://www.vedavativentures.com/careers",
    },
    {
      id: 41,
      company: "Juspay",
      role: "Software Engineer",
      category: "Software Development",
      salary: "4.0 - 5.5 LPA",
      location: "Bangalore",
      description: "Payments platform with cutting-edge tech stack.",
      skills: ["Haskell", "Python", "System Design"],
      eligibility: "B.Tech/MCA, 70%+ CGPA",
      applyLink: "https://www.juspay.in/careers",
    },
    {
      id: 42,
      company: "Synopsys",
      role: "Junior Engineer",
      category: "Software Development",
      salary: "4.0 - 5.5 LPA",
      location: "Bangalore, Hyderabad",
      description: "Design automation software company with global standards.",
      skills: ["C++", "Python", "Software Design"],
      eligibility: "B.Tech/M.Tech, 70%+ CGPA",
      applyLink: "https://www.synopsys.com/careers",
    },
    {
      id: 43,
      company: "Dailyhunt",
      role: "Backend Engineer",
      category: "Software Development",
      salary: "4.0 - 5.5 LPA",
      location: "Bangalore",
      description: "Content discovery platform for Indian users.",
      skills: ["Java", "Python", "Scala"],
      eligibility: "B.Tech/MCA, 70%+ marks",
      applyLink: "https://www.dailyhunt.in/careers",
    },
    {
      id: 44,
      company: "Quartr",
      role: "Software Developer",
      category: "Software Development",
      salary: "4.2 - 5.8 LPA",
      location: "Bangalore",
      description: "Financial data platform with fresher-friendly environment.",
      skills: ["Python", "JavaScript", "PostgreSQL"],
      eligibility: "B.Tech/B.E, 70%+ CGPA",
      applyLink: "https://www.quartr.com/careers",
    },
    {
      id: 45,
      company: "Cleartax",
      role: "Associate Engineer",
      category: "Software Development",
      salary: "3.8 - 5.0 LPA",
      location: "Bangalore",
      description: "FinTech startup focusing on tax and accounting.",
      skills: ["Java", "Python", "Database"],
      eligibility: "B.Tech/M.Tech, 65%+ marks",
      applyLink: "https://www.cleartax.in/careers",
    },
    {
      id: 46,
      company: "BigBasket",
      role: "Software Engineer",
      category: "Software Development",
      salary: "3.8 - 5.0 LPA",
      location: "Bangalore",
      description: "E-commerce grocery platform with scale challenges.",
      skills: ["Java", "Python", "Microservices"],
      eligibility: "B.Tech/B.E, 65%+ CGPA",
      applyLink: "https://www.bigbasket.com/careers",
    },
    {
      id: 47,
      company: "InMobi",
      role: "Junior Software Engineer",
      category: "Software Development",
      salary: "4.0 - 5.5 LPA",
      location: "Bangalore, Pune",
      description: "Mobile advertising and analytics platform.",
      skills: ["Java", "Python", "Ad Tech"],
      eligibility: "B.Tech/MCA, 70%+ marks",
      applyLink: "https://www.inmobi.com/careers",
    },
    {
      id: 48,
      company: "Dream11",
      role: "Backend Engineer",
      category: "Software Development",
      salary: "4.5 - 6.0 LPA",
      location: "Mumbai",
      description: "Fantasy sports platform with exciting technical problems.",
      skills: ["Java", "Python", "Real-time Systems"],
      eligibility: "B.Tech/M.Tech, 70%+ CGPA",
      applyLink: "https://www.dream11.com/careers",
      popular: true,
    },
    {
      id: 49,
      company: "Practo",
      role: "Software Developer",
      category: "Software Development",
      salary: "3.8 - 5.0 LPA",
      location: "Bangalore, Pune",
      description: "HealthTech platform with social impact.",
      skills: ["Java", "Python", "Healthcare Tech"],
      eligibility: "B.Tech/B.E, 65%+ marks",
      applyLink: "https://www.practo.com/careers",
    },
    {
      id: 50,
      company: "Ezetap",
      role: "Associate Software Engineer",
      category: "Software Development",
      salary: "3.5 - 4.8 LPA",
      location: "Bangalore",
      description: "Payment and point-of-sale solutions company.",
      skills: ["Java", "Python", "Mobile"],
      eligibility: "B.Tech/B.E, 60%+ CGPA",
      applyLink: "https://www.ezetap.com/careers",
    },
    {
      id: 51,
      company: "McKinsey & Company",
      role: "Business Analyst",
      category: "Consulting",
      salary: "8.0 - 12.0 LPA",
      location: "Mumbai, Delhi, Bangalore",
      description: "Global consulting firm with excellent fresher development program.",
      skills: ["Problem Solving", "Analytics", "Communication"],
      eligibility: "B.Tech/MBA/B.Com, 70%+ marks",
      applyLink: "https://www.mckinsey.com/careers",
      popular: true,
    },
    {
      id: 52,
      company: "Boston Consulting Group",
      role: "Associate",
      category: "Consulting",
      salary: "7.5 - 11.0 LPA",
      location: "Mumbai, Bangalore",
      description: "Premier consulting firm with structured training for freshers.",
      skills: ["Analysis", "Client Management", "Strategic Thinking"],
      eligibility: "B.Tech/MBA, 70%+ CGPA",
      applyLink: "https://www.bcg.com/careers",
      popular: true,
    },
    {
      id: 53,
      company: "Bain & Company",
      role: "Associate Consultant",
      category: "Consulting",
      salary: "7.0 - 10.5 LPA",
      location: "Mumbai, Bangalore, Delhi",
      description: "Strategy consulting with focus on fresher hiring.",
      skills: ["Strategic Analysis", "Data Analysis", "Problem Solving"],
      eligibility: "B.Tech/MBA, 70%+ marks",
      applyLink: "https://www.bain.com/careers",
      popular: true,
    },
    {
      id: 54,
      company: "Barclays",
      role: "Graduate Analyst",
      category: "Finance",
      salary: "6.5 - 9.5 LPA",
      location: "Mumbai, London",
      description: "Global banking leader with excellent graduate program.",
      skills: ["Finance", "Excel", "Problem Solving"],
      eligibility: "B.Tech/B.Com, 70%+ CGPA",
      applyLink: "https://www.barclays.com/careers",
      popular: true,
    },
    {
      id: 55,
      company: "HSBC",
      role: "Graduate Trainee",
      category: "Finance",
      salary: "6.0 - 9.0 LPA",
      location: "Mumbai, Bangalore",
      description: "International banking group with structured freshers program.",
      skills: ["Finance", "Risk Analysis", "Compliance"],
      eligibility: "B.Tech/B.Com/B.A, 70%+ marks",
      applyLink: "https://www.hsbc.com/careers",
    },
    {
      id: 56,
      company: "JP Morgan Chase",
      role: "Analyst",
      category: "Finance",
      salary: "7.0 - 10.0 LPA",
      location: "Mumbai, Bangalore",
      description: "Investment banking powerhouse with freshers opportunity.",
      skills: ["Finance", "Data Analysis", "Programming"],
      eligibility: "B.Tech/MBA, 70%+ CGPA",
      applyLink: "https://www.jpmorgan.com/careers",
      popular: true,
    },
    {
      id: 57,
      company: "Morgan Stanley",
      role: "Analyst",
      category: "Finance",
      salary: "7.0 - 10.5 LPA",
      location: "Mumbai, Bangalore",
      description: "Investment bank with global opportunities for freshers.",
      skills: ["Finance", "Markets", "Valuation"],
      eligibility: "B.Tech/MBA, 70%+ marks",
      applyLink: "https://www.morganstanley.com/careers",
    },
    {
      id: 58,
      company: "Citibank",
      role: "Graduate Program",
      category: "Finance",
      salary: "5.5 - 8.0 LPA",
      location: "Mumbai, Bangalore, Delhi",
      description: "Global bank with excellent leadership program for freshers.",
      skills: ["Finance", "Customer Service", "Risk Management"],
      eligibility: "B.Tech/B.Com, 65%+ CGPA",
      applyLink: "https://www.citigroup.com/careers",
    },
    {
      id: 59,
      company: "RBS (Royal Bank of Scotland)",
      role: "Graduate Analyst",
      category: "Finance",
      salary: "5.5 - 8.0 LPA",
      location: "Bangalore",
      description: "Banking group with strong fresher development initiatives.",
      skills: ["Finance", "Excel", "Analysis"],
      eligibility: "B.Tech/M.Tech, 70%+ marks",
      applyLink: "https://www.rbs.com/careers",
    },
    {
      id: 60,
      company: "Credit Suisse",
      role: "Associate",
      category: "Finance",
      salary: "6.5 - 9.5 LPA",
      location: "Mumbai",
      description: "Swiss banking giant with opportunities for engineering freshers.",
      skills: ["Finance", "Programming", "Problem Solving"],
      eligibility: "B.Tech/MBA, 70%+ CGPA",
      applyLink: "https://www.credit-suisse.com/careers",
    },
    {
      id: 61,
      company: "EY (Ernst & Young)",
      role: "Consultant",
      category: "Consulting",
      salary: "5.5 - 8.0 LPA",
      location: "Mumbai, Bangalore, Pune",
      description: "Big Four consulting firm with comprehensive fresher program.",
      skills: ["Problem Solving", "Analysis", "Business Acumen"],
      eligibility: "B.Tech/MBA, 65%+ marks",
      applyLink: "https://www.ey.com/careers",
      popular: true,
    },
    {
      id: 62,
      company: "PwC (PricewaterhouseCoopers)",
      role: "Associate Consultant",
      category: "Consulting",
      salary: "5.5 - 8.0 LPA",
      location: "Mumbai, Delhi, Bangalore",
      description: "Big Four with strong fresher hiring and training.",
      skills: ["Analytics", "Communication", "Problem Solving"],
      eligibility: "B.Tech/B.Com, 65%+ CGPA",
      applyLink: "https://www.pwc.com/careers",
    },
    {
      id: 63,
      company: "KPMG",
      role: "Associate",
      category: "Consulting",
      salary: "5.5 - 8.0 LPA",
      location: "Mumbai, Bangalore",
      description: "Global consulting firm with structured fresher development.",
      skills: ["Analysis", "Client Engagement", "Excel"],
      eligibility: "B.Tech/M.Tech, 65%+ marks",
      applyLink: "https://www.kpmg.com/careers",
    },
    {
      id: 64,
      company: "Deloitte Consulting",
      role: "Consultant",
      category: "Consulting",
      salary: "5.5 - 8.5 LPA",
      location: "Mumbai, Bangalore, Hyderabad",
      description: "Big Four consulting division with excellent fresher programs.",
      skills: ["Problem Solving", "IT Knowledge", "Communication"],
      eligibility: "B.Tech/MBA, 70%+ CGPA",
      applyLink: "https://www.deloitte.com/careers",
    },
    {
      id: 65,
      company: "Accenture Consulting",
      role: "Consultant",
      category: "Consulting",
      salary: "5.0 - 7.5 LPA",
      location: "Mumbai, Bangalore, Pune",
      description: "Consulting arm with transformation and digital expertise.",
      skills: ["Digital Transformation", "Analysis", "Business Skills"],
      eligibility: "B.Tech/MCA, 60%+ marks",
      applyLink: "https://www.accenture.com/careers",
    },
    {
      id: 66,
      company: "Axis Bank",
      role: "Management Trainee",
      category: "Finance",
      salary: "4.5 - 6.5 LPA",
      location: "Pan India",
      description: "Private banking leader with excellent fresher management program.",
      skills: ["Finance", "Banking", "Customer Service"],
      eligibility: "B.Tech/B.Com, 65%+ CGPA",
      applyLink: "https://www.axisbank.com/careers",
    },
    {
      id: 67,
      company: "HDFC Bank",
      role: "Freshers Program",
      category: "Finance",
      salary: "4.5 - 6.5 LPA",
      location: "Pan India",
      description: "India's largest private bank with comprehensive fresher training.",
      skills: ["Finance", "Banking", "Problem Solving"],
      eligibility: "B.Tech/B.Com/B.A, 70%+ marks",
      applyLink: "https://www.hdfcbank.com/careers",
      popular: true,
    },
    {
      id: 68,
      company: "ICICI Bank",
      role: "Probationary Officer",
      category: "Finance",
      salary: "4.5 - 6.5 LPA",
      location: "Pan India",
      description: "Leading private bank with structured officer development program.",
      skills: ["Finance", "Management", "Customer Service"],
      eligibility: "B.Tech/B.Com, 70%+ CGPA",
      applyLink: "https://www.icicibank.com/careers",
    },
    {
      id: 69,
      company: "Kotak Mahindra Bank",
      role: "Graduate Trainee",
      category: "Finance",
      salary: "4.5 - 6.5 LPA",
      location: "Mumbai, Bangalore",
      description: "Financial services leader with excellent fresher development.",
      skills: ["Finance", "Risk", "Analytics"],
      eligibility: "B.Tech/B.Com, 70%+ marks",
      applyLink: "https://www.kotak.com/careers",
    },
    {
      id: 70,
      company: "Capgemini Consulting",
      role: "Consultant",
      category: "Consulting",
      salary: "5.0 - 7.5 LPA",
      location: "Bangalore, Pune",
      description: "Global IT consulting firm with transformation expertise.",
      skills: ["IT Consulting", "Problem Solving", "Business Analysis"],
      eligibility: "B.Tech/M.Tech, 65%+ CGPA",
      applyLink: "https://www.capgemini.com/careers",
    },
  ], []);

  // Add application deadlines and filter out past dates
  const jobsWithDeadlines = useMemo(() => {
    const today = new Date("2026-01-26");
    return jobs.map((job, index) => {
      // Add deadline: starting from Jan 28, 2026, each job gets a deadline 2-4 weeks from now
      const deadlineDate = new Date("2026-01-28");
      deadlineDate.setDate(deadlineDate.getDate() + ((index % 28) + 1));
      return {
        ...job,
        applicationDeadline: deadlineDate.toLocaleDateString("en-IN", { 
          year: "numeric", 
          month: "short", 
          day: "numeric" 
        }),
        deadlineObj: deadlineDate,
      };
    }).filter(job => job.deadlineObj >= today);
  }, [jobs]);

  const categories = ["All", "Software Development", "Consulting", "IT Support", "Finance"];

  const filteredJobs = useMemo(() => {
    let result = jobsWithDeadlines;

    if (selectedCategory !== "All") {
      result = result.filter(job => job.category === selectedCategory);
    }

    if (searchTerm.trim()) {
      result = result.filter(job =>
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return result;
  }, [searchTerm, selectedCategory, jobsWithDeadlines]);

  return (
    <div style={styles.container}>
      {/* Welcome Modal */}
      {showWelcomeModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <button
              onClick={() => setShowWelcomeModal(false)}
              style={styles.closeButton}
            >
              ✕
            </button>
            <div style={styles.modalHeader}>
              <span style={styles.welcomeEmoji}>🚀</span>
              <h2 style={styles.modalTitle}>Your Dream Job Awaits! 💼</h2>
            </div>
            <div style={styles.motivationalBox}>
              <p style={styles.motivationalText}>
                Hey there, Future Engineer! 👋
              </p>
              <p style={styles.motivationalMessage}>
                "Every great journey begins with a single step. You're about to explore opportunities at India's top companies! 
                Remember - you have unique talents and the experience you gain here will shape your incredible career. 
                Let's find YOUR perfect opportunity! 💪"
              </p>
              <div style={styles.quickStats}>
                <div style={styles.quickStat}>
                  <span style={styles.statEmoji}>💼</span>
                  <span>70 Jobs</span>
                </div>
                <div style={styles.quickStat}>
                  <span style={styles.statEmoji}>💰</span>
                  <span>3.2-12 LPA</span>
                </div>
                <div style={styles.quickStat}>
                  <span style={styles.statEmoji}>🏢</span>
                  <span>50+ Companies</span>
                </div>
              </div>
              <div style={styles.tipsBox}>
                <p style={styles.tipTitle}>✨ Pro Tips for Success:</p>
                <ul style={styles.tipsList}>
                  <li>✓ Update your resume before applying</li>
                  <li>✓ Use the search to filter by skills you know</li>
                  <li>✓ Apply to 5-10 jobs that match your profile</li>
                </ul>
              </div>
            </div>
            <button
              onClick={() => setShowWelcomeModal(false)}
              style={styles.startButton}
            >
              Let's Go! 🎯
            </button>
          </div>
        </div>
      )}

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
          <h2 style={styles.title}>💼 Fresh Job Opportunities</h2>
          <p style={styles.subtitle}>
            Explore entry-level jobs perfect for engineering freshers with no experience required
          </p>

          {/* Stats */}
          <div style={styles.statsContainer}>
            <div style={styles.statBox}>
              <div style={styles.statNumber}>70</div>
              <div style={styles.statLabel}>Fresh Jobs</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statNumber}>3.5 - 9.0</div>
              <div style={styles.statLabel}>Salary Range (LPA)</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statNumber}>50+</div>
              <div style={styles.statLabel}>Companies</div>
            </div>
          </div>

          {/* Search Bar */}
          <div style={styles.searchContainer}>
            <div style={styles.searchWrapper}>
              <span style={styles.searchIcon}>🔍</span>
              <input
                type="text"
                placeholder="Search by company, role, skill, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.searchInput}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  style={styles.clearButton}
                >
                  ✕
                </button>
              )}
            </div>
            <div style={styles.searchResults}>
              Found <span style={styles.resultCount}>{filteredJobs.length}</span> jobs
            </div>
          </div>

          {/* Category Filter */}
          <div style={styles.filterContainer}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  ...styles.filterButton,
                  ...(selectedCategory === category && styles.filterButtonActive),
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Jobs Grid */}
          <div style={styles.jobsGrid}>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <div
                  key={job.id}
                  onMouseEnter={() => setHoveredJob(job.id)}
                  onMouseLeave={() => setHoveredJob(null)}
                  style={{
                    ...styles.jobCard,
                    animationDelay: `${index * 0.05}s`,
                    ...(hoveredJob === job.id && {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 40px rgba(6, 182, 212, 0.4)",
                      borderColor: "rgba(6, 182, 212, 0.8)",
                    }),
                  }}
                >
                  {job.popular && <div style={styles.popularBadge}>⭐ Popular</div>}
                  
                  <div style={styles.jobHeader}>
                    <h3 style={styles.company}>{job.company}</h3>
                    <span style={styles.category}>{job.category}</span>
                  </div>

                  <h4 style={styles.role}>{job.role}</h4>
                  <p style={styles.salary}>{job.salary}</p>
                  <p style={styles.location}>📍 {job.location}</p>

                  <p style={styles.description}>{job.description}</p>

                  <div style={styles.skills}>
                    {job.skills.map((skill, idx) => (
                      <span key={idx} style={styles.skillTag}>{skill}</span>
                    ))}
                  </div>

                  <div style={styles.eligibility}>
                    <strong>Eligibility:</strong> {job.eligibility}
                  </div>

                  <div style={styles.deadline}>
                    <strong>📅 Application Deadline:</strong> <span style={styles.deadlineDate}>{job.applicationDeadline}</span>
                  </div>

                  <a
                    href={job.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...styles.applyButton,
                      ...(hoveredJob === job.id && {
                        background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                        boxShadow: "0 8px 20px rgba(6, 182, 212, 0.5)",
                      }),
                    }}
                  >
                    Apply Now →
                  </a>
                </div>
              ))
            ) : (
              <div style={styles.noResults}>
                <p>No jobs found matching your criteria. Try adjusting your search!</p>
              </div>
            )}
          </div>

          {/* Tips Section */}
          <section style={styles.tipsSection}>
            <h3 style={styles.tipsTitle}>💡 Tips for Fresher Job Applications</h3>
            <div style={styles.tipsGrid}>
              <div style={styles.tipCard}>
                <span style={styles.tipIcon}>📋</span>
                <h4>Update Your Resume</h4>
                <p>Highlight academic projects, internships, and technical skills clearly.</p>
              </div>
              <div style={styles.tipCard}>
                <span style={styles.tipIcon}>💻</span>
                <h4>Polish Your Portfolio</h4>
                <p>Showcase your best work on GitHub or personal projects.</p>
              </div>
              <div style={styles.tipCard}>
                <span style={styles.tipIcon}>🎤</span>
                <h4>Practice Mock Interviews</h4>
                <p>Prepare for technical interviews with practice sessions.</p>
              </div>
              <div style={styles.tipCard}>
                <span style={styles.tipIcon}>📚</span>
                <h4>DSA Preparation</h4>
                <p>Master Data Structures and Algorithms for technical rounds.</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2024 Crazy Resources. Your gateway to fresher jobs! 🚀</p>
      </footer>
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
  searchContainer: {
    marginBottom: "40px",
  },
  searchWrapper: {
    display: "flex",
    alignItems: "center",
    background: "rgba(15, 23, 42, 0.8)",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "12px",
    padding: "12px 20px",
    gap: "12px",
    marginBottom: "12px",
    boxShadow: "0 8px 24px rgba(6, 182, 212, 0.15)",
  },
  searchIcon: {
    fontSize: "20px",
    color: "#06b6d4",
  },
  searchInput: {
    flex: 1,
    background: "transparent",
    border: "none",
    color: "#f1f5f9",
    fontSize: "16px",
    outline: "none",
  },
  clearButton: {
    background: "rgba(239, 68, 68, 0.2)",
    border: "none",
    color: "#ef4444",
    borderRadius: "6px",
    padding: "6px 12px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  searchResults: {
    fontSize: "14px",
    color: "#cbd5e1",
    textAlign: "right",
  },
  resultCount: {
    color: "#06b6d4",
    fontWeight: "bold",
  },
  filterContainer: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "40px",
  },
  filterButton: {
    padding: "8px 16px",
    background: "rgba(6, 182, 212, 0.1)",
    color: "#06b6d4",
    border: "2px solid rgba(6, 182, 212, 0.3)",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  filterButtonActive: {
    background: "rgba(6, 182, 212, 0.3)",
    borderColor: "#06b6d4",
    boxShadow: "0 0 15px rgba(6, 182, 212, 0.4)",
  },
  jobsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "24px",
    marginBottom: "60px",
  },
  jobCard: {
    background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 27, 75, 0.9))",
    border: "2px solid rgba(100, 116, 139, 0.2)",
    borderRadius: "16px",
    padding: "24px",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    animation: "slideInUp 0.6s ease-out forwards",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
  },
  popularBadge: {
    position: "absolute",
    top: "12px",
    right: "12px",
    background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
    color: "#000",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "700",
  },
  jobHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    marginBottom: "12px",
    gap: "12px",
  },
  company: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#06b6d4",
    margin: "0",
  },
  category: {
    background: "rgba(139, 92, 246, 0.2)",
    color: "#d8b4fe",
    padding: "4px 8px",
    borderRadius: "6px",
    fontSize: "11px",
    fontWeight: "600",
    whiteSpace: "nowrap",
  },
  role: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#f1f5f9",
    margin: "8px 0",
  },
  salary: {
    fontSize: "15px",
    color: "#34d399",
    fontWeight: "600",
    margin: "6px 0",
  },
  location: {
    fontSize: "13px",
    color: "#cbd5e1",
    margin: "6px 0",
  },
  description: {
    fontSize: "14px",
    color: "#cbd5e1",
    margin: "12px 0",
    lineHeight: "1.5",
  },
  skills: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    margin: "12px 0",
  },
  skillTag: {
    background: "rgba(59, 130, 246, 0.15)",
    color: "#93c5fd",
    padding: "4px 10px",
    borderRadius: "6px",
    fontSize: "12px",
    border: "1px solid rgba(59, 130, 246, 0.3)",
  },
  eligibility: {
    fontSize: "13px",
    color: "#cbd5e1",
    background: "rgba(251, 191, 36, 0.1)",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "12px",
    borderLeft: "3px solid #fbbf24",
  },
  applyButton: {
    display: "block",
    width: "100%",
    padding: "12px",
    background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    color: "#fff",
    textDecoration: "none",
    textAlign: "center",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(6, 182, 212, 0.3)",
  },
  noResults: {
    gridColumn: "1 / -1",
    textAlign: "center",
    padding: "40px",
    color: "#cbd5e1",
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
  },
  tipIcon: {
    fontSize: "32px",
    display: "block",
    marginBottom: "12px",
  },
  footer: {
    background: "linear-gradient(135deg, #0a0a16, #0f0f23)",
    color: "#cbd5e1",
    textAlign: "center",
    padding: "30px",
    fontSize: "14px",
    borderTop: "2px solid rgba(6, 182, 212, 0.2)",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    backdropFilter: "blur(5px)",
  },
  modalContent: {
    background: "linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 27, 75, 0.95))",
    border: "2px solid rgba(6, 182, 212, 0.4)",
    borderRadius: "20px",
    padding: "40px",
    maxWidth: "500px",
    width: "90%",
    animation: "slideInUp 0.5s ease-out",
    boxShadow: "0 20px 60px rgba(6, 182, 212, 0.3)",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "rgba(239, 68, 68, 0.2)",
    border: "none",
    color: "#ef4444",
    fontSize: "24px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  modalHeader: {
    textAlign: "center",
    marginBottom: "20px",
  },
  welcomeEmoji: {
    fontSize: "48px",
    display: "block",
    marginBottom: "10px",
    animation: "float 3s ease-in-out infinite",
  },
  modalTitle: {
    fontSize: "28px",
    color: "#06b6d4",
    margin: "0",
    fontWeight: "bold",
  },
  motivationalBox: {
    background: "rgba(6, 182, 212, 0.1)",
    border: "1px solid rgba(6, 182, 212, 0.2)",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "20px",
  },
  motivationalText: {
    fontSize: "16px",
    color: "#06b6d4",
    fontWeight: "bold",
    margin: "0 0 10px 0",
  },
  motivationalMessage: {
    fontSize: "14px",
    color: "#cbd5e1",
    lineHeight: "1.8",
    margin: "0 0 15px 0",
    fontStyle: "italic",
  },
  quickStats: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    marginBottom: "15px",
  },
  quickStat: {
    background: "rgba(139, 92, 246, 0.2)",
    border: "1px solid rgba(139, 92, 246, 0.3)",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
    fontSize: "13px",
    color: "#d8b4fe",
    fontWeight: "600",
  },
  statEmoji: {
    fontSize: "18px",
    display: "block",
    marginBottom: "4px",
  },
  tipsBox: {
    background: "rgba(251, 191, 36, 0.1)",
    border: "1px solid rgba(251, 191, 36, 0.3)",
    borderRadius: "8px",
    padding: "12px",
  },
  tipTitle: {
    fontSize: "13px",
    fontWeight: "700",
    color: "#fbbf24",
    margin: "0 0 8px 0",
  },
  tipsList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    fontSize: "12px",
    color: "#cbd5e1",
    lineHeight: "1.8",
  },
  startButton: {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 24px rgba(6, 182, 212, 0.4)",
  },
};
