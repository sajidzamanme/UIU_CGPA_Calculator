import { IoTrash } from "react-icons/io5";

const DetailsList = ({ details, setDetails }) => {
  const handleRemove = (pos) => {
    setDetails((prevState) =>
      prevState.filter((_, index) => {
        return index !== pos;
      })
    );
  };
  
  return (
    <>
      {details.map((detail, index) => {
        return (
          <div
            key={index}
            className="flex flex-row gap-1.5 w-full md:gap-2.5 xl:gap-4.5"
          >
            <select
              value={detail.credit}
              className="h-12 w-[73%] text-center bg-[#fff1e0] rounded-lg hover:bg-[#fff6ec]"
              onChange={(e) => {
                const updatedDetails = [...details];
                updatedDetails[index] = {
                  ...updatedDetails[index],
                  credit: e.target.value,
                };
                setDetails(updatedDetails);
              }}
              required
            >
              <option value="">No. of Credits</option>
              <option value="1">1.00</option>
              <option value="2">2.00</option>
              <option value="3">3.00</option>
            </select>

            <select
              value={detail.gpa}
              className="h-12 w-[22%] text-center bg-[#fff1e0] rounded-lg hover:bg-[#fff6ec]"
              onChange={(e) => {
                const updatedDetails = [...details];
                updatedDetails[index] = {
                  ...updatedDetails[index],
                  gpa: e.target.value,
                };
                setDetails(updatedDetails);
              }}
              required
            >
              <option value="">GPA</option>
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
              <IoTrash />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default DetailsList;
