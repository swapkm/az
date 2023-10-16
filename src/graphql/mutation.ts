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

export const CREATE_BLOG = gql`
  mutation Mutation($title: String!, $content: String!, $authorId: ID!) {
    createBlog(title: $title, content: $content, authorId: $authorId) {
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
