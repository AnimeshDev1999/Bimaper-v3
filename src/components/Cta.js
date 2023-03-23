import formImg from "../images/form-img.svg";

const Cta = () => {
  return (
    <div className="p-40">
      <h2 className="font-bold text-sky-900 text-4xl mb-4 tracking-tighter">
        Have a <span className="text-sky-500">Project</span> in mind?
      </h2>
      <p className="text-xl text-sky-900 mb-16">
        Let us know when and how to contact you and we will reach out to you.
      </p>
      <div className="flex bg-sky-200 text-sky-900 rounded-md p-20">
        <form action="" className="w-2/3 flex flex-col">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input name="name" type="text" className="form-field mb-12" />
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input name="email" type="email" className="form-field mb-12" />
          <p htmlFor="" className="form-label">
            Preferred communication mode
          </p>
          <div className="flex gap-10">
            <label className="form-label" htmlFor="">
              Text &nbsp;
              <input type="checkbox" name="" id="" />
            </label>
            <label className="form-label" htmlFor="">
              Call &nbsp;
              <input type="checkbox" name="" id="" />
            </label>
            <label className="form-label" htmlFor="">
              E-mail &nbsp;
              <input type="checkbox" name="" id="" />
            </label>
          </div>
        </form>
        <img src={formImg} className="w-1/3 p-5 rounded-md" alt="" />
      </div>
    </div>
  );
};
export default Cta;
