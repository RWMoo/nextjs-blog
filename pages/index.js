import PageLayout from "../components/layouts/PageLayout";
import MainCard from "../components/Cards/MainCard";
import LatestPost from "../components/Cards/LatestPostCard";
import { gql, GraphQLClient } from "graphql-request";
import { getPosts } from "../utils/queries";
import {
  FaArrowRight,
  FaChevronCircleDown,
  FaChevronCircleRight,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export const getStaticProps = async () => {
  const { posts } = await getPosts();
  return {
    props: {
      posts,
    },
  };
};

const Home = ({ posts }) => {
  return (
    <PageLayout>
      <div className="flex flex-col justify-around items-center h-full ">
        <div className="text-center ">
          <h1 className="font-title text-7xl font-bold text-accent">Rm</h1>
          <p className="text-sm mt-2 text-body text-3xl font-bold font-display max-w-xs mx-auto">
            Hey, I&apos;m Rob.
          </p>
          <p className="text-sm mt-4 text-body font-display max-w-xs mx-auto">
            I&apos;m a front-end developer that dabbles with back-end from time
            to time.
          </p>
        </div>
        <div>
          <button className="mx-auto text-4xl text-accent border p-3 border-4 border-accent-light rounded-full">
            <FaChevronCircleDown className="" />
          </button>
        </div>
        <div className="flex  justify-center space-x-7 text-2xl mt-8 text-body">
          <FaFacebook className="transition duration-400 transform hover:scale-110  hover:text-accent" />
          <FaInstagram />
          <FaTwitter />
          <FaDiscord />
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
