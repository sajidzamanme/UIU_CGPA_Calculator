import { useState } from "react";
import SemesterToCalc from "./components/SemesterToCalc";
import NavBar from "./components/NavBar";
import CurrentResult from "./components/CurrentResult";

function App() {
  const [calculatedCGPA, setCalculatedCGPA] = useState("");
  const [completedCredits, setcompletedCredits] = useState("");
  const [currentCGPA, setcurrentCGPA] = useState("");

  return (
    <div className="min-h-dvh max-h-full w-full bg-[#fff1e0]">
      <NavBar />

      <main className="flex flex-col p-6 lg:items-center lg:justify-center">
        <div className="flex flex-col bg-[#fad6aa] items-center min-h-[37rem]  shadow-md lg:justify-center lg:w-4/5">
          <div className="flex flex-col gap-8 w-full p-6 lg:flex-row">
            <CurrentResult
              calculatedCGPA={calculatedCGPA}
              completedCredits={completedCredits}
              setcompletedCredits={setcompletedCredits}
              currentCGPA={currentCGPA}
              setcurrentCGPA={setcurrentCGPA}
            />
            <div className="w-full h-[3px] bg-orange-400 lg:hidden"></div>
            <SemesterToCalc
              completedCredits={completedCredits}
              currentCGPA={currentCGPA}
              setCalculatedCGPA={setCalculatedCGPA}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
