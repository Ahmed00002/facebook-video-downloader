// HowToDownload.jsx
import React from "react";
import SectionTitle from "./shared/SectionTitle";

const HowToDownload = () => {
  return (
    <div>
      <SectionTitle
        title={"How to Download?"}
        subtitle={
          "Follow these simple steps to save your favorite Facebook Reels instantly."
        }
        isTop={true}
      />
      <ol className="list-decimal list-inside space-y-4 text-lg text-gray-700">
        <li>
          Find the Reel you want to download: Copy the URL of the Reel video by
          clicking the <strong>Share</strong> button and selecting{" "}
          <span className="text-pink-500 font-medium">Copy Link</span>.
        </li>
        <li>
          Then <span className="text-pink-500 font-medium">Paste</span> the
          Reels URL link in the box above and then tap the download button.
        </li>
        <li>Finally, download MP4 Reels videos and save from Fb.</li>
      </ol>
    </div>
  );
};

export default HowToDownload;
