// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
  headers: {},
});

export default async function handler(req, res) {
  try {
    const data = await client.request(gql`
      query getSlugs {
        posts {
          slug
        }
      }
    `);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
}
