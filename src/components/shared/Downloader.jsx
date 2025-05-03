import React, { useRef, useState } from "react";
import DownloadButton from "../../ui/DownloadButton";
import { MdContentPaste } from "react-icons/md";

const Downloader = ({ getVideo }) => {
  const [copiedText, setCopiedText] = useState("");
  const inputRef = useRef();
  console.log(inputRef);

  const handlePaste = () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        inputRef.current.value = text;
      })
      .catch((err) => {
        console.error("Error pasting text: ", err);
      });
  };
  return (
    <div className="flex flex-col w-full mx-auto items-center justify-center min-h-screen h-auto bg-gray-100 ">
      <h1 className="text-5xl mb-4 font-medium">
        Download <span className="text-purple-600">Facebook</span> Videos
      </h1>
      <p className="mb-10 text-lg">Download videos SD and HD videos free</p>
      <div className="flex items-center justify-center w-full max-w-8/12 gap-4">
        <div className="relative w-full">
          <input
            ref={inputRef}
            type="text"
            placeholder="Paste Facebook Video Link Here"
            className="border border-blue-600 w-full p-[10px] rounded-full shadow-xl ring-0 focus:ring-0 focus:outline-none "
            defaultValue={copiedText && copiedText}
          />
          <div
            onClick={handlePaste}
            className="flex justify-center items-center px-2 w-auto  gap-2 uppercase bg-gray-200 rounded-full text-gray-500 text-sm font-semibold absolute top-1/2 transform -translate-y-1/2 right-2 h-8 cursor-pointer"
          >
            <MdContentPaste /> <p>Paste</p>
          </div>
        </div>
        <DownloadButton onClicked={getVideo} />
      </div>
    </div>
  );
};

export default Downloader;
