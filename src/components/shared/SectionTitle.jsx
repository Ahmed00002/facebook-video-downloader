import React from "react";

const SectionTitle = ({ title, subtitle, isTop }) => {
  return (
    <>
      <div
        className={`${
          isTop && "mt-32"
        } mb-8 md:mb-10 lg:mb-12 flex flex-col gap-2 md:gap-4 lg:gap-6 items-center justify-center`}
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center">
          {title}
        </h1>
        <p className="text-xs w-full md:w-11/12 lg:w-9/12 text-center text-gray-600">
          {subtitle}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
