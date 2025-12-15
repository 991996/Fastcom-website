import ServicesBar from "./ServicesBar";
import { Parallax } from "react-parallax";
import background from "@/assets/ztt.png";
import cableIcon from "@/assets/cable-charge-icon.svg";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountItem from "../CountItem";
import { aboutItemsList } from "@/data/Data";

const countItemList = [
  {
    id: 1,
    title: "Employees",
    count: 16000,
    text: "worldwide",
  },
  {
    id: 2,
    title: "Subsidiaries",
    count: 80,
    text: "across 5 continents",
  },
  {
    id: 3,
    title: "Annual Revenue",
    count: 12.5,
    text: "USD Billion",
  },
  {
    id: 4,
    title: "Exports",
    count: 160,
    text: "countries",
  },
];

function AboutZTT() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section id="aboutZTT" className="relative w-[97%] mx-auto mt-15 lg:mt-5">
      {/* Parallax background */}
      <Parallax
        bgImage={background}
        bgImageStyle={{ objectFit: "cover" }}
        strength={300}
        className="h-full rounded-[44px] pb-20"
      >
        <div className="h-fit">
          <div className="w-[90%] xl:w-[80%] mx-auto flex flex-col gap-15 md:gap-30 relative z-40">
            <ServicesBar />
            <div className="flex flex-col gap-15">
              {/* TEXT */}
              <div className="w-full flex flex-col gap-1 md:gap-3">
                <div className="flex items-center gap-2">
                  <img src={cableIcon} className="w-7" />
                  <p className="uppercase font-bold md:text-lg tracking-widest text-gray-200">
                    About ZTT group
                  </p>
                </div>
                <motion.h1
                  ref={ref}
                  className="font-bold text-4xl md:text-5xl text-white"
                  initial={{ x: -80, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                >
                  global leader in
                  <div className="marker-wrap text-primary-red text-[40px] md:text-[50px] tracking-widest">
                    <svg viewBox="0 0 300 60" className="marker-svg">
                      <path id="marker-path" d="M10 40 Q80 10 150 35 T290 30" />
                    </svg>
                    <span className="text pl-2">ICT</span>
                  </div>
                  infrastructure.
                </motion.h1>
                {/* COUNT Section */}
                <hr className="mt-10 border-gray-100/20"></hr>
                <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-3">
                  {countItemList.map((count) => {
                    return <CountItem key={count.id} item={count} />;
                  })}
                </div>
                <hr className="border-gray-100/20"></hr>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-gray-100 text-[17px]">
                  ZTT is aglobal leader in ICT infrastructure, offering
                  integrated solutions in:
                </p>
                {/* About Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full gap-5">
                  {aboutItemsList.map((about, index) => {
                    const isLast = index === aboutItemsList.length - 1;
                    return (
                      <AboutItem key={about.id} item={about} isLast={isLast} />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
      {/* OVERLAY */}
      <div className="absolute bg-primary-blue/60 inset-0 z-0 rounded-[44px]"></div>
    </section>
  );
}

export default AboutZTT;

function AboutItem({ item, isLast }) {
  return (
    <div
      className={`border border-gray-100/50 p-5 relative hover:border-primary-red 
    duration-500 aspect-square sm:aspect-[1/1.3] overflow-hidden
    ${
      isLast
        ? " md:col-span-3 md:max-h-[200px] lg:max-h-[250px] md:w-full xl:col-span-1 xl:max-h-none"
        : ""
    }`}
    >
      {/* TEXT */}
      <h1 className="text-2xl pt-5 md:pt-0 md:text-[21px] lg:pt-5 lg:text-2xl text-white font-medium">
        {item.text}
      </h1>
      {/* IMAGE */}
      <div className="absolute bottom-0 z-99">
        <div
          className={`relative  ml-auto
          ${isLast ? "w-[80%] md:w-[30%] xl:w-[80%]" : "w-[80%]"}`}
        >
          <img
            src={item.image}
            className="w-[90%] ml-auto aspect-square rounded-tl-full object-cover"
          />
          <div
            className="w-full aspect-square bg-primary-red 
          absolute -z-5 top-0 rounded-tl-full"
          ></div>
        </div>
      </div>
    </div>
  );
}
