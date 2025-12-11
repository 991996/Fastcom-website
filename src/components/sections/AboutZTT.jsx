import ServicesBar from "./ServicesBar";
import { Parallax } from "react-parallax";
import background from "@/assets/ztt.png";
function AboutZTT() {
  return (
    <div className="relative w-[97%] mx-auto mt-15 lg:mt-5">
      <Parallax
        bgImage={background}
        strength={300}
        className="h-full rounded-[44px] "
      >
        <div style={{ height: 500 }}>
          <h1 style={{ color: "white", textAlign: "center", paddingTop: 200 }}>
            Parallax Effect
          </h1>
        </div>
      </Parallax>
      {/* OVERLAY */}
      <div className="absolute bg-primary-blue/50 inset-0 z-5 rounded-[44px]"></div>

      <div className="absolute top-0 left-0 w-full z-10">
        <ServicesBar />
      </div>
    </div>
  );
}

export default AboutZTT;
