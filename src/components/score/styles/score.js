import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media (min-width: 700px) {
    width: 30%;
    margin-bottom: 1.5em;
  }
`;

export const Text = styled.p`
  margin: 0;
  text-align: right;
  font-size: 0.9rem;
  font-weight: bold;
  color: rgba(255, 255, 0, 0.9);

  @media (min-width: 700px) {
    font-size: 1.3rem;
  }
`;

export const Number = styled.span`
  display: block;
  margin-bottom: 0;
  text-align: ${({ align }) => align};
  color: white;
  font-size: 1.7rem;
`;
