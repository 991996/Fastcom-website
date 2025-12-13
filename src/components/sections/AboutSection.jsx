import background from "@/assets/network-bg.png";
import BlobImage from "../BlobImage";
import about1 from "@/assets/Ztt1.png";
import blobAbout2 from "@/assets/blob-about2.svg";
import blobAbout1 from "@/assets/blob-about1.svg";
import cableIcon from "@/assets/cable-charge-icon.svg";
import DottedBlob from "@/assets/dotted-blob.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  return (
    <div className=" relative">
      <img
        src={background}
        className=" absolute top-0 left-0 w-full opacity-40 -z-100"
      />
      <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5">
        {/* IMAGES */}
        <div
          className="flex justify-center items-center relative 
        w-full sm:w-[80%] md:w-[70%] lg:w-[50%]"
        >
          {/* Big image */}
          <div className="relative w-full">
            <img
              src={blobAbout1}
              className="absolute -z-20 top-12 right-0 w-[90%]"
            />

            <BlobImage
              src={about1}
              className="w-full aspect-square -z-2"
              alt="about"
              blobPath="M57.9,-58C74.2,-41.6,86.1,-20.8,81.9,-4.2C77.7,12.4,57.5,24.8,41.2,38.9C24.8,53,12.4,68.7,-2.9,71.6C-18.2,74.5,-36.3,64.5,-46.3,50.4C-56.3,36.3,-58.1,18.2,-58.5,-0.5C-59,-19.1,-58.1,-38.1,-48.1,-54.6C-38.1,-71.1,-19.1,-85,0.9,-85.9C20.8,-86.7,41.6,-74.5,57.9,-58Z"
            />
          </div>

          {/* Small image*/}
          <div className="absolute bottom-0 right-0 w-[60%]">
            <img src={blobAbout2} className="absolute w-[81%]" />

            <BlobImage
              src={about1}
              className="w-[80%] aspect-square z-10 relative"
              alt="about"
              blobPath="M58.4,-58.7C73.9,-42.9,83.4,-21.5,81.7,-1.7C79.9,18,67,36,51.5,51.2C36,66.5,18,78.9,3.1,75.8C-11.8,72.7,-23.6,54,-32.4,38.8C-41.1,23.6,-46.9,11.8,-50.8,-3.9C-54.7,-19.6,-56.7,-39.2,-47.9,-55C-39.2,-70.8,-19.6,-82.8,0.9,-83.8C21.5,-84.7,42.9,-74.6,58.4,-58.7Z"
            />
          </div>
          {/* Dotted blob */}
          <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{
              x: [0, -5, 0, 5, 0],
              y: [0, -5, 0, -5, 0],
            }}
            transition={{ duration: 3, ease: "linear", repeat: Infinity }}
            className="absolute -top-5 left-0 w-[110%] -z-10"
          >
            <img src={DottedBlob} className="absolute w-full" />
          </motion.div>
        </div>

        {/* TEXT */}
        <div className="w-full lg:w-[50%] flex flex-col gap-3 px-5 lg:pr-10">
          <div className="flex items-center gap-2">
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
            The exclusive agent of{" "}
            <div className="marker-wrap text-primary-red text-[40px] md:text-[50px] tracking-widest">
              <svg viewBox="0 0 300 60" className="marker-svg">
                <path id="marker-path" d="M10 40 Q80 10 150 35 T290 30" />
              </svg>
              <span className="text pl-2">ZTT</span>
            </div>
            Group.
          </motion.h1>
          <p className="mt-3 text-gray-500">
            Fastcom Solutions, headquartered in Damascus, is theexclusive agent
            of ZTT Groupin Syria. We provide advanced technologies infiber
            optics, telecommunications, wireless solutions, power systems, and
            data centers.
          </p>

          <p className="mt-1 text-gray-500">
            Our mission is to deliverinnovative, reliable, and sustainable
            infrastructure solutionsthat support telecom operators, ISPs,
            enterprises, and government institutions in buildingfuture ready
            digital networks.
          </p>
          <p className="mt-1 text-gray-500">
            With ZTT’s global expertise and Fastcom’s local presence, we
            combineworld-class manufacturingwithdedicated after-sales service
            andtechnical supporttailored for the Syrian market.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
