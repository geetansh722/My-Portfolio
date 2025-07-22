import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
    const words = ["Secure", "Modern", "Scalable"];
    const varients = {
        hidden:{ opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      
      {/* DesktopView */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={varients}
          initial = "hidden"
          animate = "visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Geetansh
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
          variants={varients}
          initial = "hidden"
          animate = "visible"
            transition={{ delay: 1.2 }}
          >
            A Developer <br />
            Dedicated to desing
          </motion.p>
          <div>
            <motion.div 
          variants={varients}
          initial = "hidden"
          animate = "visible"
            transition={{ delay: 1.5 }}>
              <FlipWords
                words={words}
                className="font-black text-white text-8xl"
              />
            </motion.div>
            <motion.p className="text-4xl font-medium text-neutral-300"
          variants={varients}
          initial = "hidden"
          animate = "visible"
            transition={{ delay: 1.8 }}
            >
              Web Solutions
            </motion.p>
            <motion.p className="text-1xl font-black -mt-95 text-neutral-300 "
          variants={varients}
          initial = "hidden"
          animate = "visible"
            transition={{ delay: 2 }}>
           I’m 16, and already sprinting past limits — every line of code is part of my evolution. I build experiences that move.
          </motion.p>
          </div>
        </div>
      </div>
      {/* Mobile view */}
      
      
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p className="text-4xl font-medium"
          variants={varients}
          initial = "hidden"
          animate = "visible"
            transition={{ delay: 1 }}>
                Hi, I'm Geetansh
                </motion.p>
        <div>
          <motion.p className="text-5xl font-black text-neutral-300"
          variants={varients}
          initial = "hidden"
          animate = "visible"
            transition={{ delay: 1.2 }}>
            Building
          </motion.p>
          <motion.div
          variants={varients}
          initial = "hidden"
          animate = "visible"
            transition={{ delay: 1.5 }}>
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p className="text-4xl font-black text-neutral-300"
          variants={varients}
          initial = "hidden"
          animate = "visible"
            transition={{ delay: 1.8 }}>
            Web Applications
          </motion.p>
            <motion.p className="text-1xl font-black mt-200  text-neutral-300 cursor-pointer"
          variants={varients}
          initial = "hidden"
          animate = "visible"
            transition={{ delay: 2 }}>
           I’m 16, and already sprinting past limits — every line of code is part of my evolution. I build experiences that move.
          </motion.p>
        </div>
      </div>

      {/* dont touch the last one */}
    </div>
  );
};

export default HeroText;