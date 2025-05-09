import { useState } from "react";

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

  const handleRemove = (pos) => {
    setDetails((prevState) => prevState.filter((_, index) => {
      return index !== pos;
    }));
  };

  const handleRemoveRetake = (pos) => {
    setRetakes((prevState) => prevState.filter((_, index) => {
      return index !== pos;
    }));
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
      retakeCreditsSum += Number(retake.credit);
      prevGPA += Number(retake.prevgpa) * Number(retake.credit);
      newGPA += Number(retake.newgpa) * Number(retake.credit);
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
      {details.map((detail, index) => {
        return (
          <div
            key={index}
            className="flex flex-row gap-1 w-full md:gap-2 xl:gap-4"
          >
            <select
              value={detail.credit}
              className="border h-12 w-[73%] text-center bg-[#fff1e0] rounded-lg"
              onChange={(e) => {
                const updateddetails = [...details];
                updateddetails[index] = {
                  ...updateddetails[index],
                  credit: e.target.value,
                };
                setDetails(updateddetails);
              }}
            >
              <option value="default">No. of Credits</option>
              <option value="1">1.00</option>
              <option value="2">2.00</option>
              <option value="3">3.00</option>
            </select>

            <select
              value={detail.gpa}
              className="border h-12 w-[22%] text-center bg-[#fff1e0] rounded-lg"
              onChange={(e) => {
                const updateddetails = [...details];
                updateddetails[index] = {
                  ...updateddetails[index],
                  gpa: e.target.value,
                };
                setDetails(updateddetails);
              }}
            >
              <option value="default">GPA</option>
              <option value="4">A (4.00)</option>
              <option value="3.67">A- (3.67)</option>
              <option value="3.33">B+ (3.33)</option>
              <option value="3.00">B (3.00)</option>
              <option value="2.67">B- (2.67)</option>
              <option value="2.33">C+ (2.33)</option>
              <option value="2.00">C (2.00)</option>
              <option value="1.67">C- (1.67)</option>
              <option value="1.33">D+ (1.33)</option>
              <option value="1.00">D (1.00)</option>
              <option value="0">F (0.00)</option>
            </select>

            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="w-[5%] text-[1.2rem] font-medium text-[#f10000]"
            >
              X
            </button>
          </div>
        );
      })}

      {retakes.map((retake, index) => {
        return (
          <div
            key={index}
            className="flex flex-row gap-1 w-full md:gap-2 xl:gap-4"
          >
            <select
              value={retake.credit}
              className="border h-12 w-[51%] text-center bg-[#fff1e0] rounded-lg"
              onChange={(e) => {
                const updatedretakes = [...retakes];
                updatedretakes[index] = {
                  ...updatedretakes[index],
                  credit: e.target.value,
                };
                setRetakes(updatedretakes);
              }}
            >
              <option value="default">No. of Credits</option>
              <option value="1">1.00</option>
              <option value="2">2.00</option>
              <option value="3">3.00</option>
            </select>

            <select
              value={retake.prevgpa}
              className="border h-12 w-[22%] text-center bg-[#fff1e0] rounded-lg"
              onChange={(e) => {
                const updatedretakes = [...retakes];
                updatedretakes[index] = {
                  ...updatedretakes[index],
                  prevgpa: e.target.value,
                };
                setRetakes(updatedretakes);
              }}
            >
              <option value="default">Previous GPA</option>
              <option value="4">A (4.00)</option>
              <option value="3.67">A- (3.67)</option>
              <option value="3.33">B+ (3.33)</option>
              <option value="3.00">B (3.00)</option>
              <option value="2.67">B- (2.67)</option>
              <option value="2.33">C+ (2.33)</option>
              <option value="2.00">C (2.00)</option>
              <option value="1.67">C- (1.67)</option>
              <option value="1.33">D+ (1.33)</option>
              <option value="1.00">D (1.00)</option>
              <option value="0">F (0.00)</option>
            </select>

            <select
              value={retake.newgpa}
              className="border h-12 w-[22%] text-center bg-[#fff1e0] rounded-lg"
              onChange={(e) => {
                const updatedretakes = [...retakes];
                updatedretakes[index] = {
                  ...updatedretakes[index],
                  newgpa: e.target.value,
                };
                setRetakes(updatedretakes);
              }}
            >
              <option value="default">New GPA</option>
              <option value="4">A (4.00)</option>
              <option value="3.67">A- (3.67)</option>
              <option value="3.33">B+ (3.33)</option>
              <option value="3.00">B (3.00)</option>
              <option value="2.67">B- (2.67)</option>
              <option value="2.33">C+ (2.33)</option>
              <option value="2.00">C (2.00)</option>
              <option value="1.67">C- (1.67)</option>
              <option value="1.33">D+ (1.33)</option>
              <option value="1.00">D (1.00)</option>
              <option value="0">F (0.00)</option>
            </select>

            <button
              type="button"
              onClick={() => handleRemoveRetake(index)}
              className="w-[5%] text-[1.2rem] font-medium text-[#f10000]"
            >
              X
            </button>
          </div>
        );
      })}

      <div className="flex flex-row gap-4 w-full">
        <button
          type="button"
          onClick={handleAdd}
          className="flex flex-row justify-center items-center text-4xl h-12 border w-full bg-[#fff1e0] rounded-lg"
        >
          +
        </button>

        <button
          type="button"
          onClick={handleRetake}
          className="flex flex-row justify-center items-center text-[1.2rem] h-12 border w-full font-medium bg-[#fff1e0] rounded-lg"
        >
          Add Retake
        </button>
      </div>

      <button
        type="submit"
        className="flex flex-row justify-center items-center text-xl font-medium h-12 border w-full bg-[#fff1e0] rounded-lg"
      >
        Calculate
      </button>
    </form>
  );
};

export default SemesterForm;
