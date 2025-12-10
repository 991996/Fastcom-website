import background from "@/assets/background-home.png";
import Header from "../header/Header";
import cableIcon from "@/assets/cable-charge-icon.svg";
import { Button } from "../ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { homeSlides } from "@/data/Data";
import cableBG from "@/assets/cable-bg.png";
import BlobImage from "../BlobImage";
import blob from "@/assets/blob.svg";

function HomeSection() {
  const [index, setIndex] = useState(0);

  // كل سلايد يبقى 7 ثواني
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % homeSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [index]);

  const slide = homeSlides[index];
  const dots = [];
  for (let i = 0; i < homeSlides.length; i++)
    dots.push(<Dot key={i} index={i + 1} />);

  return (
    <div className="h-screen relative">
      <Header />

      {/* Background */}
      <img
        src={background}
        className="w-full h-full object-cover absolute inset-0 -z-10"
      />
      {/* OVERLAY */}
      <div className="absolute bg-navy-blue/85 inset-0 -z-5"></div>
      {/* image background (cabels) */}
      {/* <AnimatePresence mode="wait">
        <motion.img
          key={slide.id}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 0.2 }}
          exit={{
            y: 80,
            opacity: 0,
            transition: { duration: 0.6, delay: 0.3 },
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          src={cableBG}
          className="hidden xl:block w-[70%] object-cover absolute -right-40 -bottom-20 -z-2 opacity-20"
        />
      </AnimatePresence> */}

      {/* TEXT */}
      <div className="w-[90%] mx-auto relative h-screen md:h-[90vh] flex flex-col overflow-hidden">
        <AnimatePresence mode="wait">
          {/* هذه الـ wrapper لن تحتوي على exit حتى لا تخفي الأطفال */}
          <motion.div
            key={slide.id}
            className="flex justify-between items-center text-white h-[70%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // لا نضع exit للأب هنا → ليس لدينا exit على الأب
            transition={{ duration: 0.5 }}
          >
            <div className="w-full lg:w-[50%] flex flex-col gap-8">
              {/* Title — يدخل من فوق ويخرج للأعلى */}
              <motion.div
                className="flex flex-col gap-2"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0, transition: { duration: 0.55 } }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
              >
                <div className="flex items-center gap-2">
                  <img src={cableIcon} className="w-7" />
                  <p className="uppercase font-bold text-lg">{slide.title}</p>
                </div>
              </motion.div>

              {/* Main title — يدخل من اليمين ويخرج لليمين */}
              <motion.h1
                className="font-bold text-5xl"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0, transition: { duration: 0.55 } }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.35 }}
              >
                {slide.mainTitle}
              </motion.h1>

              {/* Text — يدخل من اليسار ويخرج لليسار */}
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0, transition: { duration: 0.55 } }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.5 }}
              >
                {slide.text}
              </motion.p>

              {/* Button — يدخل من تحت ويخرج لتحت */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0, transition: { duration: 0.55 } }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.65 }}
                className="self-start"
              >
                <Button className="bg-white text-primary-red text-[17px] font-[550] w-[180px] py-6 cursor-pointer">
                  Our Services <MdKeyboardArrowRight />
                </Button>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0, transition: { duration: 0.6 } }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
              className="hidden lg:block w-[50%] relative"
            >
              <div className="flex justify-center">
                <BlobImage
                  src={slide.img}
                  className="w-full aspect-square"
                  alt="product"
                />
              </div>
              <motion.img
                src={blob}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute w-[85%] right-3 bottom-8 -z-2"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-1">{dots}</div>
      </div>
    </div>
  );
  function Dot({ index }) {
    return (
      <div
        className={`flex justify-center items-center p-2 duration-300
        border ${
          index === slide.id ? "border-white/50" : "border-0"
        } rounded-full w-fit cursor-pointer`}
        onClick={() => setIndex(index - 1)}
      >
        <div
          className={`w-1.5 aspect-square rounded-full duration-300
      ${index === slide.id ? "bg-primary-red" : "bg-white"}`}
        ></div>
      </div>
    );
  }
}

export default HomeSection;
