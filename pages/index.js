import {
  FaChevronCircleDown,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import PageLayout from "../components/layouts/PageLayout";
import { getPosts } from "../utils/queries";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const { posts } = await getPosts();
  return {
    props: {
      posts,
    },
  };
};

const variants = {
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const arrowVariants = {
  animate: { y: 0, opacity: 1 },
  exit: { y: 150, opacity: 0 },
};

const Home = ({ posts }) => {
  const router = useRouter();
  const [buttonScale, setButtonScale] = useState(false);
  return (
    <PageLayout>
      <div className="flex h-full   flex-col justify-around items-center">
        <motion.div
          variants={variants}
          animate={buttonScale ? "exit" : "animate"}
          className="text-center "
        >
          <h1 className="font-title text-7xl font-bold text-accent">Rm</h1>
          <p className="text-sm mt-2 text-body text-3xl font-bold font-display max-w-xs mx-auto">
            Hey, I&apos;m Rob.
          </p>
          <p className="text-sm mt-4 text-body font-display max-w-xs mx-auto">
            I&apos;m a front-end developer that dabbles with back-end from time
            to time.
          </p>
        </motion.div>
        <div>
          <Link href="/blog" passHref>
            <motion.button
              variants={arrowVariants}
              animate={buttonScale ? "exit" : "animate"}
              className="transition duration-400 transform hover:scale-110 mx-auto text-4xl text-accent border p-3 border-4 border-accent-light rounded-full"
            >
              <FaChevronCircleDown className="" />
            </motion.button>
          </Link>
        </div>
        <motion.div
          variants={variants}
          animate={buttonScale ? "exit" : "animate"}
          className="flex justify-center space-x-7 text-2xl mt-8 text-body"
        >
          <FaFacebook className="transition duration-400 transform hover:scale-110 hover:text-accent" />
          <FaInstagram />
          <FaTwitter />
          <FaDiscord />
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Home;
