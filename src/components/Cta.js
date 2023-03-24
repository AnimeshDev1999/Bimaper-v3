const Cta = () => {
  return (
    <div className="p-40">
      <div className="form-base">
        <form action="" className="relative">
          <h2 className="font-bold text-sky-900 text-4xl mb-4 tracking-tighter">
            Have a <span className="text-sky-500">Project</span> in mind?
          </h2>
          <p className="text-xl text-sky-900 mb-16">
            Let us know when and how to contact you and we will reach out to
            you.
          </p>
          <div className="form-grid mb-10">
            <label htmlFor="" className="form-label">
              Name &nbsp;
              <input type="text" className="form-field" />
            </label>
            <label htmlFor="" className="form-label">
              Email &nbsp;
              <input type="email" className="form-field" />
            </label>
            <label htmlFor="" className="form-label">
              Phone &nbsp;
              <input type="email" className="form-field" />
            </label>
          </div>
          <div>
            <p className="form-label mb-6">Preferred mode of communication</p>
            <div className="flex gap-16">
              <label htmlFor="" className="form-label">
                Email &nbsp;
                <input type="checkbox" className="form-box" name="" id="" />
              </label>
              <label htmlFor="" className="form-label">
                Text &nbsp;
                <input type="checkbox" className="form-box" name="" id="" />
              </label>
              <label htmlFor="" className="form-label">
                Call &nbsp;
                <input type="checkbox" className="form-box" name="" id="" />
              </label>
            </div>
            <div className="absolute flex gap-10 right-0 bottom-0">
              <input
                type="submit"
                value="Submit"
                className="bg-sky-700 text-2xl cursor-pointer px-5 py-2 text-slate-100 rounded-md"
              />
              <input
                type="reset"
                value="Clear"
                className="bg-slate-100 text-2xl cursor-pointer px-5 py-2 text-sky-900 rounded-md"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Cta;
