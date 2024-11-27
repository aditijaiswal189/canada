import { GraphQLClient } from "graphql-request";

// const endpoint = process.env.WORDPRESS_GRAPHQL_ENDPOINT;
const username = process.env.WORDPRESS_USERNAME;
const appPassword = process.env.WORDPRESS_APP_PASSWORD;

const endpoint = "https://www.gtrimmigration.com/graphql";

export const client = new GraphQLClient(endpoint, {
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    Authorization: "Basic gtr_seo:0Z6l SsAO JuZ0 TAoz mJmC O074",
  },
});
