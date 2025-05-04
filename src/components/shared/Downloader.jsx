import React, { useRef } from "react";
import DownloadButton from "../../ui/DownloadButton";
import { MdContentPaste } from "react-icons/md";
import Loader from "./Spinner";
import Swal from "sweetalert2";

const Downloader = ({ getVideo, isLoading }) => {
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
        });
      });
  };
  return (
    <div className="flex flex-col w-full mx-auto items-center justify-center py-28 md:py-32 lg:min-h-screen h-auto bg-gray-100">
      <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-medium w-full text-center">
        Download <span className="text-purple-600">Facebook</span> Videos
      </h1>
      <p className="mb-10 text-md md:text-lg text-center">
        Download videos SD and HD videos free
      </p>
      <div className="flex items-center justify-center w-full lg:max-w-8/12 gap-2 md:gap-4">
        {/* container */}
        <div className="relative w-full text-xs md:text-lg">
          {/* input field for fb url */}
          <div className="border border-blue-600 w-full p-2 rounded-full shadow-xl flex items-center gap-2">
            <input
              ref={inputRef}
              type="url"
              placeholder="Paste Facebook Video Link Here"
              className="ring-0 focus:ring-0 focus:outline-none w-full px-4"
            />
            <button
              onClick={handlePaste}
              className="flex items-center gap-2 text-sm justify-center uppercase text-gray-600 bg-gray-200 px-2 py-1 rounded-full hover:bg-gray-300 transition duration-200 ease-in-out cursor-pointer h-full"
            >
              <MdContentPaste />
              <span className="hidden md:block ">Paste</span>
            </button>
          </div>
        </div>
        {/* download button for taking action */}
        <DownloadButton onClicked={getVideo} />
      </div>
      {isLoading && (
        <div className="mt-5 flex items-center justify-center gap-4 text-lg">
          <Loader />
          <p>Searching...</p>
        </div>
      )}
    </div>
  );
};

export default Downloader;
