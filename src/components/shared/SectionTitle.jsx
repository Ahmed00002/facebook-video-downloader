import React from "react";

const SectionTitle = ({ title, subtitle, isTop }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full px-4 max-w-3xl mx-auto 
        ${isTop ? "mt-24 md:mt-32" : "mt-16 md:mt-24"} 
        mb-10 md:mb-16
      `}
    >
      {/* Decorative Brand Dash */}
      <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6 opacity-80"></div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 text-center tracking-tight leading-tight mb-4 md:mb-6">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-slate-500 text-center text-base md:text-md leading-relaxed font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
