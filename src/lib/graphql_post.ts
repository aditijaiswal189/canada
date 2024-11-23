import { client } from "./graphql-client";

export const GET_ALL_POSTS_QUERY = `
  query {
    posts {
      nodes {
        id
        title
        excerpt
        slug
        date
      }
    }
  }
`;

// export const fetchAllPosts = async () => {
//   try {
//     const data = await client.request(GET_ALL_POSTS_QUERY);
//     return data.posts.nodes; // Return posts array
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//     return [];
//   }
// };

const GET_PAGINATED_POSTS_QUERY = `
  query GetPaginatedPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      nodes {
        id
        title
        excerpt
        slug
        date
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

const GET_DETAILED_POSTS_QUERY = `
  query GetDetailedPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      nodes {
        id
        title
        excerpt
        slug
        date
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const fetchAllPosts = async () => {
  const allPosts = [];
  let hasNextPage = true;
  let after = null;

  while (hasNextPage) {
    try {
      const response = await client.request(GET_DETAILED_POSTS_QUERY, {
        first: 50, // Number of posts to fetch per batch
        after,
      });

      const { nodes, pageInfo } = response.posts;
      allPosts.push(...nodes);

      hasNextPage = pageInfo.hasNextPage;
      after = pageInfo.endCursor;
    } catch (error) {
      console.error("Error fetching posts:", error);
      break;
    }
  }

  return allPosts;
};
