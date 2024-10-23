import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      id
      name
      image_url
    }
  }
`;
