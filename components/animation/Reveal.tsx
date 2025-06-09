import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%"; 
}

export const Reveal = ({ children, width = "fit-content"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

    useEffect(() => {
        if(isInView) {
            //do something
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
          transition={{ duration: 0.85, delay: 0.5}}
        >
          {children}
        </motion.div>
        {/**Add Sl;ide things */}
      </div>
    )
}