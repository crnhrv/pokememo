import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 2em auto 0 auto;

  @media (min-width: 700px) {
    max-width: 1200px;
    margin: 4em auto 0 auto;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.7em;
  width: 100%;

  @media (min-width: 700px) {
    grid-column-gap: 3em;
    grid-template-columns: repeat(3, 250px);
  }
`;

export const Item = styled.div`
  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  border: 3px solid ${({ color }) => color};
  border-radius: 5px;
  padding: 1em 1em;
  max-width: 35%;
  cursor: pointer;

  &:hover {
    background-color: ${({ color }) => `${color}2A`};
  }

  @media (min-width: 700px) {
    padding: 4em 3em;
    max-width: 20%;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Text = styled.p`
  margin: 0.2em;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;
