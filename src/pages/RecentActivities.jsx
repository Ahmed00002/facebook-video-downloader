import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  BiHistory,
  BiTrash,
  BiPlayCircle,
  BiTimeFive,
  BiLeftArrow,
} from "react-icons/bi";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
const RecentActivities = () => {
  const [activities, setActivities] = useState([]);

  // Load data from localStorage when the page mounts
  useEffect(() => {
    const storedData = localStorage.getItem("fdn_recent_activities");
    if (storedData) {
      setActivities(JSON.parse(storedData));
    }
  }, []);

  // Clear all history
  const clearHistory = () => {
    if (
      window.confirm("Are you sure you want to clear your recent activities?")
    ) {
      localStorage.removeItem("fdn_recent_activities");
      setActivities([]);
    }
  };

  const renderPlatformIcon = (platform) => {
    switch (platform?.toLowerCase()) {
      case "facebook":
        return <FaFacebook className="text-blue-600" />;
      case "tiktok":
        return <FaTiktok className="text-slate-900" />;
      case "youtube":
        return <FaYoutube className="text-red-600" />;
      default:
        return <BiPlayCircle className="text-slate-500" />;
    }
  };

  // Helper to format the date nicely
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <Link to="/">
          <button className="mb-6 flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium transition-colors duration-200 cursor-pointer">
            <BiLeftArrow />
            <span>Back to Search</span>
          </button>
        </Link>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl md:text-2xl sm:text-lg font-bold">
              Recent Activities
            </h1>
          </div>

          {activities.length > 0 && (
            <button
              onClick={clearHistory}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors duration-200 mt-[-20px] md:mt-0"
            >
              <BiTrash className="text-lg" />
              Clear History
            </button>
          )}
        </div>

        {/* Content Grid or Empty State */}
        {activities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-100/40 transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1"
              >
                {/* Thumbnail Area */}
                <div className="relative aspect-video bg-slate-200 w-full overflow-hidden">
                  {item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      <BiPlayCircle className="text-5xl opacity-50" />
                    </div>
                  )}

                  {/* Platform Badge overlay */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                    {renderPlatformIcon(item.platform)}
                  </div>
                </div>

                {/* Details Area */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 line-clamp-2 mb-2 group-hover:text-indigo-600 transition-colors">
                    {item.title || "Untitled Video"}
                  </h3>

                  <div className="mt-auto pt-4 flex items-center justify-between text-xs font-medium text-slate-500 border-t border-slate-50">
                    <div className="flex items-center gap-1.5">
                      <BiTimeFive className="text-sm" />
                      {formatDate(item.timestamp)}
                    </div>

                    <Link
                      to="/download"
                      state={item.fullStateData}
                      className="text-indigo-600 hover:text-indigo-700 font-bold"
                    >
                      View Details &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white rounded-3xl border border-slate-100 shadow-sm max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-300 text-5xl mb-6">
              <BiHistory />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              No recent activities
            </h3>
            <p className="text-slate-500 max-w-md mx-auto mb-8">
              Looks like you haven't fetched or downloaded any videos yet. Paste
              a link on the home page to get started!
            </p>
            <Link to="/">
              <button className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                Go to Downloader
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentActivities;
