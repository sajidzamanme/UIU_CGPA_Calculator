import { useState } from "react";

const SemesterForm = ({ completedCredits, currentCGPA, setCalculatedCGPA }) => {
  const [details, setdetails] = useState([
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

  const handleAdd = () => {
    setdetails((prevState) => [...prevState, { credit: "", gpa: "" }]);
  };

  const handleRemove = () => {
    setdetails((prevState) => prevState.slice(0, -1));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let semCreditSum = Number(completedCredits);
    let semGPASum = Number(currentCGPA) * Number(completedCredits);

    console.log(semCreditSum, typeof semCreditSum);
    console.log(semGPASum, typeof semGPASum);

    details.forEach((detail) => {
      semCreditSum += Number(detail.credit);
      semGPASum += Number(detail.gpa) * Number(detail.credit);
    });

    let semCgpa = semGPASum / semCreditSum;
    console.log(semCgpa, typeof semCgpa);
    setCalculatedCGPA(semCgpa.toFixed(2));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-3 w-full"
    >
      {details.map((detail, index) => {
        return (
          <div key={index} className="flex flex-row gap-4 w-full">
            <select
              value={detail.credit}
              className="border h-12 w-3/4 text-center bg-[#fff1e0]"
              onChange={(e) => {
                const updateddetails = [...details];
                updateddetails[index] = {
                  ...updateddetails[index],
                  credit: e.target.value,
                };
                setdetails(updateddetails);
              }}
            >
              <option value="default">No. of Credits</option>
              <option value="1">1.00</option>
              <option value="2">2.00</option>
              <option value="3">3.00</option>
            </select>
            <input
              value={detail.gpa}
              type="text"
              className="border h-12 w-1/4 text-center bg-[#fff1e0]"
              placeholder="GPA"
              onChange={(e) => {
                const updateddetails = [...details];
                updateddetails[index] = {
                  ...updateddetails[index],
                  gpa: e.target.value,
                };
                setdetails(updateddetails);
              }}
            />
          </div>
        );
      })}

      <div className="flex flex-row gap-4 w-full">
        <button
          type="button"
          onClick={handleAdd}
          className="flex flex-row justify-center items-center text-4xl h-12 border w-full bg-[#fff1e0]"
        >
          +
        </button>

        <button
          type="button"
          onClick={handleRemove}
          className="flex flex-row justify-center items-center text-4xl h-12 border w-full bg-[#fff1e0]"
        >
          -
        </button>
      </div>

      <button
        type="submit"
        className="flex flex-row justify-center items-center text-xl font-medium h-12 border w-full bg-[#fff1e0]"
      >
        Calculate
      </button>
    </form>
  );
};

export default SemesterForm;
