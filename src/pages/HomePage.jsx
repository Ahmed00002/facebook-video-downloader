import axios from "axios";
import Downloader from "../components/shared/Downloader";
import Swal from "sweetalert2";
import Features from "../components/Features";
import { useNavigate } from "react-router";
import HowToDownload from "../components/HowToDownload";
import Faq from "../components/Faq";

const HomePage = () => {
  const navigate = useNavigate();
  // Function to handle the video download
  const getVideo = () => {
    const url = document.querySelector("input").value;
    if (!url) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid Facebook video URL.",
        confirmButtonText: "OK",
      });
      return;
    } else {
      axios
        .get(`http://localhost:3000/fb-download?url=${url}`)
        .then((response) => {
          console.log(response);
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
        .catch((error) => {
          console.error("Error fetching video:", error);
        });
    }
  };
  return (
    <>
      <div className="flex flex-col max-w-[1440px] px-20 md:px-20 lg:px-16 bg-gray-100 mx-auto">
        <Downloader getVideo={getVideo} />

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
