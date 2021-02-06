import { Container, Text, Number } from './styles/score';

const Score = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Score.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
export default Score;

Score.Number = ({ score, ...restProps }) => {
  return <Number {...restProps}>{score}</Number>;
};
