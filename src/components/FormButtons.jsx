const FormButtons = ({handleAdd, handleRetake}) => {
  return (
    <>
      <div className="flex flex-row gap-4 w-full">
        <button
          type="button"
          onClick={handleAdd}
          className="flex flex-row justify-center items-center text-4xl h-12 w-full bg-[#fff1e0] rounded-lg shadow-md hover:bg-[#fff6ec]"
        >
          +
        </button>

        <button
          type="button"
          onClick={handleRetake}
          className="flex flex-row justify-center items-center text-[1.2rem] h-12 w-full font-medium bg-[#fff1e0] rounded-lg shadow-md hover:bg-[#fff6ec]"
        >
          Add Retake
        </button>
      </div>

      <button
        type="submit"
        className="flex flex-row justify-center items-center text-xl font-medium h-12 w-full bg-[#fff1e0] rounded-lg shadow-md hover:bg-[#fff6ec]"
      >
        Calculate
      </button>
    </>
  );
};

export default FormButtons;
