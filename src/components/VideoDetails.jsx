import { useState } from "react";
import { BiLeftArrow } from "react-icons/bi";
import { Link, useLocation } from "react-router";

const VideoDetails = () => {
  const location = useLocation();
  const { videoUrls, thumbnail } = location.state || {};

  const [downloading, setDownloading] = useState(false);

  const minutes = Math.floor(thumbnail?.duration / 60000);
  const seconds = Math.floor((thumbnail?.duration % 60000) / 1000);

  // Function to handle Instant Download
  const downloadVideo = (videoUrl, title) => {
    const encodedVideoUrl = encodeURIComponent(videoUrl);
    const safeFilename = encodeURIComponent(title);

    const backendUrl = `http://fb-downloader-server.vercel.app/download-video?url=${encodedVideoUrl}&title=${safeFilename}`;
    // const backendUrl1 = `http://localhost:3000/download-video?url=${encodedVideoUrl}&title=${safeFilename}`;

    //Trigger the browser download
    window.location.href = backendUrl;
  };

  return (
    <div className="max-w-[1440px] px-4 md:px-8 lg:px-16 mx-auto flex flex-col items-center justify-center h-screen py-10">
      {videoUrls && (
        <>
          {/* Another video download button */}
          <Link to="/">
            <button className="mb-4 text-gray-100 hover:text-gray-50 transition duration-300 ease-in-out flex items-center gap-2 bg-gray-600 px-4 py-2 rounded-lg cursor-pointer">
              <BiLeftArrow /> Download another video
            </button>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-purple-100 w-full md:w-8/12 h-auto md:h-60 p-2 rounded-lg">
            {/* video preview */}
            <video
              className="aspect-video h-full w-full object-center rounded-lg col-span-1"
              src={videoUrls[0]?.url}
              type="video/mp4"
              controls
              autoPlay
            ></video>

            {/* video details */}
            <div>
              <h2 className="text-mdw-lg line-clamp-10 font-semibold text-gray-600">
                FB Video
              </h2>
              {thumbnail && <p>Duration: {`${minutes} min ${seconds} sec`}</p>}
            </div>
          </div>

          {/* video download buttons */}
          <div className="grid grid-cols-2 items-center justify-center mt-4 gap-4 w-full md:w-8/12">
            {videoUrls?.map((video, index) => (
              <button
                key={index}
                onClick={() =>
                  downloadVideo(video.url, `video_${video?.quality}`)
                }
                disabled={downloading}
                className={`p-2 rounded mt-4 inline-block cursor-pointer transition duration-300 ease-in-out text-center text-white
                  ${
                    downloading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-700"
                  }
                `}
              >
                {downloading
                  ? "Processing..."
                  : video?.title || `Download ${video?.quality}`}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default VideoDetails;
