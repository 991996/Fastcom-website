"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function CountItem({ item }) {
  const controls = useAnimation();
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({
        count: item.count,
        transition: { duration: 2, ease: "easeOut" },
      });
    }
  }, [isInView, item.count, controls]);

  return (
    <div className="flex flex-col gap-0.5 text-white text-center">
      <h1 className="font-[550] text-[22px]">{item.title}</h1>
      <motion.p
        ref={ref}
        animate={controls}
        onUpdate={(latest) => setCount(Math.floor(latest.count))}
        className="text-3xl"
      >
        {count}+
      </motion.p>
      <p className="text-xl text-gray-300">{item.text}</p>
    </div>
  );
}

export default CountItem;
