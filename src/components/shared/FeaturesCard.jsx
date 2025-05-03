import React from "react";

const FeaturesCard = ({ feature }) => {
  const { icon, title, subtitle } = feature;
  return (
    <div className="bg-gradient-to-br from-0% from-purple-200 to-100% to-purple-100 text-black flex flex-col gap-2 p-4 rounded-xl hover:bg-gradient-to-tr transition-all duration-300 cursor-pointer border border-purple-300">
      {icon}
      <h1 className="text-2xl font-medium">{title}</h1>
      <h4>{subtitle}</h4>
    </div>
  );
};

export default FeaturesCard;
