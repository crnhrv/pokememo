import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media (min-width: 900px) {
    margin-bottom: 1em;
  }
`;

export const Text = styled.p`
  font-size: 0.9rem;
  text-align: right;
  color: rgba(255, 255, 0, 0.9);
  font-weight: bold;
  margin-bottom: 0.5em;

  @media (min-width: 900px) {
    font-size: 1.3rem;
  }
`;

export const Number = styled.span`
  font-size: 1.7rem;
  text-align: ${({ align }) => align};
  display: block;
  color: white;

  margin-bottom: 0;
`;
