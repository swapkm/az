import { gql } from "@apollo/client";

export const CREATE_FEED = gql`
mutation CreateFeed($title: String!, $content: String!, $image: String) {
    createFeed(title: $title, content: $content, image: $image) {
      _id
      title
      content
      image
      createdAt
    }
  }
`;