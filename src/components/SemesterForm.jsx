import { useState } from "react";
import DetailsList from "./DetailsList";
import RetakesList from "./RetakesList";
import FormButtons from "./FormButtons";

const SemesterForm = ({
  setSemesterStatus,
  setRetakeStatus,
  setIsModalVisible,
}) => {
  const [details, setDetails] = useState([
    {
      credit: "",
      gpa: "",
    },
    {
      credit: "",
      gpa: "",
    },
    {
      credit: "",
      gpa: "",
    },
    {
      credit: "",
      gpa: "",
    },
    {
      credit: "",
      gpa: "",
    },
  ]);

  const [retakes, setRetakes] = useState([]);

  const handleAdd = () => {
    setDetails((prevState) => [...prevState, { credit: "", gpa: "" }]);
  };

  const handleRetake = () => {
    setRetakes((prevState) => [
      ...prevState,
      { credit: "", prevgpa: "", newgpa: "" },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let creditsSum = 0;
    let semesterGPA = 0;

    details.forEach((detail) => {
      creditsSum += Number(detail.credit);
      semesterGPA += Number(detail.gpa) * Number(detail.credit);
    });

    if (creditsSum > 0) semesterGPA /= creditsSum;
    else semesterGPA = 0;

    setSemesterStatus({
      semesterCredits: creditsSum.toString(),
      semesterGPA: semesterGPA.toString(),
    });

    let retakeCreditsSum = 0;
    let prevGPA = 0;
    let newGPA = 0;

    retakes.forEach((retake) => {
      if (retake.prevgpa < retake.newgpa) {
        retakeCreditsSum += Number(retake.credit);
        prevGPA += Number(retake.prevgpa) * Number(retake.credit);
        newGPA += Number(retake.newgpa) * Number(retake.credit);
      }
    });

    if (retakeCreditsSum > 0) {
      prevGPA /= retakeCreditsSum;
      newGPA /= retakeCreditsSum;
    }

    setRetakeStatus({
      retakeCredits: retakeCreditsSum.toString(),
      previousGPA: prevGPA.toString(),
      retakeGPA: newGPA.toString(),
    });

    setIsModalVisible((prevState) => !prevState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-3 w-full"
    >
      <DetailsList details={details} setDetails={setDetails} />

      <RetakesList retakes={retakes} setRetakes={setRetakes} />

      <FormButtons handleAdd={handleAdd} handleRetake={handleRetake} />
    </form>
  );
};

export default SemesterForm;
