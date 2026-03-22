import React from "react";
import { Link } from "react-router";
import { BiCloudDownload } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo Area */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group transition-transform duration-200 hover:scale-[1.02] active:scale-95"
        >
          {/* App Icon */}
          <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-200/50 group-hover:shadow-indigo-300/50 transition-shadow">
            <BiCloudDownload className="text-xl md:text-2xl" />
          </div>

          {/* Text Logo */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight flex items-start">
            FDN
            <sup className="ml-1 mt-1.5 text-[10px] md:text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 uppercase tracking-widest">
              Pro
            </sup>
          </h1>
        </Link>

        {/* Actions Area */}
        <div>
          <Link
            to="/history"
            className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base font-semibold text-slate-700 bg-slate-100 border border-slate-200 hover:bg-indigo-600 hover:text-white hover:border-transparent rounded-xl transition-all duration-300 ease-out shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span className="">My History</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
