import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  margin: 4em auto 0 auto;

  @media (min-width: 900px) {
    max-width: 900px;
  }
`;

export const Group = styled.div`
  display: grid;
  grid-column-gap: 5em;
  grid-row-gap: 2em;
  place-items: center;
  grid-template-columns: 150px 150px;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 250px);
  }
`;

export const Item = styled.div`
  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  padding: 3em 2em;
  max-width: 150px;
  max-height: 200px;
  grid-column: ${({ double }) => (double ? 'span 2' : 'span 1')};
  border: 2px solid ${({ color }) => color};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-color: rgba(0, 0, 0, 0.21);
  }

  @media (min-width: 900px) {
    grid-column: span 1;
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
