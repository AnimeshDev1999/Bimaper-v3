import logo from "../images/logoBlack.png";

const Logo = () => {
  return (
    <div>
      <img
        className="absolute h-8 top-8 left-8"
        src={logo}
        alt="Company Logo"
      />
    </div>
  );
};
export default Logo;
