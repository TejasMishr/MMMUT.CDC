import React, { useState, useEffect, Suspense, lazy } from "react";
import "./Team.css";
import FacultyAdvisor from "./Faculty/FacultyAdvisor.jsx";
import { Home } from "./Alumanipage.jsx";
import { Lottie } from "../../hooks/lottie/lottie.jsx";

// Lazy-loaded components
const Team1 = lazy(() => import("./Team1/Team1.jsx"));
const Team2 = lazy(() => import("./Team2/Team2.jsx"));
const Team3 = lazy(() => import("./Team3/Team3.jsx"));
const Team4 = lazy(() => import("./Team4/Team4.jsx"));
const Team5 = lazy(() => import("./Team5/Team5.jsx"));

function Team() {
  const [selectedTeam, setSelectedTeam] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isTeamLoading, setIsTeamLoading] = useState(false);

  useEffect(() => {
    // Show loader for 2 seconds on first page load
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const showTeam = (teamNumber) => {
    console.log(`Switching to Team: ${teamNumber}`);
    setIsTeamLoading(true);
    setTimeout(() => {
      setSelectedTeam(teamNumber);
      setIsTeamLoading(false);
    }, 4000); // 3 seconds loader for switching teams
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-800">
        <Lottie
          link="https://lottie.host/dbb912fc-058e-4efb-b3ce-078f8b54e9f7/fNAs8nGILX.json"
          wid="100%"
          className="sm:w-[60%] w-[90%]"
        />
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden min-h-screen relative bg-gray-900 after:content-[''] relative z-[15]">
      <div
        className="absolute top-0 right-0 w-full h-full blur-3xl z-[0]"
        style={{
          background:
            "radial-gradient(circle, rgba(23,20,27,1) 0%, rgba(58,94,121,1) 66%, rgba(42,58,78,1) 90%)",
        }}
      />
      <FacultyAdvisor />
      <div className="z-[18] relative">
        <div className="team_btn">
          <ul className="tul">
            <li className="tli">
              <button className="tbutton" onClick={() => showTeam(0)}>
                Alumni(18-22)
              </button>
            </li>
            <li className="tli">
              <button className="tbutton" onClick={() => showTeam(1)}>
                Alumni(19-23)
              </button>
            </li>
            <li className="tli">
              <button className="tbutton" onClick={() => showTeam(2)}>
                Alumni(20-24)
              </button>
            </li>
            <li className="tli">
              <button className="tbutton" onClick={() => showTeam(3)}>
                2021-25
              </button>
            </li>
            <li className="tli">
              <button className="tbutton" onClick={() => showTeam(4)}>
                2022-26
              </button>
            </li>
            <li className="tli">
              <button className="tbutton" onClick={() => showTeam(5)}>
                2023-27
              </button>
            </li>
          </ul>
        </div>
      </div>
      {isTeamLoading ? (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
          <Lottie
            link="https://lottie.host/dbb912fc-058e-4efb-b3ce-078f8b54e9f7/fNAs8nGILX.json"
            wid="100%"
            className="sm:w-[60%] w-[90%]"
          />
        </div>
      ) : (
        <Suspense>
          <div>
            {selectedTeam === 0 && <Home />}
            {selectedTeam === 1 && <Team1 />}
            {selectedTeam === 2 && <Team2 />}
            {selectedTeam === 3 && <Team3 />}
            {selectedTeam === 4 && <Team4 />}
            {selectedTeam === 5 && <Team5 />}
          </div>
        </Suspense>
      )}
    </div>
  );
}

export default Team;
