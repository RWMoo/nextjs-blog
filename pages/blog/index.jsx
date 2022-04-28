import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import MainCard from "../../components/Cards/MainCard";
import PageLayout from "../../components/layouts/PageLayout";
import { getPosts } from "../../utils/queries";

export const getStaticProps = async () => {
  const { posts } = await getPosts();
  const categories = posts.map((post) => post.category);
  const filtered = categories.filter(
    (item, index) => !categories.includes(item, index + 1)
  );
  return {
    props: {
      posts,
      categories: filtered,
    },
  };
};

const Blog = ({ posts, categories }) => {
  console.log(categories);
  return (
    <PageLayout>
      <div className="flex-shrink">
        <SearchBar />
        <Categories categories={categories} />
        <div className="space-y-4">
          {posts.map((post) => (
            <MainCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

const SearchBar = () => {
  return (
    <div className="flex items-center px-3 bg-secondary ">
      <FaSearch />
      <input className="focus:outline-none font-body w-full py-2 pl-3 rounded bg-transparent" />
    </div>
  );
};

const Categories = ({ categories }) => {
  return (
    <div className="space-x-2 mt-4 pb-4 overflow-scroll whitespace-nowrap ">
      {categories.map((category) => (
        <CategoryButton key={category.slug} category={category} />
      ))}
    </div>
  );
};

const CategoryButton = ({ category }) => {
  return (
    <Link href={`/blog/categories/${category.slug}`} passHref>
      <button className="font-semibold text-accent text-sm py-1 px-3 border border-gray-400 rounded">
        {category.title}
      </button>
    </Link>
  );
};

export default Blog;
