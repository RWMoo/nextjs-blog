import React from "react";
import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar";
import { motion } from "framer-motion";
const PageLayout = ({ children }) => {
  const variants = {
    initial: { opacity: 0, y: -1000 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        y: {
          duration: 1,
        },
        opacity: {
          delay: 0.5,
          duration: 1,
        },
      },
    },
    exit: { opacity: 0, y: 1000 },
  };

  return (
    <div className="flex flex-col">
      <NavigationBar />
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="xl:container bg-primary flex-grow  px-4 md:px-8 mx-auto text-gray-300"
      >
        {children}
      </motion.div>

      <Footer />
    </div>
  );
};

export default PageLayout;
