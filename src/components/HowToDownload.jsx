import React from "react";
import SectionTitle from "./shared/SectionTitle";
import { BiCopy, BiPaste, BiDownload } from "react-icons/bi";

const HowToDownload = () => {
  const steps = [
    {
      id: 1,
      icon: <BiCopy />,
      title: "Copy the Link",
      description: (
        <>
          Find the video you want to download. Click the <strong>Share</strong>{" "}
          button and select{" "}
          <span className="text-indigo-600 font-semibold">Copy Link</span>.
        </>
      ),
    },
    {
      id: 2,
      icon: <BiPaste />,
      title: "Paste & Search",
      description: (
        <>
          Go back to our tool,{" "}
          <span className="text-indigo-600 font-semibold">Paste</span> the
          copied URL into the search box, and click the download button.
        </>
      ),
    },
    {
      id: 3,
      icon: <BiDownload />,
      title: "Download Video",
      description: (
        <>
          Choose your preferred video quality from the available options and
          download the MP4 file instantly.
        </>
      ),
    },
  ];

  return (
    <section className="py-12 md:py-20 w-full relative z-10">
      <SectionTitle
        title="How to Download?"
        subtitle="Follow these three simple steps to save your favorite videos instantly to your device."
        isTop={true}
      />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative mt-4 md:mt-8">
        {/* Decorative connecting line for desktop screens */}
        <div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 bg-gradient-to-r from-slate-100 via-indigo-100 to-slate-100 -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Step Number Watermark (Top Right) */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-slate-50 border-b border-l border-slate-100 rounded-bl-3xl flex items-center justify-center font-black text-slate-300 text-xl group-hover:text-indigo-300 transition-colors">
                {step.id}
              </div>

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-3xl mb-6 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-sm">
                {step.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToDownload;
