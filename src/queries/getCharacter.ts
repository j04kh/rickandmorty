import { gql } from "@apollo/client";

export const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      type
      gender
      image
      location {
        id
        name
      }
      episode {
        id
        name
      }
    }
  }
`;
