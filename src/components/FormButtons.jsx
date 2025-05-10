const FormButtons = ({handleAdd, handleRetake}) => {
  return (
    <>
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
    </>
  );
};

export default FormButtons;
