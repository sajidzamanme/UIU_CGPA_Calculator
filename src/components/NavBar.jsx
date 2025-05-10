const NavBar = () => {
  return (
    <nav className="bg-orange-100 shadow-md">
      <div className="flex flex-row justify-between items-center container 
      mx-auto">
        <h1 className="flex flex-row items-center text-[1.2rem] text-orange-500 
        font-bold ml-4 py-3.5 sm:text-3xl lg:text-4xl">
          UIU CGPA CALCULATOR
        </h1>
        <button className="flex flex-row text-[0.7rem] items-center text-black 
        border bg-orange-300 rounded-lg font-medium cursor-pointer px-1 py-1.5 mr-4 
        sm:text-[1rem]">
          Fee Calculator
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
