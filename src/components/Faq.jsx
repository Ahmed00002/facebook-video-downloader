import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import SectionTitle from "./shared/SectionTitle";

const Faq = () => {
  const faqData = [
    {
      title: "Why use FDN Pro to download videos?",
      description:
        "FDN Pro is the fastest and most reliable tool for downloading Facebook, TikTok, and YouTube videos with just a few clicks. No login is required, and it works perfectly across all devices. Whether you’re on mobile or desktop, you can instantly download videos in HD quality — completely free. There's no need to install any app or extension!",
    },
    {
      title: "How to download videos to your mobile phone or computer?",
      description:
        "You can easily download videos by copying the video’s link, pasting it into the FDN Pro input box, and clicking the download button. It works seamlessly on both mobile browsers and desktop computers.",
    },
    {
      title: "Is downloading these videos legal?",
      description:
        "Downloading videos for personal, offline use is generally fine. However, redistributing or using them commercially without permission from the creator may violate copyright laws. Always respect the content owner's rights.",
    },
    {
      title: "How to download videos to Android?",
      description:
        "Open your social media app, copy the video link, go to FDN Pro on your mobile browser (like Chrome), paste the link, and tap the download button. The video will automatically be saved to your device's Downloads folder.",
    },
    {
      title: "How to download videos to your iPhone (iOS)?",
      description:
        "Copy the video link from your app, visit FDN Pro using Safari or Chrome, paste the link, and press download. Once the file downloads, tap the downloads icon in Safari, open the video, and select “Save Video” to move it to your Camera Roll.",
    },
    {
      title: "Is FDN Pro safe to use?",
      description:
        "Yes, FDN Pro is completely safe and secure. We don’t store any user data, we never ask for your login credentials, and our tool provides a private downloading experience without malicious pop-ups.",
    },
  ];

  // Changed from isAccordingOpen to isAccordionOpen for standard naming
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-20 md:mb-32">
      <SectionTitle
        title="Frequently Asked Questions"
        subtitle="Have questions about downloading videos? You’re in the right place! Below are some of the most commonly asked questions to help you understand how FDN Pro works across all platforms."
        isTop={false}
      />

      <div className="flex flex-col gap-3 md:gap-4 mt-8">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`border rounded-2xl transition-all duration-300 ease-in-out ${
                isOpen
                  ? "bg-white border-indigo-100 shadow-lg shadow-indigo-100/50"
                  : "bg-slate-50/50 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
              }`}
            >
              {/* Accordion Header (Button) */}
              <button
                className="flex items-center justify-between w-full p-5 md:p-6 text-left cursor-pointer focus:outline-none rounded-2xl"
                onClick={() => handleClick(index)}
                aria-expanded={isOpen}
              >
                <h3
                  className={`text-base md:text-lg font-bold pr-4 transition-colors duration-300 ${
                    isOpen ? "text-indigo-600" : "text-slate-800"
                  }`}
                >
                  {item.title}
                </h3>

                {/* Icon Container */}
                <div
                  className={`flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full transition-colors duration-300 ${
                    isOpen
                      ? "bg-indigo-100 text-indigo-600"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  <FaChevronDown
                    className={`text-sm md:text-base transition-transform duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </button>

              {/* Accordion Body (Animated Height) */}
              <div
                className={`grid transition-all duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
