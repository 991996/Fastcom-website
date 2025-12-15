import { FaPhoneVolume } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { contactInfo } from "@/data/Data";
import { useState } from "react";

function Call() {
  const [hover, setHover] = useState(false);
  return (
    <div className="hidden md:flex gap-5 items-center text-white cursor-pointer">
      <div
        className="bg-white rounded-full p-3.5 text-primary-red"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={hover ? "hover" : "normal"}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <FaPhoneVolume />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex flex-col gap-0">
        <p className="text-sm">Call Emergency</p>
        <motion.div
          className="relative w-fit inline-block text-[15px] hover:text-primary-red duration-300 cursor-pointer"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <p className="text-2xl">{contactInfo.phoneNumber}</p>

          <motion.div
            className="absolute left-0 -bottom-px 
                      h-px w-full bg-primary-red"
            variants={{
              rest: { scaleX: 0 },
              hover: { scaleX: 1 },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Call;
