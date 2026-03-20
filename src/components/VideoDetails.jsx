import { useState } from "react";
import {
  BiLeftArrow,
  BiDownload,
  BiTimeFive,
  BiHeart,
  BiMessageRounded,
  BiShow,
  BiShare,
} from "react-icons/bi";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link, useLocation } from "react-router";

const VideoDetails = () => {
  const location = useLocation();
  const {
    videoUrls,
    thumbnail,
    platform,
    title,
    likes,
    comments,
    shares,
    author,
  } = location.state || {};

  const [downloading, setDownloading] = useState(false);

  const durationStr = thumbnail?.duration
    ? `${Math.floor(thumbnail.duration / 60000)}m ${Math.floor((thumbnail.duration % 60000) / 1000)}s`
    : "Unknown duration";

  const formatNumber = (num) => {
    if (!num) return "0";
    return Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(num);
  };

  const downloadVideo = (videoUrl, videoTitle) => {
    const encodedVideoUrl = encodeURIComponent(videoUrl);
    const safeFilename = encodeURIComponent(videoTitle);
    const currentPlatform = platform?.toLowerCase();

    let downloadEndpoint = "";

    if (currentPlatform === "facebook") {
      downloadEndpoint = `http://localhost:3000/facebook/download?url=${encodedVideoUrl}&title=${safeFilename}`;
    } else if (currentPlatform === "tiktok") {
      downloadEndpoint = `http://localhost:3000/tiktok/download?url=${encodedVideoUrl}&title=${safeFilename}`;
    } else if (currentPlatform === "youtube") {
      downloadEndpoint = `http://localhost:3000/youtube/download?url=${encodedVideoUrl}&title=${safeFilename}`;
    }

    if (downloadEndpoint) {
      setDownloading(true);
      window.location.href = downloadEndpoint;
      setTimeout(() => setDownloading(false), 3000);
    }
  };

  const renderPlatformIcon = () => {
    switch (platform?.toLowerCase()) {
      case "facebook":
        return <FaFacebook className="text-blue-600 text-xl" />;
      case "tiktok":
        return <FaTiktok className="text-black text-xl" />;
      case "youtube":
        return <FaYoutube className="text-red-600 text-xl" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 md:px-8 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-5xl mx-auto">
        <Link to="/">
          <button className="mb-6 flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium transition-colors duration-200">
            <BiLeftArrow />
            <span>Back to Search</span>
          </button>
        </Link>

        {videoUrls && videoUrls.length > 0 ? (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
            {/* Left Side: Video Preview */}
            <div className="w-full md:w-1/2 bg-black flex items-center justify-center relative">
              <video
                className="w-full h-full aspect-video object-contain"
                src={videoUrls[0]?.url}
                controls
                autoPlay
                controlsList="nodownload"
              ></video>
            </div>

            {/* Right Side: Video Details & Actions */}
            <div className="w-full md:w-1/2 p-6 lg:p-10 flex flex-col justify-between">
              <div>
                {/* Badge */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-slate-100 rounded-full inline-flex">
                    {renderPlatformIcon()}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {platform || "Video"}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight mb-4 line-clamp-3">
                  {title || "Untitled Video"}
                </h2>

                {/* TikTok Specific: Author Profile */}
                {platform?.toLowerCase() === "tiktok" && author && (
                  <div className="flex items-center gap-3 mb-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    {author.avatar ? (
                      <img
                        src={author.avatar}
                        alt={author.nickname || "Author avatar"}
                        className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold shadow-sm border-2 border-white">
                        {(author.nickname || "U").charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-800 leading-tight">
                        {author.nickname || "Unknown User"}
                      </span>
                      {author.username && (
                        <span className="text-xs font-medium text-slate-500 mt-0.5">
                          @{author.nickname}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Duration */}
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-4">
                  <BiTimeFive className="text-lg" />
                  <span>{durationStr}</span>
                </div>

                {/* TikTok Specific Stats */}
                {platform?.toLowerCase() === "tiktok" && (
                  <div className="flex flex-wrap items-center gap-5 mb-8 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                      <BiHeart className="text-rose-500 text-xl" />
                      <span>{formatNumber(likes)}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                      <BiMessageRounded className="text-blue-500 text-xl" />
                      <span>{formatNumber(comments)}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                      <BiShare className="text-emerald-500 text-xl" />
                      <span>{formatNumber(shares)}</span>
                    </div>
                  </div>
                )}

                {/* Add spacing if not TikTok so the layout doesn't collapse */}
                {platform?.toLowerCase() !== "tiktok" && (
                  <div className="mb-8"></div>
                )}
              </div>

              {/* Download Options */}
              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                  Available Qualities
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {videoUrls?.map((video, index) => {
                    const safeTitle = title
                      ? title.replace(/[^a-z0-9]/gi, "_").toLowerCase()
                      : "video";

                    return (
                      <button
                        key={index}
                        onClick={() =>
                          downloadVideo(video.url, `video_${safeTitle}`)
                        }
                        disabled={downloading}
                        className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 shadow-sm
                          ${
                            downloading
                              ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                              : "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                          }
                        `}
                      >
                        {downloading ? (
                          "Processing..."
                        ) : (
                          <>
                            <BiDownload className="text-lg" />
                            {video?.quality || "Download"}
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center p-10 bg-white rounded-2xl shadow-sm border border-slate-100 text-slate-500">
            No video details found. Please try searching again.
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoDetails;
