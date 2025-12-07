import logo from "@/assets/white-logo.png";

function Logo() {
  return (
    <div className="w-[120px] md:w-[150px]">
      <img src={logo} alt="logo" className="w-full h-full object-contain" />
    </div>
  );
}

export default Logo;
