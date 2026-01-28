import { useState } from "react";
import Home from "./pages/Home_new";
import Hackathons from "./pages/Hackathons";
import Internships from "./pages/Internships";
import EnglishCommunication from "./pages/EnglishCommunication";
import AITools from "./pages/AITools";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import CyberSecurity from "./pages/CyberSecurity";
import SupportTeam from "./pages/SupportTeam";
import RoadMaps from "./pages/RoadMaps";
import Jobs from "./pages/Jobs";
import CodingOpportunities from "./pages/CodingOpportunities";
import FreeCourses from "./pages/FreeCourses";
import MoneyMakingSkills from "./pages/MoneyMakingSkills";

export default function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  const [currentPage, setCurrentPage] = useState(user ? "home" : "login");
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <>
      {currentPage === "login" && (
        <Login setCurrentPage={setCurrentPage} setUser={setUser} />
      )}
      {currentPage === "signup" && (
        <Signup setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "home" && (
        <Home setCurrentPage={setCurrentPage} setSelectedInternship={setSelectedInternship} user={user} />
      )}
      {currentPage === "hackathons" && (
        <Hackathons setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "internships" && (
        <Internships 
          setCurrentPage={setCurrentPage}
          initialSelectedInternship={selectedInternship}
          setSelectedInternship={setSelectedInternship}
        />
      )}
      {currentPage === "english-communication" && (
        <EnglishCommunication setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "ai-tools" && (
        <AITools setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "admin-dashboard" && (
        <AdminDashboard setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "cyber-security" && (
        <CyberSecurity setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "support-team" && (
        <SupportTeam setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "roadmaps" && (
        <RoadMaps setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "jobs" && (
        <Jobs setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "coding-opportunities" && (
        <CodingOpportunities setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "free-courses" && (
        <FreeCourses setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "money-making-skills" && (
        <MoneyMakingSkills setCurrentPage={setCurrentPage} setSelectedSkill={setSelectedSkill} />
      )}
    </>
  );
}



