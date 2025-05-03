import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white shadow-md py-2 px-4 md:px-8 lg:px-16">
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">
        <div>
          <h1 className="text-2xl font-bold">
            {" "}
            FDN <sup className="text-purple-600 font-bold">Pro</sup>
          </h1>
        </div>
        <div>
          <button className="px-4 py-2 text-lg text-white bg-blue-950 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
            FB Downloader
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
