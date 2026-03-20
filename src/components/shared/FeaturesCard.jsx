const FeaturesCard = ({ feature }) => {
  const { icon, title, subtitle } = feature;

  return (
    <div className="group relative flex flex-col items-start p-6 md:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer z-10 overflow-hidden">
      {/* Subtle background glow effect on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full mix-blend-multiply filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 translate-x-10 -translate-y-10"></div>

      {/* Icon Container */}
      <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-2xl bg-slate-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-sm text-2xl">
        {icon}
      </div>

      {/* Text Content */}
      <h3 className="text-xl font-bold text-slate-800 tracking-tight mb-2 group-hover:text-indigo-600 transition-colors duration-300">
        {title}
      </h3>

      <p className="text-slate-500 leading-relaxed text-sm md:text-base font-medium">
        {subtitle}
      </p>
    </div>
  );
};

export default FeaturesCard;
