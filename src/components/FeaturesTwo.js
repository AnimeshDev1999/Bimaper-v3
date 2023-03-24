import FeatureCard from "./FeatureCard";
import wallet from "../images/wallet.svg";
import bulb from "../images/bulb.svg";
import heart from "../images/heart.svg";
import thumbsup from "../images/thumbs-up.svg";
import speedometer from "../images/speedometer.svg";

const FeaturesTwo = () => {
  const cardData = [
    {
      ico: wallet,
      heading: "Wallet Friendly",
      content: "Good ratio of price, performance, quality, and speed.",
    },
    {
      ico: bulb,
      heading: "Qualified Personnel",
      content: "A dedicated team of industry experts.",
    },

    {
      ico: thumbsup,
      heading: "No Interruptions",
      content: "Move your website from the old server without any downtime.",
    },
    {
      ico: speedometer,
      heading: "Seamless",
      content: "Get a responsive and fast-loading website.",
    },
    {
      ico: heart,
      heading: "Customer Care",
      content:
        "A belief in building a strong, long-term customer relationship based on confidence and continuity.",
    },
  ];
  return (
    <div className="px-40 py-10">
      <h2 className="font-bold text-4xl mb-12 tracking-tighter">
        Key <span className="text-sky-500">Features</span>
      </h2>
      <div className=" grid gap-5 grid-cols-5">
        {cardData.map((item) => (
          <FeatureCard key={item.heading} data={item}></FeatureCard>
        ))}
      </div>
    </div>
  );
};
export default FeaturesTwo;
