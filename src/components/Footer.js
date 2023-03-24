import logo from "../images/logoBlack.png";

const Footer = () => {
  return (
    <div className="px-40 py-10 bg-slate-100 flex justify-between items-center">
      <img src={logo} className="h-10" alt="company logo" />
      <p>
        &#169;Bimaper Technologies & Solutions Private Limited - All Rights
        Reserved.
      </p>
      <p>Terms & Conditions | Privacy Policy</p>
    </div>
  );
};
export default Footer;
