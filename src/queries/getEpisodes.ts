import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query getEpisodes($page: Int!) {
    episodes(page: $page) {
      info {
        next
        count
      }
      results {
        id
        name
        episode
      }
    }
  }
`;
