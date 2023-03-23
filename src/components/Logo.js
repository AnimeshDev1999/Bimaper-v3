import logo from "../images/logoBlack.png";

const Logo = () => {
  return (
    <div>
      <img
        className="absolute h-10 top-10 left-10"
        src={logo}
        alt="Company Logo"
      />
    </div>
  );
};
export default Logo;
