import { IoTrash } from "react-icons/io5";

const RetakesList = ({retakes, setRetakes}) => {
  const handleRemoveRetake = (pos) => {
    setRetakes((prevState) =>
      prevState.filter((_, index) => {
        return index !== pos;
      })
    );
  };
  
  return (
    <>
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
                const updatedRetakes = [...retakes];
                updatedRetakes[index] = {
                  ...updatedRetakes[index],
                  credit: e.target.value,
                };
                setRetakes(updatedRetakes);
              }}
              required
            >
              <option value="">No. of Credits</option>
              <option value="1">1.00</option>
              <option value="2">2.00</option>
              <option value="3">3.00</option>
            </select>

            <select
              value={retake.prevgpa}
              className="border h-12 w-[22%] text-center bg-[#fff1e0] rounded-lg"
              onChange={(e) => {
                const updatedRetakes = [...retakes];
                updatedRetakes[index] = {
                  ...updatedRetakes[index],
                  prevgpa: e.target.value,
                };
                setRetakes(updatedRetakes);
              }}
              required
            >
              <option value="">Previous GPA</option>
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
                const updatedRetakes = [...retakes];
                updatedRetakes[index] = {
                  ...updatedRetakes[index],
                  newgpa: e.target.value,
                };
                setRetakes(updatedRetakes);
              }}
              required
            >
              <option value="">New GPA</option>
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
              <IoTrash />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default RetakesList;
