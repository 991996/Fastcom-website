import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import cableIcon from "@/assets/cable-charge-icon.svg";
import { ourSolutionsList } from "@/data/Data";

function OurSolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div className="mt-25 w-[90%] xl:w-[80%] mx-auto flex flex-col gap-20">
      {/* TITLE */}
      <div className="w-full flex flex-col gap-3 text-center">
        <div className="flex items-center gap-2 mx-auto">
          <img src={cableIcon} className="w-7" />
          <p className="uppercase font-bold md:text-lg tracking-wide text-primary-red">
            About Fastcom Solutions
          </p>
        </div>
        <motion.h1
          ref={ref}
          className="font-bold text-4xl md:text-5xl text-primary-blue"
          initial={{ x: -80, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          Integrated Technology Solutions
        </motion.h1>
      </div>
      {/* Solutions */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col gap-5">
          {ourSolutionsList.slice(0, 4).map((solution, index) => {
            return (
              <div className="flex flex-col gap-8">
                <Solution key={solution.id} solution={solution} />
                {index !== 3 ? <hr></hr> : <></>}
              </div>
            );
          })}
        </div>
        {/* IMAGE */}
        <div className="my-10 h-[450px] w-[270px] m-auto rounded-full bg-primary-red"></div>
        <div className="flex flex-col gap-5">
          {ourSolutionsList.slice(4, 8).map((solution, index) => {
            return (
              <div className="flex flex-col gap-8">
                <Solution key={solution.id} solution={solution} />
                {index !== 3 ? <hr></hr> : <></>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurSolutionsSection;

function Solution({ solution }) {
  return (
    <div className="flex items-center gap-5 max-w-md">
      {/* ICON */}
      <div className="text-primary-red w-20 h-20">
        <button class="blob-btn">
          <solution.icon size={40} />
          <span class="blob-btn__inner">
            <span class="blob-btn__blobs">
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
            </span>
          </span>
        </button>
        <br />

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="10"
              ></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                result="goo"
              ></feColorMatrix>
              <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
      {/* TEXT */}
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-medium">{solution.title}</h1>
        <p className="text-gray-500 text-[15px]">{solution.text}</p>
      </div>
    </div>
  );
}
