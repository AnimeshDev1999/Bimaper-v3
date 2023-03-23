import FeatureCard from "./FeatureCard";
import wallet from "../images/wallet.svg";
import bulb from "../images/bulb.svg";
import heart from "../images/heart.svg";
import thumbsup from "../images/thumbs-up.svg";
import speedometer from "../images/speedometer.svg";

const Features = () => {
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
    <div className="px-40 mb-36 flex">
      <div className="w-1/2 px-10 flex flex-col gap-6">
        <h2 className="font-bold text-4xl mb-4 tracking-tighter">
          What is <span className="text-sky-500">Bimaper</span>
        </h2>
        <p className="leading-relaxed text-lg">
          Bimaper Technologies & Solutions Private Limited, based in Lucknow,
          Uttar Pradesh, India, is a professionally managed complete IT service
          provider. Bimaper utilises state-of-the-art infrastructure, modern
          technology, well-qualified and experienced human resources, and
          high-end software technology.
        </p>
        <p className="leading-relaxed text-lg">
          <span className="font-semibold">Our mission :</span> "To become a
          globally recognised company that provides best-of-breed IT solutions,
          delivered by best-in-class people".
        </p>
        <p className="leading-relaxed text-lg">
          <span className="font-semibold">Our vision :</span> Think
          unconventionally and make sure to fulfil impossible targets while
          keeping global competitiveness and social responsibility in mind.
        </p>
        <p className="leading-relaxed text-lg">
          We’ll meet global standards for IT services that delight customers
          through prompt action and innovative service.
        </p>
      </div>
      <div className="w-1/2 px-10 grid grid-cols-2">
        {cardData.map((item) => (
          <FeatureCard key={item.heading} data={item}></FeatureCard>
        ))}
      </div>
    </div>
  );
};
export default Features;
