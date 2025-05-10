import { useEffect } from "react";
import { useState } from "react";

const CurrentResult = ({ currentStatus, setCurrentStatus, isValidCurrentCGPA, setIsValidCurrentCGPA }) => {
  useEffect(() => {
    if(currentStatus.currentCGPA >= 0 && currentStatus.currentCGPA <= 4) {
      setIsValidCurrentCGPA(true);
    }
    else {
      setIsValidCurrentCGPA(false);
    }
  }, [currentStatus.currentCGPA]);
  
  return (
    <div className="flex flex-col justify-center gap-2 lg:w-1/2">
      <h1 className="text-2xl text-center p-4 font-semibold bg-[#fff1e0] rounded-lg">
        Current Result:
      </h1>
      <input
        value={currentStatus.currentCredits}
        type="text"
        className="h-14 shadow-md text-center bg-[#fff1e0] rounded-lg"
        placeholder="Enter your completed credits"
        onChange={(e) => {
          setCurrentStatus((prevState) => {
            return { ...prevState, currentCredits: e.target.value };
          });
        }}
      />
      <input
        value={currentStatus.currentCGPA}
        type="text"
        className={`h-14 shadow-md text-center bg-[#fff1e0] rounded-lg placeholder[#9d9ea0] ${isValidCurrentCGPA ? "" : "text-red-600"}`}
        placeholder="Enter your current CGPA"
        onChange={(e) => {
          setCurrentStatus((prevState) => {
            return { ...prevState, currentCGPA: e.target.value };
          });
        }}
      />
    </div>
  );
};

export default CurrentResult;
