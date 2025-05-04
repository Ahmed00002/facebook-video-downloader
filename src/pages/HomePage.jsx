import axios from "axios";
import Downloader from "../components/shared/Downloader";
import Swal from "sweetalert2";
import Features from "../components/Features";
import { useNavigate } from "react-router";
import HowToDownload from "../components/HowToDownload";
import Faq from "../components/Faq";
import { useState } from "react";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const regex = /facebook\.com/;
  // Function to handle the video download
  const getVideo = () => {
    const url = document.querySelector("input").value;
    if (regex.test(url)) {
      if (!url) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter a valid Facebook video URL.",
          confirmButtonText: "OK",
        });
        return;
      } else {
        setLoading(true);
        axios
          .get(`https://fb-downloader-server.vercel.app/fb-download?url=${url}`)
          .then((response) => {
            setLoading(false);
            navigate("/download", {
              state: {
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
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid URL",
        text: "The provided URL is not a valid Facebook link. Please enter a valid Facebook video URL.",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <>
      <div className="flex flex-col max-w-[1440px] px-4 md:px-8 lg:px-16 bg-gray-100 mx-auto">
        <Downloader getVideo={getVideo} isLoading={loading} />

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
