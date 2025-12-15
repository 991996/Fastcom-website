import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const socialMediaList = [
  {
    id: 1,
    icon: <FaFacebookF size={12} />,
    link: "",
  },
  {
    id: 2,
    icon: <FaXTwitter size={12} />,
    link: "",
  },
  {
    id: 3,
    icon: <GrInstagram size={12} />,
    link: "",
  },
  {
    id: 4,
    icon: <FaYoutube size={12} />,
    link: "",
  },
];

function SocialMedia() {
  const [hover, setHover] = useState(null);

  return (
    <div className="flex gap-3 items-center">
      {socialMediaList.map((s) => (
        <div
          key={s.id}
          className="border rounded-full p-2 cursor-pointer overflow-hidden
                     hover:bg-white duration-300 hover:text-primary-red"
          onMouseEnter={() => setHover(s.id)}
          onMouseLeave={() => setHover(null)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={hover === s.id ? "hover" : "normal"}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {s.icon}
            </motion.div>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default SocialMedia;
