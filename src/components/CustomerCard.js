import comma from "../images/comma.svg";

const CustomerCard = () => {
  return (
    <div className="bg-sky-200 p-16 relative rounded-md">
      <div className="float-txt">
        <h2 className="text-xl mt-3 px-5 text-sky-800/80 font-semibold mb-2">
          Wilman Infraprojects
        </h2>
        <h3 className="text-lg text-sky-800/80 font-medium mb-6">
          Construction Business
        </h3>
      </div>
      <p className="italic text-sky-900 text-2xl font-semibold leading-relaxed">
        "Bimaper has provided unmatchable customer service with a tremendous
        quality of service that has resulted in minimized downtime and
        disruption. We have peace of mind knowing there is a large team of
        experts behind us, guaranteeing high levels of service and solutions
        that give our business a competitive edge."
      </p>
      <img src={comma} className="img-test" alt="" />
    </div>
  );
};
export default CustomerCard;
