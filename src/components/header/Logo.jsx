import logo from "@/assets/white-logo.png";
import { Link } from "react-router-dom";

function Logo({ isSticky = false }) {
  return (
    <a href="#home">
      <div
        className={isSticky ? "w-20 md:w-[100px]" : "w-[120px] md:w-[150px]"}
      >
        <img src={logo} alt="logo" className="w-full h-full object-contain" />
      </div>
    </a>
  );
}

export default Logo;
