/* eslint-disable import/prefer-default-export */
import { gql } from 'apollo-boost';

export const ADD_SUBSCRIBERS = gql`
  mutation addSubscriber($email: String!) {
    addSubscriber(
      email: $email
      ) {
      id
      email,
      createdAt
      updatedAt
    }
  }
`;

export const REMOVE_SUBSCRIBERS = gql`
  mutation removeSubscriber ($email: String!) {
    removeSubscriber(email: $email)
  }
`;
