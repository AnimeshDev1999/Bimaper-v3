import CustomerCard from "./CustomerCard";

const Testimonial = () => {
  return (
    <div className="p-40">
      <h2 className="font-bold text-4xl mb-20 tracking-tighter">
        A word from our <span className="text-sky-500">Clients</span>
      </h2>
      <CustomerCard></CustomerCard>
    </div>
  );
};
export default Testimonial;
