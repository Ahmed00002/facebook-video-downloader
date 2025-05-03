import { MdHighQuality } from "react-icons/md";
import FeaturesCard from "./shared/FeaturesCard";
import SectionTitle from "./shared/SectionTitle";
import { SiEasyeda } from "react-icons/si";
import { BiMoney } from "react-icons/bi";

const Features = () => {
  const features = [
    {
      icon: (
        <>
          <MdHighQuality size={40} className="text-purple-700" />{" "}
        </>
      ),
      title: "Highest Quality",
      subtitle:
        "Our Facebook video download helps you download FULL HD, and 4K videos with sound. Most of the current tools only allow HD videos.",
    },
    {
      icon: (
        <>
          <SiEasyeda size={40} className="text-purple-700" />{" "}
        </>
      ),
      title: "Easy",
      subtitle:
        "Facebook video downloader for every device (mobile phone, PC, or tablet), and every OS (Android, IOS). You don't need to install any software.",
    },
    {
      icon: (
        <>
          <BiMoney size={40} className="text-purple-700" />{" "}
        </>
      ),
      title: "Free",
      subtitle:
        "FDN Pro FB Downloader - It's always be free. In future We will only place some ads to support our development.",
    },
  ];
  return (
    <div className="mb-10">
      <SectionTitle
        title={"Why you should use FDN Pro"}
        subtitle={
          "FDN Pro is the best Facebook video downloader to help you high quality Facebook video download: Full HD and SD. Download Facebook video to your phone, PC, or tablet with highest quality. Use our FB video downloader with your browser. No need to install any software. Support both Android, and iOS."
        }
      />

      <div className="grid grid-cols-3 gap-4 ">
        {features.map((feature, index) => {
          return <FeaturesCard key={index} feature={feature} />;
        })}
      </div>
    </div>
  );
};

export default Features;
