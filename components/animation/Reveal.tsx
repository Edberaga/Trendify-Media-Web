import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useIsPresent, easeIn } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%"; 
}

export const Reveal = ({ children, width = "fit-content"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
      if(isInView) {
        mainControls.start("visible");
        slideControls.start("visible");
      }
    }, [isInView]);

    return (
      <div ref={ref} style={{position: "relative", width, overflow: "hidden"}}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75},
            visible: { opacity: 1, y: 0},
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.85, delay: 0.65}}
        >
          {children}
        </motion.div>
        {/**Add Sl;ide things */}
        <motion.div
          variants={{
            hidden: { left: 0},
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.75, ease: "easeIn" }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: "#5504dd",
            zIndex: 20
          }}
        />
      </div>
    )
}