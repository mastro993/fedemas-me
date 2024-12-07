import { motion, MotionStyle, Transition, useAnimation } from "motion/react";
import { useEffect, useRef } from "react";
import useIntersection from "../../hooks/useIntersection";

const WavingHand = () => {
  const ref = useRef<HTMLSpanElement>(null);
  const controls = useAnimation();
  const isVisible = useIntersection(ref, "0px");

  const style: MotionStyle = {
    transformOrigin: "100% 130%",
  };

  const waveTransition: Transition = {
    rotate: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: 2,
      delay: 1,
    },
  };

  useEffect(() => {
    isVisible && controls.start({ rotate: [0, 60, 0] });
  }, [isVisible, controls]);

  return (
    <motion.span className="absolute ml-5" style={style} transition={waveTransition} animate={controls} ref={ref}>
      👋🏻
    </motion.span>
  );
};

export { WavingHand };
