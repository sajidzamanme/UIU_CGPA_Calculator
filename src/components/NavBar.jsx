const NavBar = () => {
  return (
    <nav className="bg-orange-100 shadow-md">
      <div className="flex flex-row justify-between items-center container mx-auto h-14 sm:h-16 md:h-18 lg:h-20">
        <h1 className="flex flex-row items-center text-xl text-orange-500 font-bold ml-4 sm:text-2xl md:text-3xl lg:text-4xl">
          UIU CGPA CALCULATOR
        </h1>
        <button className="flex flex-row text-[0.7rem] items-center text-black border bg-orange-300 rounded-lg font-medium cursor-pointer p-1.5 mr-4 sm:text-[1rem] md:text-xl">
          Fee Calculator
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
