// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
  headers: {},
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { slug } = req.query;
    const data = await client.request(
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
    res.status(200).json(data);
  }
  console.log(req.method)
  if (req.method === "POST") {
    const { slug } = req.query;
    try {
      await client
        .request(
          gql`
            mutation ($slug: String!) {
              updatePost(where: { slug: $slug }, data: { likes: 500 }) {
                id
              }
            }
          `,
          { slug },
          {
            Authorization: `Bearer ${process.env.GRAPHCMS_KEY}`,
          }
        )
        .catch((e) => console.log(e));
      res.status(200);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
}
