import { gql, GraphQLClient } from "graphql-request";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
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

const Post = ({ post }) => {
  console.log(post);
  return (
    <main>
      <h1>{post.title}</h1>
      <h2>{post.date}</h2>
      <img src={post.coverImage.url} alt={post.title} />
      <div>
        <MDXRemote {...post.source} />
      </div>
    </main>
  );
};

export default Post;
