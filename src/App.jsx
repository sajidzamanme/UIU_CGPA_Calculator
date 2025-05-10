import { useState } from "react";
import SemesterToCalc from "./components/SemesterToCalc";
import NavBar from "./components/NavBar";
import CurrentResult from "./components/CurrentResult";
import Modal from "./components/Modal";

function App() {
  const [currentStatus, setCurrentStatus] = useState({
    currentCredits: "",
    currentCGPA: "",
  });
  const [isValidCurrentCGPA, setIsValidCurrentCGPA] = useState(true);
  const [semesterStatus, setSemesterStatus] = useState({
    semesterCredits: "",
    semesterGPA: "",
  });
  const [retakeStatus, setRetakeStatus] = useState({
    retakeCredits: "",
    previousGPA: "",
    retakeGPA: "",
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <div className="relative min-h-dvh max-h-full w-full bg-[#fff1e0]">
        <NavBar />

        <main className="flex flex-col p-6 z-20 lg:items-center">
          <div className="flex flex-col bg-[#fad6aa] rounded-2xl items-center min-h-[37rem] shadow-md lg:w-4/5 lg:mt-16">
            <div className="flex flex-col gap-8 w-full p-6 lg:flex-row">
              <CurrentResult
                currentStatus={currentStatus}
                setCurrentStatus={setCurrentStatus}
                isValidCurrentCGPA={isValidCurrentCGPA}
                setIsValidCurrentCGPA={setIsValidCurrentCGPA}
              />

              <div className="w-full h-[3px] bg-orange-400 lg:hidden"></div>

              <SemesterToCalc
                setSemesterStatus={setSemesterStatus}
                setRetakeStatus={setRetakeStatus}
                setIsModalVisible={setIsModalVisible}
              />
            </div>
          </div>
        </main>

        {isModalVisible && (
          <Modal
            currentStatus={currentStatus}
            retakeStatus={retakeStatus}
            semesterStatus={semesterStatus}
            setIsModalVisible={setIsModalVisible}
            isValidCurrentCGPA={isValidCurrentCGPA}
          />
        )}
      </div>
    </>
  );
}

export default App;
