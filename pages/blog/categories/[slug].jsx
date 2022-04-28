import LatestPost from "../../../components/Cards/LatestPostCard";
import MainCard from "../../../components/Cards/MainCard";
import PageLayout from "../../../components/layouts/PageLayout";
import {
  getCategorySlugs, getPostsByCategory
} from "../../../utils/queries";

export const getStaticPaths = async () => {
  const slugs = await getCategorySlugs();
  const paths = slugs.categories.map((event) => ({
    params: { slug: event.slug },
  }));
  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const { posts } = await getPostsByCategory(slug);
  if (!posts) {
    return {
      notFound: true,
    };
  }
 console.log(posts)
  return {
    props: { posts: posts, category: posts[0].category },
    revalidate: 60 * 60,
  };
};

const CategoryPage = ({ posts, category }) => {
  return (
    <PageLayout>
      <h1 className="text-title text-4xl font-bold">{category.title}</h1>
      <p className="font-body text-body text-sm mt-4 italic">{category.description}</p>
      <section className="mt-6">
        <MainCard {...posts[0]} />
      </section>
      {posts.length > 1 && (
        <section>
          <div className="space-y-4 mt-4">
            {posts.slice(1).map((item) => (
              <LatestPost key={item.id} {...item} />
            ))}
          </div>
        </section>
      )}
    </PageLayout>
  );
};

export default CategoryPage;
