import CustomerCard from "./CustomerCard";

const Testimonial = () => {
  const dataCust = [
    {
      name: "Wilman Infraprojects",
      work: "Construction Business",
      quote:
        "Bimaper has provided unmatchable customer service with a tremendous quality of service that has resulted in minimized downtime and disruption. We have peace of mind knowing there is a large team of experts behind us, guaranteeing high levels of service and solutions that give our business a competitive edge.",
    },
    {
      name: "Clay Mansion",
      work: "Manufacturing Firm",
      quote:
        "Before we partnered with Bimaper, we had extremely outdated infrastructure and gear that wasn't up to par. We started out with a one-man IT company that was unable to meet our needs. Bimaper replaced our server and put us in a domain environment, and they kept us informed of their reasoning every step of the way. Essentially, they brought us up to date.",
    },
    {
      name: "ProzForce",
      work: "Recruitment Company",
      quote:
        "Bimaper is driven by a passion to create and deliver on new ideas, and that is reflected in their work. It is a team that strives for excellence and is open to experimenting and creating new trends in the business. Our working relationship has been productive, and we have collectively been able to achieve great results. I wish Team Bimaper more triumphs in the future.",
    },
    {
      name: "Jan Suwidha",
      work: "Social Welfare",
      quote:
        "We began working with Bimaper right before the COVID-19 pandemic. There probably couldn't be a more stressful time to onboard with a new IT company, but Bimaper has been amazing! We are probably one of their smaller clients, and many of their larger companies also had significant issues at the beginning of the pandemic. However, Bimaper never made us feel small. We are not sure what we would have done if we hadn't hired Bimaper. They saved us!",
    },
  ];

  return (
    <div className="px-40 py-20 overflow-hidden">
      <h2 className="font-bold text-3xl mb-20 tracking-tighter">
        A word from our <span className="text-sky-500">Clients</span>
      </h2>
      <div className="grid grid-cols-2 gap-x-10 gap-y-20">
        {dataCust.map((item) => (
          <CustomerCard key={item.name} data={item}></CustomerCard>
        ))}
      </div>
    </div>
  );
};
export default Testimonial;
