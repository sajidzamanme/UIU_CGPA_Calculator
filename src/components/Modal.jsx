const Modal = ({
  currentStatus,
  retakeStatus,
  semesterStatus,
  setIsModalVisible,
}) => {
  const closeModal = () => {
    setIsModalVisible((prevState) => !prevState);
  };

  const retakeCredits = Number(retakeStatus.retakeCredits);
  const retakePreviousGPA = Number(retakeStatus.previousGPA);
  const retakeGPA = Number(retakeStatus.retakeGPA);

  const currentCredits = Number(currentStatus.currentCredits);
  const currentCGPA = Number(currentStatus.currentCGPA);
  const currentTotal =
    currentCGPA * currentCredits -
    retakeCredits * retakePreviousGPA +
    retakeCredits * retakeGPA;

  const semesterCredits = Number(semesterStatus.semesterCredits);
  const semesterGPA = Number(semesterStatus.semesterGPA);
  const semesterTotal = semesterCredits * semesterGPA;

  const totalCredit = currentCredits + semesterCredits;

  const CGPA =
    totalCredit > 0
      ? ((semesterTotal + currentTotal) / totalCredit).toFixed(2)
      : 0;

  return (
    <div className="fixed top-0 left-0 flex flex-row justify-center items-center h-full w-full z-50">
      <div
        onClick={closeModal}
        className="fixed z-0 bg-black opacity-60 h-dvh w-full"
      ></div>
      <div className="z-10 flex flex-col gap-2 bg-[#fde9de] p-6 rounded-lg shadow-lg w-3/4 lg:w-1/3">
        <h1 className="text-center text-2xl font-semibold text-orange-500">
          Summary:
        </h1>
        <div className="flex flex-col">
          <h1 className="text-orange-500 font-medium">
            Semester Credits: {semesterCredits}
          </h1>
          <h1 className="text-orange-500 font-medium">
            Semester GPA: {semesterGPA.toFixed(2)}
          </h1>
          {retakeCredits > 0 && (
            <div>
              <h1 className="text-orange-500 font-medium">
                Retake Credits: {retakeCredits}
              </h1>
              <h1 className="text-orange-500 font-medium">
                Semester GPA (with Retake):{" "}
                {((semesterGPA * semesterCredits +
                  retakeGPA * retakeCredits) /
                  (semesterCredits + retakeCredits)).toFixed(2)}
              </h1>
            </div>
          )}
          <h1 className="text-orange-500 font-medium">
            Total Completed Credits: {totalCredit}
          </h1>
          <h1 className="text-orange-500 font-medium">CGPA: {CGPA}</h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
