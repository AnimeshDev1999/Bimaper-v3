import one from "../images/one.svg";

const Hero = () => {
  return (
    <div className="bg-sky-100 p-40 flex">
      <div className="flex flex-col gap-4 w-1/2 justify-center">
        <h1 className="text-6xl font-semibold tracking-tighter">
          <span className="text-sky-500">Bimaper.</span> Making businesses{" "}
          <br /> better through technology.
        </h1>
        <p className="font-regular text-lg mb-6">
          State-of-the-art infrastructure, modern technology, well qualified and
          experienced human resources with high end software technology.
        </p>
        <button className="w-max bg-sky-500 text-slate-100 p-4 text-xl rounded-md">
          Browse services
        </button>
      </div>
      <div className="w-1/2 flex justify-center">
        <img src={one} className="w-4/6" alt="Main art 1" />
      </div>
    </div>
  );
};

export default Hero;