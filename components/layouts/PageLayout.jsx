import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar";

const PageLayout = ({ children }) => {
  const router = useRouter();
  const variants = {
    initial: { opacity: 0, y: -150 },
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
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.3,
        y: {
          delay: 0.1
        }
      },
    },
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
