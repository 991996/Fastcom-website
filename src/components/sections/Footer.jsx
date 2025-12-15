import Logo from "../header/Logo";
import TopHeader from "../header/TopHeader";
import background from "@/assets/footer-bg.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useContext } from "react";
import { SheetContext } from "@/context/SheetContext";
import { ourSolutionsList, footerUsefulLinks } from "@/data/Data";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Footer() {
  const { setOpenSheet } = useContext(SheetContext);
  return (
    <div className=" relative mt-25 pb-10 flex flex-col gap-12">
      {/* Background */}
      <img
        src={background}
        className="w-full h-full object-cover absolute inset-0 -z-10"
      />
      {/* OVERLAY */}
      <div className="absolute bg-primary-blue/85 inset-0 -z-5"></div>
      {/* Content */}
      <div className="flex flex-col gap-15 w-[90%] xl:w-[80%] mx-auto">
        <TopHeader />

        {/* Links */}
        <div className="flex flex-col lg:flex-row gap-10 justify-between w-full text-gray-400">
          <div className="flex flex-col md:flex-row  gap-5">
            <Logo />
            {/* about */}
            <div className="flex flex-col gap-5 max-w-sm">
              <div className="flex flex-col gap-0 w-fit">
                <h1 className="text-white font-[550] text-xl">About fastcom</h1>
                <div className="w-full h-0.5 bg-linear-to-r from-primary-red to-transparent"></div>
              </div>
              <p className="text-[15px]">
                Fastcom Solutions, headquartered in Damascus, is the exclusive
                agent of ZTT Group in Syria.
              </p>
              <button
                onClick={() => setOpenSheet(true)}
                className="cssbuttons-io w-[180px] "
              >
                <span>
                  Contact us <MdKeyboardArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            {/* Solutions */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-0 w-fit">
                <h1 className="text-white font-[550] text-xl">Our solutions</h1>
                <div className="w-full h-0.5 bg-linear-to-r from-primary-red to-transparent"></div>
              </div>
              <div className="flex flex-col gap-2">
                {ourSolutionsList.slice(0, 5).map((solution) => {
                  return (
                    <motion.div
                      key={solution.id}
                      className="relative w-fit inline-block text-[15px] hover:text-white duration-300 cursor-pointer"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    >
                      <p>{solution.title}</p>

                      <motion.div
                        className="absolute left-0 -bottom-px 
                      h-px w-full bg-white"
                        variants={{
                          rest: { scaleX: 0 },
                          hover: { scaleX: 1 },
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{ transformOrigin: "left" }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
            {/* Links */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-0 w-fit">
                <h1 className="text-white font-[550] text-xl">Useful links</h1>
                <div className="w-full h-0.5 bg-linear-to-r from-primary-red to-transparent"></div>
              </div>
              <div className="flex flex-col gap-2">
                {footerUsefulLinks.map((link) => {
                  return (
                    <motion.div
                      key={link.id}
                      className="relative w-fit inline-block text-[15px] hover:text-white duration-300 cursor-pointer"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    >
                      <a href={link.link}>
                        <p>{link.title}</p>
                      </a>

                      <motion.div
                        className="absolute left-0 -bottom-px 
                      h-px w-full bg-white"
                        variants={{
                          rest: { scaleX: 0 },
                          hover: { scaleX: 1 },
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{ transformOrigin: "left" }}
                      />
                    </motion.div>
                  );
                })}
                {/* Contact Link */}
                <motion.div
                  className="relative w-fit inline-block text-[15px] hover:text-white duration-300 cursor-pointer"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <a onClick={() => setOpenSheet(true)}>
                    <p>Contact</p>
                  </a>

                  <motion.div
                    className="absolute left-0 -bottom-px 
                      h-px w-full bg-white"
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
          </div>
        </div>
      </div>
      <hr className="border-white/20" />
      <div className="w-full flex justify-center items-center text-gray-400">
        <p>© Copyright 2025 by Fastcom.</p>
      </div>
    </div>
  );
}

export default Footer;
