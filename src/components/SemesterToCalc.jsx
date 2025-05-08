import SemesterForm from "./SemesterForm";

const SemesterToCalc = ({ setSemesterStatus, setIsModalVisible }) => {
  return (
    <div className="flex flex-col justify-center gap-2 lg:w-1/2">
      <h1 className="text-2xl text-center p-4 font-semibold bg-[#fff1e0] rounded-lg">
        Semester to calculate:
      </h1>
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-row gap-4 w-full bg-[#fff1e0] rounded-lg p-2">
          <h1 className="w-3/4 text-center font-medium">Course Credit:</h1>
          <h1 className="w-1/4 text-center font-medium">GPA:</h1>
        </div>

        <SemesterForm setSemesterStatus={setSemesterStatus} setIsModalVisible={setIsModalVisible} />
      </div>
    </div>
  );
};

export default SemesterToCalc;
