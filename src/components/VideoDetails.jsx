import { BiLeftArrow } from "react-icons/bi";
import { Link, useLocation } from "react-router";

const VideoDetails = () => {
  const location = useLocation();
  const { videoUrls, thumbnail } = location.state || {};
  console.log(thumbnail);

  const minutes = Math.floor(thumbnail.duration / 60000); // 1 মিনিট = 60000 মিলি সেকেন্ড
  const seconds = Math.floor((thumbnail.duration % 60000) / 1000); // বাকি মিলি সেকেন্ড থেকে সেকেন্ড বের করা

  return (
    <div className="max-w-[1440px] px-4 md:px-8 lg:px-16 mx-auto flex flex-col items-center justify-center py-10">
      {videoUrls && (
        <>
          <Link to="/">
            {" "}
            <button className="mb-4 text-gray-100 hover:text-gray-50 transition duration-300 ease-in-out flex items-center gap-2 bg-gray-600 px-4 py-2 rounded-lg cursor-pointer">
              {" "}
              <BiLeftArrow /> Download another video
            </button>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-purple-100 w-full md:w-8/12 h-auto md:h-60 p-2 rounded-lg">
            {/* <img
              className="aspect-video h-full w-full object-center rounded-lg col-span-1"
              src={thumbnail?.url}
              alt="video thumbnail"
            /> */}
            <video
              className="aspect-video h-full w-full object-center rounded-lg col-span-1"
              src={videoUrls[0].url}
              controls
              autoPlay
            ></video>
            <div>
              <h2 className="text-mdw-lg line-clamp-10 font-semibold text-gray-600">
                FB Video
              </h2>
              <p>Duration: {`${minutes} min ${seconds} sec`}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center justify-center mt-4 gap-4 w-full md:w-8/12">
            {videoUrls?.map((video, index) => (
              <a
                key={index}
                href={video.url}
                className="bg-green-500 text-white p-2 rounded mt-4 inline-block cursor-pointer hover:bg-green-700 transition duration-300 ease-in-out text-center"
                download
              >
                {video.title}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default VideoDetails;
