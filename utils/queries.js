import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_KEY}`,
  },
});

export const getSlugs = async () => {
  return client.request(gql`
    query getSlugs {
      posts {
        slug
      }
    }
  `);
};

export const getPost = async (slug) => {
  return client.request(
    gql`
      query Post($slug: String!) {
        post(where: { slug: $slug }) {
          id
          slug
          title
          date
          excerpt
          content
          category {
            title
          }
          coverImage {
            url
            alt
          }
          minutes
        }
      }
    `,
    { slug }
  );
};

export const getPosts = async () => {
  return client.request(
    gql`
      query MyQuery {
        posts {
          id
          slug
          title
          date
          excerpt
          coverImage {
            url
            alt
          }
          category {
            title
          }
          minutes
        }
      }
    `
  );
};
