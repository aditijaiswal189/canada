import { client } from "@/lib/graphql-client";
import PostsGrid from "./post-grid";
import { gql } from "graphql-request";

const GET_INITIAL_POSTS_QUERY = gql`
  query GetInitialPosts($first: Int!) {
    posts(first: $first) {
      nodes {
        id
        title
        excerpt
        content
        slug
        date
        featuredImage {
          node {
            sourceUrl
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
          }
        }
      }
      pageInfo {
        endCursor
      }
    }
  }
`;

const PostsPage = async () => {
  const data = await client.request(GET_INITIAL_POSTS_QUERY, { first: 9 });
  const initialPosts = data.posts.nodes;

  return (
    <div>
      <PostsGrid initialPosts={initialPosts} />
    </div>
  );
};

export default PostsPage;
