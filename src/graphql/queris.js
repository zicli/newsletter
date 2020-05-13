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

export const GET_ONE_NEWSLETTER = gql`
query getOneNewsletter ($id: Int!) {
  getOneNewsletter (id: $id) {
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
