import gql from 'graphql-tag';

export const GET_POKEMON = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      number
      name
      types
    }
  }
`;
