import { useState } from "react";
import Home from "./pages/Home_new";
import Hackathons from "./pages/Hackathons";
import Internships from "./pages/Internships";
import EnglishCommunication from "./pages/EnglishCommunication";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedInternship, setSelectedInternship] = useState(null);

  return (
    <>
      {currentPage === "home" && (
        <Home setCurrentPage={setCurrentPage} setSelectedInternship={setSelectedInternship} />
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
    </>
  );
}



