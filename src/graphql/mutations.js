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
