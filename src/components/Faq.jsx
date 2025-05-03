import React, { useState } from "react";

// react icons
import { FaChevronDown } from "react-icons/fa6";
import SectionTitle from "./shared/SectionTitle";

const Faq = () => {
  const accordingData = [
    {
      title: "Why use FDN Pro to Download Facebook Reels?",
      description:
        "FDN Pro is the fastest and most reliable tool for downloading Facebook Reels with just a few clicks. No login is required, and it works perfectly across all devices. Whether you’re on mobile or desktop, you can instantly download videos in HD quality — completely free. With FDN Pro, there's no need to install any app or extension. Just copy the link, paste it, and enjoy your favorite Reels offline anytime, anywhere!",
    },
    {
      title: "How to download Fb Reels to your mobile phone or computer?",
      description:
        "You can easily download Facebook Reels by copying the Reel’s link, pasting it into the FDN Pro input box, and clicking the download button. It works seamlessly on both mobile and desktop devices.",
    },
    {
      title: "Is Reels video legal?",
      description:
        "Downloading Facebook Reels for personal use is generally fine. However, redistributing or using them commercially without permission from the creator may violate copyright laws. Always respect the content owner's rights.",
    },

    {
      title: `How to download Fb Reels videos to Android?`,
      description:
        "Open the Facebook app, copy the Reel link, go to FDN Pro on your browser, paste the link, and tap the download button. The video will be saved in your Downloads folder.",
    },

    {
      title: "How to download Facebook video reels to your iPhone (iOS)?",
      description:
        "Copy the Reel link from the Facebook app, visit FDN Pro using Safari or Chrome, paste the link, and press download. To save the video, tap and hold the downloaded video, then select “Save to Photos.”",
    },
    {
      title: " Is Facebook Reels downloader safe?",
      description:
        "Yes, FDN Pro is completely safe to use. It doesn’t store any user data, doesn’t ask for login credentials, and provides a secure and private downloading experience.",
    },
  ];

  const [isAccordingOpen, setIsAccordingOpen] = useState(0);

  const handleClick = (index) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="flex gap-3 flex-col w-full mb-26">
      <SectionTitle
        title={"Frequently Asked Questions! (FAQ)"}
        subtitle={
          "Have questions about downloading Facebook Reels? You’re in the right place! Below are some of the most commonly asked questions to help you understand how FDN Pro works. Whether you’re wondering about compatibility, quality, or safety — we’ve got you covered."
        }
        isTop={true}
      />

      {accordingData?.map((according, index) => (
        <article key={index} className="border-b border-border rounded py-4">
          <div
            className="flex gap-2 cursor-pointer items-center justify-between w-full"
            onClick={() => handleClick(index)}
          >
            <h2 className="text-black font-[600] text-[1.2rem]">
              {according.title}
            </h2>
            <p>
              <FaChevronDown
                className={`text-[1.2rem] text-text transition-all duration-300 ${
                  isAccordingOpen === index &&
                  "rotate-[180deg] !text-purple-600"
                }`}
              />
            </p>
          </div>
          <div
            className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
              isAccordingOpen === index
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <p className="text-[#424242] text-[0.9rem] overflow-hidden">
              {according.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Faq;
