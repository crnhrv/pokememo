import styled from 'styled-components';

export const Container = styled.header``;

export const Title = styled.h1`
  margin: 0.1em 0 0 0;
  text-align: center;
  font-size: 3rem;
  color: rgba(255, 255, 0, 0.9);

  @media (min-width: 700px) {
    margin-top: 1em;
    font-size: 5rem;
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  text-align: center;
  line-height: 0.2;
  font-style: italic;
  font-size: 1.1rem;
  color: white;

  @media (min-width: 700px) {
    font-size: 1.8rem;
  }
`;
