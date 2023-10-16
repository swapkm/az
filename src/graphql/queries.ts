import { gql } from "@apollo/client";

export  const GET_FEEDS = gql`
  query GetFeed {
    getAllFeeds {
      _id
      title
      content
      image
      createdAt
    }
  }
`;

export const GET_BLOGS = gql`
query GetAllBlog {
  getAllBlog {
    _id
    title
    content
    author {
      _id
    }
    createdAt
  }
}
`;

