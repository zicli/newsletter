/* eslint-disable import/prefer-default-export */
import { gql } from 'apollo-boost';

export const GET_NEWSLETTERS = gql`
  {
    getAllNewsletters {
      id
      title
      headerImage
      excerpt
      slug
      author
      content
      createdAt
      updatedAt
    }
  }
`;
