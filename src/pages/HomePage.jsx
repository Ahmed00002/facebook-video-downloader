import Downloader from "../components/shared/Downloader";
import Swal from "sweetalert2";
import Features from "../components/Features";
import { useNavigate } from "react-router";
import HowToDownload from "../components/HowToDownload";
import Faq from "../components/Faq";
import { useState } from "react";
import axiosSecure from "../hooks/axiosSecure";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const regex = /(facebook\.com|fb\.watch|tiktok\.com|youtube\.com|youtu\.be)/;
  const facebookRegex = /facebook\.com/;
  const tiktokRegex = /tiktok\.com/;
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;

  const [platform, setPlatform] = useState("facebook");
  const showError = () => {
    Swal.fire({
      icon: "error",
      title: "Invalid URL",
      text: `The provided URL is not a valid ${platform.toUpperCase()} link.`,
    });
  };

  // utility function to save video details to recent activities in localStorage
  const saveToRecentActivities = (videoData, platform) => {
    const existingData =
      JSON.parse(localStorage.getItem("fdn_recent_activities")) || [];

    const newActivity = {
      id: Date.now(),
      title: videoData.title || "Untitled Video",
      thumbnail: videoData.thumbnail?.url || videoData.thumbnail,
      platform: platform,
      timestamp: new Date().toISOString(),

      fullStateData: {
        ...videoData,
        platform: platform,
      },
    };

    const updatedData = [newActivity, ...existingData];

    const cappedData = updatedData.slice(0, 12);

    localStorage.setItem("fdn_recent_activities", JSON.stringify(cappedData));
  };

  // Function to handle the video download
  const getVideo = (e) => {
    e.preventDefault();
    const url = document.querySelector("#pastedLink").value;
    console.log(url);

    if (!url) {
      showError();
      return;
    }

    if (platform === "facebook" && facebookRegex.test(url)) {
      // Valid Facebook URL, proceed with fetching video details
      setLoading(true);
      axiosSecure
        .get(`facebook/video?url=${url}`)
        .then((response) => {
          setLoading(false);
          // data for recent activities
          saveToRecentActivities(
            {
              platform: "facebook",
              videoUrls: [
                {
                  title: "Download SD",
                  url: response.data.sd,
                },
                {
                  title: "Download HD",
                  url: response.data.hd,
                },
              ],
              thumbnail: {
                title: response.data.title,
                url: response.data.thumbnail,
                duration: response.data.duration_ms,
              },
            },
            "facebook",
          );
          navigate("/download", {
            state: {
              platform: "facebook",
              videoUrls: [
                {
                  title: "Download SD",
                  url: response.data.sd,
                },
                {
                  title: "Download HD",
                  url: response.data.hd,
                },
              ],
              thumbnail: {
                title: response.data.title,
                url: response.data.thumbnail,
                duration: response.data.duration_ms,
              },
            },
          });
        })
        .catch(() => {
          setLoading(false);
          Swal.fire({
            icon: "error",
            title: "Failed to Fetch Video",
            text: "An error occurred while trying to fetch the video. Please try again later.",
            confirmButtonText: "OK",
          });
        });
    } else if (platform === "tiktok" && tiktokRegex.test(url)) {
      setLoading(true);
      axiosSecure.get(`tiktok/video?url=${url}`).then((response) => {
        // data for recent activities
        saveToRecentActivities(
          {
            platform: "tiktok",
            videoUrls: [
              {
                title: "Download Video",
                url: response.data?.result?.video?.playAddr[0],
              },
            ],
            likes: response.data?.result?.statistics?.likeCount,
            comments: response.data?.result?.statistics?.commentCount,
            shares: response.data?.result?.statistics?.shareCount,
            author: response.data?.result?.author,
          },
          "tiktok",
        );
        navigate("/download", {
          state: {
            platform: "tiktok",
            videoUrls: [
              {
                title: "Download Video",
                url: response.data?.result?.video?.playAddr[0],
              },
            ],
            likes: response.data?.result?.statistics?.likeCount,
            comments: response.data?.result?.statistics?.commentCount,
            shares: response.data?.result?.statistics?.shareCount,
            author: response.data?.result?.author,
          },
        });
      });
    } else if (platform === "youtube" && youtubeRegex.test(url)) {
      Swal.fire({
        icon: "info",
        title: "YouTube Download Coming Soon",
        text: "We're working hard to add YouTube video downloading support. Stay tuned for updates!",
        confirmButtonText: "OK",
      });
    } else {
      showError();
    }
  };

  return (
    <>
      <div className="flex flex-col max-w-[1440px] px-4 md:px-8 lg:px-16 bg-gray-100 mx-auto">
        <Downloader
          getVideo={getVideo}
          isLoading={loading}
          platform={{ platform, setPlatform }}
        />

        {/* features */}
        <Features />

        {/* how to download */}
        <HowToDownload />

        {/* accordion */}
        <Faq />
      </div>
    </>
  );
};

export default HomePage;
