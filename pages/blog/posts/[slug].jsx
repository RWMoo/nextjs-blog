import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import PageLayout from "../../../components/layouts/PageLayout";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dracula,
  coldarkCold,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useContext } from "react";
import { ThemeContext } from "../../../components/ThemeProvider";
import { FaHeart, FaShare } from "react-icons/fa";
import { format, parseISO } from "date-fns";
import { getPost, getSlugs } from "../../../utils/queries";

export const getStaticPaths = async () => {
  const slugs = await getSlugs();
  return {
    paths: slugs.posts.map((event) => ({ params: { slug: event.slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const data = await getPost(slug);

  if (!data.post) {
    return {
      notFound: true,
    };
  }

  const source = await serialize(data.post.content);

  return {
    props: { post: { ...data.post, source } },
    revalidate: 60 * 60,
  };
};

const Post = ({ post }) => {
  const { theme } = useContext(ThemeContext);
  const components = {
    img: (props) => (
      <Image
        alt={props.alt}
        layout="responsive"
        width={100}
        height={50}
        className="max-h-sm"
        objectPosition="center"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={props.src}
        src={props.src}
        {...props}
      />
    ),
    code: (props) => {
      const { className, children } = props;
      const language = className?.replace("language-", "");
      return (
        <div className="not-prose">
          <SyntaxHighlighter
            className="not-prose"
            style={theme === "dark" ? dracula : coldarkCold}
            language={language}
          >
            {children}
          </SyntaxHighlighter>
        </div>
      );
    },
  };
  return (
    <PageLayout>
      <div className="h-full 2xl:px-40">
        <article className="prose prose-sm sm:prose-base sm:max-w-none md:max-w-none md:prose-lg ">
          <div className="relative  h-56 md:h-64 lg:h-72 xl:h-80 shadow-md">
            <Image
              alt={post.coverImage.alt}
              layout="fill"
              className="rounded-sm"
              objectPosition="center"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={post.coverImage.url}
              src={post.coverImage.url}
            />
          </div>
          <div className="px-2">
            <div className="flex space-x-5  items-center  mt-4 sm:mt-8 text-xs sm:text-sm md:text-base lg:text-lg">
              <p className="font-display flex text-accent items-center ">
                {post.category.title}
              </p>
              <p className="font-display flex items-center text-accent ">
                {format(parseISO(post.date, "yyyy/MM/dd"), "dd/MM/yyyy")}
              </p>
              <p className="font-display flex items-center text-accent ">
                {post.minutes} minute read
              </p>
              <button>
                <FaShare className="text-title" />
              </button>
            </div>

            <h1 className="">{post.title}</h1>
            <MDXRemote {...post.source} components={components} />
          </div>
        </article>
      </div>
    </PageLayout>
  );
};

export default Post;
