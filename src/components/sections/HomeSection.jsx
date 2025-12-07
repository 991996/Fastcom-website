import background from "@/assets/background-home.png";
import Header from "../header/Header";

function HomeSection() {
  return (
    <div className=" h-screen relative">
      <Header />
      {/* Cable background */}
      <img
        src={background}
        className="w-full h-full object-cover absolute inset-0 -z-10"
      />
      {/* Overlay */}
      <div className=" absolute bg-navy-blue/80 inset-0 h-full w-full -z-5"></div>
    </div>
  );
}

export default HomeSection;
