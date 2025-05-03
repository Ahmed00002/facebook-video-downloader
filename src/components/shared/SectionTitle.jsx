import React from "react";

const SectionTitle = ({ title, subtitle, isTop }) => {
  return (
    <>
      <div
        className={`${
          isTop && "mt-32"
        } mb-12 flex flex-col gap-6 items-center justify-center`}
      >
        <h1 className="text-4xl font-medium">{title}</h1>
        <p className="text-md w-9/12 text-center text-gray-600">{subtitle}</p>
      </div>
    </>
  );
};

export default SectionTitle;
