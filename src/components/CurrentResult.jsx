const CurrentResult = ({
  completedCredits,
  setcompletedCredits,
  currentCGPA,
  setcurrentCGPA,
  calculatedCGPA,
}) => {
  return (
    <div className="flex flex-col justify-center gap-2 lg:w-1/2">
      <h1 className="text-2xl text-center p-4 font-semibold bg-[#fff1e0]">
        Current Result:
      </h1>
      <input
        value={completedCredits}
        type="text"
        className="h-14 shadow-md text-center bg-[#fff1e0]"
        placeholder="Enter your completed credits"
        onChange={(e) => {
          setcompletedCredits(e.target.value);
        }}
      />
      <input
        value={currentCGPA}
        type="text"
        className="h-14 shadow-md text-center bg-[#fff1e0]"
        placeholder="Enter your current CGPA"
        onChange={(e) => {
          setcurrentCGPA(e.target.value);
        }}
      />
      <h1 className="shadow-md text-center font-medium text-xl p-6 bg-[#fff1e0]">
        Calculated CGPA: <span className="text-orange-600">{calculatedCGPA}</span>
      </h1>
    </div>
  );
};

export default CurrentResult;
