import React, { useRef } from "react";
import { MdContentPaste, MdLink } from "react-icons/md";
import Swal from "sweetalert2";

import DownloadButton from "../../ui/DownloadButton";
import PlatformToggle from "./PlatformToggle";
import Loader from "./Spinner";

const Downloader = ({ getVideo, isLoading, platform }) => {
  const { platform: selectedPlatform, setPlatform } = platform;
  const inputRef = useRef();

  const handlePaste = () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        inputRef.current.value = text;
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to paste text from clipboard!",
          confirmButtonColor: "#4f46e5",
        });
      });
  };

  // Helper to capitalize the platform name for the heading
  const displayPlatform = selectedPlatform
    ? selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1)
    : "Video";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center pt-20 pb-12 px-4 md:px-8 font-sans relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-[10%] right-[-5%] w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center relative z-10">
        {/* Platform Toggle */}
        <div className="mb-12">
          <PlatformToggle
            platform={selectedPlatform}
            setPlatform={setPlatform}
          />
        </div>

        {/* Headings */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 tracking-tight mb-4">
            Download <span className="text-indigo-600">{displayPlatform}</span>{" "}
            Videos
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
            Paste your link below to download high-quality videos instantly, for
            free.
          </p>
        </div>

        {/* Input & Action Container */}
        <div className="w-full max-w-3xl bg-white p-2 md:p-3 rounded-2xl shadow-xl shadow-indigo-100/50 border border-slate-100 flex flex-col md:flex-row items-center gap-3 transition-all focus-within:ring-4 focus-within:ring-indigo-50 focus-within:border-indigo-300">
          {/* Input Area */}
          <div className="flex-1 flex items-center w-full bg-slate-50 rounded-xl px-4 py-3 md:py-4 border border-transparent focus-within:bg-white transition-colors">
            <MdLink className="text-slate-400 text-2xl mr-3 hidden sm:block" />
            <input
              ref={inputRef}
              type="url"
              id="pastedLink"
              placeholder={`Paste your ${displayPlatform} video link here...`}
              className="w-full bg-transparent outline-none text-slate-700 placeholder-slate-400 text-base md:text-lg"
              disabled={isLoading}
            />

            {/* Paste Button */}
            <button
              onClick={handlePaste}
              disabled={isLoading}
              className="ml-2 flex items-center gap-1.5 text-sm font-semibold text-slate-600 bg-slate-200/70 hover:bg-slate-300 px-3 py-1.5 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
              title="Paste from clipboard"
            >
              <MdContentPaste className="text-lg" />
              <span className="hidden sm:inline">Paste</span>
            </button>
          </div>

          {/* Download Button Component */}
          <div className="w-full md:w-auto h-full flex-shrink-0">
            <DownloadButton onClicked={getVideo} disabled={isLoading} />
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="mt-8 flex items-center justify-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100 animate-fade-in">
            <Loader />
            <p className="text-slate-600 font-medium animate-pulse">
              Fetching video details...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Downloader;
