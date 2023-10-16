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