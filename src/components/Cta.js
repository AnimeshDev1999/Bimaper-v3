const Cta = () => {
  return (
    <div className="px-40 py-20">
      <div className="form-base">
        <form action="" className="relative">
          <h2 className="font-bold text-sky-900 text-3xl mb-4 tracking-tighter">
            Have a <span className="text-sky-500">Project</span> in mind?
          </h2>
          <p className="text-lg text-sky-900 mb-16">
            Let us know when and how to contact you and we will reach out to
            you.
          </p>
          <p className="text-md text-sky-900 mb-2">Personal information</p>
          <div className="form-grid mb-10 border-4 border-sky-900/20 rounded-md p-10">
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
          <div className="mb-10">
            <p className="text-md text-sky-900 mb-2">Choose your service</p>
            <div className="flex flex-wrap gap-x-16 gap-y-5 border-4 border-sky-900/20 rounded-md p-10">
              <label htmlFor="" className="form-label">
                Web Design & Development &nbsp;
                <input type="checkbox" className="form-box" name="" id="" />
              </label>
              <label htmlFor="" className="form-label">
                Digital Marketing &nbsp;
                <input type="checkbox" className="form-box" name="" id="" />
              </label>
              <label htmlFor="" className="form-label">
                App Development &nbsp;
                <input type="checkbox" className="form-box" name="" id="" />
              </label>
              <label htmlFor="" className="form-label">
                Graphic Design &nbsp;
                <input type="checkbox" className="form-box" name="" id="" />
              </label>
              <label htmlFor="" className="form-label">
                SEO & SMO &nbsp;
                <input type="checkbox" className="form-box" name="" id="" />
              </label>
              <label htmlFor="" className="form-label">
                UX UI Design &nbsp;
                <input type="checkbox" className="form-box" name="" id="" />
              </label>
            </div>
          </div>
          <div className="mb-20">
            <p className="text-md text-sky-900 mb-2">
              Preferred mode of communication
            </p>
            <div className="flex gap-16 border-4 border-sky-900/20 rounded-md p-10">
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
          </div>
          <div className="flex gap-10">
            <input
              type="submit"
              value="Submit"
              className="bg-sky-700 text-lg cursor-pointer px-5 py-2 text-slate-100 rounded-md"
            />
            <input
              type="reset"
              value="Clear"
              className="bg-slate-100 text-lg cursor-pointer px-5 py-2 text-sky-900 rounded-md"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Cta;
