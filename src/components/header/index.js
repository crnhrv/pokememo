import { Container, Title, Subtitle } from './styles/header';

const Header = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Header.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Header.Subtitle = ({ children, ...restProps }) => {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

export default Header;
