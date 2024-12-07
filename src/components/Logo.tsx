import { motion } from "motion/react";

const Logo = () => {
  return (
    <a href="/" className="inline-flex items-center">
      <motion.div
        className="text-4xl text-gray-100 font-bold tracking-wide transition"
        initial="collapsed"
        whileHover="collapsed"
      >
        <>
          <span>fede</span>
          <motion.span
            variants={{
              collapsed: { opacity: 0, x: 0 },
              expanded: { opacity: 1, x: 0 },
            }}
          >
            rico
          </motion.span>
          <motion.span
            variants={{
              collapsed: { x: -65 },
              expanded: { x: 0 },
            }}
            style={{ position: "relative", backgroundColor: "transparent", zIndex: 9 }}
          >
            \mas
          </motion.span>
          <motion.span
            variants={{
              collapsed: { opacity: 0, x: -72 },
              expanded: { opacity: 1, x: 0 },
            }}
            style={{ position: "relative" }}
          >
            trini
          </motion.span>
        </>
      </motion.div>
    </a>
  );
};

export { Logo };
