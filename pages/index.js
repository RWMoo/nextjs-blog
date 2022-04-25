import PageLayout from "../components/layouts/PageLayout"
import MainCard from "../components/Cards/MainCard";
import LatestPost from "../components/Cards/LatestPostCard";
import { gql, GraphQLClient } from "graphql-request";


const Home = ({ posts }) => {
  return (
    <PageLayout>
      <div className="text-center ">
        <h1 className="font-title pt-4 text-7xl font-bold text-title">Rm</h1>
        <p className="text-sm mt-2 text-primary max-w-xs mx-auto">
          Tempor bibendum vel augue quam dignissim fermentum odio eu sed lacus
          amet leo
        </p>
      </div>
      <section className="mt-8">
       
      </section>
      <section>
        <h2 className="text-2xl ml-2 font-semibold mt-8 text-primary font-display ">
          Latest posts
        </h2>
        <div className="space-y-4 mt-8">
         
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
