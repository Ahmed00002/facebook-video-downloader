import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

const PlatformToggle = ({ platform, setPlatform }) => {
  const currentPlatform = platform?.toLowerCase() || "facebook";

  const platforms = [
    {
      id: "facebook",
      label: "Facebook",
      icon: FaFacebook,
      // Brand-specific styling for the active state
      activeTheme:
        "bg-blue-50 border-blue-200 text-blue-700 shadow-blue-100/50 shadow-xl scale-105",
      iconColor: "text-blue-600",
    },
    {
      id: "tiktok",
      label: "TikTok",
      icon: FaTiktok,
      activeTheme:
        "bg-white border-slate-300 text-slate-900 shadow-slate-200/50 shadow-xl scale-105",
      iconColor: "text-slate-900",
    },
    {
      id: "youtube",
      label: "YouTube",
      icon: FaYoutube,
      activeTheme:
        "bg-red-50 border-red-200 text-red-700 shadow-red-100/50 shadow-xl scale-105",
      iconColor: "text-red-600",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full px-2">
      {platforms.map((item) => {
        const isActive = currentPlatform === item.id;
        const Icon = item.icon;

        return (
          <label
            key={item.id}
            className={`
              relative cursor-pointer flex items-center justify-center gap-2 
              px-5 py-2.5 md:py-3 rounded-2xl border-2 transition-all duration-300 ease-out select-none
              ${
                isActive
                  ? item.activeTheme // Applies the pop and brand colors
                  : "bg-slate-200/50 border-transparent text-slate-500 hover:bg-slate-200 hover:text-slate-700 scale-100"
              }
            `}
          >
            {/* Hidden radio input for accessibility and state management */}
            <input
              type="radio"
              name="platform"
              value={item.id}
              checked={isActive}
              onChange={(e) => setPlatform(e.target.value)}
              className="hidden"
            />

            <Icon
              className={`text-xl md:text-2xl transition-colors duration-300 ${
                isActive ? item.iconColor : "text-slate-400"
              }`}
            />

            <span className="font-bold text-sm md:text-base tracking-wide">
              {item.label}
            </span>

            {/* A subtle glowing dot to really highlight the active choice */}
            {isActive && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${item.activeTheme.split(" ")[0]}`}
                ></span>
                <span
                  className={`relative inline-flex rounded-full h-3 w-3 ${item.iconColor.replace("text", "bg")}`}
                ></span>
              </span>
            )}
          </label>
        );
      })}
    </div>
  );
};

export default PlatformToggle;
