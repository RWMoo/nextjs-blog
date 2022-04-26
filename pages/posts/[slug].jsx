import { gql, GraphQLClient } from "graphql-request";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import PageLayout from "../../components/layouts/PageLayout";
import Image from "next/image";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT);

export const getStaticPaths = async () => {
  const query = gql`
    query Paths {
      posts {
        slug
      }
    }
  `;
  const data = await graphcms.request(query);

  return {
    paths: data.posts.map((event) => ({ params: { slug: event.slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;

  const query = gql`
    query Post($slug: String!) {
      post(where: { slug: $slug }) {
        id
        slug
        title
        date
        excerpt
        content
        coverImage {
          url
          alt
        }
      }
    }
  `;
  const data = await graphcms.request(query, { slug });

  // Handle event slugs which don't exist in our CMS
  if (!data.post) {
    return {
      notFound: true,
    };
  }

  // Convert the Markdown into a compiled source used by MDX
  const source = await serialize(data.post.content);

  // Provide Props to the Page Component
  return {
    props: { post: { ...data.post, source } },
    revalidate: 60 * 60, // Cache response for 1 hour (60 seconds * 60 minutes)
  };
};

const components = {
  img: (props) => (
    <Image
      alt={props.alt}
      layout="responsive"
      width={1}
      height={1}
      objectPosition="center"
      objectFit="cover"
      placeholder="blur"
      blurDataURL={props.src}
      src={props.src}
      {...props}
    />
  ),
  code: (props) => {
    console.log(props)
    return (
      <Highlight
        {...defaultProps}
        theme={theme}
        code={props.children}
        language={props.language}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  },
};

const Post = ({ post }) => {
  return (
    <PageLayout>
      <div className="h-full">
        <div className="relative w-screen -ml-4 h-56 shadow-md">
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
        <article className="prose prose-md pt-8">
          <MDXRemote {...post.source} components={components} />
        </article>
      </div>
    </PageLayout>
  );
};

export default Post;
