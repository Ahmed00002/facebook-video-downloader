import { Link } from "react-router";
import { BiCloudDownload } from "react-icons/bi";

const Footer = () => {
  // Get the current year for the copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-12 pb-8 md:pt-16 md:pb-8 w-full mt-auto">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Top Section: Brand & Description */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 mb-10">
          {/* Brand Area */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-2 mb-3 group">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-200/50 group-hover:shadow-indigo-300/50 transition-shadow">
                <BiCloudDownload className="text-lg" />
              </div>
              <h2 className="text-xl font-extrabold text-slate-800 tracking-tight flex items-start">
                FDN
                <sup className="ml-1 mt-1.5 text-[9px] font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 uppercase tracking-widest">
                  Pro
                </sup>
              </h2>
            </Link>
            <p className="text-slate-500 text-sm font-medium text-center md:text-left max-w-xs">
              The fastest, free way to download high-quality videos from your
              favorite social platforms.
            </p>
          </div>

          {/* Optional Quick Links (Makes it look like a premium app) */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-500">
            <Link to="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            {/* You can link these to actual pages or sections later */}
            <span className="cursor-pointer hover:text-indigo-600 transition-colors">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-indigo-600 transition-colors">
              Terms of Service
            </span>
            <span className="cursor-pointer hover:text-indigo-600 transition-colors">
              Contact
            </span>
          </div>
        </div>

        {/* Bottom Section: Copyright & Developer Credit */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100 text-sm font-medium text-slate-400">
          <p>&copy; {currentYear} FDN Pro. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            Developed with{" "}
            <span className="text-red-500 animate-pulse text-base">❤️</span> by{" "}
            <a
              href="https://web.facebook.com/AhmedNuman2004/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-indigo-600 font-bold transition-all duration-300 underline decoration-slate-300 hover:decoration-indigo-600 underline-offset-4"
            >
              Ahmed Numan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
