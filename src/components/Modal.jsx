const Modal = ({ currentStatus, semesterStatus, setIsModalVisible }) => {
  const closeModal = () => {
    setIsModalVisible((prevState) => !prevState);
  };

  const totalCredit =
    Number(currentStatus.currentCredits) +
    Number(semesterStatus.semesterCredits);
  const CGPA =
    totalCredit > 0
      ? (
          (Number(semesterStatus.semesterCredits) *
            Number(semesterStatus.semesterGPA) +
            Number(currentStatus.currentCGPA) *
              Number(currentStatus.currentCredits)) /
          totalCredit
        ).toFixed(2)
      : 0;

  return (
    <div className="fixed top-0 left-0 flex flex-row justify-center items-center h-dvh w-full z-50">
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
            Total Semester Credits: {semesterStatus.semesterCredits}
          </h1>
          <h1 className="text-orange-500 font-medium">
            Semester GPA: {semesterStatus.semesterGPA}
          </h1>
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
